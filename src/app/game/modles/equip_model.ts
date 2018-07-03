import {BaseModel} from "./base_model";
import {S2C} from "../../proto/cmd";
import {Log} from "../../../lib/util/log";
import {Role} from "./role";
import {modelField} from "../../../lib/util/descriptor";

export const MAX_EQUIP_BAG_SIZE = 400;

export interface IEquip {
    uid: number;
    id: number;
    lvl: number;
    rank: number;
    star: number;
}

export class EquipModel extends BaseModel {
    @modelField() private _equips: { [uid: number]: IEquip } = {};
    @modelField() maxUid: number = 0;

    constructor(role: Role, key: string) {
        super(role, key);
    }

    serializeInitNetMsg() {
        let pck = S2C.SC_INIT_EQUIP.create(), msg;
        for (let uid in this._equips) {
            msg = S2C.Equip.create();
            this.serializeEquipNetMsg(msg, this._equips[uid]);
            pck.equips[uid] = msg;
        }
        return pck;
    }

    serializeEquipNetMsg(msg: S2C.Equip, equip: IEquip) {
        for (let k in msg) {
            if (!equip.hasOwnProperty(k)) {
                if (k !== 'constructor' && k !== '$type' && k != 'toJSON')
                    Log.sError('SC_UPDATE_EQUIP %s not exist in role data', k);
                continue;
            }
            msg[k] = equip[k];
        }
    }

    private createEquip(equipId: number): IEquip {
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

    private addEquip(equip: IEquip) {
        equip.uid = ++this.maxUid;
        this._equips[equip.uid] = equip;
    }

    sendEquipUpdateProtocol(equip: IEquip) {
        let msg = S2C.SC_UPDATE_EQUIP.create();
        let equipMsg = S2C.Equip.create();
        this.serializeEquipNetMsg(equipMsg, equip);
        msg.equips[equip.uid] = equipMsg;
        this.m_Role.sendProtocol(msg);
    }

    createAndAddEquip(equipId: number, bSend2Client: boolean = true): IEquip {
        let equip = this.createEquip(equipId);
        if (!equip)
            return null;
        this.addEquip(equip);
        if (bSend2Client) {
            let msg = S2C.SC_UPDATE_EQUIP.create();
            let equipMsg = S2C.Equip.create();
            this.serializeEquipNetMsg(equipMsg, equip);
            msg.equips[equip.uid] = equipMsg;
            this.m_Role.sendProtocol(msg);
        }
        return equip;
    }

    deleteEquip(uid, bSend2Client: boolean = true) {
        if (bSend2Client) {
            let msg = S2C.SC_UPDATE_EQUIP.create();
            msg.equips[-uid] = S2C.Equip.create();
            this.m_Role.sendProtocol(msg);
        }
        delete this._equips[uid];
        this.makeDirty();
    }

    getEquip(uid, bReadonly: boolean): IEquip {
        if (!bReadonly) {
            this.makeDirty();
        }
        return this._equips[uid];
    }

    getAllEquip(bReadonly: boolean): { [uid: number]: IEquip } {
        if (!bReadonly) {
            this.makeDirty();
        }
        return this._equips;
    }

    getEquipBagSize(): number {
        return Object.keys(this._equips).length;
    }
}