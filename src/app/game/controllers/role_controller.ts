import {C2S, S2C} from "../../proto/cmd";
import {GameSession} from "../game_session";
import {Role} from "../role";
import {RedisMgr, RedisType} from "../../../lib/redis/redis_mgr";
import {GameWorld} from "../game_world";
import {Log} from "../../../lib/util/log";
import {controller} from "../../../lib/util/descriptor";

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
            let exist = await role.load();
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
        });
    }

    @controller(false)
    heartBeat(role: Role, msg: C2S.CS_ROLE_HEART_BEAT) {
        role.set({
            diamond: role.data.diamond + 1,
        });

        let pck = S2C.SC_ROLE_HEART_BEAT.create();
        role.sendProtocol(pck);
    }
}
