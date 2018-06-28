export class Equip {
    id: number;
    cnt: number;
}

export interface Res {
    id: number;
    cnt: number;
}

export interface Tech {
    id: number;
    lvl: number;
}

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

export interface BattleRound {
    id: number // from 0 回合数
    heroUid: number;
    skillId: number;
    damage: number;
    heal: number;
    bAvoid: boolean;
}

export interface BattleHero {
    uid: number;
    id: number;
    type: number;
}

export interface BattleTeam {
    combat: number;
    agility: number;
    defence: number;
    dodge: number;
    power: number;
    heroes: BattleHero[];
}

export interface BattleReport {
    teams: BattleTeam[];
    rounds: BattleRound[];
    win: boolean;
}