import * as WebSocket from 'ws';
import {C2S, S2C} from "../app/proto/cmd";

let count = 1;
let time = {};
let set = new Set();

class Client {
    roleId: number;

    constructor(roleId) {
        this.roleId = roleId;
        let ws = new WebSocket('ws://127.0.0.1:5555/abc/efg');

        ws.on('open', () => {
            set.add(this.roleId);
            // setInterval(() => {
            for (let i = 0; i < 1; i++) {
                let id = Math.floor(Math.random() * 100);
                id = id === 0 ? 1 : id;
                let msg = C2S.Message.create({
                    CS_ROLE_ONLINE: {
                        passport: this.roleId + ''
                    }
                });

                let buffer = C2S.Message.encode(msg).finish();

                // ws.send(buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.length));
                ws.send(buffer);
                time[count++] = Date.now();
            }
            // }, 1000);

            setInterval(() => {
                for (let i = 0; i < 1; i++) {
                    let id = Math.floor(Math.random() * 100);
                    id = id === 0 ? 1 : id;
                    let msg = C2S.Message.create({
                        CS_ROLE_HEART_BEAT: {msg: Math.floor(Math.random() * 100) + '' }
                    });

                    let buffer = C2S.Message.encode(msg).finish();

                    ws.send(buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.length));
                    time[count++] = Date.now();
                }
            }, 1000);
        });

        ws.on('close', (code, reason) => {
            console.log('close roleId %d code %d reason %s', this.roleId, code, reason);
            set.delete(this.roleId);
        });

        ws.on('message', (data: Buffer) => {
            try {
                let msg = S2C.Message.decode(data);
                // console.log('idx=%s, time=%d, data=%j', msg.SC_ROLE_ONLINE.roleId, Date.now() - time[msg.SC_ROLE_ONLINE.roleId], msg.toJSON(),);
                console.log('roleId %d get msg %j', this.roleId, msg.toJSON());
            } catch (e) {
                console.error(e);
            }
        });
    }
}

for (let i = 0; i < 1; i++) {
    let client = new Client(i + 1);
}

// setInterval(()=>{
//     if(!set.size)
//         process.exit(0);
//     if(set.size < 100)
//         console.log(set.values());
// }, 1000);