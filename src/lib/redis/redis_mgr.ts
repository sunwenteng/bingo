import * as redis from 'redis';
import {Log} from "../util/log";
import {ErrorCode} from "../util/error_code";
import * as util from 'util';
import Timer = NodeJS.Timer;

const Config = require('../../config/config.json');
/**
 * 管理游戏内部所有redis实例，每个redis连接可能对应多个db
 * @type {{}}
 * @private
 */
const _instances: { [key: string]: RedisMgr } = {};

export enum RedisDB {
    RoleDB = 0,
    GlobalDB = 1
}

export enum RedisType {
    GAME = 'gameRedis'
}

export abstract class RedisData<T> {
    data: T;
    private readonly _dirtyFields: Set<string>;
    private readonly _redisPrefix: string;
    private readonly _redisKeyExpire: number;
    private _isDirty: boolean;

    get dirtyFields(): Set<string> {
        return this._dirtyFields;
    }

    get isDirty(): boolean {
        return this._isDirty;
    }

    get redisKeyExpire(): number {
        return this._redisKeyExpire;
    }

    protected constructor(redisPrefix: string, expireTime: number = 3600) {
        this._dirtyFields = new Set<string>();
        this._isDirty = false;
        this._redisPrefix = redisPrefix;
        this._redisKeyExpire = expireTime;
    }

    /**
     * 会保存脏数据到redis或者同步给前端
     * @param {T} obj
     */
    public set(obj: T) {
        for (let i in obj) {
            this.data[i] = obj[i];
            this._dirtyFields.add(i);
            this._isDirty = true;
        }
    }

    public getRedisKey() {
        if (this.data['uid']) {
            return this._redisPrefix + '_' + this.data['uid'];
        }
        else {
            return this._redisPrefix;
        }
    }

    protected getDataFields(): string[] {
        let ret = [];
        for (let obj in this.data) {
            if (this.data.hasOwnProperty(obj)) {
                ret.push(obj.toString());
            }
        }
        return ret;
    }

    protected deserialize(reply: { [key: string]: any }): void {
        for (let obj in reply) {
            if (this.data.hasOwnProperty(obj)) {
                switch (typeof this.data[obj]) {
                    case 'number' :
                    case 'boolean' :
                        this.data[obj] = parseInt(reply[obj]);
                        break;
                    case 'object' :
                        try {
                            if (reply[obj] === "") {
                                this.data[obj] = {};
                            }
                            else {
                                this.data[obj] = JSON.parse(reply[obj]);
                            }
                        } catch (err) {
                            Log.sError('redis data parse failed, key=%s, val=%s', obj, reply[obj]);
                            this.data[obj] = {};
                        }

                        break;
                    case 'string' :
                        this.data[obj] = reply[obj];
                        break;
                    default:
                        Log.sError('wrong type, key=%s, type=%s', obj, typeof this.data[obj]);
                        break;
                }
            }
        }
    }

    protected serialize(): { [key: string]: any } {
        let reply: { [key: string]: any } = {};
        for (let obj in this.data) {
            if (this.data.hasOwnProperty(obj)) {
                switch (typeof this.data[obj]) {
                    case 'number' :
                    case 'string' :
                    case 'boolean':
                        reply[obj] = this.data[obj];
                        break;
                    case 'object' :
                        reply[obj] = JSON.stringify(this.data[obj]);
                        break;
                    default:
                        Log.sError('wrong type, key=%s, type=%s', obj, typeof this.data[obj]);
                        break;
                }
            }
        }

        return reply;
    }

}

// export function closeAll() {
//     for (let idx in _instances) {
//         _instances[idx].close();
//     }
// }

export class RedisMgr {
    private readonly _name: string;
    private readonly _config: any;
    //_pool模拟数据库连接池，redis的每个db在_pool中对应一个client,结构：{'db1':client1,'db2',client2}
    private readonly _pool: { [db: number]: redis.RedisClient };
    //redis服务是否可用标识,比如在redis服务断开或连不上redis的时候，connected为false
    private _connected: boolean;
    private readonly _aliveTimer: { [db: number]: any };

