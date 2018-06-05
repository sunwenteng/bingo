import {Log} from "../util/log";
import {RedisMgr, RedisType} from "../redis/redis_mgr";
import {Role, RoleRedisPrefix} from "../game_app/role";
import * as WorldDB from '../mysql/world_db';
import {WorldDataRedisKey} from "../game_app/world";

const Config = require('../../config/config.json');
Log.init(__dirname + Config.log.dir, Config.log.level);
let roleRedis = RedisMgr.getInstance(RedisType.GAME);

// 每分钟刷新脏数据到db
WorldDB.init(Config.mysql.game_db).then(() => {
    setInterval(async () => {
        let role;
        let roleKeys = await roleRedis.smembers(WorldDataRedisKey.DIRTY_ROLES);
        for (let roleKey of roleKeys) {
            role = new Role(parseInt(roleKey.substring(RoleRedisPrefix.length + 1)));
            let reply = await roleRedis.hmget(role.getRedisKey(), role.getDataFields());
            if (Object.keys(reply).length !== 0) {
                await WorldDB.conn.execute('update player_info_' + role.getTableNum() + ' set ? where ?', [role.getSaveData(true), {uid: role.data.uid}]);
                Log.sInfo('save role successfully, roleKey=%s', roleKey);
            }
            else {
                Log.sWarn('role not found in cache, roleKey=%s', roleKey);
            }
            await roleRedis.srem(WorldDataRedisKey.DIRTY_ROLES, roleKey);
        }
    }, 1 * 60 * 1000);
});
