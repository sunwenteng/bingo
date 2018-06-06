import {PlayerSession} from "../game_app/app/player_session";
import {World} from "../game_app/app/world";
import {Server} from '../lib/net/ws/web_socket'
import {Log} from '../lib/util/log'
import * as util from 'util';

const Config = require('../../config/config.json');
import {execTime} from '../lib/util/descriptor'

Log.init(__dirname + Config.log.dir, Config.log.level);

class test {

    @execTime()
    end() {
        console.log('i am end');
    }

    @execTime(true)
    async start(server: Server) {
        await server.start(PlayerSession);
        return new Promise<void>((resolve => {
            setTimeout(async () => {
                resolve();
            }, 3000)
        }));
    }

    @execTime()
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
