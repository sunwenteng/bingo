import {RoleModel} from "./role_model";
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
        if (id) {
            this.id = id;
        }
    }

    serializeNetMsg(msg: S2C.Equip) {
        for (let k in msg) {
            if (!this.hasOwnProperty(k)) {
                if (k !== 'constructor' && k !== '$type' && k !== 'toJSON') {
                    Log.sError('SC_UPDATE_EQUIP %s not exist in role data', k);
                }
                continue;
            }
            msg[k] = this[k];
        }
    }

}

export class EquipModel extends RoleModel {
    @modelField() private _equips: { [uid: number]: Equip } = {};
    private _maxUid: number = 0;

    constructor(role: Role, key: string) {
        super(role, key);
    }

    serialize(): string {
        return JSON.stringify(this.fields);
    }

    deserialize(data) {
        let o = JSON.parse(data), t = 0;
        for (let k in o) {
            if (k === '_equips') {
                for (let uid in o[k]) {
                    let equip = new Equip();
                    for (let pro in o[k][uid]) {
                        equip[pro] = o[k][uid][pro];
                    }
                    this._equips[uid] = equip;
                    t = parseInt(uid);
                    this._maxUid = t > this._maxUid ? t : this._maxUid;
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
            this._equips[uid].serializeNetMsg(msg);
            pck.equips[uid] = msg;
        }
        return pck;
    }

    private createEquip(equipId: number): Equip {
        if (this.getEquipBagSize() >= MAX_EQUIP_BAG_SIZE) {
            return null;
        }

        return new Equip(equipId);
    }

    private addEquip(equip: Equip): boolean {
        equip.uid = ++this._maxUid;
        if (this._equips.hasOwnProperty(equip.uid)) {
            Log.sInfo('equipModel maxUid, error, maxUid=%d, uid=%d', this._maxUid, equip.uid);
            return false;
        }
        this._equips[equip.uid] = equip;
        return true;
    }

    sendEquipUpdateProtocol(equip: Equip) {
        let msg = S2C.SC_UPDATE_EQUIP.create();
        let equipMsg = S2C.Equip.create();
        equip.serializeNetMsg(equipMsg);
        msg.equips[equip.uid] = equipMsg;
        this.role.sendProtocol(msg);
    }

    createAndAddEquip(equipId: number, type: EResUseType, bSend2Client: boolean = true): Equip {
        let equip = this.createEquip(equipId);
        if (!equip) {
            return null;
        }
        if (!this.addEquip(equip)) {
            return null;
        }
        if (bSend2Client) {
            let msg = S2C.SC_UPDATE_EQUIP.create();
            let equipMsg = S2C.Equip.create();
            equip.serializeNetMsg(equipMsg);
            msg.equips[equip.uid] = equipMsg;
            this.role.sendProtocol(msg);
        }
        Log.uInfo(this.role.uid, 'useType=%d, id=%d, uid=%d, maxUid=%d', type, equipId, equip.uid, this._maxUid);
        return equip;
    }

    removeEquip(uid, type: EResUseType, bSend2Client: boolean = true): boolean {
        if (!this._equips.hasOwnProperty(uid)) {
            Log.sInfo('equipModel maxUid, uid=%d', uid);
            return false;
        }
        if (bSend2Client) {
            let msg = S2C.SC_UPDATE_EQUIP.create();
            msg.equips[-uid] = S2C.Equip.create();
            this.role.sendProtocol(msg);
        }
        delete this._equips[uid];
        this.makeDirty();
        Log.uInfo(this.role.uid, 'useType=%d, uid=%d', type, uid);
        return true;
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

    getEquipUidsById(id: number, count: number): number[] {
        let ret = [];
        if (!count) {
            return ret;
        }
        let equips = this.getAllEquip(true);
        let equip: Equip = null;
        for (let uid in equips) {
            equip = equips[uid];
            if (equip.id === id && equip.isRaw) {
                ret.push(equip.uid);
                if (ret.length >= count) {
                    break;
                }
            }
        }
        return ret;
    }

}