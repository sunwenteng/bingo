import {UserSession} from '../lib/net/user_session'
import {LinkedList, ListNode} from '../lib/util/linked_list'
import * as GameUtil from '../lib/util/game_util'
import * as fs from 'fs'
import {Log} from "../lib/util/log"
import {C2S} from "./proto/cmd"
import {RedisChanel, RedisMgr, RedisType} from "../lib/redis/redis_mgr";
import {RoleRedisPrefix} from "./role";
import * as events from "events";
import * as time from '../lib/util/time';

const Config = require('../config/config.json');
type AuthedSessionMap = { [index: number]: UserSession };
type ControllerMap = { [index: string]: Function };
let gameRedis = RedisMgr.getInstance(RedisType.GAME);

export enum WorldDataRedisKey {
    DIRTY_ROLES = 'dirty_roles',
}

interface ServerInfo {
    serverId: number;
    host: string;
    port: number;
    version: string;
    resVersion: string;
}

enum WorldMsg {
    KICK = 'kick'
}

class RaceTimer {
    private readonly _mutex: string;
    private _interval: number;
    private readonly _callback: Function;
    private _bFirstUpdate: boolean;

    constructor(mutex: string, interval: number, callback: Function) {
        this._bFirstUpdate = true;
        this._mutex = mutex;
        this._interval = interval;
        if (!callback) {
            throw new Error('race timer callback should be valid');
        }
        this._callback = callback;
    }

    public async run() {
        if (this._bFirstUpdate) {
            this._bFirstUpdate = false;
            // Log.sInfo('start run raceTimer mutex=' + this._mutex);
            await this._callback();
            // Log.sInfo('end run raceTimer mutex=' + this._mutex);
        }

        let self = this;
        doUpdate();

        function doUpdate() {
            setTimeout(() => {
                gameRedis.lock(self._mutex, async (hasLock: boolean) => {
                    if (hasLock) {
                        // Log.sInfo('start run raceTimer mutex=' + self._mutex);
                        await self._callback();
                        // Log.sInfo('end run raceTimer mutex=' + self._mutex);
                    }
                }, false).then(doUpdate);
            }, self._interval);
        }
    }
}

export class World extends events.EventEmitter {
    public _isUpdating: boolean;
    private static _instance: World;
    private _info: ServerInfo;
    private readonly _sessionList: LinkedList<UserSession>;
    private readonly _authedSessionMap: AuthedSessionMap; // 玩家上线通过后加入进来
    private readonly _allControllers: ControllerMap;
    private readonly _timer: { [mutex: string]: RaceTimer };

