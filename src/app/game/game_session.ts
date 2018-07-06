import {UserSession} from '../../lib/net/user_session'
import {Log} from "../../lib/util/log";
import {GameWorld} from "./game_world";
import {RedisMgr, RedisType} from "../../lib/redis/redis_mgr";
import {RoleRedisPrefix} from "./modles/role";
import {C2S, S2C} from "../proto/cmd";
import {execTime} from "../../lib/util/descriptor";

const MAX_PACKET_COUNT = 10000;

let roleRedis = RedisMgr.getInstance(RedisType.GAME);

export class GameSession extends UserSession {
    public m_roleId: number = 0;

    constructor() {
        super();
        this.on('message', (data) => {
            try {
                let msg = C2S.Message.decode(new Uint8Array(data));
                this.pushPacket(msg);
            } catch (e) {
                Log.sError(e);
            }
        });
    }

    @execTime(false)
    private async doController(controller: Function, session: GameSession, packet: any) {
        Log.sInfo('socketUid=%d, m_roleId=%d, name=%s, data=%j', this.m_socket.uid, this.m_roleId ? this.m_roleId : 0, packet.kind, packet[packet.kind]);
        await controller(session, packet[packet.kind]);
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

            if (packet.kind !== 'CS_ROLE_ONLINE' && this.m_roleId === 0) {
                Log.sError('not receive online packet yet, uid=' + this.m_socket.uid);
                continue;
            }
            else if (packet.kind === 'CS_ROLE_ONLINE' && this.m_roleId !== 0) {
                Log.sError('already online, duplicate online packet, m_roleId=%d, socketUid=%d', this.m_roleId, this.m_socket.uid);
                continue;
            }

            controller = GameWorld.instance.getController(packet.kind);
            if (controller) {
                await this.doController(controller, this, packet);
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
        GameWorld.instance.addSession(this);
    }

    public async online() {
        if (this.m_roleId) {
            GameWorld.instance.addAuthedSession(this.m_roleId, this);
            await roleRedis.subscribe(RoleRedisPrefix + '_' + this.m_roleId, GameWorld.instance);
            Log.sInfo('m_roleId=%d, socketUid=%d, online', this.m_roleId, this.m_socket.uid);
        }
    }

    public async offline() {
        if (this.m_roleId) {
            GameWorld.instance.delAuthedSession(this.m_roleId);
            await roleRedis.unsubscribe(RoleRedisPrefix + '_' + this.m_roleId);
            Log.sInfo('m_roleId=%d, socketUid=%d, offline', this.m_roleId, this.m_socket.uid);
            this.m_roleId = 0;
        }
    }

    public sendProtocol(data: any) {
        let msg = S2C.Message.create();
        msg[data.$type.name] = data;
        let buffer = S2C.Message.encode(msg).finish();
        // this.send(buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.length))
        this.send(buffer);
    }
}