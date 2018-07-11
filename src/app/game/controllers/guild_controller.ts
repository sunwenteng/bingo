import {C2S, S2C} from "../../proto/cmd";
import {Role} from "../modles/role";
import {controller} from "../../../lib/util/descriptor";
import {GameWorld} from "../game_world";
import {Log} from "../../../lib/util/log";
import * as WorldDB from "../../../lib/mysql/world_db";
import {RedisMgr, RedisType} from "../../../lib/redis/redis_mgr";

let gameRedis = RedisMgr.getInstance(RedisType.GAME);

export class GuildController {
    public static instance = new GuildController();

    async loadData(serverId: number) {
        await gameRedis.lock('guild_load', async (hasLock: boolean) => {
            if (hasLock) {
                let redisKey = this.getGuildDataRedisKey(serverId);
                let data = await gameRedis.get(redisKey);
                if (!data) {
                    let ret = await WorldDB.conn.execute('select * from guild where serverId=?',
                        [serverId]);
                    for (let i = 0; i < ret.length; ++i) {

                    }
                }
            }
        }, false);
    }

    async saveData(serverId: number) {
        await gameRedis.lock('guild_save', async (hasLock: boolean) => {
            if (hasLock) {
            }
        }, false);
    }

    private getGuildDataRedisKey(serverId: number): string {
        return 'guild_data_' + serverId;
    }
}