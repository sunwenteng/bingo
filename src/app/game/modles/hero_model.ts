import {RoleModel} from "./role_model";
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

    serializeNetMsg(msg: S2C.Hero) {
        for (let k in msg) {
            if (!this.hasOwnProperty(k)) {
                if (k !== 'constructor' && k !== '$type' && k !== 'toJSON') {
                    Log.sError('SC_UPDATE_HERO %s not exist in role data', k);
                }
                continue;
            }
            msg[k] = this[k];
        }
    }

    addExp(exp: number) {
        // TODO
    }

}

export class HeroModel extends RoleModel {
    @modelField() private _heroes: { [uid: number]: Hero } = {};
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
            if (k === '_heroes') {
                for (let uid in o[k]) {
                    let hero = new Hero();
                    for (let pro in o[k][uid]) {
                        hero[pro] = o[k][uid][pro];
                    }
                    this._heroes[uid] = hero;
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
        let pck = S2C.SC_INIT_HERO.create(), msg;
        for (let uid in this._heroes) {
            msg = S2C.Hero.create();
            this._heroes[uid].serializeNetMsg(msg);
            pck.heroes[uid] = msg;
        }
        return pck;
    }

    private createHero(heroId: number): Hero {
        if (this.getHeroBagSize() >= MAX_HERO_BAG_SIZE) {
            return null;
        }

        return new Hero(heroId);
    }

    private addHero(hero: Hero): boolean {
        hero.uid = ++this._maxUid;
        if (this._heroes.hasOwnProperty(hero.uid)) {
            Log.sInfo('heroModel maxUid, error, maxUid=%d, uid=%d', this._maxUid, hero.uid);
            return false;
        }
        this._heroes[hero.uid] = hero;
        return true;
    }

    createAndAddHero(heroId: number, type: EResUseType, bSend2Client: boolean = true): Hero {
        let hero = this.createHero(heroId);
        if (!hero) {
            return null;
        }
        if (!this.addHero(hero)) {
            return null;
        }
        if (bSend2Client) {
            let msg = S2C.SC_UPDATE_HERO.create();
            let heroMsg = S2C.Hero.create();
            hero.serializeNetMsg(heroMsg);
            msg.heroes[hero.uid] = heroMsg;
            this.role.sendProtocol(msg);
        }
        Log.uInfo(this.role.uid, 'useType=%d, id=%d, uid=%d, maxUid=%d', type, heroId, hero.uid, this._maxUid);
        return hero;
    }

    removeHero(uid, type: EResUseType, bSend2Client: boolean = true): boolean {
        if (!this._heroes.hasOwnProperty(uid)) {
            return false;
        }
        if (bSend2Client) {
            let msg = S2C.SC_UPDATE_HERO.create();
            msg.heroes[-uid] = S2C.Hero.create();
            this.role.sendProtocol(msg);
        }
        delete this._heroes[uid];
        this.makeDirty();
        Log.uInfo(this.role.uid, 'useType=%d, uid=%d', type, uid);
        return true;
    }

    sendHeroUpdateProtocol(hero: Hero) {
        let msg = S2C.SC_UPDATE_HERO.create();
        let heroMsg = S2C.Hero.create();
        hero.serializeNetMsg(heroMsg);
        msg.heroes[hero.uid] = heroMsg;
        this.role.sendProtocol(msg);
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

    getHeroUidsById(id: number, count: number): number[] {
        let ret = [];
        if (!count) {
            return ret;
        }
        let heroes = this.getAllHero(true);
        let hero: Hero = null;
        for (let uid in heroes) {
            hero = heroes[uid];
            if (hero.id === id && hero.isRaw) {
                ret.push(hero.uid);
                if (ret.length >= count) {
                    break;
                }
            }
        }
        return ret;
    }
}