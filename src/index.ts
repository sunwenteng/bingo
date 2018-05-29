import {PlayerSession} from "./gameapp/player_session";
import {World} from "./gameapp/world";
import {Server} from './net/ws/web_socket'
import {Log} from './util/log'
import * as util from 'util';

const Config = require('../config/config.json');
import {execTime} from './util/descriptor'

Log.init(__dirname + Config.log.dir, Config.log.level);

class App {
    @execTime(true)
    async start() {
        let server = new Server(Config.server.host, Config.server.port);
        await server.start(PlayerSession);
        World.getInstance().init();
        setInterval(async () => {
            await World.getInstance().update();
        }, 100)
    }
}

let ret = new App().start();
ret.catch((e) => {
    Log.sFatal(e);
});