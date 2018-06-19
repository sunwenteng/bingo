import {Log} from "../lib/util/log";
import * as WorldDB from "../lib/mysql/world_db";
import {World} from "./world";
import {isServerValid, Server} from "../lib/net/ws/web_socket";
import {PlayerSession} from "./player_session";
import {RedisMgr, RedisType} from "../lib/redis/redis_mgr";
import {ConfigMgr} from "../config/data/config_struct";

async function main() {
    const Config = require('../config/config.json');
    Log.init(__dirname + '/' + Config.log.dir, Config.log.level);

    ConfigMgr.getInstance().loadAllConfig(__dirname + '/' + Config['app']['game']['config']);

    await WorldDB.start(Config['mysql']['game_db']);
    await World.getInstance().start();

    let server = new Server(Config['app']['game']['host'], parseInt(Config['app']['game']['port']));
    await server.start(PlayerSession);

    process.on("SIGINT", async () => {
        await server.stop();
        await World.getInstance().stop();
        process.nextTick(async ()=> {
            await RedisMgr.getInstance(RedisType.GAME).stop();
            await WorldDB.stop();
            process.exit(0);
        });
    });

    function update(time) {
        if (!isServerValid) {
            return;
        }

        let start =  Date.now();
        setTimeout(() => {
            World.getInstance().update().then(() => {
                let cost = Date.now() - start;
                update(cost > 100 ? 10 : 100);
            });
        }, time)
    }

    update(100);
}

main().then(() => {
    if (process.env.INSTANCE_ID) {
        process.send('ready')
    }
});