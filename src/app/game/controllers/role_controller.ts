import {C2S, S2C} from "../../proto/cmd";
import {GameSession} from "../game_session";
import {Role} from "../modles/role";
import {RedisMgr, RedisType} from "../../../lib/redis/redis_mgr";
import {GameWorld} from "../game_world";
import {Log} from "../../../lib/util/log";
import {controller} from "../../../lib/util/descriptor";
import Time = require('../../../lib/util/time');

let gameRedis = RedisMgr.getInstance(RedisType.GAME);

export class RoleController {
    private static _instance: RoleController;

    public static getInstance(): RoleController {
        if (!this._instance) {
            this._instance = new RoleController();
        }
        return this._instance;
    }

    async online(session: GameSession, msg: C2S.CS_ROLE_ONLINE) {
        let roleId = parseInt(msg.passport);
        let role = new Role(roleId);
        await gameRedis.lock(role.getRedisKey(), async () => {
            let isOnline = await GameWorld.getInstance().isRoleOnline(roleId);
            if (isOnline) {
                await GameWorld.getInstance().kickRole(roleId);
            }
            let exist = await role.load(false);
            if (!exist) {
                await role.create();
                await role.save(true);
            }
            session.roleId = roleId;
            await session.online();

            // start TODO
            // end TODO

            let pck = S2C.SC_ROLE_ONLINE.create();
            pck.roleId = roleId;
            session.sendProtocol(pck);

            role.lastAliveTime = Time.realNow();
            role.lastLoginTime = Time.realNow();
            await role.save();
        });
    }

    @controller()
    async heartBeat(role: Role, msg: C2S.CS_ROLE_HEART_BEAT) {
        role.diamond = role.diamond + 1;
        role.lastAliveTime = Time.realNow();
        let pck = S2C.SC_ROLE_HEART_BEAT.create();
        role.sendProtocol(pck);
    }
}