    constructor(config: any, name: string) {
        this._config = config;
        this._pool = {};
        this._name = name;
        this._connected = false;
        this._aliveTimer = {};
    }

    get connected(): boolean {
        return this._connected;
    }

    public static getInstance(type: RedisType): RedisMgr {
        if (!Config['redis'] || !Config['redis'][type]) {
            throw new Error('Config Not Valid in key redis, not found name=' + type);
        }
        let key = Config['redis'][type].host + '_' + Config['redis'][type].port;
        //如果host_port未创建对应redis实例，则创建
        if (!_instances[key]) {
            _instances[key] = new RedisMgr(Config['redis'][type], Config['redis'][type].name);
        }
        return _instances[key];
    }

    public close() {
        for (let idx in this._pool) {
            this._pool[idx].end(true);
            clearInterval(this._aliveTimer[idx]);
            Log.sInfo('redis close successfully, name=' + this._name + ', db=' + idx);
        }
    }

    //根据db从实例的连接池中获取对应的client
    private async getClient(db: number): Promise<redis.RedisClient> {
        return new Promise<redis.RedisClient>(((resolve, reject) => {
            //如果池中已经有该db对应的连接
            if (this._pool[db]) {
                if (this._connected === false) { //redis服务出问题的时候，返回redis不可用错误码
                    reject(ErrorCode.REDIS.ERROR);
                }
                resolve(this._pool[db]);
            }
            else {
                //创建该db的连接
                this._connected = true;
                this._pool[db] = redis.createClient(this._config.port, this._config.host, this._config.options);
                Log.sInfo('name=%s, redis create client %s:%s default db:%s', this._name, this._config['host'], this._config['port'], db);

                //监听redis的error事件
                this._pool[db].on('error', (error) => {
                    //redis服务关闭
                    if (error.toString().indexOf('ECONNREFUSED') >= 0) {
                        this._connected = false;
                    }
                    Log.sError('name=%s, redis connect %s:%s db:%s fail ' + error, this._name, this._config.host, this._config.port, db);
                });

                //监听redis的连接事件
                this._pool[db].on('connect', (error) => {
                    this._connected = true;
                    Log.sInfo('name=%s, redis connect succ!', this._name);
                    //client选择对应db
                    this._pool[db].select(db, (error) => {
                        if (error) {
                            Log.sError('name=%s, redis select error ' + error, this._name);
                            reject(ErrorCode.REDIS.SELECT_ERROR);
                        } else {
                            // 定时使用连接，keeplive
                            this._aliveTimer[db] = setInterval(() => {
                                Log.sInfo('name=%s, redis keeplive,db:' + db, this._name);
                                this._pool[db].set('redis_keeplive_' + db, Date.now().toString());
                            }, 3 * 60 * 1000);
                            resolve(this._pool[db]);
                        }
                    });
                });
            }
        }));
    }

    public async dbsize(db: number = 0): Promise<number> {
        let client = await this.getClient(db);
        return new Promise<number>(((resolve, reject) => {
            client.dbsize((error, reply: number) => {
                if (error) {
                    reject(ErrorCode.REDIS.DBSZIE_ERROR);
                }
                else {
                    resolve(reply);
                }
            });
        }));
    }

    public async expire(key: string, expire: number, db: number = 0): Promise<void> {
        //Log.sInfo('name=%s, redis expire %s %s', this._name, key, expire);
        let client = await this.getClient(db);
        return new Promise<void>(((resolve, reject) => {
            client.expire(key, expire, (error) => {
                if (error) {
                    Log.sError('name=%s, redis expire error ' + error, this._name);
                    reject(ErrorCode.REDIS.EXPIRE_ERROR);
                } else {
                    resolve();
                }
            });
        }));
    }

