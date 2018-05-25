import {UserSession} from './user_session'
import {Log} from "../../util/log";
import {World} from "./world";

export class PlayerSession extends UserSession {
    constructor() {
        super();
    }

    public async update(): Promise<void> {
        return new Promise<void>((async (resolve) => {
            for (let packet of this.m_packets) {
                Log.sInfo(packet);
                // TODO
                this.m_socket.send('reply: ' + packet);
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