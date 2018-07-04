import {BaseModel} from "./base_model";
import {S2C} from "../../proto/cmd";
import {Log} from "../../../lib/util/log";
import {Role} from "./role";
import {modelField} from "../../../lib/util/descriptor";
import {EResUseType} from "./defines";

export const MAX_EQUIP_BAG_SIZE = 200;

export class Equip {
    uid: number = 0;
    id: number = 0;
    lvl: number = 0;
    rank: number = 0;
    star: number = 0;
    isRaw: boolean = true;

    constructor(id?) {
        if (id)
            this.id = id;
    }
}

export class EquipModel extends BaseModel {
    @modelField() private _equips: { [uid: number]: Equip } = {};
    @modelField() maxUid: number = 0;

    constructor(role: Role, key: string) {
        super(role, key);
    }

    serialize(): string {
        return JSON.stringify(this.fields);
    }

    deserialize(data) {
        let o = JSON.parse(data);
        for (let k in o) {
            if (k == '_equips') {
                for (let uid in o[k]) {
                    let equip = new Equip();
                    for (let pro in o[k][uid]) {
                        equip[pro] = o[k][uid][pro];
                    }
                    this._equips[uid] = equip;
                }
            }
            else {
                this['fields'][k] = o[k];
            }
        }
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

    serializeEquipNetMsg(msg: S2C.Equip, equip: Equip) {
        for (let k in msg) {
            if (!equip.hasOwnProperty(k)) {
                if (k !== 'constructor' && k !== '$type' && k != 'toJSON')
                    Log.sError('SC_UPDATE_EQUIP %s not exist in role data', k);
                continue;
            }
            msg[k] = equip[k];
        }
    }

    private createEquip(equipId: number): Equip {
        if (this.getEquipBagSize() >= MAX_EQUIP_BAG_SIZE) {
            return null;
        }

        return new Equip(equipId);
    }

    private addEquip(equip: Equip) {
        equip.uid = ++this.maxUid;
        this._equips[equip.uid] = equip;
    }

    sendEquipUpdateProtocol(equip: Equip) {
        let msg = S2C.SC_UPDATE_EQUIP.create();
        let equipMsg = S2C.Equip.create();
        this.serializeEquipNetMsg(equipMsg, equip);
        msg.equips[equip.uid] = equipMsg;
        this.m_Role.sendProtocol(msg);
    }

    createAndAddEquip(equipId: number, type: EResUseType, bSend2Client: boolean = true): Equip {
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
        Log.uInfo(this.m_Role.uid, 'useType=%d, id=%d', type, equipId);
        return equip;
    }

    removeEquip(uid, type: EResUseType, bSend2Client: boolean = true) {
        if (bSend2Client) {
            let msg = S2C.SC_UPDATE_EQUIP.create();
            msg.equips[-uid] = S2C.Equip.create();
            this.m_Role.sendProtocol(msg);
        }
        delete this._equips[uid];
        this.makeDirty();
        Log.uInfo(this.m_Role.uid, 'useType=%d, uid=%d', type, uid);
    }

    getEquip(uid, bReadonly: boolean): Equip {
        if (!bReadonly) {
            this.makeDirty();
        }
        return this._equips[uid];
    }

    getAllEquip(bReadonly: boolean): { [uid: number]: Equip } {
        if (!bReadonly) {
            this.makeDirty();
        }
        return this._equips;
    }

    getEquipBagSize(): number {
        return Object.keys(this._equips).length;
    }

    isEquipEnough(id, count): boolean {
        let equips = this.getAllEquip(true);
        let findCnt = 0, equip: Equip = null;
        for (let uid in equips) {
            equip = equips[uid];
            if (equip.id === id && equip.isRaw && ++findCnt > count) {
                return true;
            }
        }
        return false;
    }

}