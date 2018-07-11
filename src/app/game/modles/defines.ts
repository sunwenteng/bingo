export enum ResType {
    GOLD = 'gold',
    DIAMOND = 'diamond',
    EXP = 'exp',
    vipExp = 'vipExp',
}

export enum EResUseType {
    GM = 1,
}

export interface BattleRound {
    id: number; // from 0 回合数
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