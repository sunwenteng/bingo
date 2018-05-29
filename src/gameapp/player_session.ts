import {UserSession} from '../net/user_session'
import {Log} from "../util/log";
import {World} from "./world";
import {C2S} from "../proto/cmd";

export class PlayerSession extends UserSession {
    m_role: any;

    constructor() {
        super();
        this.m_role = null;
    }

    public async update(): Promise<void> {
        return new Promise<void>((async (resolve) => {
            for (let packet of this.m_packets) {
                Log.sInfo('name=%s, data=%j', packet.kind, packet[packet.kind]);
                World.getInstance().m_allControllers
            }
            if (this.m_packets.length) {
                this.m_packets = [];
            }
            resolve();
        }));
    }

    public addSessionToWorker(): void {
        World.getInstance().addSession(this);
    }
}