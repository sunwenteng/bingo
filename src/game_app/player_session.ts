import {UserSession} from '../lib/net/user_session'
import {Log} from "../lib/util/log";
import {World} from "./world";
import {execTime} from "../lib/util/descriptor";
import {RedisMgr, RedisType} from "../lib/redis/redis_mgr";
import {RoleRedisPrefix} from "./role";

const MAX_PACKET_COUNT = 10000;

let roleRedis = RedisMgr.getInstance(RedisType.GAME);

export class PlayerSession extends UserSession {
    private _roleId: number;

    set roleId(value: number) {
        this._roleId = value;
    }

    constructor() {
        super();
    }

    // @execTime(false)
    private async doController(controller: Function, session: PlayerSession, packet: any) {
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
            controller = World.getInstance().getController(packet.kind);
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
        World.getInstance().addSession(this);
    }

    public async online() {
        if (this._roleId) {
            World.getInstance().addAuthedSession(this._roleId, this);
            await roleRedis.subscribe(RoleRedisPrefix + '_' + this._roleId, World.getInstance());
            Log.sInfo('roleId=%d online', this._roleId);
        }
    }

    public async offline() {
        if (this._roleId) {
            World.getInstance().delAuthedSession(this._roleId);
            await roleRedis.unsubscribe(RoleRedisPrefix + '_' + this._roleId);
            Log.sInfo('roleId=%d offline', this._roleId);
        }
    }
}