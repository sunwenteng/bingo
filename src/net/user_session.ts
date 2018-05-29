import {WebSocket} from "./ws/web_socket";
import {C2S} from "../proto/cmd";

export abstract class UserSession {
    m_packets: any[];
    m_socket: WebSocket | any;

    protected constructor() {
        this.m_packets = [];
    }

    public async abstract update(): Promise<void>;

    public abstract addSessionToWorker(): void;

    public pushPacket(packet: C2S.Message) {
        this.m_packets.push(packet);
    }
}