    public async setnx(key: string, value: any, db: number = 0): Promise<boolean> {
        Log.sInfo('name=%s, redis setnx %s %s', this._name, key, value);
        let client = await this.getClient(db);
        return new Promise<boolean>(((resolve, reject) => {
            client.setnx(key, value, (error, reply) => {
                if (error) {
                    Log.sError('name=%s, redis set error ' + error, this._name);
                    reject(ErrorCode.REDIS.SET_ERROR);
                } else {
                    resolve(reply === 1);
                }
            });
        }));
    }

    public async lock<T>(key: string, callback: () => Promise<T>, lockTime: number = 5000) {
        let mutexKey = key + '_mutex';
        let success = await this.setWithParams(mutexKey, 1, 'PX', lockTime, 'NX');
        if (!success) {
            setTimeout(async () => {
                await this.lock(key, callback);
            }, 10);
        }
        else {
            await callback();
            await this.del(mutexKey);
        }
    }

    public async setWithParams(key: string, value: any, mod: string, duration: number, flag: string, db: number = 0): Promise<boolean> {
        Log.sInfo('name=%s, redis set %s %s %s %d %s', this._name, key, value, mod, duration, flag);
        let client = await this.getClient(db);
        return new Promise<boolean>(((resolve, reject) => {
            client.set(key, value, mod, duration, flag, (error, reply) => {
                if (error) {
                    Log.sError('name=%s, redis set error ' + error, this._name);
                    reject(ErrorCode.REDIS.SET_ERROR);
                } else {
                    resolve(reply === 'OK');
                }
            });
        }));
    }

    public async set(key: string, value: any, db: number = 0): Promise<boolean> {
        Log.sInfo('name=%s, redis set %s %s', this._name, key, value);
        let client = await this.getClient(db);
        return new Promise<boolean>(((resolve, reject) => {
            client.set(key, value, (error, reply) => {
                if (error) {
                    Log.sError('name=%s, redis set error ' + error, this._name);
                    reject(ErrorCode.REDIS.SET_ERROR);
                } else {
                    resolve(reply === 'OK');
                }
            });
        }));
    }

    public async get(key: string, db: number = 0): Promise<string> {
        Log.sInfo('name=%s, redis get %s', this._name, key);
        let client = await this.getClient(db);
        return new Promise<string>(((resolve, reject) => {
            client.get(key, (error, reply) => {
                if (error) {
                    Log.sError('name=%s, redis get error ' + error, this._name);
                    reject(ErrorCode.REDIS.GET_ERROR);
                } else {
                    resolve(reply);
                }
            });
        }));
    }

    public async incr(key: string, db: number = 0): Promise<void> {
        Log.sInfo('name=%s, redis incr %s', this._name, key);
        let client = await this.getClient(db);
        return new Promise<void>(((resolve, reject) => {
            client.incr(key, (error) => {
                if (error) {
                    Log.sError('name=%s, redis incr error ' + error, this._name);
                    reject(ErrorCode.REDIS.INCR_ERROR);
                } else {
                    resolve();
                }
            });
        }));
    }

    public async del(key: string, db: number = 0): Promise<void> {
        Log.sInfo('name=%s, redis del %s', this._name, key);
        let client = await this.getClient(db);
        return new Promise<void>(((resolve, reject) => {
            client.del(key, (error) => {
                if (error) {
                    Log.sError('name=%s, redis del error ' + error, this._name);
                    reject(ErrorCode.REDIS.DEL_ERROR);
                } else {
                    resolve();
                }
            });
        }));
    }

    public async hset(hkey: string, key: string, value: any, db: number = 0): Promise<void> {
        Log.sInfo('name=%s, redis hset %s %s %s', this._name, hkey, key, value);
        let client = await this.getClient(db);
        return new Promise<void>(((resolve, reject) => {
            client.hset(hkey, key, value, (error) => {
                if (error) {
                    Log.sError('name=%s, hset error ' + error, this._name);
                    return reject(ErrorCode.REDIS.HSET_ERROR);
                } else {
                    return resolve();
                }
            });
        }));
    }

