import {BaseModel} from "./base_model";
import {S2C} from "../../proto/cmd";
import {Log} from "../../../lib/util/log";

export const MAX_EQUIP_BAG_SIZE = 400;

export interface IEquip {
    uid: number;
    id: number;
    lvl: number;
    rank: number;
    star: number;
}

export class EquipModel extends BaseModel {
    equips: { [uid: number]: IEquip } = {};
    maxUid: number = 0;

    constructor() {
        super();
    }

    serializeInitNetMsg() {
        let pck = S2C.SC_INIT_EQUIP.create(), msg;
        for (let uid in this.equips) {
            msg = S2C.Equip.create();
            EquipModel.serializeEquipNetMsg(msg, this.equips[uid]);
            pck.equips[uid] = msg;
        }
        return pck;
    }

    static serializeEquipNetMsg(msg: S2C.Equip, equip: IEquip) {
        for (let k in msg) {
            if (!equip.hasOwnProperty(k)) {
                if (k !== 'constructor' && k !== '$type' && k != 'toJSON')
                    Log.sError('SC_UPDATE_EQUIP %s not exist in role data', k);
                continue;
            }
            msg[k] = equip[k];
        }
    }

    createEquip(equipId: number): IEquip {
        if (this.getEquipBagSize() >= MAX_EQUIP_BAG_SIZE) {
            return null;
        }

        return {
            id: equipId,
            uid: 0,
            lvl: 0,
            rank: 0,
            star: 0
        };
    }

    addEquip(equip: IEquip) {
        equip.uid = ++this.maxUid;
        this.equips[equip.uid] = equip;
    }

    createAndAddEquip(equipId: number): IEquip {
        let equip = this.createEquip(equipId);
        if (!equip)
            return null;
        this.addEquip(equip);
        return equip;
    }

    deleteEquip(uid: number) {
        delete this.equips[uid];
    }

    getEquip(uid): IEquip {
        return this.equips[uid];
    }

    getEquipBagSize(): number {
        return Object.keys(this.equips).length;
    }
}