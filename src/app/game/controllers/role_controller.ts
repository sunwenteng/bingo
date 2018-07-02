import {C2S, S2C} from "../../proto/cmd";
import {GameSession} from "../game_session";
import {Role} from "../modles/role";
import {RedisMgr, RedisType} from "../../../lib/redis/redis_mgr";
import {GameWorld} from "../game_world";
import {Log} from "../../../lib/util/log";
import {controller} from "../../../lib/util/descriptor";
import Time = require('../../../lib/util/time');
import * as GameUtil from '../../../lib/util/game_util';
import {MAX_HERO_BAG_SIZE} from "../modles/hero_model";
import {MAX_EQUIP_BAG_SIZE} from "../modles/equip_model";
import {MAX_ITEM_BAG_SIZE} from "../modles/item_model";

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
            let exist = await role.load(false);
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

    @controller()
    async heartBeat(role: Role, msg: C2S.CS_ROLE_HEART_BEAT) {
        role.diamond = role.diamond + 1;
        let size = role.heroModel.getHeroBagSize();
        if (size < MAX_HERO_BAG_SIZE) {
            for (let i = 0; i < (MAX_HERO_BAG_SIZE - size); i++) {
                role.heroModel.createAndAddHero(101);
            }
        }
        // else {
        //     role.heroModel.maxUid = 98;
        //     role.heroModel.deleteHero(3);
        //     role.heroModel.deleteHero(4);
        // }
        for (let i = 0; i < 2; i++) {
            role.heroModel.getHero(i + 1).lvl = Math.floor(Math.random() * 100);
            role.heroModel.getHero(i + 1).combat = Math.floor(Math.random() * 1000);
        }

        size = role.equipModel.getEquipBagSize();
        if (size < MAX_EQUIP_BAG_SIZE) {
            for (let i = 0; i < (MAX_EQUIP_BAG_SIZE - size); i++) {
                role.equipModel.createAndAddEquip(201);
            }
        }
        else {
            role.equipModel.maxUid = 98;
            role.equipModel.deleteEquip(3);
            role.equipModel.deleteEquip(4);
        }
        for (let i = 0; i < 2; i++) {
            role.equipModel.getEquip(i + 1).lvl = Math.floor(Math.random() * 100);
            role.equipModel.getEquip(i + 1).rank = Math.floor(Math.random() * 1000);
        }

        size = role.itemModel.getItemBagSize();
        if (size < MAX_ITEM_BAG_SIZE) {
            for (let i = 0; i < (100 - size); i++) {
                role.itemModel.createAndAddItem(301 + i);
            }
        }
        else {
            // let delCnt = 0;
            // for (let itemId in role.itemModel.items) {
            //     role.itemModel.deleteItem(itemId);
            //     if (++delCnt > 2) {
            //         break;
            //     }
            // }
        }
        for (let i = 301; i < 303; i++) {
            role.itemModel.getItem(i + 1).cnt = Math.floor(Math.random() * 100);
        }

        role.lastAliveTime = Time.realNow();
        let pck = S2C.SC_ROLE_HEART_BEAT.create();
        role.sendProtocol(pck);
    }
}
