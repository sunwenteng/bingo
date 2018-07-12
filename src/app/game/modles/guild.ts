import {DirtyModel} from "./model";
import {dirtyField} from "../../../lib/util/descriptor";

const MAX_LOG_SIZE = 50;

interface GuildLog {
    logId: number;
    param: any[];
    createTime: number;
}

export class Guild extends DirtyModel {
    @dirtyField() uid: number = 0;
    @dirtyField() guildName: string = '';
    @dirtyField() serverId: number = 0;
    @dirtyField() iconId: number = 0;
    @dirtyField() level: number = 0;
    @dirtyField() exp: number = 0;
    @dirtyField() gold: number = 0;
    @dirtyField() members: Set<number> = new Set<number>();
    @dirtyField() applicants: Set<number> = new Set<number>();
    @dirtyField() logs: GuildLog[] = [];
    @dirtyField() notice: string = '';
    @dirtyField() createTime: number = Date.now();

    constructor(uid?: number, guildName?: string, iconId?: number) {
        super();
        if (uid && guildName && iconId) {
            this.uid = uid;
            this.iconId = iconId;
            this.guildName = guildName;
        }
    }

    serialize(): { [key: string]: string } {
        let ret = {};
        for (let k in this.fields) {
            if (typeof this.fields[k] === 'object') {
                ret[k] = JSON.stringify(this.fields[k]);
            }
            else {
                ret[k] = this.fields[k];
            }
        }
        return ret;
    }

    getRedisKey() {
        return 'guild_' + this.uid;
    }

    deserialize(data: string) {
        this.fields = JSON.parse(data);
    }

    addMember(uid: number) {
        this.members.add(uid);
    }

    removeMember(uid: number) {
        this.members.delete(uid);
    }

    addApplicant(uid: number) {
        this.applicants.add(uid);
    }

    removeApplicant(uid: number) {
        this.applicants.delete(uid);
    }

    addLog(logId: number, param: any[]) {
        this.logs.push({logId: logId, param: param, createTime: Date.now()});
    }
}