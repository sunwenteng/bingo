import {C2S, S2C} from "../../proto/cmd";
import {PlayerSession} from "../player_session";

export async function echo(sesson: PlayerSession, msg: C2S.CS_TEST_ECHO) {
    let ret = S2C.Message.create({
        SC_TEST_ECHO: {
            cmdId: 1,
            msg: msg.name + ' is reply'
        }
    });
    sesson.m_socket.sendProtocol(ret);
}