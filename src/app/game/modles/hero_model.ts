import {BaseModel} from "./base_model";

export interface HeroSkill {
    id: number;
    lvl: number;
}

export class Hero {
    id: number = 0;
    combat: number = 0;
    lvl: number = 0;
    agility: number = 0;
    defence: number = 0;
    dodge: number = 0;
    power: number = 0;
    equips: {
        [equipId: number]: {
            id: number;
            cnt: number;
        }
    } = {};
    skills: HeroSkill[] = [];
}

export class HeroModel extends BaseModel {
    heroes: { [uid: number]: Hero } = {};

    constructor() {
        super();
    }
}