import {BaseModel} from "./base_model";

export interface Item {
    id: number;
    cnt: number;
}

export class ItemModel extends BaseModel {
    items: { [uid: number]: Item } = {};

    constructor() {
        super();
    }
}