import {C2S, S2C} from "../proto/cmd";
import {GameSession} from "../game_session";
import {Role} from "../role";
import {RedisMgr, RedisType} from "../../lib/redis/redis_mgr";
import {World} from "../world";
import {Log} from "../../lib/util/log";

let gameRedis = RedisMgr.getInstance(RedisType.GAME);

export async function online(session: GameSession, msg: C2S.CS_ROLE_ONLINE) {
    if (session.roleId !== 0) {
        Log.sError('already send online packet');
        return;
    }
    let roleId = parseInt(msg.passport);
    let role = new Role(roleId);
    await gameRedis.lock(role.getRedisKey(), async () => {
        let isOnline = await World.getInstance().isRoleOnline(roleId);
        if (isOnline) {
            await World.getInstance().kickRole(roleId);
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

        session.sendProtocol(
            S2C.Message.create({
                SC_ROLE_ONLINE: {
                    roleId: roleId
                }
            })
        );
    });
}

export async function heartBeat(session: GameSession, msg: C2S.CS_ROLE_HEART_BEAT) {
    let role = new Role(session.roleId);
    await gameRedis.lock(role.getRedisKey(), async () => {
        role.set({
            diamond: role.data.diamond + 1,
        });

        await role.save();

        session.sendProtocol(
            S2C.Message.create({
                SC_ROLE_HEART_BEAT: {}
            })
        );

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