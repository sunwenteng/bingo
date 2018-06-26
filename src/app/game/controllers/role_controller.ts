import {C2S, S2C} from "../../proto/cmd";
import {GameSession} from "../game_session";
import {Role} from "../role";
import {RedisMgr, RedisType} from "../../../lib/redis/redis_mgr";
import {GameWorld} from "../game_world";
import {Log} from "../../../lib/util/log";

let gameRedis = RedisMgr.getInstance(RedisType.GAME);

export async function online(session: GameSession, msg: C2S.CS_ROLE_ONLINE) {
    if (session.roleId !== 0) {
        Log.sError('already send online packet');
        return;
    }
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

export async function heartBeat(session: GameSession, msg: C2S.CS_ROLE_HEART_BEAT) {
    let role = new Role(session.roleId, session);
    await gameRedis.lock(role.getRedisKey(), async () => {
        role.set({
            diamond: role.data.diamond + 1,
        });

        await role.save();

        let pck = S2C.SC_ROLE_HEART_BEAT.create();
        role.sendProtocol(pck);

        // if (roleId % 10 === 0) {
        //     setTimeout(()=>{
        //         role.sendMsgToAll(S2C.Message.create({
        //             SC_TEST_ECHO: {
        //                 msg: '10 say broadcast'
        //             }
        //         }));
        //     }, 10000);
        // }
        // else if (roleId % 9 === 1) {
        //     setTimeout(()=>{
        //         role.sendMsgToRole(1, S2C.Message.create({
        //             SC_TEST_ECHO: {
        //                 msg: '9to1 say fuck'
        //             }
        //         }));
        //     }, 5000);
        // }
    });
}