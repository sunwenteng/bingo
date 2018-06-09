import {Log} from "../lib/util/log";
import {RedisDB, RedisMgr, RedisType} from "../lib/redis/redis_mgr";
import {execTime} from "../lib/util/descriptor";
import {Role} from "../game_app/role";
import * as WorldDB from '../lib/mysql/world_db';

const Config = require('../../config/config.json');
Log.init(__dirname + Config.log.dir, Config.log.level);

class Test {

    @execTime()
    async test() {
        // Log.sInfo('ret=' + await RedisMgr.getInstance(RedisType.GAME).dbsize(RedisDB.RoleDB));
        // await RedisMgr.getInstance(RedisType.GAME).set("1", "1");
        Log.sInfo('start................');
        for (let i = 1; i <= 100; i++) {
            // let o = await RedisMgr.getInstance(RedisType.GAME).hmget('role_1', ['gold']);
            // if (parseInt(o.gold) > 0) {
            //     o.gold = parseInt(o.gold) - 1;
            // }
            // await RedisMgr.getInstance(RedisType.GAME).hmset('role_1', o);
            // await RedisMgr.getInstance(RedisType.GAME).hincrby('role_1', 'gold', i);
            RedisMgr.getInstance(RedisType.GAME).hsetnx('role_2', 'uid', i).then((ret) => console.log(ret + '   ' + i));
        }
        Log.sInfo('end................');
        // RedisMgr.getInstance(RedisType.GAME).hmset('role_1', {book: JSON.stringify({"ok": "ok"})});
        // Log.sInfo('ret=' + await RedisMgr.getInstance(RedisType.GAME).hmget('role_1', 'a'));
    }

    @execTime()
    async testLock() {
    }

    @execTime()
    async testRole() {
        await WorldDB.init(Config.mysql.game_db);
        for (let i = 1; i <= 10000; i++) {
            let role = new Role(i);
            let exist = await role.load();
            if (!exist) {
                await role.create();
                role.set({
                    nickname: 'robot' + i,
                    headimgurl: 'headimgurl ' + i,
                    diamond: Math.floor(Math.random() * 10000),
                    exp: Math.floor(Math.random() * 10000),
                    gold: Math.floor(Math.random() * 10000),
                    level: Math.floor(Math.random() * 10000),
                });
                await role.save(true, false);
            }
        }
    }
}

let t = new Test();
t.testRole();

