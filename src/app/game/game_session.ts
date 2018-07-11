import {UserSession} from '../../lib/net/user_session';
import {Log} from "../../lib/util/log";
import {GameWorld, WorldDataRedisKey} from "./game_world";
import {RedisMgr, RedisType} from "../../lib/redis/redis_mgr";
import {Role, roleRedisPrefix} from "./modles/role";
import {C2S, S2C} from "../proto/cmd";
import {execTime} from "../../lib/util/descriptor";

const MAX_PACKET_COUNT = 10000;

let gameRedis = RedisMgr.getInstance(RedisType.GAME);

export class GameSession extends UserSession {
    // public roleId: number = 0;
    public role: Role = null;
    //private _isUpdating = false;

    constructor() {
        super();
        this.on('message', (data) => {
            try {
                let msg = C2S.Message.decode(data);
                this.pushPacket(msg);
                // this.newUpdate();
            } catch (e) {
                Log.sError(e);
            }
        });
    }

    @execTime(false)
    private async doController(controller: Function, session: GameSession, packet: any) {
        Log.sInfo('socketUid=%d, roleId=%d, name=%s, data=%j', this.socket.uid, this.role ? this.role.uid : 0, packet.kind, packet[packet.kind]);
        await controller(session, packet[packet.kind]);
    }

    // public async newUpdate() {
    //     if (this._isUpdating) {
    //         return;
    //     }
    //
    //     if (this.packets.length === 0) {
    //         return;
    //     }
    //
    //     this._isUpdating = true;
    //     let controller,
    //         packet,
    //         cur = this.packets.head;
    //     if (this.packets.length > MAX_PACKET_COUNT) {
    //         Log.sError('packet array length too long, force close socket, uid=%d, ip=%s, length=%d', this.socket.uid, this.socket.ip, this.packets.length);
    //         this.closeSocket();
    //     }
    //
    //     packet = cur.element;
    //     this.packets.deleteNode(cur);
    //
    //     // if (packet.kind !== 'CS_ROLE_ONLINE' && this.role === null) {
    //     //     Log.sError('not receive online packet yet, uid=' + this.socket.uid);
    //     //     continue;
    //     // }
    //     // else if (packet.kind === 'CS_ROLE_ONLINE' && this.role !== null) {
    //     //     Log.sError('already online, duplicate online packet, roleId=%d, socketUid=%d', this.role.uid, this.socket.uid);
    //     //     continue;
    //     // }
    //
    //     controller = GameWorld.instance.getController(packet.kind);
    //     if (controller) {
    //         await this.doController(controller, this, packet);
    //     }
    //     else {
    //         Log.sError('controller not found, name=%s', packet.kind);
    //     }
    //
    //     this._isUpdating = false;
    //     this.newUpdate();
    // }

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

            if (packet.kind !== 'CS_ROLE_ONLINE' && this.role === null) {
                Log.sError('not receive online packet yet, uid=' + this.socket.uid);
                continue;
            }
            else if (packet.kind === 'CS_ROLE_ONLINE' && this.role !== null) {
                Log.sError('already online, duplicate online packet, roleId=%d, socketUid=%d', this.role.uid, this.socket.uid);
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
        if (this.role) {
            await gameRedis.srem(WorldDataRedisKey.RELOAD_ROLES, this.role.uid);
            GameWorld.instance.addAuthedSession(this.role.uid, this);
            await gameRedis.subscribe(roleRedisPrefix + '_' + this.role.uid, GameWorld.instance);
            Log.sInfo('roleId=%d, socketUid=%d, online', this.role.uid, this.socket.uid);
        }
    }

    public async offline() {
        if (this.role) {
            GameWorld.instance.delAuthedSession(this.role.uid);
            await gameRedis.unsubscribe(roleRedisPrefix + '_' + this.role.uid);
            Log.sInfo('roleId=%d, socketUid=%d, offline', this.role.uid, this.socket.uid);
            this.role.uid = 0;
        }
    }
}