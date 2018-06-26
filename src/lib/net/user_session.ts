import {WebSocket} from "./ws/web_socket";
import {C2S, S2C} from "../../app/game/proto/cmd";
import {LinkedList} from "../util/linked_list";

export abstract class UserSession {
    public m_packets: LinkedList<any>;
    public m_socket: WebSocket | any;

    protected constructor() {
        this.m_packets = new LinkedList<any>();
    }

    public async abstract update(): Promise<void>;

    public abstract addSessionToWorker(): void;

    public pushPacket(packet: C2S.Message) {
        this.m_packets.append(packet);
    }

    public send(data: any): void {
        this.m_socket.sendProtocol(data);
    }

    public online() {

    }

    public offline() {

    }

    public sendProtocol(data: S2C.Message): void {
        this.m_socket.sendProtocol(data);
    }

    public closeSocket() {
        this.m_socket.close();
    }
}