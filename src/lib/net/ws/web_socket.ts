import * as ws from 'ws';
import * as express from 'express';
import * as http from 'http';
import {Log} from '../../util/log';
import {UserSession} from '../user_session';
import bodyParser = require("body-parser");

let uid: number = 0;
export let isServerValid = false;

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
        this._session.socket = this;
        this._session.addSessionToWorker();
        this._state = SocketStatus.VALID;
        this._webSocket.on('message', (data: ArrayBuffer) => {
            if (this.isSocketValid()) {
                this._session.emit('message', data);
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

    public isSocketValid() {
        return isServerValid && this._state === SocketStatus.VALID && this._webSocket.readyState === ws.OPEN;
    }

    public send(data: Buffer | string | Uint8Array | ArrayBuffer): void {
        if (this.isSocketValid()) {
            this._webSocket.send(data);
        }
    }

    public close() {
        this._webSocket.close();
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
    private _server: ws.Server = null;

    constructor(host: string, port: number) {
        this._port = port;
        this._host = host;
    }

    public async stop(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            isServerValid = false;
            this._server.close((err) => {
                if (err) {
                    reject();
                }
                else {
                    Log.sInfo('server close at ' + this._host + ':' + this._port);
                    resolve();
                }
            });
        });
    }

    public start<T extends UserSession>(sessionClass: new () => T): Promise<void> {
        return new Promise<void>((resolve => {
            isServerValid = true;
            let app = express();
            app.use(bodyParser.urlencoded({extended: true, limit: '1mb'}));
            app.use((req: express.Request, res: express.Response, next) => {
                res.header("Access-Control-Allow-Credentials", 'true');
                res.header("Access-Control-Allow-Origin", "*");
                res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
                res.header("Access-Control-Allow-Headers", "*");
                res.header("Content-Type", "application/json;charset=utf-8");
                if ("OPTIONS" === req.method) {
                    res.send(200);
                } else {
                    next();
                }
            });

            this._server = new ws.Server({
                server: http.createServer(app),
                /*server: https.createServer({
                    cert: fs.readFileSync('/path/to/cert.pem'),
                    key: fs.readFileSync('/path/to/key.pem')
                }, app),*/
                host: this._host,
                port: this._port,
                maxPayload: 10240,
            });

            this._server.on('listening', () => {
                Log.sInfo('Web_socket server start, address=%j', this._server.address());
                resolve();
            });

            this._server.on('error', (error: Error) => {
                Log.sError(error);
                throw error;
            });

            this._server.on('connection', ((s: ws, req: http.IncomingMessage) => {
                const ip = req.connection.remoteAddress;
                /*nginx way: const ip = req.headers['x-forwarded-for'].split(/\s*,\s*!/)[0];*/
                const socket = new WebSocket(ip);
                socket.init(++uid, s, sessionClass);
                Log.sInfo('new Web_socket connection, ip=' + socket.ip + ', uid=' + socket.uid);

            }));
        }));
    }
}