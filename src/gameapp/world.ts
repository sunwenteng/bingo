import {UserSession} from '../net/user_session'
import {SocketStatus} from '../net/ws/web_socket'
import {LinkedList, ListNode} from '../util/linked_list'
import * as GameUtil from '../util/game_util'
import * as fs from 'fs'
import {Log} from "../util/log"
import {C2S} from "../proto/cmd"

type AuthedSessionMap = { [index: number]: UserSession };
type ControllerMap = { [index: string]: any };

export class World {
    public static instance: World;
    public m_sessionList: LinkedList<UserSession>;
    public m_authedSessionMap: AuthedSessionMap; // 玩家上线通过后加入进来
    public m_allControllers: ControllerMap;

    constructor() {
        this.m_sessionList = new LinkedList<UserSession>();
        this.m_authedSessionMap = {};
        this.m_allControllers = {};
    }

    public static getInstance(): World {
        if (!this.instance) {
            this.instance = new World();
        }
        return this.instance;
    }

    public async update(): Promise<void> {
        let cur = this.m_sessionList.head(), t = null;
        while (cur) {
            if (cur.element.m_socket._state === SocketStatus.VALID) {
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

    public init(): boolean {
        for (let cmd in C2S.Message['fields']) {
            if (cmd.indexOf('CS') !== -1) {
                let arr = cmd.split('_');
                if (arr.length > 2) {
                    let controllerPath = __dirname + '/controllers/' + arr[1].toLowerCase() + '_controller.js';
                    if (!fs.existsSync(controllerPath)) {
                        Log.sError('controllerName=' + controllerPath + ' not exists');
                        return false;
                    }
                    for (let i = 0; i < arr.length; ++i) {
                        if (i > 3) {
                            arr[i] = GameUtil.capitalize(arr[i]);
                        }
                        else{
                            arr[i] = arr[i].toLowerCase();
                        }
                    }
                    let methodName = arr.slice(2, arr.length).join('');
                    this.m_allControllers[cmd] = require('./controllers/' + arr[1].toLowerCase() + '_controller')[methodName];
                }
            }
        }

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
        this.m_sessionList.append(session);
    }

    public delSession(node: ListNode<UserSession>): void {
        Log.sInfo('del session of world, socketUid=' + node.element.m_socket.m_uid);
        this.m_sessionList.deleteNode(node);
    }

    public addAuthedSession(accountId: number, session: UserSession): void {
        this.m_authedSessionMap[accountId] = session;
    }

    public delAuthedSession(accountId: number): void {
        delete this.m_authedSessionMap[accountId];
    }

}