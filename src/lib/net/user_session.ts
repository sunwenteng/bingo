import {WebSocket, SocketStatus, isServerValid} from "./ws/web_socket";
import {C2S, S2C} from "../proto/cmd";

export abstract class UserSession {
    public m_packets: any[];
    public m_socket: WebSocket | any;

    protected constructor() {
        this.m_packets = [];
    }

    public async abstract update(): Promise<void>;

    public abstract addSessionToWorker(): void;

    public pushPacket(packet: C2S.Message) {
        this.m_packets.push(packet);
    }

    public send(data: any): void {
        this.m_socket.sendProtocol(data);
    }

    public sendProtocol(data: S2C.Message): void {
        this.m_socket.sendProtocol(data);
    }

    public closeSocket(){
        this.m_socket.close();
    }
}