    public async hsetnx(hkey: string, key: string, value: any, db: number = 0): Promise<boolean> {
        Log.sInfo('name=%s, redis hsetnx %s %s %s', this._name, hkey, key, value);
        let client = await this.getClient(db);
        return new Promise<boolean>(((resolve, reject) => {
            client.hsetnx(hkey, key, value, (error, reply) => {
                if (error) {
                    Log.sError('name=%s, hset error ' + error, this._name);
                    return reject(ErrorCode.REDIS.HSET_ERROR);
                } else {
                    return resolve(reply === 1);
                }
            });
        }));
    }

    public async hmset(hkey: string, obj: { [key: string]: any }, expire: number = 0, db: number = 0): Promise<void> {
        Log.sInfo('name=%s, redis hmset %s, data=%j', this._name, hkey, obj);
        let client = await this.getClient(db);
        return new Promise<void>(((resolve, reject) => {
            client.hmset(hkey, obj, (error) => {
                if (error) {
                    Log.sError('name=%s, redis hmset error ' + error, this._name);
                    reject(ErrorCode.REDIS.HMSET_ERROR);
                } else {
                    if (expire > 0) {
                        client.expire(hkey, expire, () => {
                        });
                    }
                    resolve();
                }
            });
        }));
    }

    public async hmget(key, value: string[] | string, db: number = 0): Promise<{ [key: string]: any }> {
        Log.sInfo('name=%s, redis hmget %s %s', this._name, key, util.inspect(value));
        let client = await this.getClient(db);
        return new Promise<{ [key: string]: any }>(((resolve, reject) => {
            client.hmget(key, value, (error, reply) => {
                if (error) {
                    Log.sError('name=%s, redis hmget error: ' + error, this._name);
                    reject(ErrorCode.REDIS.HMGET_ERROR);
                } else {
                    //将结果以键值对的形式返回
                    let ret = {};
                    for (let i = 0; i < value.length; i++) {
                        if (reply[i])
                            ret[value[i]] = reply[i];
                    }
                    resolve(ret);
                }
            });
        }));
    }

    public async hincrby(hkey: string, key: string, incrValue: number, db: number = 0): Promise<void> {
        Log.sInfo('name=%s, redis hincrby %s %s +%s', this._name, hkey, key, incrValue);
        let client = await this.getClient(db);
        return new Promise<void>(((resolve, reject) => {
            client.hincrby(hkey, key, incrValue, (error, reply) => {
                if (error) {
                    Log.sError('name=%s, redis hincrby error ' + error, this._name);
                    reject(ErrorCode.REDIS.HINCRBY_ERROR);
                } else {
                    resolve();
                }
            });
        }));
    }

    public async hgetall(hkey: string, db: number = 0): Promise<{ [key: string]: string }> {
        Log.sInfo('name=%s, redis hgetall %s', this._name, hkey);
        let client = await this.getClient(db);
        return new Promise<{ [key: string]: string }>(((resolve, reject) => {
            client.hgetall(hkey, (error, reply) => {
                if (error) {
                    Log.sError('name=%s, redis hgetall error ' + error, this._name);
                    reject(ErrorCode.REDIS.HGETALL_ERROR);
                } else {
                    resolve(reply);
                }
            });
        }));
    }

    public async zadd(key, arr: any[], expire?: number, db: number = 0): Promise<void> {
        Log.sInfo('name=%s, redis zadd', this._name);
        let client = await this.getClient(db);
        return new Promise<void>(((resolve, reject) => {
            client.zadd(key, arr, (error) => {
                if (error) {
                    Log.sError('name=%s, redis zadd error ' + error, this._name);
                    reject(ErrorCode.REDIS.ZADD_ERROR);
                } else {
                    if (expire > 0) {
                        client.expire(key, expire);
                    }
                    resolve();
                }
            });
        }));
    }

