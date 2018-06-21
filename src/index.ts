import {RedisMgr, RedisType} from "./lib/redis/redis_mgr";
import {Log} from "./lib/util/log";
import * as events from "events";

class Test extends events.EventEmitter{
    constructor() {
        super();
        this.on('message', (channel ,message)=>{
            Log.sInfo("sub channel " + channel + ": " + message);
        });
    }
}

async function main() {
    let t = new Test();
    const Config = require('./config/config.json');
    Log.init(__dirname + '/' + Config.log.dir, Config.log.level);
    // await RedisMgr.getInstance(RedisType.GAME).subscribe(['test', 'fuck']);
    await RedisMgr.getInstance(RedisType.GAME).subscribe(['test'], t);
    await RedisMgr.getInstance(RedisType.GAME).pubsub('numsub', 'test');
    await RedisMgr.getInstance(RedisType.GAME).subscribe(['fuck'], t);
    await RedisMgr.getInstance(RedisType.GAME).pubsub('numsub', 'fuck');
    await RedisMgr.getInstance(RedisType.GAME).unsubscribe(['fuck']);
    await RedisMgr.getInstance(RedisType.GAME).pubsub('numsub', 'fuck');
    await RedisMgr.getInstance(RedisType.GAME).publish('test', 'test');
    await RedisMgr.getInstance(RedisType.GAME).publish('fuck', 'fuck');
}

main().then(() => console.log('done'));