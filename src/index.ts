import {PlayerSession} from "./net/ws/player_session";
import {World} from "./net/ws/world";
import {Server} from './net/ws/web_socket'
import {Log} from './util/log'
import * as util from 'util';

const Config = require('../config/config.json');
import {logTime} from './util/descriptor'

Log.init(__dirname + Config.log.dir, Config.log.level);

class test {

    @logTime()
    end() {
        console.log('i am end');
    }

    @logTime(true)
    async start(server: Server) {
        await server.start(PlayerSession);
        return new Promise<void>((resolve => {
            setTimeout(async () => {
                resolve();
            }, 3000)
        }));
    }

    @logTime()
    async start1() {
        return new Promise<void>((resolve => {
            setTimeout(async () => {
                console.log(111);
                resolve();
            }, 5000)
        }));
    }
}


let server = new Server(Config.server.host, Config.server.port);
new test().end();
new test().start(server);
new test().start1();
