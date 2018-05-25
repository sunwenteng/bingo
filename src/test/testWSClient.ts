import * as WebSocket from 'ws';

const ws = new WebSocket('ws://127.0.0.1:5555');

ws.on('open', () => {
    for (let i = 0; i < 2000; i++)
        ws.send('something ' + i);
});

ws.on('message', (data) => {
    console.log(data);
});