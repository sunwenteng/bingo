import {UserSession} from '../../lib/net/user_session';
import {LinkedList, ListNode} from '../../lib/util/linked_list';
import * as GameUtil from '../../lib/util/game_util';
import * as fs from 'fs';
import {Log} from "../../lib/util/log";
import {C2S, S2C} from "../proto/cmd";
import {RedisChanel, RedisMgr, RedisType} from "../../lib/redis/redis_mgr";
import {roleRedisPrefix} from "./modles/role";
import * as events from "events";
import * as time from '../../lib/util/time';
import {RankController} from "./controllers/rank_controller";
import * as LoginDB from "../../lib/mysql/login_db";

const config = require('../../config/config.json');
type AuthedSessionMap = { [index: number]: UserSession };
type ControllerMap = { [index: string]: Function };
let gameRedis = RedisMgr.getInstance(RedisType.GAME);

export enum WorldDataRedisKey {
    DIRTY_ROLES = 'dirty_roles',
    RELOAD_ROLES = 'reload_roles',
}

class InstanceServerInfo implements LoginDB.Server {
    instanceId = process.env.INSTANCE_ID ? process.env.INSTANCE_ID : 0;
    alive: boolean = true;
    can_login: boolean = true;
    ip: string = config['app']['game']['host'];
    is_recommend: boolean = false;
    local_ip: string = config['app']['game']['host'];
    login_strategy_id: number = 0;
    online_num: number = 0;
    port: number = config['app']['game']['port'];
    res_server_config: string = '';
    res_server_ip: string = '';
    res_version: string = '';
    server_id: number = config['app']['game']['serverId'];
    server_name: string = 'server' + this.server_id;
    status: number = 0;
    update_time: number = Date.now();
    version: string = config['app']['game']['version'];
    res_version_config: string = '';
}

enum WorldMsg {
    KICK = 'kick'
}

export class GameWorld extends events.EventEmitter {
    public _isUpdating: boolean;
    public static instance = new GameWorld();
    public info: InstanceServerInfo = new InstanceServerInfo();
    private readonly _sessionList: LinkedList<UserSession> = new LinkedList<UserSession>();
    private readonly _authedSessionMap: AuthedSessionMap = {}; // 玩家上线通过后加入进来
    private readonly _allControllers: ControllerMap = {};
    private readonly _allScopes = {};
    private readonly _timer: { [mutex: string]: time.RaceTimer } = {};

