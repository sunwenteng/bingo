import {Log} from "./util/log";
import {RedisDB, RedisMgr, RedisType} from "./redis/redis_mgr";

const Config = require('../config/config.json');
Log.init(__dirname + Config.log.dir, Config.log.level);

async function test() {
    Log.sInfo('ret=' + await RedisMgr.getInstance(RedisType.GAME).dbsize(RedisDB.RoleDB));
    await RedisMgr.getInstance(RedisType.GAME).set("1", "1");
    // await RedisMgr.getInstance(RedisType.GAME).hmset('role_1', {book:1, tech: 2, c: 3});
}

test();