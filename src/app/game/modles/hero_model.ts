import {BaseModel} from "./base_model";
import {S2C} from "../../proto/cmd";
import {Log} from "../../../lib/util/log";
import {Role} from "./role";
import {modelField} from "../../../lib/util/descriptor";
import {EResUseType} from "./defines";

export const MAX_HERO_BAG_SIZE = 200;

export interface HeroSkill {
    id: number;
    lvl: number;
}

export class Hero {
    uid: number = 0;
    id: number = 0;
    combat: number = 0;
    lvl: number = 0;
    advLv: number = 0;
    awakeLv: number = 0;
    exp: number = 0;
    starLv: number = 0;
    equipUids: number[] = [];
    isRaw: boolean = true;

    constructor(id?) {
        if (id) {
            this.id = id;
        }
    }
}

export class HeroModel extends BaseModel {
    // 必须是简单类型
    @modelField() private _heroes: { [uid: number]: Hero } = {};
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
            if (k == '_heroes') {
                for (let uid in o[k]) {
                    let hero = new Hero();
                    for (let pro in o[k][uid]) {
                        hero[pro] = o[k][uid][pro];
                    }
                    this._heroes[uid] = hero;
                }
            }
            else {
                this['fields'][k] = o[k];
            }
        }
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

    serializeHeroNetMsg(msg: S2C.Hero, hero: Hero) {
        for (let k in msg) {
            if (!hero.hasOwnProperty(k)) {
                if (k !== 'constructor' && k !== '$type' && k != 'toJSON')
                    Log.sError('SC_UPDATE_HERO %s not exist in role data', k);
                continue;
            }
            msg[k] = hero[k];
        }
    }

    private createHero(heroId: number): Hero {
        if (this.getHeroBagSize() >= MAX_HERO_BAG_SIZE) {
            return null;
        }

        return new Hero(heroId);
    }

    private addHero(hero: Hero) {
        hero.uid = ++this.maxUid;
        this._heroes[hero.uid] = hero;
    }

    createAndAddHero(heroId: number, type: EResUseType, bSend2Client: boolean = true): Hero {
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
        Log.uInfo(this.m_Role.uid, 'useType=%d, id=%d', type, heroId);
        return hero;
    }

    removeHero(uid, type: EResUseType, bSend2Client: boolean = true) {
        if (bSend2Client) {
            let msg = S2C.SC_UPDATE_HERO.create();
            msg.heroes[-uid] = S2C.Hero.create();
            this.m_Role.sendProtocol(msg);
        }
        delete this._heroes[uid];
        this.makeDirty();
        Log.uInfo(this.m_Role.uid,  'useType=%d, uid=%d', type, uid);
    }

    sendHeroUpdateProtocol(hero: Hero) {
        let msg = S2C.SC_UPDATE_HERO.create();
        let heroMsg = S2C.Hero.create();
        this.serializeHeroNetMsg(heroMsg, hero);
        msg.heroes[hero.uid] = heroMsg;
        this.m_Role.sendProtocol(msg);
    }

    getHero(uid, bReadonly: boolean): Hero {
        if (!bReadonly) {
            this.makeDirty();
        }
        return this._heroes[uid];
    }

    getAllHero(bReadonly: boolean): { [uid: number]: Hero } {
        if (!bReadonly) {
            this.makeDirty();
        }
        return this._heroes;
    }

    getHeroBagSize(): number {
        return Object.keys(this._heroes).length;
    }

    isHeroEnough(id, count): boolean {
        let heroes = this.getAllHero(true);
        let findCnt = 0, hero: Hero = null;
        for (let uid in heroes) {
            hero = heroes[uid];
            if (hero.id === id && hero.isRaw && ++findCnt > count) {
                return true;
            }
        }
        return false;
    }
}