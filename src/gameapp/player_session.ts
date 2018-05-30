import {UserSession} from '../net/user_session'
import {Log} from "../util/log";
import {World} from "./world";

export class PlayerSession extends UserSession {
    public m_role: any;

    constructor() {
        super();
        this.m_role = null;
    }

    public async update() {
        let controller;
        for (let packet of this.m_packets) {
            Log.sInfo('name=%s, data=%j', packet.kind, packet[packet.kind]);
            controller = World.getInstance().getController(packet.kind);
            if (controller) {
                await controller(this, packet[packet.kind]);
            }
        }
        if (this.m_packets.length) {
            this.m_packets = [];
        }
    }

    public addSessionToWorker(): void {
        World.getInstance().addSession(this);
    }
}