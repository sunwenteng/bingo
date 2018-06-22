import {Log} from "../lib/util/log";
import {RedisMgr, RedisType} from "../lib/redis/redis_mgr";
import {Role, RoleRedisPrefix} from "../game_app/role";
import * as WorldDB from '../lib/mysql/world_db';
import {WorldDataRedisKey} from "../game_app/world";

let isAppValid = true;

async function main() {
    const Config = require('../config/config.json');
    Log.init(__dirname + '/' + Config.log.dir, Config.log.level);
    let roleRedis = RedisMgr.getInstance(RedisType.GAME);

    await WorldDB.start(Config['mysql']['game_db']);

    process.on('uncaughtException', (error => {
        Log.sError(error);
    }));

    process.on("SIGINT", async () => {
        isAppValid = false;
        await stop();
        process.nextTick(async ()=>{
            await roleRedis.stop();
            await WorldDB.stop();
            process.exit(0);
        });
    });

    let isSaving = false;

    async function save() {
        isSaving = true;
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
        isSaving = false;
    }

    function stop() {
        return new Promise<void>(((resolve, reject) => {
            if (isSaving) {
                setTimeout(() => {
                    stop().then(resolve);
                }, 100);
            }
            else {
                resolve();
            }
        }));
    }

    let timer;

    function update() {
        if (!isAppValid) {
            return;
        }
        timer = setTimeout(async () => {
            save().then(update).catch((reason => {
                Log.sError(reason);
                update();
            }));
        }, Config['app']['cache']['saveInterval']);
    }

    update();
}

main().then(() => {
    if (process.env.INSTANCE_ID) {
        process.send('ready')
    }
});