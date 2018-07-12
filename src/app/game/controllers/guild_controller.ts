import {C2S, S2C} from "../../proto/cmd";
import {Role} from "../modles/role";
import {controller} from "../../../lib/util/descriptor";
import {GameWorld} from "../game_world";
import {Log} from "../../../lib/util/log";
import * as WorldDB from "../../../lib/mysql/world_db";
import {RedisMgr, RedisType} from "../../../lib/redis/redis_mgr";
import {EGuildTilte, Guild} from "../modles/guild";

let gameRedis = RedisMgr.getInstance(RedisType.GAME);

export class GuildController {
    public static instance = new GuildController();

    @controller()
    async create(role: Role, msg: C2S.CS_GUILD_CREATE) {
        let guild = new Guild(msg.guildName, msg.iconId);
        guild.uid = 1;
        let exist = await guild.load();
        if (exist) {
            console.log('no');
        }

        guild.addMember(role.uid, EGuildTilte.owner);
        await guild.create();
        await guild.save(true);
        role.guildId = guild.uid;
        role.sendProtocol(S2C.SC_GUILD_CREATE.create());

        exist = await guild.load();
        if (exist) {
            console.log('yes');
        }
    }
}