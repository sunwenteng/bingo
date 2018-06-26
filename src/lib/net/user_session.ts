import {WebSocket} from "./ws/web_socket";
import {LinkedList} from "../util/linked_list";
import * as events from "events";

export abstract class UserSession extends events.EventEmitter {
    public m_packets: LinkedList<any>;
    public m_socket: WebSocket | any;

    protected constructor() {
        super();
        this.m_packets = new LinkedList<any>();
    }

    public async abstract update(): Promise<void>;

    public abstract addSessionToWorker(): void;

    public pushPacket(packet) {
        this.m_packets.append(packet);
    }

    public send(data: any): void {
        this.m_socket.send(data);
    }

    public online() {

    }

    public offline() {

    }

    public abstract sendProtocol(data);

    public closeSocket() {
        this.m_socket.close();
    }
}