    constructor() {
        super();

        this.on('message', (channel: string, message: string) => {
            Log.sInfo("sub channel " + channel + ": " + message);
            let buffer = new Buffer(message);
            if (channel === RedisChanel.BROADCAST) {
                for (let roleId in this._authedSessionMap) {
                    this._authedSessionMap[roleId].socket.send(buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.length));
                }
            }
            else if (channel.indexOf(roleRedisPrefix) !== -1) {
                let roleId = parseInt(channel.substr(roleRedisPrefix.length + 1));
                let session = this._authedSessionMap[roleId];
                if (!session) {
                    Log.sError('role %d not online, message %s', roleId, message);
                    return;
                }
                switch (message) {
                    case WorldMsg.KICK:
                        Log.sInfo('role %d online, then kick', roleId);
                        session.socket.close();
                        session.offline();
                        break;
                    default:
                        session.socket.send(buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.length));
                        break;
                }
            }
        });
    }

    public async update() {
        this._isUpdating = true;
        // half block mode, async session, sync packet within session
        let cur = this._sessionList.head, t = null;
        let promises = [];
        while (cur) {
            if (cur.element.socket.isSocketValid()) {
                promises.push(cur.element.update());
                cur = cur.next;
            }
            else {
                t = cur;
                this.delSession(t);
                await cur.element.offline();
                cur = cur.next;
            }
        }
        await Promise.all(promises);

        this._isUpdating = false;
    }

    public getController(cmd: string): Function {
        return this._allControllers[cmd];
    }

    private registerController(): void {
        for (let cmd in C2S.Message['fields']) {
            if (!C2S.Message['fields'].hasOwnProperty(cmd)) {
                continue;
            }
            if (cmd.indexOf('CS') !== -1 && cmd.indexOf('LOGIN_') === -1) {
                let arr = cmd.split('_');
                if (arr.length > 2) {
                    let controllerPath = __dirname + '/controllers/' + arr[1].toLowerCase() + '_controller.js';
                    if (!fs.existsSync(controllerPath)) {
                        Log.sWarn('cmd=' + cmd + ', controller=' + arr[1].toLowerCase() + '_controller not exists');
                    }
                    else {
                        for (let i = 0; i < arr.length; ++i) {
                            if (i > 2) {
                                arr[i] = GameUtil.capitalize(arr[i]);
                            }
                            else {
                                arr[i] = arr[i].toLowerCase();
                            }
                        }
                        let methodName = arr.slice(2, arr.length).join('');
                        let module = require('./controllers/' + arr[1].toLowerCase() + '_controller');
                        if (!module[GameUtil.capitalize(arr[1]) + 'Controller']
                            || !module[GameUtil.capitalize(arr[1]) + 'Controller']['instance']
                            || !module[GameUtil.capitalize(arr[1]) + 'Controller']['instance'][methodName]) {
                            Log.sWarn('cmd=' + cmd + ', controller=' + arr[1].toLowerCase() + '_controller, method=' + methodName + ' not exists');
                        }
                        else {
                            this._allControllers[cmd] = module[GameUtil.capitalize(arr[1]) + 'Controller']['instance'][methodName];
                            this._allScopes[cmd] = module[GameUtil.capitalize(arr[1]) + 'Controller']['instance'];
                        }
                    }
                }
            }
        }
    }

    public async start() {
        this.registerController();
        await this.registerServer();
        await this.initControllers();
        await RedisMgr.getInstance(RedisType.GAME).subscribe(RedisChanel.BROADCAST, this);

        await this.addTimer('game_world_update1s', time.SECOND, async () => {
            // await time.sleep(2 * time.SECOND);
        });

        await this.addTimer('game_world_update15s', 15 * time.SECOND, async () => {
            let instances = await gameRedis.hgetall('game_servers');
            if (instances) {
                for (let key in instances) {
                    let arr = key.split('_');
                    let serverId = parseInt(arr[1]);
                    if (serverId === this.info.server_id) {
                        let detail = JSON.parse(instances[key]);
                        this.info.online_num += detail.online_num;
                    }
                }
            }
            this.info.update_time = Date.now() / 1000;
            await LoginDB.conn.execute('insert into gameserver_info set ? on duplicate key update ?',
                [{
                    server_id: this.info.server_id,
                    server_name: this.info.server_name,
                    ip: this.info.ip,
                    local_ip: this.info.local_ip,
                    port: this.info.port,
                    version: this.info.version,
                    res_version: this.info.res_version,
                    res_version_config: this.info.res_version_config,
                    res_server_ip: this.info.res_server_ip,
                    res_server_config: this.info.res_server_config,
                    online_num: this.info.online_num,
                    can_login: this.info.can_login,
                    status: this.info.status,
                    update_time: this.info.update_time,
                    login_strategy_id: this.info.login_strategy_id,
                    is_recommend: this.info.is_recommend,
                }, {
                    server_name: this.info.server_name,
                    ip: this.info.ip,
                    local_ip: this.info.local_ip,
                    port: this.info.port,
                    version: this.info.version,
                    res_version: this.info.res_version,
                    res_version_config: this.info.res_version_config,
                    res_server_ip: this.info.res_server_ip,
                    res_server_config: this.info.res_server_config,
                    online_num: this.info.online_num,
                    can_login: this.info.can_login,
                    status: this.info.status,
                    update_time: this.info.update_time,
                    login_strategy_id: this.info.login_strategy_id,
                    is_recommend: this.info.is_recommend,
                }]);
        });
        // await this.addTimer('game_world_update1m', time.MINUTE, async () => {
        // });
        // await this.addTimer('game_world_update1h', time.HOUR, async () => {
        // });
        // await this.addTimer('game_world_update1d', time.DAY, async () => {
        // });
    }

    private async addTimer(mutex: string, interval: number, callback: Function) {
        if (this._timer[mutex]) {
            Log.sError('duplicate timer register in world, mutex=' + mutex);
            throw new Error('duplicate timer register in world, mutex=' + mutex);
        }
        this._timer[mutex] = new time.RaceTimer(mutex, interval, callback);
        await this._timer[mutex].run();
    }

    private async registerServer() {
        let ret = await LoginDB.conn.execute('select * from gameserver_info where ?', {server_id: parseInt(config['app']['game']['serverId'])});
        if (ret.length !== 0) {
            for (let k in ret[0]) {
                if (this.info.hasOwnProperty(k)) {
                    this.info[k] = ret[0][k];
                }
            }
        }

        let self = this;

        function updateServerInfo() {
            setTimeout(() => {
                let data = [
                    self.getServerRedisKey(), JSON.stringify({
                        online_num: Object.keys(self._authedSessionMap).length,
                        update_time: Date.now(),
                        res_version: self.info.port,
                        version: self.info.version,
                        host: self.info.ip,
                        port: self.info.port
                    })];
                Log.sInfo('updateServerInfo, data=%j', data);
                gameRedis.hmset('game_servers', data).then(updateServerInfo);
            }, 5000);
        }

        updateServerInfo();
    }

    public getServerRedisKey() {
        return 'server_' + this.info.server_id + '_' + this.info.instanceId + '_' + this.info.ip + '_' + this.info.port;
    }

    public async stop() {
        return new Promise<void>((async (resolve) => {
            let self = this;

            async function doStop() {
                for(let k in self._timer) {
                    self._timer[k].stop();
                }
                await self.allOffline();
                await self.saveControllers();
            }

            if (this._isUpdating) {
                setTimeout(async () => {
                    GameWorld.instance.stop().then(resolve);
                }, 100);
            }
            else {
                doStop().then(resolve);
            }
        }));
    }

    private async initControllers(): Promise<void> {
        await RankController.instance.init();
    }

    private async saveControllers(): Promise<void> {
        return new Promise<void>((resolve => {
            Log.sInfo('save controllers');
            resolve();
        }));
    }

    private async allOffline() {
        for (let idx in this._authedSessionMap) {
            await this._authedSessionMap[idx].offline();
        }
    }

    public addSession(session: UserSession): void {
        Log.sInfo('add session to world, socketUid=' + session.socket.uid);
        this._sessionList.append(session);
    }

    public delSession(node: ListNode<UserSession>): void {
        Log.sInfo('del session of world, socketUid=' + node.element.socket.uid);
        this._sessionList.deleteNode(node);
    }

    public addAuthedSession(roleId: number, session: UserSession): void {
        this._authedSessionMap[roleId] = session;
    }

    public delAuthedSession(roleId: number): void {
        delete this._authedSessionMap[roleId];
    }

    public async sendMsgToRole(roleId: number, msg: S2C.Message) {
        let buffer = S2C.Message.encode(msg).finish();
        await RedisMgr.getInstance(RedisType.GAME).publish(roleRedisPrefix + '_' + roleId, buffer.toString());
    }

    public async sendMsgToAll(msg: S2C.Message) {
        let buffer = S2C.Message.encode(msg).finish();
        await RedisMgr.getInstance(RedisType.GAME).publish(RedisChanel.BROADCAST, buffer.toString());
    }

    public async isRoleOnline(roleId: number): Promise<boolean> {
        return new Promise<boolean>((async (resolve) => {
            let count = await RedisMgr.getInstance(RedisType.GAME).pubsub('numsub', roleRedisPrefix + '_' + roleId);
            resolve(count > 0);
            if (count > 1) {
                Log.sError(roleRedisPrefix + '_' + roleId + ' fatal error multi channel');
            }
        }));
    }

    public async kickRole(roleId: number) {
        return new Promise<void>((async (resolve) => {
            await RedisMgr.getInstance(RedisType.GAME).publish(roleRedisPrefix + '_' + roleId, WorldMsg.KICK);
            check();
            let self = this;

            function check() {
                setTimeout(async () => {
                    let online = await self.isRoleOnline(roleId);
                    if (online) {
                        check();
                    }
                    else {
                        resolve();
                    }
                }, 10);
            }
        }));
    }

    public getScopes(cmd) {
        return this._allScopes[cmd];
    }
}