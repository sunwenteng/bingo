import {UserSession} from '../net/user_session'
import {Log} from "../util/log";
import {World} from "./world";
import {execTime} from "../util/descriptor";

const MAX_PACKET_COUNT = 100000;

export class PlayerSession extends UserSession {
    public m_role: any;

    constructor() {
        super();
        this.m_role = null;
    }

    @execTime(false)
    private async doController(controller: Function, session: PlayerSession, packet: any) {
        await controller(session, packet);
    }

    public async update() {
        if (this.m_packets.length > MAX_PACKET_COUNT) {
            Log.sError('packet array length too long, force close socket, uid=%d, ip=%s, length=%d', this.m_socket.uid, this.m_socket.ip, this.m_packets.length);
            this.closeSocket();
        }
        else {
            let controller;
            for (let packet of this.m_packets) {
                Log.sInfo('name=%s, data=%j', packet.kind, packet[packet.kind]);
                controller = World.getInstance().getController(packet.kind);
                if (controller) {
                    await this.doController(controller, this, packet[packet.kind]);
                }
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