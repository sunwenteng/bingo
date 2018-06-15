import {UserSession} from '../lib/net/user_session'
import {LinkedList, ListNode} from '../lib/util/linked_list'
import * as GameUtil from '../lib/util/game_util'
import * as fs from 'fs'
import {Log} from "../lib/util/log"
import {C2S} from "./proto/cmd"
import {RedisMgr, RedisType} from "../lib/redis/redis_mgr";
import Timer = NodeJS.Timer;

const Config = require('../config/config.json');
type AuthedSessionMap = { [index: number]: UserSession };
type ControllerMap = { [index: string]: Function };
let gameRedis = RedisMgr.getInstance(RedisType.GAME);

export enum WorldDataRedisKey {
    DIRTY_ROLES = 'dirty_roles',
    SERVER_ROLES = 'server_roles',
    BROAD_MSGS = 'broad_msgs',
    ROLE_MSGS = 'role_msgs',
}

interface ServerInfo {
    serverId: number;
    host: string;
    port: number;
    version: string;
    resVersion: string;
}

export class World {
    private static _instance: World;
    private _info: ServerInfo;
    private readonly _sessionList: LinkedList<UserSession>;
    private readonly _authedSessionMap: AuthedSessionMap; // 玩家上线通过后加入进来
    private readonly _allControllers: ControllerMap;
    private _timers: Timer[];

    constructor() {
        this._sessionList = new LinkedList<UserSession>();
        this._authedSessionMap = {};
        this._allControllers = {};
        this._timers = [];
    }

    public static getInstance(): World {
        if (!this._instance) {
            this._instance = new World();
        }
        return this._instance;
    }

    public async update() {
        let cur = this._sessionList.head, t = null;
        while (cur) {
            if (cur.element.m_socket.isSocketValid()) {
                //可以不await只要对于单链接包有序就行
                cur.element.update();
                cur = cur.next;
            }
            else {
                t = cur;
                this.delSession(t);
                cur = cur.next;
            }
        }
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

    }

    private addTimer(timer: Timer) {
        this._timers.push(timer);
    }

    private clearAllTimer() {
        for (let timer of this._timers) {
            clearImmediate(timer);
        }
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
            self.addTimer(setTimeout(() => {
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
            }, 5000));
        }

        updateServerInfo();
    }

    public getServerRedisKey() {
        return 'server_' + this._info.serverId + '_' + this._info.host + '_' + this._info.port;
    }

    public async stop() {
        this.clearAllTimer();
        await this.update();
        await World.getInstance().saveControllers();
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

    public addSession(session: UserSession): void {
        Log.sInfo('add session to world, socketUid=' + session.m_socket.m_uid);
        this._sessionList.append(session);
    }

    public delSession(node: ListNode<UserSession>): void {
        Log.sInfo('del session of world, socketUid=' + node.element.m_socket.m_uid);
        this._sessionList.deleteNode(node);
    }

    public addAuthedSession(accountId: number, session: UserSession): void {
        this._authedSessionMap[accountId] = session;
    }

    public delAuthedSession(accountId: number): void {
        delete this._authedSessionMap[accountId];
    }

}