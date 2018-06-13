import {C2S, S2C} from "../proto/cmd";
import {PlayerSession} from "../player_session";
import {Role} from "../role";

export async function online(sesson: PlayerSession, msg: C2S.CS_ROLE_ONLINE) {
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
    await role.save(true, false);
    sesson.sendProtocol(
        S2C.Message.create({
            SC_ROLE_ONLINE: {
                roleId: roleId
            }
        })
    );
}

export async function heartBeat(sesson: PlayerSession, msg: C2S.CS_ROLE_HEART_BEAT) {

}