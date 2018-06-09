import {RedisMgr, RedisType} from "./lib/redis/redis_mgr";
import {Log} from "./lib/util/log";

Log.init();
let roleRedis = RedisMgr.getInstance(RedisType.GAME);
for (let i = 0; i < 100; i++) {
    roleRedis.lock('a', async () => {
        let a = await roleRedis.get('a');
        await roleRedis.set('a', parseInt(a) + 1);
    });
}