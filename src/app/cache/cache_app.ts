import {Log} from "../../lib/util/log";
import {RedisMgr, RedisType} from "../../lib/redis/redis_mgr";
import {Role} from "../game/modles/role";
import * as WorldDB from '../../lib/mysql/world_db';
import {WorldDataRedisKey} from "../game/game_world";
import {RankController} from "../game/controllers/rank_controller";
import * as LoginDB from "../../lib/mysql/login_db";

let isAppValid = true;

async function main() {
    const config = require('../../config/config.json');
    Log.init(__dirname + '/' + config.log.dir, config.log.level);
    let gameRedis = RedisMgr.getInstance(RedisType.GAME);

    await WorldDB.start(config['mysql']['game_db']);
    await LoginDB.start(config['mysql']['login_db']);

    process.on('uncaughtException', (error => {
        Log.sError(error);
        process.exit(1);
    }));

    process.on("SIGINT", async () => {
        isAppValid = false;
        await stop();
        process.nextTick(async () => {
            await gameRedis.stop();
            await WorldDB.stop();
            await LoginDB.stop();
            process.exit(0);
        });
    });

    let isSaving = false;

    async function save() {
        Log.sInfo('start saving dirty roles from redis to mysql');
        isSaving = true;
        let role: Role = null;
        let roleIds = await gameRedis.smembers(WorldDataRedisKey.DIRTY_ROLES);
        for (let roleId of roleIds) {
            role = new Role(parseInt(roleId));
            await gameRedis.lock(Role.getRedisKey(role.uid), async () => {
                let exist = await role.load();
                if (!exist) {
                    Log.sWarn('role not found in cache, roleKey=%s', roleId);
                }
                else {
                    await WorldDB.conn.execute('update player_info_' + role.getTableNum() + ' set ? where ?', [role.serialize(true), {uid: role.uid}]);
                    Log.sInfo('save role successfully, roleKey=%s', roleId);
                }
                await gameRedis.srem(WorldDataRedisKey.DIRTY_ROLES, roleId);
            });
        }
        isSaving = false;
        Log.sInfo('end saving dirty roles from redis to mysql');

        Log.sInfo('start saving controllers from redis to mysql');
        let result = await LoginDB.conn.execute('select * from gameserver_info');
        for (let server of result) {
            let serverId = server.server_id;
            await RankController.instance.saveData(serverId);
            // todo add other
        }

        Log.sInfo('end saving controllers from redis to mysql');
    }

    function stop() {
        return new Promise<void>(((resolve) => {
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

    function update() {
        if (!isAppValid) {
            return;
        }
        setTimeout(async () => {
            save().then(update).catch((reason => {
                Log.sError(reason);
                process.exit(1);
            }));
        }, config['app']['cache']['saveInterval']);
    }

    save().then(update);
}

main().then(() => {
    if (process.env.INSTANCE_ID) {
        process.send('ready');
    }
});