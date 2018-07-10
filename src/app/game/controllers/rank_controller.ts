import {C2S, S2C} from "../../proto/cmd";
import {Role} from "../modles/role";
import {controller} from "../../../lib/util/descriptor";
import Time = require('../../../lib/util/time');
import {GameWorld} from "../game_world";
import {Log} from "../../../lib/util/log";

export enum ERankType {
    level = 'level',
    combat = 'combat'
}

export enum ERankSortType {
    asc = 'asc',
    desc = 'desc'
}

export class Rank {

}

export class RankController {
    public static instance = new RankController();

    @controller()
    async getRank(role: Role, msg: C2S.CS_TEST_ECHO) {
        
    }
}