import * as ws from 'ws';
import * as http from "http";
import {Log} from '../../util/log'
import {UserSession} from "../user_session"
import {C2S, S2C} from "../../proto/cmd";

let uid: number = 0;

export enum SocketStatus {
    VALID,
    INVALID
}

export class WebSocket {
    public m_session: UserSession;
    public m_webSocket: ws;
    public m_uid: number;
    public _state: SocketStatus;
    m_ip: string;

    constructor(ip: string) {
        this.m_ip = ip;
    }

    init<T extends UserSession>(uid: number, socket: ws, sessionClass: new () => T) {
        this.m_webSocket = socket;
        this.m_uid = uid;
        this.m_session = new sessionClass();
        this.m_session.m_socket = this;
        this.m_session.addSessionToWorker();
        this._state = SocketStatus.VALID;
        this.m_webSocket.on('message', (data: ArrayBuffer) => {
            if (this.m_webSocket.readyState === ws.OPEN) {
                try {
                    let msg = C2S.Message.decode(new Uint8Array(data));
                    this.m_session.pushPacket(msg);
                } catch (e) {
                    Log.sFatal(e);
                }
            }
        });

        this.m_webSocket.on('pong', () => {
            this._state = SocketStatus.VALID;
        });

        this.m_webSocket.on('close', (code: number, reason: string) => {
            Log.sInfo('webSocket closed, code=%d, reason=%s', code, reason);
            this._state = SocketStatus.INVALID;
        });

        this.m_webSocket.on('error', (error: Error) => {
            Log.sError(error);
        });
    }

    send(data: any): void {
        if (this._state === SocketStatus.VALID) {
            this.m_webSocket.send(data);
        }
    }

    sendProtocol(data: S2C.Message): void {
        if (this._state === SocketStatus.VALID) {
            let buffer = S2C.Message.encode(data).finish();
            this.m_webSocket.send(buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.length));
        }
    }
}

export class Server {
    public _port: number;
    public _host: string;

    constructor(host: string, port: number) {
        this._port = port;
        this._host = host;
    }

    public start<T extends UserSession>(sessionClass: new () => T): Promise<void> {
        return new Promise<void>((resolve => {
            const wss = new ws.Server({
                host: this._host,
                port: this._port,
                maxPayload: 10240,
                verifyClient: (info: { origin: string; secure: boolean; req: http.IncomingMessage }): boolean => {
                    /**
                     * 暂时还无用，但是可以用于一些高防直接屏蔽一些请求
                     */
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

            wss.on('connection', ((s: ws, req: http.IncomingMessage) => {
                const ip = req.connection.remoteAddress;
                /*nginx way: const ip = req.headers['x-forwarded-for'].split(/\s*,\s*!/)[0];*/
                let socket = new WebSocket(ip);
                socket.init(++uid, s, sessionClass);
                Log.sInfo('new Web_socket connection, ip=' + socket.m_ip + ', uid=' + socket.m_uid);

            }));
        }));
    }
}