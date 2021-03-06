import {Log} from "../../lib/util/log";
import * as WorldDB from "../../lib/mysql/world_db";
import * as LoginDB from "../../lib/mysql/login_db";
import {GameWorld} from "./game_world";
import {isServerValid, Server} from "../../lib/net/ws/web_socket";
import {GameSession} from "./game_session";
import {RedisMgr, RedisType} from "../../lib/redis/redis_mgr";
import {ConfigMgr} from "../../config/data/config_struct";

async function main() {
    if (process.env.NODE_ENV === "development") {
        const easyMonitor = require("easy-monitor");
        easyMonitor("game-app");
    }

    const config = require('../../config/config.json');
    Log.init(__dirname + '/' + config.log.dir, config.log.level);

    ConfigMgr.getInstance().loadAllConfig(__dirname + '/' + config['app']['game']['config']);

    await WorldDB.start(config['mysql']['game_db']);
    await LoginDB.start(config['mysql']['login_db']);
    await GameWorld.instance.start();

    let server = new Server(config['app']['game']['host'], parseInt(config['app']['game']['port']));
    await server.start(GameSession);

    process.on('uncaughtException', (error => {
        Log.sError(error);
        process.exit(1);
    }));

    process.on("SIGINT", async () => {
        await server.stop();
        await GameWorld.instance.stop();
        process.nextTick(async () => {
            await RedisMgr.getInstance(RedisType.GAME).stop();
            await WorldDB.stop();
            process.exit(0);
        });
    });

    function update(time) {
        if (!isServerValid) {
            return;
        }

        let start = Date.now();
        setTimeout(() => {
            GameWorld.instance.update().then(() => {
                let cost = Date.now() - start;
                update(cost > 100 ? 10 : 100);
            }).catch((reason => {
                Log.sError(reason);
                process.exit(1);
            }));
        }, time);
    }

    update(100);
}

main().then(() => {
    if (process.env.INSTANCE_ID) {
        process.send('ready');
    }
});