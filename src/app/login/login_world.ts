import {UserSession} from '../../lib/net/user_session'
import {LinkedList, ListNode} from '../../lib/util/linked_list'
import {Log} from "../../lib/util/log"
import * as time from '../../lib/util/time';
import * as LoginDB from "../../lib/mysql/login_db";

export class LoginWorld {
    public _isUpdating: boolean;
    public static instance: LoginWorld = new LoginWorld();
    private readonly _sessionList: LinkedList<UserSession> = new LinkedList<UserSession>();
    private readonly _timer: { [mutex: string]: time.RaceTimer } = {};

    m_serverMap: { [server_id: number]: LoginDB.Server } = {};
    m_loginStrategyMap: { [loginStrategyId: number]: LoginDB.LoginStrategyCondition[] } = {};
    m_noticeInfoArr: LoginDB.LoginNoticeInfo[] = [];

    constructor() {
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

    public async start() {
        await this.addTimer('login_world_update15s', 15 * time.SECOND, async () => {
            let dbTime = await LoginDB.getDBTime();
            let result = await LoginDB.conn.execute("select * from notice_info_v2 where start_time < " + dbTime + " and end_time > " + dbTime);
            if (result.length !== 0) {
                this.m_noticeInfoArr = result;
            }

            result = await LoginDB.conn.execute('select * from gameserver_info');
            for (let i = 0; i < result.length; i++) {
                let server = result[i];
                let oldServer = this.m_serverMap[server.server_id];
                if (oldServer) {
                    server.alive = (server.update_time !== oldServer.update_time);
                }
                else {
                    server.alive = true;
                }
                this.m_serverMap[server.server_id] = server;
            }

            result = await LoginDB.conn.execute('select strategy_id, condition_id, type, value from login_strategy');
            for (let i = 0; i < result.length; i++) {
                let obj = result[i];
                if (!this.m_loginStrategyMap[obj['strategy_id']]) {
                    this.m_loginStrategyMap[obj['strategy_id']] = [];
                }
                this.m_loginStrategyMap[obj['strategy_id']].push({type: obj.type, value: obj.value});
            }
        });
        // await this.addTimer('login_world_update1m', time.MINUTE, async () => {
        // });
        // await this.addTimer('login_world_update1h', time.HOUR, async () => {
        // });
        // await this.addTimer('login_world_update1d', time.DAY, async () => {
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

    public async stop() {
        return new Promise<void>((async (resolve) => {
            if (this._isUpdating) {
                setTimeout(async () => {
                    LoginWorld.instance.stop().then(resolve);
                }, 100)
            }
            else {
                resolve();
            }
        }));
    }

    public addSession(session: UserSession): void {
        Log.sInfo('add session to world, socketUid=' + session.m_socket.uid);
        this._sessionList.append(session);
    }

    public delSession(node: ListNode<UserSession>): void {
        Log.sInfo('del session of world, socketUid=' + node.element.m_socket.uid);
        this._sessionList.deleteNode(node);
    }

    public getNoticeStr(useType: LoginDB.NoticeUseType, condType: LoginDB.NoticeConditionType, condValue: number): string {
        let ret = '';
        for (let i = 0; i < this.m_noticeInfoArr.length; i++) {
            let notice = this.m_noticeInfoArr[i];
            if (notice.use_type === useType && notice.condition_type === condType && notice.condition_value === condValue) {
                ret += notice.content;
            }
        }
        return ret;
    }
}