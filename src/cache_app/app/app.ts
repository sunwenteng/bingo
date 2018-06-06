import {Log} from "../../lib/util/log";
import {RedisMgr, RedisType} from "../../lib/redis/redis_mgr";
import {Role, RoleRedisPrefix} from "../../game_app/app/role";
import * as WorldDB from '../../lib/mysql/world_db';
import {WorldDataRedisKey} from "../../game_app/app/world";

const Config = require('../../../config/config.json');
Log.init(__dirname + Config.log.dir, Config.log.level);
let roleRedis = RedisMgr.getInstance(RedisType.GAME);

async function main() {
    await WorldDB.init(Config['mysql']['game_db']);

    process.on("SIGINT", async () => {
        clearTimeout(timer);
        roleRedis.close();
        await WorldDB.shutDownDB();
    });

    let timer;

    function update() {
        timer = setTimeout(async () => {
            let role;
            let roleKeys = await roleRedis.smembers(WorldDataRedisKey.DIRTY_ROLES);
            if (roleKeys.length > 0) {
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
                    roleRedis.srem(WorldDataRedisKey.DIRTY_ROLES, roleKey).then(update);
                }
            }
            else {
                update();
            }

        }, Config['app']['cache']['saveInterval']);
    }

    update();
}

main();