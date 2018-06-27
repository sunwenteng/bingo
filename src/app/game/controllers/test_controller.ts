import {C2S, S2C} from "../../proto/cmd";
import {Role} from "../modles/role";
import {controller} from "../../../lib/util/descriptor";

export class TestController {
    private static _instance: TestController;

    public static getInstance(): TestController {
        if (!this._instance) {
            this._instance = new TestController();
        }
        return this._instance;
    }

    @controller()
    echo(role: Role, msg: C2S.CS_TEST_ECHO) {
        let pck = S2C.SC_TEST_ECHO.create();
        pck.msg = '';
        pck.cmdId = 1;
        role.sendProtocol(pck);
    }

    @controller(true)
    async readAndWrite(role: Role, msg: C2S.CS_TEST_ECHO) {

    }

    @controller()
    async readonly(role: Role, msg: C2S.CS_TEST_ECHO) {

    }
}