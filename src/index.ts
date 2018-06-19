import {ConfigMgr} from "./config/data/config_struct";
import {Log} from "./lib/util/log";
import * as WorldDB from "./lib/mysql/world_db";
import {RedisMgr, RedisType} from "./lib/redis/redis_mgr";

Log.init();
const Config = require('./config/config.json');
setTimeout(() => {
    WorldDB.start(Config['mysql']['game_db']).then(async () => {
        await WorldDB.stop();
    });
}, 100);

RedisMgr.getInstance(RedisType.GAME).sadd('dirty_roles', 111).then(async () => {
    await RedisMgr.getInstance(RedisType.GAME).stop();
});

ConfigMgr.getInstance().loadAllConfig(__dirname + '/config/data/');

let allEquip = ConfigMgr.getInstance().equipdb.all();
for (let idx in allEquip) {
    console.log(idx + ',' + allEquip[idx].Text_name + ',' + allEquip[idx].Text_des);
}

process.on('beforeExit', () => {
    console.log(111);
});