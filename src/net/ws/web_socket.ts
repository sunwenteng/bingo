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
    private _session: UserSession;
    private _webSocket: ws;
    private _uid: number;
    private _state: SocketStatus;
    private readonly _ip: string;

    constructor(ip: string) {
        this._ip = ip;
    }

    public init<T extends UserSession>(uid: number, socket: ws, sessionClass: new () => T) {
        this._webSocket = socket;
        this._uid = uid;
        this._session = new sessionClass();
        this._session.m_socket = this;
        this._session.addSessionToWorker();
        this._state = SocketStatus.VALID;
        this._webSocket.on('message', (data: ArrayBuffer) => {
            if (this._webSocket.readyState === ws.OPEN) {
                try {
                    let msg = C2S.Message.decode(new Uint8Array(data));
                    this._session.pushPacket(msg);
                } catch (e) {
                    Log.sFatal(e);
                }
            }
        });

        this._webSocket.on('pong', () => {
            this._state = SocketStatus.VALID;
        });

        this._webSocket.on('close', (code: number, reason: string) => {
            Log.sInfo('webSocket closed, code=%d, reason=%s', code, reason);
            this._state = SocketStatus.INVALID;
        });

        this._webSocket.on('error', (error: Error) => {
            Log.sError(error);
        });
    }

    public send(data: any): void {
        if (this._state === SocketStatus.VALID) {
            this._webSocket.send(data);
        }
    }

    public sendProtocol(data: S2C.Message): void {
        if (this._state === SocketStatus.VALID) {
            let buffer = S2C.Message.encode(data).finish();
            this._webSocket.send(buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.length));
        }
    }

    get uid(): number {
        return this._uid;
    }

    get ip(): string {
        return this._ip;
    }

    get state(): SocketStatus {
        return this._state;
    }
}

export class Server {
    private readonly _port: number;
    private readonly _host: string;

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
                Log.sInfo('new Web_socket connection, ip=' + socket.ip + ', uid=' + socket.uid);

            }));
        }));
    }
}