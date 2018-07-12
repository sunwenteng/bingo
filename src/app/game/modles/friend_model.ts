import {RoleModel} from "./role_model";
import {S2C} from "../../proto/cmd";
import {Log} from "../../../lib/util/log";
import {Role} from "./role";
import {modelField} from "../../../lib/util/descriptor";
import {Reward} from "./reward";

export const MAX_FRIEND_BAG_SIZE = 200;

export class Friend {
    uid: number = 0;
    createTime:number = Date.now();
    state:number = 0;
    bans:number[];

    constructor(uid?:number) {
        if (uid) {
            this.uid = uid;
        }
    }

    serializeNetMsg(msg: S2C.Friend) {
        for (let k in msg) {
            if (!this.hasOwnProperty(k)) {
                if (k !== 'constructor' && k !== '$type' && k !== 'toJSON') {
                    Log.sError('SC_UPDATE_FRIEND %s not exist in role data', k);
                }
                continue;
            }
            msg[k] = this[k];
        }
    }
}

export class FriendModel extends RoleModel {
    @modelField() private _friends: { [uid: number]: Friend } = {};

    constructor(role: Role, key: string) {
        super(role, key);
    }

    serialize(): string {
        return JSON.stringify(this.fields);
    }

    deserialize(data) {
        let o = JSON.parse(data), t = 0;
        for (let k in o) {
            if (k === '_friends') {
                for (let uid in o[k]) {
                    let friend = new Friend();
                    for (let pro in o[k][uid]) {
                        friend[pro] = o[k][uid][pro];
                    }
                    this._friends[uid] = friend;
                    t = parseInt(uid);
                }
            }
            else {
                this['fields'][k] = o[k];
            }
        }
    }

    serializeInitNetMsg() {
        let pck = S2C.SC_UPDATE_FRIEND.create(), msg;
        for (let uid in this._friends) {
            msg = S2C.Friend.create();
            this._friends[uid].serializeNetMsg(msg);
            pck.friends[uid] = msg;
        }
        return pck;
    }

    private createFriend(uid:number): Friend {
        if (this.getFriendBagSize() >= MAX_FRIEND_BAG_SIZE) {
            return null;
        }

        return new Friend(uid);
    }

    private addFriend(friend: Friend): boolean {
        if (this._friends.hasOwnProperty(friend.uid)) {
            Log.sInfo('friendModel maxUid, error, uid=%d', friend.uid);
            return false;
        }
        this._friends[friend.uid] = friend;
        return true;
    }

    createAndAddFriend(uid:number, bSend2Client: boolean = true): Friend {
        let friend = this.createFriend(uid);
        if (!friend) {
            return null;
        }
        if (!this.addFriend(friend)) {
            return null;
        }
        if (bSend2Client) {
            let msg = S2C.SC_UPDATE_FRIEND.create();
            let friendMsg = S2C.Friend.create();
            friend.serializeNetMsg(friendMsg);
            msg.friends[friend.uid] = friendMsg;
            this.role.sendProtocol(msg);
        }
        return friend;
    }

    removeFriend(uid, bSend2Client: boolean = true): boolean {
        if (!this._friends.hasOwnProperty(uid)) {
            return false;
        }
        if (bSend2Client) {
            let msg = S2C.SC_UPDATE_FRIEND.create();
            msg.friends[-uid] = S2C.Friend.create();
            this.role.sendProtocol(msg);
        }
        delete this._friends[uid];
        this.makeDirty();
        Log.uInfo(this.role.uid, 'uid=%d', uid);
        return true;
    }

    sendFriendUpdateProtocol(friend: Friend) {
        let msg = S2C.SC_UPDATE_FRIEND.create();
        let friendMsg = S2C.Friend.create();
        friend.serializeNetMsg(friendMsg);
        msg.friends[friend.uid] = friendMsg;
        this.role.sendProtocol(msg);
    }

    getFriend(uid, bReadonly: boolean): Friend {
        if (!bReadonly) {
            this.makeDirty();
        }
        return this._friends[uid];
    }

    getAllFriend(bReadonly: boolean): { [uid: number]: Friend } {
        if (!bReadonly) {
            this.makeDirty();
        }
        return this._friends;
    }

    getFriendBagSize(): number {
        return Object.keys(this._friends).length;
    }
}