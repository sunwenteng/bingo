import {Log} from './util/log'

const Config = require('../config/config.json');
// import * as Config from '../config/config.json'
Log.init(__dirname + Config.log.dir, Config.log.level);

import {Server} from './net/ws/web_socket'
import {PlayerSession} from "./net/ws/player_session";
import {World} from "./net/ws/world";

async function start(server: Server) {
    await server.start(PlayerSession);
    setInterval(async () => {
        await World.getInstance().update();
    }, 100)
}

let server = new Server(Config.server.host, Config.server.port);
start(server);