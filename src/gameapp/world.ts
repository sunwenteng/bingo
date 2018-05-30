import {UserSession} from '../net/user_session'
import {LinkedList, ListNode} from '../util/linked_list'
import * as GameUtil from '../util/game_util'
import * as fs from 'fs'
import {Log} from "../util/log"
import {C2S} from "../proto/cmd"

type AuthedSessionMap = { [index: number]: UserSession };
type ControllerMap = { [index: string]: Function };

export class World {
    private static instance: World;
    private readonly _sessionList: LinkedList<UserSession>;
    private readonly _authedSessionMap: AuthedSessionMap; // 玩家上线通过后加入进来
    private readonly _allControllers: ControllerMap;

    constructor() {
        this._sessionList = new LinkedList<UserSession>();
        this._authedSessionMap = {};
        this._allControllers = {};
    }

    public static getInstance(): World {
        if (!this.instance) {
            this.instance = new World();
        }
        return this.instance;
    }

    public async update() {
        let cur = this._sessionList.head(), t = null;
        while (cur) {
            if (cur.element.isSessionValid()) {
                await cur.element.update();
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

    public init(): boolean {
        this.registerController();
        return true;
    }

    public async initControllers(): Promise<void> {
        return new Promise<void>((resolve => {
            resolve();
        }));
    }

    public async saveControllers(): Promise<void> {
        return new Promise<void>((resolve => {
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