import {C2S, S2C} from "../../proto/cmd";
import {Role} from "../modles/role";
import {controller} from "../../../lib/util/descriptor";
import Time = require('../../../lib/util/time');
import {GameWorld} from "../game_world";
import {Log} from "../../../lib/util/log";

export class EquipController {
    private static _instance: EquipController;

    public static getInstance(): EquipController {
        if (!this._instance) {
            this._instance = new EquipController();
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

    createEqu
}