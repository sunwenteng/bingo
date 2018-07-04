import {BaseModel} from "./base_model";
import {S2C} from "../../proto/cmd";
import {Log} from "../../../lib/util/log";
import {Role} from "./role";
import {modelField} from "../../../lib/util/descriptor";

export const MAX_ITEM_BAG_SIZE = 1000;

export interface IItem {
    id: number;
    cnt: number;
}

export class ItemModel extends BaseModel {
    @modelField() private _items: { [itemId: number]: IItem } = {};

    constructor(role: Role, key: string) {
        super(role, key);
    }

    serializeInitNetMsg() {
        let pck = S2C.SC_INIT_ITEM.create(), msg;
        for (let itemId in this._items) {
            msg = S2C.Item.create();
            this.serializeItemNetMsg(msg, this._items[itemId]);
            pck.items[itemId] = msg;
        }
        return pck;
    }

    serializeItemNetMsg(msg: S2C.Item, item: IItem) {
        for (let k in msg) {
            if (!item.hasOwnProperty(k)) {
                if (k !== 'constructor' && k !== '$type' && k != 'toJSON')
                    Log.sError('SC_UPDATE_ITEM %s not exist in role data', k);
                continue;
            }
            msg[k] = item[k];
        }
    }

    sendItemUpdateProtocol(item:IItem) {
        let msg = S2C.SC_UPDATE_ITEM.create();
        let itemMsg = S2C.Item.create();
        this.serializeItemNetMsg(itemMsg, item);
        msg.items[item.id] = itemMsg;
        this.m_Role.sendProtocol(msg);
    }

    private createItem(itemId: number, cnt: number = 1): IItem {
        if (this.getItemBagSize() >= MAX_ITEM_BAG_SIZE) {
            return null;
        }

        return {
            id: itemId,
            cnt: cnt
        };
    }

    private addItem(item: IItem) {
        this._items[item.id] = item;
    }

    createAndAddItem(itemId: number, bSend2Client: boolean = true): IItem {
        let item = this.createItem(itemId);
        if (!item)
            return null;
        this.addItem(item);
        if (bSend2Client) {
            let msg = S2C.SC_UPDATE_ITEM.create();
            let itemMsg = S2C.Item.create();
            this.serializeItemNetMsg(itemMsg, item);
            msg.items[itemId] = itemMsg;
            this.m_Role.sendProtocol(msg);
        }
        return item;
    }

    deleteItem(itemId: any, bSend2Client: boolean = true) {
        if (bSend2Client) {
            let msg = S2C.SC_UPDATE_ITEM.create();
            msg.items[-itemId] = S2C.Item.create();
            this.m_Role.sendProtocol(msg);
        }
        delete this._items[itemId];
        this.makeDirty();
    }

    getItem(itemId, bReadonly: boolean): IItem {
        if (!bReadonly) {
            this.makeDirty();
        }
        return this._items[itemId];
    }

    getAllItem(bReadonly: boolean): { [id: number]: IItem } {
        if (!bReadonly) {
            this.makeDirty();
        }
        return this._items;
    }

    getItemBagSize(): number {
        return Object.keys(this._items).length;
    }
}