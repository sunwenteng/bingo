import {UserSession} from '../../lib/net/user_session'
import {Log} from "../../lib/util/log";
import {World, WorldDataRedisKey} from "./world";
import {execTime} from "../../lib/util/descriptor";
import {RedisMgr, RedisType} from "../../lib/redis/redis_mgr";
import {Role} from "./role";

const MAX_PACKET_COUNT = 100000;

let roleRedis = RedisMgr.getInstance(RedisType.GAME);

export class PlayerSession extends UserSession {
    private _roleId: number;

    constructor() {
        super();
    }

    @execTime(false)
    private async doController(controller: Function, session: PlayerSession, packet: any) {
        await controller(session, packet);
    }

    public async update() {
        if (this.m_packets.length > MAX_PACKET_COUNT) {
            Log.sError('packet array length too long, force close socket, uid=%d, ip=%s, length=%d', this.m_socket.uid, this.m_socket.ip, this.m_packets.length);
            this.closeSocket();
        }
        else {
            let controller;
            for (let packet of this.m_packets) {
                Log.sInfo('name=%s, data=%j', packet.kind, packet[packet.kind]);
                controller = World.getInstance().getController(packet.kind);
                if (controller) {
                    await this.doController(controller, this, packet[packet.kind]);
                }
                else {
                    Log.sError('controller not found, name=%s', packet.kind);
                }
            }

            if (this.m_packets.length) {
                this.m_packets = [];
            }
        }
    }

    public addSessionToWorker(): void {
        World.getInstance().addSession(this);
    }

    public async online() {
        await roleRedis.sadd(WorldDataRedisKey.ONLINE_ROLES, this._roleId);
    }

    public async offline() {
        await roleRedis.srem(WorldDataRedisKey.ONLINE_ROLES, this._roleId);
    }
}