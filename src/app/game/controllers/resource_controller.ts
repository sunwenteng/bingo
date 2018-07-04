import {S2C} from "../../proto/cmd";
import {Role} from "../modles/role";
import {Log} from "../../../lib/util/log";
import {Reward} from "../modles/reward";
import {EResUseType, ResType} from "../modles/defines";
import {MAX_EQUIP_BAG_SIZE} from "../modles/equip_model";
import {MAX_HERO_BAG_SIZE} from "../modles/hero_model";
import {MAX_ITEM_BAG_SIZE} from "../modles/item_model";

export class ResourceController {
    public static instance = new ResourceController();

    public isResourceEnough(role: Role, id: ResType | string, count: number): boolean {
        if (!role.fields.hasOwnProperty(id)) {
            throw new Error('resType not in role fields, id=' + id);
        }

        return role[id] >= count;
    }

    public isResourceExceed(role: Role, id: ResType | any, count: number) {
        if (!role.fields.hasOwnProperty(id)) {
            throw new Error('resType not in role fields, id=' + id);
        }

        return role[id] + count > Number.MAX_VALUE;
    }

    public addResource(role: Role, id: ResType | any, count: number, type: EResUseType): boolean {
        if (this.isResourceExceed(role, id, count)) {
            Log.uInfo(role.uid, 'resource exceed, id=%s, own=%d, add=%d', id, role[id], count);
            return false;
        }
        role[id] += count;
        Log.uInfo(role.uid, 'id=%s, count=%d', id, count);
        return true;
    }

    public reduceResource(role: Role, id: ResType, count: number, type: EResUseType): boolean {
        if (!this.isResourceEnough(role, id, count)) {
            Log.uInfo(role.uid, 'resource not enough, id=%s, own=%d, req=%d', id, role[id], count);
            return false;
        }

        role[id] -= count;
        Log.uInfo(role.uid, 'id=%s, count=%d', id, count);
        return true;
    }

    public applyReward(role: Role, rwd: Reward, type: EResUseType, bSend2Client: boolean = true): boolean {
        for (let k in rwd) {
            switch (k) {
                case 'equips':
                    if ((role.equipModel.getEquipBagSize() + rwd[k].length) > MAX_EQUIP_BAG_SIZE) {
                        return false;
                    }
                    break;
                case 'heroes':
                    if ((role.heroModel.getHeroBagSize() + rwd[k].length) > MAX_HERO_BAG_SIZE) {
                        return false;
                    }
                    break;
                case 'items':
                    if ((role.itemModel.getItemBagSize() + Object.keys(rwd[k]).length) > MAX_ITEM_BAG_SIZE) {
                        return false;
                    }
                    break;
                default:
                    if (this.isResourceExceed(role, k, rwd[k])) {
                        return false;
                    }
                    break;
            }
        }

        for (let k in rwd) {
            switch (k) {
                case 'equips':
                    for (let id of rwd[k]) {
                        role.equipModel.createAndAddEquip(id, type, bSend2Client);
                    }
                    break;
                case 'heroes':
                    for (let id of rwd[k]) {
                        role.heroModel.createAndAddHero(id, type, bSend2Client);
                    }
                    break;
                case 'items':
                    for (let id in rwd[k]) {
                        role.itemModel.createAndAddItem(parseInt(id), rwd[k][id], type, bSend2Client);
                    }
                    break;
                default:
                    this.addResource(role, k, rwd[k], type);
                    break;
            }
        }

        if (bSend2Client) {
            role.sendProtocol(S2C.SC_GET_REWARD.create(rwd.fields));
        }

        return true;
    }

    public removeReward(role: Role, rwd: Reward, type: EResUseType, bSend2Client: boolean = true): boolean {
        let t = {};
        for (let k in rwd) {
            switch (k) {
                case 'equips':
                case 'heroes':
                    if (!t[k]) t[k] = {};
                    for (let i of rwd[k]) {
                        if (!t[k][i]) t[k][i] = 1;
                        else t[k][i] += 1;
                    }
                    break;
            }
        }

        for (let k in rwd) {
            switch (k) {
                case 'equips':
                    for (let id in t[k]) {
                        if (!role.equipModel.isEquipEnough(id, id))
                            return false;
                    }
                    break;
                case 'heroes':
                    for (let id in t[k]) {
                        if (!role.heroModel.isHeroEnough(id, id))
                            return false;
                    }
                    break;
                case 'items':
                    for (let id in rwd[k]) {
                        if (!role.itemModel.isItemEnough(parseInt(id), rwd[k][id]))
                            return false;
                    }
                    break;
                default:
                    if (this.isResourceEnough(role, k, rwd[k])) {
                        return false;
                    }
                    break;
            }
        }

        for (let k in rwd) {
            switch (k) {
                case 'equips':
                    for (let id in t[k]) {
                        for (let i = 0; i < t[k][id]; ++i) {
                            role.equipModel.removeEquip(id, type, bSend2Client);
                        }
                    }
                    break;
                case 'heroes':
                    for (let id in t[k]) {
                        for (let i = 0; i < t[k][id]; ++i) {
                            role.heroModel.removeHero(id, type, bSend2Client);
                        }
                    }
                    break;
                case 'items':
                    for (let id in rwd[k]) {
                        role.itemModel.removeItem(parseInt(id), rwd[k][id], type, bSend2Client);
                    }
                    break;
                default:
                    this.addResource(role, k, rwd[k], type);
                    break;
            }
        }
        return true;
    }
}