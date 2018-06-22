import {C2S, S2C} from "../proto/cmd";
import {PlayerSession} from "../player_session";
import {Role} from "../role";

export async function online(session: PlayerSession, msg: C2S.CS_ROLE_ONLINE) {
    let roleId = parseInt(msg.passport);
    let role = new Role(roleId);
    let exist = await role.load();
    if (!exist) {
        await role.create();
    }
    role.set({
        nickname: 'mod_robot' + roleId,
        headimgurl: 'mod_headimgurl ' + roleId,
        diamond: Math.floor(Math.random() * 10000),
        exp: Math.floor(Math.random() * 10000),
        gold: Math.floor(Math.random() * 10000),
        level: Math.floor(Math.random() * 10000),
    });
    session.roleId = roleId;
    await session.online();
    await role.save(true, false);
    session.sendProtocol(
        S2C.Message.create({
            SC_ROLE_ONLINE: {
                roleId: roleId
            }
        })
    );

    if (roleId % 10 === 0) {
        setTimeout(()=>{
            role.sendMsgToAll(S2C.Message.create({
                SC_TEST_ECHO: {
                    msg: '10 say broadcast'
                }
            }));
        }, 10000);
    }
    else if (roleId % 9 === 1) {
        setTimeout(()=>{
            role.sendMsgToRole(1, S2C.Message.create({
                SC_TEST_ECHO: {
                    msg: '9to1 say fuck'
                }
            }));
        }, 5000);
    }
}

export async function heartBeat(sesson: PlayerSession, msg: C2S.CS_ROLE_HEART_BEAT) {

}