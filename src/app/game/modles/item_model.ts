import {BaseModel} from "./base_model";
import {S2C} from "../../proto/cmd";
import {Log} from "../../../lib/util/log";
import {Role} from "./role";
import {modelField} from "../../../lib/util/descriptor";
import {EResUseType} from "./defines";

export const MAX_ITEM_BAG_SIZE = 1000;

export class Item {
    id: number = 0;
    cnt: number = 0;

    constructor(id?, count?) {
        if (id && count) {
            this.cnt = count;
            this.id = id;
        }
    }
}

export class ItemModel extends BaseModel {
    @modelField() private _items: { [itemId: number]: Item } = {};

    constructor(role: Role, key: string) {
        super(role, key);
    }

    serialize(): string {
        return JSON.stringify(this.fields);
    }

    deserialize(data) {
        let o = JSON.parse(data);
        for (let k in o) {
            if (k == '_items') {
                for (let id in o[k]) {
                    let item = new Item();
                    for (let pro in o[k][id]) {
                        item[pro] = o[k][id][pro];
                    }
                    this._items[id] = item;
                }
            }
            else {
                this['fields'][k] = o[k];
            }
        }
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

    serializeItemNetMsg(msg: S2C.Item, item: Item) {
        for (let k in msg) {
            if (!item.hasOwnProperty(k)) {
                if (k !== 'constructor' && k !== '$type' && k != 'toJSON')
                    Log.sError('SC_UPDATE_ITEM %s not exist in role data', k);
                continue;
            }
            msg[k] = item[k];
        }
    }

    sendItemUpdateProtocol(item: Item) {
        let msg = S2C.SC_UPDATE_ITEM.create();
        let itemMsg = S2C.Item.create();
        this.serializeItemNetMsg(itemMsg, item);
        msg.items[item.id] = itemMsg;
        this.m_Role.sendProtocol(msg);
    }

    private createItem(itemId: number, cnt: number = 1): Item {
        if (this.getItemBagSize() >= MAX_ITEM_BAG_SIZE) {
            return null;
        }

        return new Item(itemId, cnt);
    }

    private addItem(item: Item) {
        this._items[item.id] = item;
    }

    createAndAddItem(itemId: number, count: number, type: EResUseType, bSend2Client: boolean = true): Item {
        let item = this.createItem(itemId, count);
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
        Log.uInfo(this.m_Role.uid, 'useType=%d, id=%d, count=%d', type, itemId, count);
        return item;
    }

    removeItem(itemId: any, count, type: EResUseType, bSend2Client: boolean = true) {
        let item = this.getItem(itemId, true);
        if (!item || item.cnt < count) {
            Log.uError(this.m_Role.uid, 'item not enough, own=%d, req=%d',)
        }

        if (item.cnt === count) {
            if (bSend2Client) {
                let msg = S2C.SC_UPDATE_ITEM.create();
                msg.items[-itemId] = S2C.Item.create();
                this.m_Role.sendProtocol(msg);
            }
            delete this._items[itemId];
        }
        else {
            if (bSend2Client) {
                let msg = S2C.SC_UPDATE_ITEM.create();
                let t = S2C.Item.create();
                t.cnt = item.cnt;
                msg.items[itemId] = t;
                this.m_Role.sendProtocol(msg);
            }
            item.cnt -= count;
        }

        this.makeDirty();
        Log.uInfo(this.m_Role.uid, 'useType=%d, itemId=%d, count=%d', type, itemId, count);
    }

    getItem(itemId, bReadonly: boolean): Item {
        if (!bReadonly) {
            this.makeDirty();
        }
        return this._items[itemId];
    }

    getAllItem(bReadonly: boolean): { [id: number]: Item } {
        if (!bReadonly) {
            this.makeDirty();
        }
        return this._items;
    }

    getItemBagSize(): number {
        return Object.keys(this._items).length;
    }

    isItemEnough(id: number, count: number): boolean {
        let item = this.getItem(id, true);
        return item && item.cnt > count;
    }
}