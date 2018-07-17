import {DirtyModel} from "./model";
import {dirtyField} from "../../../lib/util/descriptor";
import * as WorldDB from "../../../lib/mysql/world_db";
import {GameWorld, WorldDataRedisKey} from "../game_world";
import {RedisMgr, RedisType} from "../../../lib/redis/redis_mgr";

let gameRedis = RedisMgr.getInstance(RedisType.GAME);

const MAX_LOG_SIZE = 50;

export enum EGuildTilte {
    owner = 0,
    vice_owner = 1,
    normal = 2,
}

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
    @dirtyField() members: { [uid: number]: EGuildTilte } = {};
    @dirtyField() applicants: { [uid: number]: number } = {}; // uid - createTime
    @dirtyField() logs: GuildLog[] = [];
    @dirtyField() notice: string = '';
    @dirtyField() createTime: number = Date.now();

    constructor(uid:number, guildName?: string, iconId?: number) {
        super();
        if (guildName && iconId) {
            this.iconId = iconId;
            this.guildName = guildName;
        }
    }

    async load(): Promise<boolean> {
        return new Promise<boolean>(async resolve => {
            if (!this.uid) {
                resolve(false);
            }
            else {
                let key = Guild.getRedisKey(this.uid);
                let reply = await gameRedis.hmget(key, Object.keys(this.fields));
                if (Object.keys(reply).length === 0) {
                    let ret = await WorldDB.conn.execute('select * from guild where ?', {
                        uid: this.uid,
                        valid: true,
                    });

                    if (ret.length === 0) {
                        resolve(false);
                    }
                    else {
                        this.deserialize(ret[0]);
                        await gameRedis.hmset(key, this.serialize(true));
                        resolve(true);
                    }
                }
                else {
                    this.deserialize(reply);
                    resolve(true);
                }
            }
        });
    }

    async save(bSaveAll: boolean = false) {
        let saveData = this.serialize(bSaveAll);
        if (Object.keys(saveData).length === 0) {
            return;
        }
        // 同步存储到redis
        await gameRedis.hmset(Guild.getRedisKey(this.uid), saveData);
        // 往脏数据集合添加
        await gameRedis.sadd(WorldDataRedisKey.DIRTY_GUILDS, this.uid);
    }

    async create() {
        this.serverId = GameWorld.instance.info.server_id;
        let saveData = this.serialize(true, {uid: ''});
        let result = await WorldDB.conn.execute('insert into guild set ?', saveData);
        this.uid = result['insertId'];
    }

    serialize(bAll: boolean, excludeKey?: Object): { [key: string]: string } {
        let checkFields = bAll ? this.fields : this.dirtyFields;
        let ret = {};
        for (let k in checkFields) {
            if (excludeKey && excludeKey.hasOwnProperty(k)) {
                continue;
            }
            if (typeof this.fields[k] === 'object') {
                ret[k] = JSON.stringify(this.fields[k]);
            }
            else {
                ret[k] = this.fields[k];
            }
        }
        return ret;
    }

    static getRedisKey(uid) {
        return 'hash_guild_' + uid;
    }

    deserialize(data: { [key: string]: any }) {
        for (let k in data) {
            if (!this.has(k)) {
                throw new Error(k + ' not in guild define');
            }

            if (typeof this.fields[k] === 'object') {
                this.fields[k] = JSON.parse(data[k]);
            }
            else {
                this.fields[k] = data[k];
            }
        }
    }

    addMember(uid: number, title: EGuildTilte): boolean {
        if (this.members.hasOwnProperty(uid)) {
            return false;
        }

        this.members[uid] = title;
        return true;
    }

    removeMember(uid: number): boolean {
        if (!this.members.hasOwnProperty(uid)) {
            return false;
        }

        delete this.members[uid];
        return true;
    }

    addApplicant(uid: number): boolean {
        if (this.applicants.hasOwnProperty(uid)) {
            this.applicants[uid] = Date.now();
            return false;
        }
        this.applicants[uid] = Date.now();
        return true;
    }

    removeApplicant(uid: number) {
        if (!this.applicants.hasOwnProperty(uid)) {
            return false;
        }
        delete this.applicants[uid];
        return true;
    }

    addLog(logId: number, param: any[]) {
        if (this.logs.length >= MAX_LOG_SIZE) {
            this.logs.shift();
        }
        this.logs.push({logId: logId, param: param, createTime: Date.now()});
    }
}