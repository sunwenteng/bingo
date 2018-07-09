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
        if (!count) {
            return true;
        }
        if (!role.fields.hasOwnProperty(id)) {
            throw new Error('resType not in role fields, id=' + id);
        }

        return role[id] >= count;
    }

    public isResourceExceed(role: Role, id: ResType | any, count: number) {
        if (!count) {
            return false;
        }
        if (!role.fields.hasOwnProperty(id)) {
            throw new Error('resType not in role fields, id=' + id);
        }

        return role[id] + count > Number.MAX_VALUE;
    }

    public addResource(role: Role, id: ResType | any, count: number, type: EResUseType): boolean {
        if (!count) {
            return true;
        }
        if (this.isResourceExceed(role, id, count)) {
            Log.uInfo(role.uid, 'resource exceed, id=%s, own=%d, add=%d', id, role[id], count);
            return false;
        }
        role[id] += count;
        if (id === ResType.EXP) {
            // TODO
        }
        Log.uInfo(role.uid, 'id=%s, count=%d', id, count);
        return true;
    }

    public reduceResource(role: Role, id: ResType, count: number, type: EResUseType): boolean {
        if (!count) {
            return true;
        }
        if (!this.isResourceEnough(role, id, count)) {
            Log.uInfo(role.uid, 'resource not enough, id=%s, own=%d, req=%d', id, role[id], count);
            return false;
        }

        role[id] -= count;
        Log.uInfo(role.uid, 'id=%s, count=%d', id, count);
        return true;
    }

    public applyReward(role: Role, rwd: Reward, type: EResUseType, bSend2Client: boolean = true): boolean {
        let l = 0;
        for (let k in rwd['fields']) {
            switch (k) {
                case 'equips':
                    l = rwd['fields'][k].length;
                    if (!l && (role.equipModel.getEquipBagSize() + l) > MAX_EQUIP_BAG_SIZE) {
                        return false;
                    }
                    break;
                case 'heroes':
                    l = rwd['fields'][k].length;
                    if (!l && (role.heroModel.getHeroBagSize() + l) > MAX_HERO_BAG_SIZE) {
                        return false;
                    }
                    break;
                case 'items':
                    l = Object.keys(rwd['fields'][k]).length;
                    if (!l && (role.itemModel.getItemBagSize() + l) > MAX_ITEM_BAG_SIZE) {
                        return false;
                    }
                    break;
                default:
                    if (this.isResourceExceed(role, k, rwd['fields'][k])) {
                        return false;
                    }
                    break;
            }
        }

        for (let k in rwd['fields']) {
            switch (k) {
                case 'equips':
                    for (let id of rwd['fields'][k]) {
                        role.equipModel.createAndAddEquip(id, type, bSend2Client);
                    }
                    break;
                case 'heroes':
                    for (let id of rwd['fields'][k]) {
                        role.heroModel.createAndAddHero(id, type, bSend2Client);
                    }
                    break;
                case 'items':
                    for (let id in rwd['fields'][k]) {
                        role.itemModel.createAndAddItem(parseInt(id), rwd['fields'][k][id], type, bSend2Client);
                    }
                    break;
                default:
                    this.addResource(role, k, rwd['fields'][k], type);
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
        for (let k in rwd['fields']) {
            switch (k) {
                case 'equips':
                case 'heroes':
                    if (!t[k]) {
                        t[k] = {};
                    }
                    for (let i of rwd['fields'][k]) {
                        if (!t[k][i]) {
                            t[k][i] = 1;
                        }
                        else {
                            t[k][i] += 1;
                        }
                    }
                    break;
                default:
                    break;
            }
        }

        let uids = null;
        for (let k in rwd['fields']) {
            switch (k) {
                case 'equips':
                    for (let id in t[k]) {
                        uids = role.equipModel.getEquipUidsById(parseInt(id), t[k][id]);
                        if (uids.length < t[k][id]) {
                            return false;
                        }
                        t[k][id] = uids;
                    }
                    break;
                case 'heroes':
                    for (let id in t[k]) {
                        uids = role.heroModel.getHeroUidsById(parseInt(id), t[k][id]);
                        if (uids.length < t[k][id]) {
                            return false;
                        }
                        t[k][id] = uids;
                    }
                    break;
                case 'items':
                    for (let id in rwd['fields'][k]) {
                        if (!role.itemModel.isItemEnough(parseInt(id), rwd['fields'][k][id])) {
                            return false;
                        }
                    }
                    break;
                default:
                    if (!this.isResourceEnough(role, k, rwd['fields'][k])) {
                        return false;
                    }
                    break;
            }
        }

        for (let k in rwd['fields']) {
            switch (k) {
                case 'equips':
                    for (let id in t[k]) {
                        for (let uid of t[k][id]) {
                            if (!role.equipModel.removeEquip(uid, type, bSend2Client)) {
                                return false;
                            }
                        }
                    }
                    break;
                case 'heroes':
                    for (let id in t[k]) {
                        for (let uid of t[k][id]) {
                            if (!role.heroModel.removeHero(uid, type, bSend2Client)) {
                                return false;
                            }
                        }
                    }
                    break;
                case 'items':
                    for (let id in rwd['fields'][k]) {
                        if (!role.itemModel.removeItem(parseInt(id), rwd['fields'][k][id], type, bSend2Client)) {
                            return false;
                        }
                    }
                    break;
                default:
                    this.addResource(role, k, rwd['fields'][k], type);
                    break;
            }
        }
        return true;
    }
}