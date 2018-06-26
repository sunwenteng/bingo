import {UserSession} from '../../lib/net/user_session'
import {Log} from "../../lib/util/log";
import {GameWorld} from "./game_world";
import {RedisMgr, RedisType} from "../../lib/redis/redis_mgr";
import {RoleRedisPrefix} from "./role";
import {C2S, S2C} from "../proto/cmd";

const MAX_PACKET_COUNT = 10000;

let roleRedis = RedisMgr.getInstance(RedisType.GAME);

export class GameSession extends UserSession {
    private _roleId: number;

    get roleId(): number {
        return this._roleId;
    }

    set roleId(value: number) {
        this._roleId = value;
    }

    constructor() {
        super();
        this._roleId = 0;
        this.on('message', (data) => {
            try {
                let msg = C2S.Message.decode(new Uint8Array(data));
                this.pushPacket(msg);
            } catch (e) {
                Log.sError(e);
            }
        });
    }

    // @execTime(false)
    private async doController(controller: Function, session: GameSession, packet: any) {
        await controller(session, packet);
    }

    public async update() {
        let controller,
            packet,
            counter = 0,
            cur = this.m_packets.head,
            t;
        while (cur) {
            if (this.m_packets.length > MAX_PACKET_COUNT) {
                Log.sError('packet array length too long, force close socket, uid=%d, ip=%s, length=%d', this.m_socket.uid, this.m_socket.ip, this.m_packets.length);
                this.closeSocket();
            }

            packet = cur.element;
            t = cur;
            this.m_packets.deleteNode(t);
            cur = cur.next;

            Log.sInfo('socketUid=%d, roleId=%d, name=%s, data=%j', this.m_socket.uid, this._roleId ? this._roleId : 0, packet.kind, packet[packet.kind]);

            if (packet.kind !== 'CS_ROLE_ONLINE' && this._roleId === 0) {
                Log.sError('not receive online packet yet, uid=' + this.m_socket.uid);
                continue;
            }

            controller = GameWorld.getInstance().getController(packet.kind);
            if (controller) {
                await this.doController(controller, this, packet[packet.kind]);
            }
            else {
                Log.sError('controller not found, name=%s', packet.kind);
            }

            // per loop do 5 packet
            if (++counter > 5) {
                break;
            }
        }
    }

    public addSessionToWorker(): void {
        GameWorld.getInstance().addSession(this);
    }

    public async online() {
        if (this._roleId) {
            GameWorld.getInstance().addAuthedSession(this._roleId, this);
            await roleRedis.subscribe(RoleRedisPrefix + '_' + this._roleId, GameWorld.getInstance());
            Log.sInfo('roleId=%d online', this._roleId);
        }
    }

    public async offline() {
        if (this._roleId) {
            GameWorld.getInstance().delAuthedSession(this._roleId);
            await roleRedis.unsubscribe(RoleRedisPrefix + '_' + this._roleId);
            Log.sInfo('roleId=%d offline', this._roleId);
            this._roleId = 0;
        }
    }

    public sendProtocol(data: any) {
        let msg = S2C.Message.create();
        msg[data.$type.name] = data;
        let buffer = S2C.Message.encode(msg).finish();
        this.send(buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.length))
    }
}