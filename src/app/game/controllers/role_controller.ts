import {C2S, S2C} from "../../proto/cmd";
import {GameSession} from "../game_session";
import {ERoleMask, Role} from "../modles/role";
import {RedisMgr, RedisType} from "../../../lib/redis/redis_mgr";
import {GameWorld} from "../game_world";
import {Log} from "../../../lib/util/log";
import {controller} from "../../../lib/util/descriptor";
import Time = require('../../../lib/util/time');
import * as GameUtil from '../../../lib/util/game_util';
import {MAX_HERO_BAG_SIZE} from "../modles/hero_model";
import {MAX_EQUIP_BAG_SIZE} from "../modles/equip_model";
import {MAX_ITEM_BAG_SIZE} from "../modles/item_model";
import {EResUseType, ResType} from "../modles/defines";
import {ResourceController} from "./resource_controller";

let gameRedis = RedisMgr.getInstance(RedisType.GAME);

export class RoleController {
    public static instance = new RoleController();

    async online(session: GameSession, msg: C2S.CS_ROLE_ONLINE) {
        let roleId = parseInt(msg.passport);
        let role = new Role(roleId);
        await gameRedis.lock(role.getRedisKey(), async () => {
            let isOnline = await GameWorld.instance.isRoleOnline(roleId);
            if (isOnline) {
                await GameWorld.instance.kickRole(roleId);
            }
            let exist = await role.load();
            if (!exist) {
                await role.create();
                await role.save(true);
            }
            session.m_roleId = roleId;
            role._session = session;
            await session.online();

            // start TODO
            role.sendProtocol(role.heroModel.serializeInitNetMsg());
            role.sendProtocol(role.equipModel.serializeInitNetMsg());
            role.sendProtocol(role.itemModel.serializeInitNetMsg());
            // end TODO

            // put it to the end
            let pck = S2C.SC_ROLE_ONLINE.create();
            pck.roleId = roleId;
            role.sendProtocol(pck);

            role.lastAliveTime = Time.realNow();
            role.lastLoginTime = Time.realNow();
            await role.save();
        });
    }

    @controller(false, false, [ERoleMask.HERO, ERoleMask.EQUIP, ERoleMask.ITEM])
    async heartBeat(role: Role, msg: C2S.CS_ROLE_HEART_BEAT) {
        ResourceController.instance.addResource(role, ResType.DIAMOND, 1, EResUseType.GM);
        let size = role.heroModel.getHeroBagSize();
        if (size < MAX_HERO_BAG_SIZE) {
            for (let i = 0; i < (MAX_HERO_BAG_SIZE - size); i++) {
                role.heroModel.createAndAddHero(101, EResUseType.GM);
            }
        }
        else {
            let delCnt = 0;
            let allHero = role.heroModel.getAllHero(true);
            for (let uid in allHero) {
                role.heroModel.removeHero(uid, EResUseType.GM);
                if (++delCnt > 2) break;
            }
        }
        let changeCnt = 0;
        let allHero = role.heroModel.getAllHero(true);
        for (let uid in allHero) {
            let hero = role.heroModel.getHero(uid, false);
            hero.lvl = Math.floor(Math.random() * 100);
            hero.combat = Math.floor(Math.random() * 1000);
            role.heroModel.sendHeroUpdateProtocol(hero);
            if (++changeCnt > 2) break;
        }

        size = role.equipModel.getEquipBagSize();
        if (size < MAX_EQUIP_BAG_SIZE) {
            for (let i = 0; i < (MAX_EQUIP_BAG_SIZE - size); i++) {
                role.equipModel.createAndAddEquip(201, EResUseType.GM);
            }
        }
        else {
            let delCnt = 0;
            let container = role.equipModel.getAllEquip(true);
            for (let uid in container) {
                role.equipModel.removeEquip(uid, EResUseType.GM);
                if (++delCnt > 2) break;
            }
        }
        changeCnt = 0;
        let allEquip = role.equipModel.getAllEquip(true);
        for (let uid in allEquip) {
            let equip = role.equipModel.getEquip(uid, false);
            equip.lvl = Math.floor(Math.random() * 100);
            equip.rank = Math.floor(Math.random() * 1000);
            role.equipModel.sendEquipUpdateProtocol(equip);
            if (++changeCnt > 2) break;
        }

        size = role.itemModel.getItemBagSize();
        if (size < MAX_ITEM_BAG_SIZE) {
            for (let i = 0; i < (MAX_ITEM_BAG_SIZE - size); i++) {
                role.itemModel.createAndAddItem(301 + i, 1, EResUseType.GM);
            }
        }
        else {
            let delCnt = 0;
            let container = role.itemModel.getAllItem(true);
            for (let uid in container) {
                role.itemModel.removeItem(uid, 1, EResUseType.GM);
                if (++delCnt > 2) break;
            }
        }
        changeCnt = 0;
        let allItem = role.itemModel.getAllItem(true);
        for (let itemId in allItem) {
            let item = role.itemModel.getItem(itemId, false);
            item.cnt = Math.floor(Math.random() * 100);
            role.itemModel.sendItemUpdateProtocol(item);
            if (++changeCnt > 2) break;
        }

        role.lastAliveTime = Time.realNow();
        let pck = S2C.SC_ROLE_HEART_BEAT.create();
        role.sendProtocol(pck);
    }
}
