import * as os from 'os';
import * as child_process from 'child_process';
import {Log} from "../util/log";

let cupNum = os.cpus().length,
    workerArr: child_process.ChildProcess[] = [];
let connectNum = 0;

const Config = require('../../config/config.json');
Log.init(__dirname + Config.log.dir, Config.log.level);

let t = [];
for (let i = 0; i < cupNum; i++) {
    t.push((6001 + i).toString());
}
let portsArr: ReadonlyArray<string> = new Array<string>(t);

for (let i = 0; i < cupNum; i++) {
    workerArr.push(child_process.fork('./fork_server.js', portsArr));

    workerArr[i].on('message', (msg: any) => {
        if (msg.cmd && msg.cmd === 'connect') {
            connectNum++;
            Log.sInfo('socket server connectnum:' + connectNum);
        }
        if (msg.cmd && msg.cmd === 'disconnect') {
            connectNum--;
            Log.sInfo('socket server connectnum:' + connectNum);
        }
    });
}