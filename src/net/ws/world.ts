import {UserSession} from './user_session'

export class World {
    m_sessionList: UserSession[];
    static instance: World;

    constructor() {
        this.m_sessionList = [];
    }

    public static getInstance(): World {
        if (!this.instance) {
            this.instance = new World();
        }
        return this.instance;
    }

    public async update(): Promise<void> {
        return new Promise<void>(async (resolve, reject) => {
            for (let session of this.m_sessionList) {
                await session.update();
            }
        });
    }

    public addSession(session: UserSession): void {
        this.m_sessionList.push(session);
    }
}