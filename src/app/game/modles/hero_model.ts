import {BaseModel} from "./base_model";
import {S2C} from "../../proto/cmd";
import {Log} from "../../../lib/util/log";

export const MAX_HERO_BAG_SIZE = 200;

export interface IHeroSkill {
    id: number;
    lvl: number;
}

export interface IHero {
    uid: number;
    id: number;
    combat: number;
    lvl: number;
    advLv: number;
    awakeLv: number;
    exp: number;
    starLv: number;
    equipUids: number[];

    test1: number;
    test2: number;
    test3: number;
    test4: number;
    test5: number;
    test6: number;
    test7: number;
    test8: number;
    test9: number;
    test10: number;
    test11: number;
    test12: number;
    test13: number;
    test14: number;
    test15: number;
    test16: number;
    test17: number;
    test18: number;
    test19: number;
    test20: number;
}

export class HeroModel extends BaseModel {
    // 下层只能是简单数据结构类型，不能是类因为redis反序列化暂时无法把原型链做复制
    heroes: { [uid: number]: IHero } = {};
    maxUid: number = 0;

    constructor() {
        super();
    }

    serializeInitNetMsg() {
        let pck = S2C.SC_INIT_HERO.create(), msg;
        for (let uid in this.heroes) {
            msg = S2C.Hero.create();
            HeroModel.serializeHeroNetMsg(msg, this.heroes[uid]);
            pck.heroes[uid] = msg;
        }
        return pck;
    }

    static serializeHeroNetMsg(msg: S2C.Hero, hero: IHero) {
        for (let k in msg) {
            if (!hero.hasOwnProperty(k)) {
                if (k !== 'constructor' && k !== '$type' && k != 'toJSON')
                    Log.sError('SC_UPDATE_HERO %s not exist in role data', k);
                continue;
            }
            msg[k] = hero[k];
        }
    }

    createHero(heroId: number): IHero {
        if (this.getHeroBagSize() >= MAX_HERO_BAG_SIZE) {
            return null;
        }

        let hero: IHero = {
            id: heroId,
            uid: 0,
            combat: 0,
            lvl: 0,
            advLv: 0,
            awakeLv: 0,
            exp: 0,
            starLv: 0,
            equipUids: [],
            test1: 0,
            test2: 0,
            test3: 0,
            test4: 0,
            test5: 0,
            test6: 0,
            test7: 0,
            test8: 0,
            test9: 0,
            test10: 0,
            test11: 0,
            test12: 0,
            test13: 0,
            test14: 0,
            test15: 0,
            test16: 0,
            test17: 0,
            test18: 0,
            test19: 0,
            test20: 0,
        };
        return hero;
    }

    addHero(hero: IHero) {
        hero.uid = ++this.maxUid;
        this.heroes[hero.uid] = hero;
    }

    createAndAddHero(heroId: number): IHero {
        let hero = this.createHero(heroId);
        if (!hero)
            return null;
        this.addHero(hero);
        return hero;
    }

    deleteHero(uid: number) {
        delete this.heroes[uid];
    }

    getHero(uid): IHero {
        return this.heroes[uid];
    }

    getHeroBagSize(): number {
        return Object.keys(this.heroes).length;
    }
}