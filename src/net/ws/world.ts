import {UserSession} from './user_session'
import {SocketStatus} from "./web_socket";
import {LinkedList, ListNode} from "../../util/linked_list";
import {Log} from "../../util/log";

type AuthedSessionMap = { [index: number]: UserSession };

export class World {
    static instance: World;
    m_sessionList: LinkedList<UserSession>;
    m_authedSessionMap: AuthedSessionMap; // 玩家上线通过后加入进来

    constructor() {
        this.m_sessionList = new LinkedList<UserSession>();
        this.m_authedSessionMap = {};
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
            if (cur.element.m_socket.m_state === SocketStatus.VALID) {
                await cur.element.update();
                cur = cur.next;
            }
            else {
                // TODO
                t = cur;
                this.delSession(t);
                cur = cur.next;
            }

        }

        return new Promise<void>(async (resolve, reject) => {
        });
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