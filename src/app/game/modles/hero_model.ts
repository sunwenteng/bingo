import {BaseModel} from "./base_model";
import {S2C} from "../../proto/cmd";
import {Log} from "../../../lib/util/log";
import {Role} from "./role";
import {modelField} from "../../../lib/util/descriptor";

export const MAX_HERO_BAG_SIZE = 400;

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
    // 必须是简单类型
    @modelField() private _heroes: { [uid: number]: IHero } = {};
    @modelField() maxUid: number = 0;

    constructor(role: Role, key: string) {
        super(role, key);
    }

    serializeInitNetMsg() {
        let pck = S2C.SC_INIT_HERO.create(), msg;
        for (let uid in this._heroes) {
            msg = S2C.Hero.create();
            this.serializeHeroNetMsg(msg, this._heroes[uid]);
            pck.heroes[uid] = msg;
        }
        return pck;
    }

    serializeHeroNetMsg(msg: S2C.Hero, hero: IHero) {
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

        return {
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
    }

    addHero(hero: IHero) {
        hero.uid = ++this.maxUid;
        this._heroes[hero.uid] = hero;
    }

    createAndAddHero(heroId: number, bSend2Client: boolean = true): IHero {
        let hero = this.createHero(heroId);
        if (!hero)
            return null;
        this.addHero(hero);
        if (bSend2Client) {
            let msg = S2C.SC_UPDATE_HERO.create();
            let heroMsg = S2C.Hero.create();
            this.serializeHeroNetMsg(heroMsg, hero);
            msg.heroes[hero.uid] = heroMsg;
            this.m_Role.sendProtocol(msg);
        }
        return hero;
    }

    deleteHero(uid, bSend2Client: boolean = true) {
        if (bSend2Client) {
            let msg = S2C.SC_UPDATE_HERO.create();
            msg.heroes[-uid] = S2C.Hero.create();
            this.m_Role.sendProtocol(msg);
        }
        delete this._heroes[uid];
        this.makeDirty();
    }

    sendHeroUpdateProtocol(hero:IHero) {
        let msg = S2C.SC_UPDATE_HERO.create();
        let heroMsg = S2C.Hero.create();
        this.serializeHeroNetMsg(heroMsg, hero);
        msg.heroes[hero.uid] = heroMsg;
        this.m_Role.sendProtocol(msg);
    }

    getHero(uid, bReadonly: boolean): IHero {
        if (!bReadonly) {
            this.makeDirty();
        }
        return this._heroes[uid];
    }

    getAllHero(bReadonly: boolean): { [uid: number]: IHero } {
        if (!bReadonly) {
            this.makeDirty();
        }
        return this._heroes;
    }

    getHeroBagSize(): number {
        return Object.keys(this._heroes).length;
    }
}