import {RoleModel} from "./role_model";
import {S2C} from "../../proto/cmd";
import {Log} from "../../../lib/util/log";
import {Role} from "./role";
import {modelField} from "../../../lib/util/descriptor";

const MAX_SLOT_SIZE = 5;

export class BattleModel extends RoleModel {
    @modelField() private _battleSlot: { [idx: number]: number } = {};

    constructor(role: Role, key: string) {
        super(role, key);
    }

    serialize(): string {
        return JSON.stringify(this.fields);
    }

    deserialize(data) {
        this._battleSlot = JSON.parse(data);
    }

    serializeInitNetMsg() {
        let pck = S2C.SC_INIT_BATTLE_INFO.create();
        pck.slotInfo = this._battleSlot;
        return pck;
    }

    getBattleSlot() {
        return this._battleSlot;
    }

    setBattleSlot(idx, heroUid): boolean {
        if (idx >= MAX_SLOT_SIZE) {
            return false;
        }
        this._battleSlot[idx] = heroUid;
        this.makeDirty();
    }
}