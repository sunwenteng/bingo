import {RoleModel} from "./role_model";
import {S2C} from "../../proto/cmd";
import {Log} from "../../../lib/util/log";
import {Role} from "./role";
import {modelField} from "../../../lib/util/descriptor";

class Task {
    uid: number = 0;
    id: number = 0;
    state: number = 0;

    constructor(taskId?: number) {
        if (taskId) {
            this.id = taskId;
        }
    }

    serializeNetMsg(msg: S2C.Task) {
        for (let k in msg) {
            if (!this.hasOwnProperty(k)) {
                if (k !== 'constructor' && k !== '$type' && k !== 'toJSON') {
                    Log.sError('SC_UPDATE_TASK %s not exist in role data', k);
                }
                continue;
            }
            msg[k] = this[k];
        }
    }
}

export class TaskModel extends RoleModel {
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
            if (k === '_tasks') {
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
            msg = S2C.Task.create();
            this._tasks[uid].serializeNetMsg(msg);
            pck.tasks[uid] = msg;
        }
        return pck;
    }

    private createTask(taskId: number): Task {
        return new Task(taskId);
    }

    private addTask(task: Task) {
        task.uid = ++this._maxUid;
        this._tasks[task.uid] = task;
    }

    sendTaskUpdateProtocol(task: Task) {
        let msg = S2C.SC_UPDATE_TASK.create();
        let taskMsg = S2C.Task.create();
        task.serializeNetMsg(taskMsg);
        msg.tasks[task.uid] = taskMsg;
        this.role.sendProtocol(msg);
    }

    createAndAddTask(taskId: number, bSend2Client: boolean = true): Task {
        let task = this.createTask(taskId);
        if (!task) {
            return null;
        }
        this.addTask(task);
        if (bSend2Client) {
            let msg = S2C.SC_UPDATE_TASK.create();
            let taskMsg = S2C.Task.create();
            task.serializeNetMsg(taskMsg);
            msg.tasks[task.uid] = taskMsg;
            this.role.sendProtocol(msg);
        }
        Log.uInfo(this.role.uid, 'id=%d', taskId);
        return task;
    }

    removeTask(uid, bSend2Client: boolean = true) {
        if (bSend2Client) {
            let msg = S2C.SC_UPDATE_TASK.create();
            msg.tasks[-uid] = S2C.Task.create();
            this.role.sendProtocol(msg);
        }
        delete this._tasks[uid];
        this.makeDirty();
        Log.uInfo(this.role.uid, 'uid=%d', uid);
    }

    getTask(uid, bReadonly: boolean): Task {
        if (!bReadonly) {
            this.makeDirty();
        }
        return this._tasks[uid];
    }

    getAllTask(bReadonly: boolean): { [uid: number]: Task } {
        if (!bReadonly) {
            this.makeDirty();
        }
        return this._tasks;
    }
}