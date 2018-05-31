import * as WorldDB from '../database/world_db'
import * as LoginDB from '../database/login_db'
import {Log} from '../util/log'

const Config = require('../../config/config.json');
Log.init(__dirname + Config.log.dir, Config.log.level);

async function test(config) {
    await WorldDB.init(config);
    let time = await WorldDB.getDBTime();
    console.log(time);
    await WorldDB.shutDownDB();
}
async function test1(config) {
    await LoginDB.init(config);
    let time = await LoginDB.getDBTime();
    console.log(time);
    await LoginDB.shutDownDB();
}


test(Config.mysql.game_db);
test1(Config.mysql.login_db);
