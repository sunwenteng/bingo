import {C2S, S2C} from "../proto/cmd";
import {GameSession} from "../game_session";

export async function echo(session: GameSession, msg: C2S.CS_TEST_ECHO):Promise<void> {
    let ret = S2C.Message.create({
        SC_TEST_ECHO: {
            cmdId: 1,
            msg: msg.b.toString()
        }
    });
    session.sendProtocol(ret);

    // return new Promise<void>((resolve => {
    //     setTimeout(()=>{
    //         resolve();
    //     }, 10)
    // }))
}