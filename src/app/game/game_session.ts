import {UserSession} from '../../lib/net/user_session';
import {Log} from "../../lib/util/log";
import {GameWorld} from "./game_world";
import {RedisMgr, RedisType} from "../../lib/redis/redis_mgr";
import {roleRedisPrefix} from "./modles/role";
import {C2S, S2C} from "../proto/cmd";
import {execTime} from "../../lib/util/descriptor";

const MAX_PACKET_COUNT = 10000;

let roleRedis = RedisMgr.getInstance(RedisType.GAME);

export class GameSession extends UserSession {
    public roleId: number = 0;

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
        Log.sInfo('socketUid=%d, roleId=%d, name=%s, data=%j', this.socket.uid, this.roleId ? this.roleId : 0, packet.kind, packet[packet.kind]);
        await controller(session, packet[packet.kind]);
    }

    public async update() {
        let controller,
            packet,
            counter = 0,
            cur = this.packets.head,
            t;
        while (cur) {
            if (this.packets.length > MAX_PACKET_COUNT) {
                Log.sError('packet array length too long, force close socket, uid=%d, ip=%s, length=%d', this.socket.uid, this.socket.ip, this.packets.length);
                this.closeSocket();
            }

            packet = cur.element;
            t = cur;
            this.packets.deleteNode(t);
            cur = cur.next;

            if (packet.kind !== 'CS_ROLE_ONLINE' && this.roleId === 0) {
                Log.sError('not receive online packet yet, uid=' + this.socket.uid);
                continue;
            }
            else if (packet.kind === 'CS_ROLE_ONLINE' && this.roleId !== 0) {
                Log.sError('already online, duplicate online packet, roleId=%d, socketUid=%d', this.roleId, this.socket.uid);
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
        if (this.roleId) {
            GameWorld.instance.addAuthedSession(this.roleId, this);
            await roleRedis.subscribe(roleRedisPrefix + '_' + this.roleId, GameWorld.instance);
            Log.sInfo('roleId=%d, socketUid=%d, online', this.roleId, this.socket.uid);
        }
    }

    public async offline() {
        if (this.roleId) {
            GameWorld.instance.delAuthedSession(this.roleId);
            await roleRedis.unsubscribe(roleRedisPrefix + '_' + this.roleId);
            Log.sInfo('roleId=%d, socketUid=%d, offline', this.roleId, this.socket.uid);
            this.roleId = 0;
        }
    }
}