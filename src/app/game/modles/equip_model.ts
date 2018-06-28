import {BaseModel} from "./base_model";

export class Equip {
    id: number;
    level:number;
    rank:number;
    star:number;
    cnt: number;
}

export class EquipModel extends BaseModel {
    equips: { [uid: number]: Equip } = {};

    constructor() {
        super();
    }
}