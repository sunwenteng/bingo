import * as WebSocket from 'ws';
import {C2S, S2C} from "../game_app/proto/cmd";

let count = 1;
let time = {};

class Client {
    constructor() {
        let ws = new WebSocket('ws://127.0.0.1:5555/abc/efg');

        ws.on('open', () => {
            setInterval(() => {
                for (let i = 0; i < 10; i++) {
                    let id = Math.floor(Math.random() * 10000);
                    id = id === 0 ? 1 : id;
                    let msg = C2S.Message.create({
                        CS_ROLE_ONLINE: {
                            passport: id.toString()
                        }
                    });

                    let buffer = C2S.Message.encode(msg).finish();
                    ws.send(buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.length));
                    time[count++] = Date.now();
                }
            }, 1000);
        });

        ws.on('message', (data: Buffer) => {
            try {
                let msg = S2C.Message.decode(data);
                console.log('idx=%s, time=%d, data=%j', msg.SC_ROLE_ONLINE.roleId, Date.now() - time[msg.SC_ROLE_ONLINE.roleId], msg.toJSON(),);
            } catch (e) {
                console.error(e);
            }
        });
    }
}

for (let i = 0; i < 4000; i++) {
    new Client();
}