    constructor() {
        super();
        this._sessionList = new LinkedList<UserSession>();
        this._authedSessionMap = {};
        this._allControllers = {};
        this._timer = {};

        this.on('message', (channel: string, message: string) => {
            Log.sInfo("sub channel " + channel + ": " + message);
            let buffer = new Buffer(message);
            if (channel === RedisChanel.BROADCAST) {
                for (let roleId in this._authedSessionMap) {
                    this._authedSessionMap[roleId].m_socket.send(buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.length));
                }
            }
            else if (channel.indexOf(RoleRedisPrefix) !== -1) {
                let roleId = parseInt(channel.substr(RoleRedisPrefix.length + 1));
                let session = this._authedSessionMap[roleId];
                if (!session) {
                    Log.sError('role %d not online, message %s', roleId, message);
                    return;
                }
                switch (message) {
                    case WorldMsg.KICK:
                        Log.sInfo('role %d online, then kick', roleId);
                        session.m_socket.close();
                        session.offline();
                        break;
                    default:
                        session.m_socket.send(buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.length));
                        break;
                }
            }
        });
    }

    public static getInstance(): World {
        if (!this._instance) {
            this._instance = new World();
        }
        return this._instance;
    }

    public async update() {
        this._isUpdating = true;
        // half block mode, async session, sync packet within session
        let cur = this._sessionList.head, t = null;
        let promises = [];
        while (cur) {
            if (cur.element.m_socket.isSocketValid()) {
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
            if (!C2S.Message['fields'].hasOwnProperty(cmd))
                continue;
            if (cmd.indexOf('CS') !== -1) {
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
                        if (require('./controllers/' + arr[1].toLowerCase() + '_controller')[methodName]) {
                            this._allControllers[cmd] = require('./controllers/' + arr[1].toLowerCase() + '_controller')[methodName];
                        }
                        else {
                            Log.sWarn('cmd=' + cmd + ', controller=' + arr[1].toLowerCase() + '_controller, method=' + methodName + ' not exists');
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

        await this.addTimer('update1s', time.SECOND, async () => {
            await time.sleep(2 * time.SECOND);
        });
        // await this.addTimer('update1m', time.MINUTE, async () => {
        // });
        // await this.addTimer('update1h', time.HOUR, async () => {
        // });
        // await this.addTimer('update1d', time.DAY, async () => {
        // });
    }

    private async addTimer(mutex: string, interval: number, callback: Function) {
        if (this._timer[mutex]) {
            Log.sError('duplicate timer register in world, mutex=' + mutex);
            throw new Error('duplicate timer register in world, mutex=' + mutex);
        }
        this._timer[mutex] = new RaceTimer(mutex, interval, callback);
        await this._timer[mutex].run();
    }

    private async registerServer() {
        this._info = {
            serverId: process.env.INSTANCE_ID ? parseInt(process.env.INSTANCE_ID) : 0,
            resVersion: '',
            version: Config['app']['game']['version'],
            host: Config['app']['game']['host'],
            port: Config['app']['game']['port'],
        };

        let self = this;

        function updateServerInfo() {
            setTimeout(() => {
                let data = [
                    self.getServerRedisKey(), JSON.stringify({
                        onlineCount: Object.keys(self._authedSessionMap).length,
                        updateMS: Date.now(),
                        resVersion: self._info.port,
                        version: self._info.version,
                        host: self._info.host,
                        port: self._info.port
                    })];
                Log.sInfo('updateServerInfo, data=%j', data);
                gameRedis.hmset('game_servers', data).then(updateServerInfo);
            }, 5000);
        }

        updateServerInfo();
    }

    public getServerRedisKey() {
        return 'server_' + this._info.serverId + '_' + this._info.host + '_' + this._info.port;
    }

    public async stop() {
        return new Promise<void>((async (resolve) => {
            let self = this;

            async function doStop() {
                await self.allOffline();
                await self.saveControllers();
            }

            if (this._isUpdating) {
                setTimeout(async () => {
                    World.getInstance().stop().then(resolve);
                }, 100)
            }
            else {
                doStop().then(resolve);
            }
        }));
    }

    private async initControllers(): Promise<void> {
        return new Promise<void>((resolve => {
            resolve();
        }));
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
        Log.sInfo('add session to world, socketUid=' + session.m_socket.uid);
        this._sessionList.append(session);
    }

    public delSession(node: ListNode<UserSession>): void {
        Log.sInfo('del session of world, socketUid=' + node.element.m_socket.uid);
        this._sessionList.deleteNode(node);
    }

    public addAuthedSession(roleId: number, session: UserSession): void {
        this._authedSessionMap[roleId] = session;
    }

    public delAuthedSession(roleId: number): void {
        delete this._authedSessionMap[roleId];
    }

    public async isRoleOnline(roleId: number): Promise<boolean> {
        return new Promise<boolean>((async (resolve) => {
            let number = await RedisMgr.getInstance(RedisType.GAME).pubsub('numsub', RoleRedisPrefix + '_' + roleId);
            resolve(number > 0);
            if (number > 1) {
                Log.sError(RoleRedisPrefix + '_' + roleId + ' fatal error multi channel');
            }
        }))
    }

    public async kickRole(roleId: number) {
        return new Promise<void>((async (resolve) => {
            await RedisMgr.getInstance(RedisType.GAME).publish(RoleRedisPrefix + '_' + roleId, WorldMsg.KICK);
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
                }, 10)
            }
        }));
    }
}