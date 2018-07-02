import {BaseModel} from "./base_model";
import {S2C} from "../../proto/cmd";
import {Log} from "../../../lib/util/log";

export const MAX_ITEM_BAG_SIZE = 2000;

export interface IItem {
    id: number;
    cnt: number;
}

export class ItemModel extends BaseModel {
    items: { [itemId: number]: IItem } = {};

    constructor() {
        super();
    }

    serializeInitNetMsg() {
        let pck = S2C.SC_INIT_ITEM.create(), msg;
        for (let itemId in this.items) {
            msg = S2C.Item.create();
            ItemModel.serializeItemNetMsg(msg, this.items[itemId]);
            pck.items[itemId] = msg;
        }
        return pck;
    }

    static serializeItemNetMsg(msg: S2C.Item, item: IItem) {
        for (let k in msg) {
            if (!item.hasOwnProperty(k)) {
                if (k !== 'constructor' && k !== '$type' && k != 'toJSON')
                    Log.sError('SC_UPDATE_ITEM %s not exist in role data', k);
                continue;
            }
            msg[k] = item[k];
        }
    }

    createItem(itemId: number, cnt: number = 1): IItem {
        if (this.getItemBagSize() >= MAX_ITEM_BAG_SIZE) {
            return null;
        }

        return {
            id: itemId,
            cnt: cnt
        };
    }

    addItem(item: IItem) {
        this.items[item.id] = item;
    }

    createAndAddItem(itemId: number): IItem {
        let item = this.createItem(itemId);
        if (!item)
            return null;
        this.addItem(item);
        return item;
    }

    deleteItem(itemId: any) {
        delete this.items[itemId];
    }

    getItem(itemId): IItem {
        return this.items[itemId];
    }

    getItemBagSize(): number {
        return Object.keys(this.items).length;
    }
}