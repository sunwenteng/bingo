import {Log} from "../../lib/util/log";
import * as LoginDB from "../../lib/mysql/login_db";
import {LoginWorld} from "./login_world";
import {isServerValid, Server} from "../../lib/net/ws/web_socket";
import {LoginSession} from "./login_session";
import {RedisMgr, RedisType} from "../../lib/redis/redis_mgr";

async function main() {
    const Config = require('../../config/config.json');
    Log.init(__dirname + '/' + Config.log.dir, Config.log.level);

    await LoginDB.start(Config['mysql']['login_db']);
    await LoginWorld.instance.start();

    let server = new Server(Config['app']['login']['host'], parseInt(Config['app']['login']['port']));
    await server.start(LoginSession);

    process.on('uncaughtException', (error => {
        Log.sError(error);
    }));

    process.on("SIGINT", async () => {
        await server.stop();
        await LoginWorld.instance.stop();
        process.nextTick(async () => {
            await RedisMgr.getInstance(RedisType.GAME).stop();
            await LoginDB.stop();
            process.exit(0);
        });
    });

    function update(time) {
        if (!isServerValid) {
            return;
        }

        let start = Date.now();
        setTimeout(() => {
            LoginWorld.instance.update().then(() => {
                let cost = Date.now() - start;
                update(cost > 100 ? 10 : 100);
            }).catch((reason => {
                Log.sError(reason);
                update(100);
            }));
        }, time)
    }

    update(100);
}

main().then(() => {
    if (process.env.INSTANCE_ID) {
        process.send('ready')
    }
});