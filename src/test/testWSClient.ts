import * as WebSocket from 'ws';
import {C2S, S2C} from "../proto/cmd";

const ws = new WebSocket('ws://127.0.0.1:5555/abc/efg');

ws.on('open', () => {
    let msg = C2S.Message.create({
        CS_TEST_ECHO: {
            name: "123123",
            b: 123123123123123,
            color: C2S.CS_TEST_ECHO.Color.BLUE,
            data: [1, 2, 3],
            map: {12: '12'}
        }
    });
    let buffer = C2S.Message.encode(msg).finish();
    for (let i = 0; i < 2000; i++) {
        ws.send(buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.length));
    }
});

ws.on('message', (data: Buffer) => {
    try {
        let msg = C2S.Message.decode(data);
        console.log('data=%j', msg.toJSON());
        this.m_session.pushPacket(msg);
    } catch (e) {
        console.error(e);
    }
});