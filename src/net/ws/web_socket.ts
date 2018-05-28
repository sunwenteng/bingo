import * as ws from 'ws';
import * as http from "http";
import {Log} from '../../util/log'
import {UserSession} from "./user_session"

let uid: number = 0;

export enum SocketStatus {
    VALID,
    INVALID
}

export class WebSocket {
    public m_session: UserSession;
    public m_webSocket: ws;
    public m_uid: number;
    public m_state: SocketStatus;

    constructor() {
    }

    init<T extends UserSession>(uid: number, socket: ws, sessionClass: new () => T) {
        this.m_webSocket = socket;
        this.m_uid = uid;
        this.m_session = new sessionClass();
        this.m_session.m_socket = this;
        this.m_session.addSessionToWorker();
        this.m_state = SocketStatus.VALID;
        this.m_webSocket.on('message', (data: ws.Data) => {
            //TODO protobuf
            if (this.m_webSocket.readyState === ws.OPEN)
                this.m_session.pushPacket(data);
        });

        this.m_webSocket.on('close', (code: number, reason: string) => {
            Log.sInfo('webSocket closed, code=%d, reason=%s', code, reason);
            this.m_state = SocketStatus.INVALID;
        });

        this.m_webSocket.on('error', (error: Error) => {
            Log.sError(error);
        });
    }

    send(data: any): void {
        if (this.m_state === SocketStatus.VALID) {
            this.m_webSocket.send(data);
        }
    }
}

export class Server {
    private readonly m_port: number;
    private readonly m_host: string;

    constructor(host: string, port: number) {
        this.m_port = port;
        this.m_host = host;
    }

    public start<T extends UserSession>(sessionClass: new () => T): Promise<void> {
        return new Promise<void>((resolve => {
            const wss = new ws.Server({
                host: this.m_host,
                port: this.m_port,
                maxPayload: 10240,
                verifyClient: (info: { origin: string; secure: boolean; req: http.IncomingMessage }): boolean => {
                    return true;
                }
            });

            wss.on('listening', () => {
                Log.sInfo('Web_socket server start, address=%j', wss.address());
                resolve();
            });

            wss.on('error', (error: Error) => {
                Log.sError(error);
            });

            wss.on('connection', ((s: ws) => {
                let socket = new WebSocket();
                socket.init(++uid, s, sessionClass);
                Log.sInfo('new Web_socket connection, uid=' + socket.m_uid);

            }));
        }));
    }
}