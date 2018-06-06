import {Log} from '../../lib/util/log';
import Time = require('../../lib/util/time');
import {RedisMgr, RedisType, RedisData} from '../../lib/redis/redis_mgr';
import * as WorldDB from '../../lib/mysql/world_db';
import {RoleData} from "./defines";
import {WorldDataRedisKey} from "./world";

let roleRedis = RedisMgr.getInstance(RedisType.GAME);
export const RoleRedisPrefix: string = 'role';

export class Role extends RedisData<RoleData> {
    constructor(uid: number) {
        super(RoleRedisPrefix);
        this.data = new RoleData();
        this.data.uid = uid;
        this.data.nickname = '';
        this.data.headimgurl = '';
        this.data.diamond = 0;
        this.data.exp = 0;
        this.data.gold = 100;
        this.data.level = 1;
        this.data.lastLoginTime = Time.realNow();
        this.data.lastAliveTime = Time.realNow();
        this.data.createTime = 0;

        this.data.heroes = {};
        this.data.equips = {};
        this.data.res = {};
        this.data.techs = {};
        this.data.pve = {};
        this.data.pvp = {};
        //TODO 所有新属性必须初始化下
    }

    public async save(bSaveAll: boolean = false, async: boolean = false): Promise<void> {
        return new Promise<void>(async (resolve) => {
            await roleRedis.lock(this.getRedisKey(), async () => {
                if (this.isDirty) {
                    let saveData = this.getSaveData(bSaveAll);
                    // 同步存储到redis
                    await roleRedis.hmset(this.getRedisKey(), saveData, this.redisKeyExpire);
                    // 往脏数据集合添加
                    await roleRedis.sadd(WorldDataRedisKey.DIRTY_ROLES, this.data.uid);
                    // 这种做法保证缓存数据最新，数据库会有部分脏数据
                    resolve();
                }
            });
        });
    }

    public async load(): Promise<boolean> {
        return new Promise<boolean>(async (resolve) => {
            if (!this.data.uid || this.data.uid === 0) {
                return resolve(false);
            }
            await roleRedis.lock(this.getRedisKey(), async () => {
                let reply = await roleRedis.hmget(this.getRedisKey(), this.getDataFields());
                // 缓存不存在，从db查询然后放到缓存
                if (Object.keys(reply).length === 0) {
                    let result = await WorldDB.conn.execute('select * from player_info_' + this.getTableNum() + ' where ?', {uid: this.data.uid});

                    if (!result || result.length === 0) {
                        resolve(false);
                    }
                    else {
                        await roleRedis.hmset(this.getRedisKey(), result[0], this.redisKeyExpire);
                        this.deserialize(result[0]);
                        resolve(true);
                    }
                }
                // 缓存命中
                else {
                    // TODO 命中后可以考虑延长role存续时间
                    this.deserialize(reply);
                    resolve(true);
                }
            });
        });
    }

    public getSaveData(bSaveAll): { [key: string]: any } {
        let pckData = this.serialize();
        let checkFields = bSaveAll ? this.data : this.dirtyFields;
        let saveData: { [key: string]: any } = {};
        for (let obj in checkFields) {
            if (checkFields.hasOwnProperty(obj))
                saveData[obj] = pckData[obj];
        }
        return saveData;
    }

    public async create() {
        this.set({createTime: Time.realNow()});
        let pckData = this.serialize();
        await WorldDB.conn.execute('insert into player_info_' + this.getTableNum() + ' set ?', pckData);
    }

    public getTableNum(): number {
        return this.data.uid % WorldDB.conn.config.tableSplitCount;
    }
}