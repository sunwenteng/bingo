import {Log} from "../lib/util/log";
import * as WorldDB from "../lib/mysql/world_db";
import {World} from "./world";
import {Server} from "../lib/net/ws/web_socket";
import {PlayerSession} from "./player_session";
import {clearTimeout} from "timers";
import {RedisMgr, RedisType} from "../lib/redis/redis_mgr";

const Config = require('../../config/config.json');
Log.init(__dirname + Config.log.dir, Config.log.level);

async function main() {
    await WorldDB.init(Config['mysql']['game_db']);
    RedisMgr.getInstance(RedisType.GAME).close();
    World.getInstance().init();
    await World.getInstance().initControllers();

    let server = new Server(Config['app']['game']['host'], process.argv.length >= 3 ? parseInt(process.argv[2]) : parseInt(Config['app']['game']['port']));
    await server.start(PlayerSession);

    process.on("SIGINT", async () => {
        clearTimeout(timer);
        await World.getInstance().update();
        await server.close();
        await World.getInstance().saveControllers();
        // TODO 注册redis链接关闭
        await WorldDB.shutDownDB();
        process.exit(0);
    });

    let timer;

    function update() {
        timer = setTimeout(() => {
            World.getInstance().update().then(update);
        }, 100)
    }

    update();
}

main().then(() => process.send('ready'));