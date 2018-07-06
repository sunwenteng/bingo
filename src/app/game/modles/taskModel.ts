import {BaseModel} from "./base_model";
import {S2C} from "../../proto/cmd";
import {Log} from "../../../lib/util/log";
import {Role} from "./role";
import {modelField} from "../../../lib/util/descriptor";

class Task {
    uid: number = 0;
    id: number = 0;
    state: number = 0;

    serializeNetMsg(msg: S2C.Task) {
        for (let k in msg) {
            if (!this.hasOwnProperty(k)) {
                if (k !== 'constructor' && k !== '$type' && k != 'toJSON')
                    Log.sError('SC_UPDATE_TASK %s not exist in role data', k);
                continue;
            }
            msg[k] = this[k];
        }
    }
}

export class TaskModel extends BaseModel {
    @modelField() private _tasks: { [uid: number]: Task } = {};
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
            if (k == '_equips') {
                for (let uid in o[k]) {
                    let task = new Task();
                    for (let pro in o[k][uid]) {
                        task[pro] = o[k][uid][pro];
                    }
                    this._tasks[uid] = task;
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
        let pck = S2C.SC_INIT_TASK.create(), msg;
        for (let uid in this._tasks) {
            msg = S2C.Equip.create();
            this._tasks[uid].serializeNetMsg(msg);
            pck.tasks[uid] = msg;
        }
        return pck;
    }
}