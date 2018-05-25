import {WebSocket} from "./web_socket";

export abstract class UserSession {
    m_packets: any[];
    m_socket: WebSocket | any;

    protected constructor() {
        this.m_packets = [];
    }

    public async abstract update(): Promise<void>;

    public abstract addSessionToWorker(): void;

    public pushPacket(packet: any) {
        this.m_packets.push(packet);
    }
}