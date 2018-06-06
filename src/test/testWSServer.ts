import {Log} from '../lib/util/log'

const Config = require('../config/config.json');
// import * as Config from '../config/config.json'
Log.init(__dirname + Config.log.dir, Config.log.level);


import * as WebSocket from 'ws';
import * as http from "http";

const wss = new WebSocket.Server({
    host: Config.server.host,
    port: Config.server.port,
    maxPayload: 10240,
    verifyClient: (info: { origin: string; secure: boolean; req: http.IncomingMessage }): boolean => {
        return true;
    }
});

wss.on('listening', () => {
    Log.sInfo('Web_socket server start, address=%j', wss.address());
});

wss.on('error', (error: Error) => {
    Log.sError(error);
});

wss.on('connection', ((ws: WebSocket) => {
    Log.sInfo('new Web_socket connection');
    ws.on('message', (data: WebSocket.Data) => {
        Log.sInfo(data);
        if (ws.readyState === WebSocket.OPEN)
            ws.send('replay = ' + data); // async
    });

    ws.on('close', (code: number, reason: string) => {
        Log.sInfo('webSocket closed, code=%d, reason=%s', code, reason);
    });

    ws.on('error', (error: Error) => {
        Log.sError(error);
    });
}));