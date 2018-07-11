import {C2S, S2C} from "../../proto/cmd";
import {GameSession} from "../game_session";
import {Role} from "../modles/role";
import {RedisMgr, RedisType} from "../../../lib/redis/redis_mgr";
import {GameWorld} from "../game_world";
import {Log} from "../../../lib/util/log";
import {controller} from "../../../lib/util/descriptor";
import Time = require('../../../lib/util/time');
import {MAX_HERO_BAG_SIZE} from "../modles/hero_model";
import {MAX_EQUIP_BAG_SIZE} from "../modles/equip_model";
import {MAX_ITEM_BAG_SIZE} from "../modles/item_model";
import {EResUseType, ResType} from "../modles/defines";
import {ResourceController} from "./resource_controller";
import {Reward} from "../modles/reward";

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
            session.role = role;
            role._session = session;
            await session.online();

            // start TODO
            role.sendProtocol(role.heroModel.serializeInitNetMsg());
            role.sendProtocol(role.equipModel.serializeInitNetMsg());
            role.sendProtocol(role.itemModel.serializeInitNetMsg());
            role.sendProtocol(role.battleModel.serializeInitNetMsg());
            role.sendProtocol(role.taskModel.serializeInitNetMsg());
            role.sendProtocol(role.friendModel.serializeInitNetMsg());
            role.sendProtocol(role.mailModel.serializeInitNetMsg());
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

    @controller()
    async heartBeat(role: Role, msg: C2S.CS_ROLE_HEART_BEAT) {
        let rwd = new Reward({[ResType.DIAMOND]: 1});
        // let roleB = new Role(2);

        // await gameRedis.lock(roleB.getRedisKey(), async () => {
        //     let exist = await roleB.load();
        //     if (exist) {
        //         roleB.diamond += 1;
        //         await roleB.save();
        //     }
        // });

        ResourceController.instance.applyReward(role, rwd, EResUseType.GM, true);

        let size = role.heroModel.getHeroBagSize();
        if (size < MAX_HERO_BAG_SIZE) {
            rwd.clear();
            for (let i = 0; i < (MAX_HERO_BAG_SIZE - size); i++) {
                rwd.add({heroes: [101]});
            }
            ResourceController.instance.applyReward(role, rwd, EResUseType.GM, true);
        }
        else {
            rwd.clear();
            for (let i = 0; i < 3; ++i) {
                rwd.add({heroes: [101]});
            }
            ResourceController.instance.removeReward(role, rwd, EResUseType.GM, true);
        }
        let changeCnt = 0;
        let allHero = role.heroModel.getAllHero(true);
        for (let uid in allHero) {
            let hero = role.heroModel.getHero(uid, false);
            hero.lvl = Math.floor(Math.random() * 100);
            hero.combat = Math.floor(Math.random() * 1000);
            role.heroModel.sendHeroUpdateProtocol(hero);
            if (++changeCnt > 2) {
                break;
            }
        }

        size = role.equipModel.getEquipBagSize();
        if (size < MAX_EQUIP_BAG_SIZE) {
            rwd.clear();
            for (let i = 0; i < (MAX_EQUIP_BAG_SIZE - size); i++) {
                rwd.add({equips: [201]});
            }
            ResourceController.instance.applyReward(role, rwd, EResUseType.GM, true);
        }
        else {
            rwd.clear();
            for (let i = 0; i < 3; ++i) {
                rwd.add({equips: [201]});
            }
            ResourceController.instance.removeReward(role, rwd, EResUseType.GM, true);
        }
        changeCnt = 0;
        let allEquip = role.equipModel.getAllEquip(true);
        for (let uid in allEquip) {
            let equip = role.equipModel.getEquip(uid, false);
            equip.lvl = Math.floor(Math.random() * 100);
            equip.rank = Math.floor(Math.random() * 1000);
            role.equipModel.sendEquipUpdateProtocol(equip);
            if (++changeCnt > 2) {
                break;
            }
        }

        size = role.itemModel.getItemBagSize();
        if (size === 0) {
            rwd.clear();
            for (let i = 0; i < (MAX_ITEM_BAG_SIZE - size); i++) {
                rwd.add({items: {[301 + i]: Math.floor(Math.random()) * 10 + 1}});
            }
            ResourceController.instance.applyReward(role, rwd, EResUseType.GM, true);
        }
        else {
            // rwd.clear();
            // for (let i = 0; i < 3; ++i) {
            //     rwd.add({equips: [201]});
            // }
            // ResourceController.instance.removeReward(role, rwd, EResUseType.GM, true);
        }
        changeCnt = 0;
        let allItem = role.itemModel.getAllItem(true);
        for (let itemId in allItem) {
            let item = role.itemModel.getItem(itemId, false);
            item.cnt = Math.floor(Math.random() * 10);
            role.itemModel.sendItemUpdateProtocol(item);
            if (++changeCnt > 2) {
                break;
            }
        }

        role.lastAliveTime = Time.realNow();
        let pck = S2C.SC_ROLE_HEART_BEAT.create();
        role.sendProtocol(pck);
    }
}
