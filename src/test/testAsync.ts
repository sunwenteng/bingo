import {MysqlConnection} from '../lib/mysql/lib/mysql_connection'
import {Log} from '../lib/util/log'

const Config = require('../config/config.json');
Log.init(__dirname + Config.log.dir, Config.log.level);

let db;
db = new MysqlConnection();
db.startDb(Config.game_db);

async function start(){
    let ret = await db.execute("select level from player_info where role_id=206859");
    await db.execute("update player_info set level = " + (ret[0].level + 1) + " where role_id=206859");
    ret = await db.execute("select level from player_info where role_id=206859");
    await db.execute("update player_info set level = " + (ret[0].level + 1) + " where role_id=206859");
}

Log.sInfo("start");
async function loop() {
    for(let i = 0; i < 100; i++)
    {
        await start();
    }
}

loop();
Log.sInfo("end");