import {RedisMgr, RedisType} from "./lib/redis/redis_mgr";
import {Log} from "./lib/util/log";

let gameRedis = RedisMgr.getInstance(RedisType.GAME);
const rankType = 'rank_1_0';

async function main() {
    const config = require('./config/config.json');
    Log.init(__dirname + '/' + config.log.dir, config.log.level);
    for (let i = 0; i < 200; i++) {
        await gameRedis.zadd(rankType, [{id: i + 1, value: i + 1}]);
    }

    let ret;
    ret = await gameRedis.zrevrange(rankType, 0, 99);
    console.log(ret);
    ret = await gameRedis.zrange(rankType, 0, 99);
    console.log(ret);

    ret = await gameRedis.zrevrank(rankType, 1);
    console.log(ret);
    ret = await gameRedis.zrank(rankType, 1);
    console.log(ret);

    for (let i = 0; i < 200; i++) {
        await gameRedis.zrem(rankType, i + 1);
    }
}

main();