    /**
     * 获取start end之间玩家的排行数据
     * @param key
     * @param start
     * @param end
     * @param callback
     * @param db
     */
    public async zrevrange(key: string, start: number, end: number, db: number = 0): Promise<string[]> {
        Log.sInfo('name=%s, redis zrevrange key=%s, start=%d, end=%d', this._name, key, start, end);
        let client = await this.getClient(db);
        return new Promise<string[]>(((resolve, reject) => {
            client.zrevrange(key, start, end, 'WITHSCORES', (error, reply) => {
                if (error) {
                    Log.sError('name=%s, redis zrevange error ' + error, this._name);
                    reject(ErrorCode.REDIS.ZREVRANGE_ERROR);
                } else {
                    resolve(reply);
                }
            });
        }));
    }

    /**
     * 获取键值为key的有序集合中field的排行
     * @param key
     * @param field
     * @param db
     */
    public async zrevrank(key: string, field: string, db: number = 0): Promise<number> {
        Log.sInfo('name=%s, redis zrevrank key=%s, field=%s', this._name, key, field);
        let client = await this.getClient(db);
        return new Promise<number>(((resolve, reject) => {
            client.zrevrank(key, field, (error, reply) => {
                if (error) {
                    Log.sError('name=%s, redis zrevrank error ' + error, this._name);
                    reject(ErrorCode.REDIS.GETRANGE_ERROR);
                } else {
                    resolve(reply);
                }
            });
        }));
    }

    /**
     * 获取键值在排行中的分数
     * @param key
     * @param field
     * @param db
     */
    public async zscore(key: string, field: string, db: number = 0): Promise<string> {
        Log.sInfo('name=%s, redis score key=%s, field=%s', this._name, key, field);
        let client = await this.getClient(db);
        return new Promise<string>(((resolve, reject) => {
            client.zscore(key, field, (error, reply) => {
                if (error) {
                    Log.sError('name=%s, redis zscore error ' + error, this._name);
                    reject(ErrorCode.REDIS.ZSCORE_ERROR);
                } else {
                    resolve(reply);
                }
            });
        }));
    }

    public async sadd(key: string, member: any, db: number = 0): Promise<void> {
        Log.sInfo('name=%s, redis sadd key=%s, member=%s', this._name, key, member);
        let client = await this.getClient(db);
        return new Promise<void>(((resolve, reject) => {
            client.sadd(key, member, (error) => {
                if (error) {
                    Log.sError('name=%s, redis sadd error ' + error, this._name);
                    reject(ErrorCode.REDIS.SADD_ERROR);
                } else {
                    resolve();
                }
            });
        }));
    }

    public async smembers(key: string, db: number = 0): Promise<string[]> {
        Log.sInfo('name=%s, redis smember key=%s', this._name, key);
        let client = await this.getClient(db);
        return new Promise<string[]>(((resolve, reject) => {
            client.smembers(key, (error, reply) => {
                if (error) {
                    Log.sError('name=%s, redis smember error ' + error, this._name);
                    reject(ErrorCode.REDIS.SMEMBERS_ERROR);
                } else {
                    resolve(reply);
                }
            });
        }));
    }

    public async srem(key: string, fields: any | any[], db: number = 0): Promise<void> {
        Log.sInfo('name=%s, redis srem key=%s fields=%s', this._name, key, fields);
        let client = await this.getClient(db);
        return new Promise<void>(((resolve, reject) => {
            client.srem(key, fields, (error, reply) => {
                if (error) {
                    Log.sError('name=%s, redis srem error ' + error, this._name);
                    reject(ErrorCode.REDIS.SREM_ERROR);
                } else {
                    resolve();
                }
            });
        }));
    }

    public async spop(key: string, db: number = 0): Promise<string> {
        Log.sInfo('name=%s, redis spop key=%s', this._name, key);
        let client = await this.getClient(db);
        return new Promise<string>(((resolve, reject) => {
            client.spop(key, (error, reply) => {
                if (error) {
                    Log.sError('name=%s, redis spop error ' + error, this._name);
                    reject(ErrorCode.REDIS.SREM_ERROR);
                } else {
                    resolve(reply);
                }
            });
        }));
    }

}
