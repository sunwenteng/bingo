import * as redis from 'redis';
import {Log} from "../util/Log";
import {ErrorCode} from "../util/error_code";

const config = Global.config['redis'];

/**
 * 管理游戏内部所有redis实例，每个redis连接可能对应多个db
 * @type {{}}
 * @private
 */
const _instances:{[key:string]:RedisMgr} = {};

class RedisMgr {
    name = '';
    config = null;
    //pool模拟数据库连接池，redis的每个db在pool中对应一个client,结构：{'db1':client1,'db2',client2}
    pool:{[db:number]:redis.RedisClient} = {};
    //redis服务是否可用标识,比如在redis服务断开或连不上redis的时候，connected为false
    connected:boolean = false;

    constructor(config) {
        this.config = config;
    }

    public static getInstance(redisConfigName:string):RedisMgr {
        let redisConfig = config[redisConfigName];
        let _key = redisConfig.host + '_' + redisConfig.port;
        //如果host_port未创建对应redis实例，则创建
        if (!_instances[_key]) {
            _instances[_key] = new RedisMgr(redisConfig);
            _instances[_key].name = redisConfigName;
        }
        return _instances[_key];
    }

    //根据db从实例的连接池中获取对应的client
    private getClient(db:number, callback:(err, client?:redis.RedisClient)=>void) {
        //如果池中已经有该db对应的连接
        if (this.pool[db]) {
            if (this.connected === false) { //redis服务出问题的时候，返回redis不可用错误码
                return callback(ErrorCode.REDIS.ERROR);
            }
            return callback(null, this.pool[db]);
        }

        //创建该db的连接
        this.connected = true;
        this.pool[db] = redis.createClient(this.config['port'], this.config['host'], this.config['options']);
        //Log.sInfo('name=%s, redis create client %s:%s default db:%s', this.name, this.config['host'], this.config['port'], db);

        //监听redis的error事件
        this.pool[db].on('error', (error) => {
            //redis服务关闭
            if (error.toString().indexOf('ECONNREFUSED') >= 0) {
                this.connected = false;
                Global.stateInfo.canLogin = false;
                Global.stateInfo.errorCode = ErrorCode.REDIS.ERROR;
            }
            Log.sError('name=%s, redis connect %s:%s db:%s fail ' + error, this.name, this.config['host'], this.config['port'], db);
        });

        //监听redis的连接事件
        this.pool[db].on('connect', (error) => {
            this.connected = true;
            //Log.sInfo('name=%s, redis connect succ!', this.name);
            if (Global.stateInfo.errorCode === ErrorCode.REDIS.ERROR) {
                Global.stateInfo.canLogin = true;
                Global.stateInfo.errorCode = ErrorCode.NO_ERROR;
            }

            //client选择对应db
            this.pool[db].select(db, (error) => {
                if (error) {
                    Log.sError('name=%s, redis select error ' + error, this.name);
                    return callback(ErrorCode.REDIS.SELECT_ERROR);
                } else {
                    // 定时使用连接，keeplive
                    setInterval(()=> {
                        //Log.sInfo('name=%s, redis keeplive,db:' + db, this.name);
                        this.pool[db].set('redis_keeplive_' + db, new Date(), () => {
                        });
                    }, 3 * 60 * 1000);
                    return callback(null, this.pool[db]);
                }
            });
        });
    }

    public dbsize(callback:redis.ResCallbackT<number>, db:number = 0) {
        //Log.sInfo('name=%s, redis dbsize %s', this.name, db);
        this.getClient(db, (error, client) => {
            if (error) {
                return callback(error);
            }
            client.dbsize((err, reply) => {
                if (err) {
                    Log.sError('name=%s, redis dbsize error:' + error, this.name);
                }
                return callback(err, reply);
            });
        });
    }

    public expire(key:string, expire:number, callback:redis.ResCallbackT<any>, db:number = 0) {
        //Log.sInfo('name=%s, redis expire %s %s', this.name, key, expire);
        this.getClient(db, (error, client) => {
            if (error) {
                return callback(error);
            }
            client.expire(key, expire, (error) => {
                if (error) {
                    Log.sError('name=%s, redis expire error ' + error, this.name);
                    return callback(ErrorCode.REDIS.EXPIRE_ERROR);
                } else {
                    return callback(null);
                }
            });
        });
    }

    public set(key:string, value:any, expire:number, callback:redis.ResCallbackT<any>, db:number = 0) {
        //Log.sInfo('name=%s, redis set %s %s', this.name, key, value);
        this.getClient(db, (error, client) => {
            if (error) {
                return callback(error);
            }
            client.set(key, value, (error) => {
                if (error) {
                    Log.sError('name=%s, redis set error ' + error, this.name);
                    return callback(ErrorCode.REDIS.SET_ERROR);
                } else {
                    if (expire > 0) {
                        client.expire(key, expire, () => {
                        }); //不捕获expire是否成功
                    }
                    return callback(0);
                }
            });
        });
    }

    public get(key:string, callback:redis.ResCallbackT<any>, db:number = 0) {
        //Log.sInfo('name=%s, redis get %s', this.name, key);
        this.getClient(db, (error, client) => {
            if (error) {
                return callback(error);
            }
            client.get(key, (error, reply) => {
                if (error) {
                    Log.sError('name=%s, redis get error ' + error, this.name);
                    return callback(ErrorCode.REDIS.GET_ERROR);
                } else {
                    return callback(0, reply);
                }
            });
        });
    }

    public incr(key:string, callback:redis.ResCallbackT<any>, db:number = 0) {
        //Log.sInfo('name=%s, redis incr %s', this.name, key);
        this.getClient(db, (error, client) => {
            if (error) {
                return callback(error);
            }

            client.incr(key, (error) => {
                if (error) {
                    Log.sError('name=%s, redis incr error ' + error, this.name);
                    return callback(ErrorCode.REDIS.INCR_ERROR);
                } else {
                    return callback(0);
                }
            });
        });
    }

    public del(key:string, callback:redis.ResCallbackT<any>, db:number = 0) {
        ////Log.sInfo('name=%s, redis del %s', this.name, key);
        this.getClient(db, (error, client) => {
            if (error) {
                return callback(error);
            }
            client.del(key, (error) => {
                if (error) {
                    Log.sError('name=%s, redis del error ' + error, this.name);
                    return callback(ErrorCode.REDIS.DEL_ERROR);
                } else {
                    return callback(0);
                }
            });
        });
    }

    public hset(hkey:string, key:string, value:any, callback:redis.ResCallbackT<any>, db:number = 0) {
        //Log.sInfo('name=%s, redis hset %s %s %s', this.name, hkey, key, value);
        this.getClient(db, (error, client) => {
            if (error) {
                return callback(error);
            }
            client.hset(hkey, key, value, (error) => {
                if (error) {
                    Log.sError('name=%s, hset error ' + error, this.name);
                    return callback(ErrorCode.REDIS.HSET_ERROR);
                } else {
                    return callback(0);
                }
            });
        });
    }

    public hmset(hkey:string, obj:{[key:string]:any}, expire:number, callback:redis.ResCallbackT<any>, db:number = 0) {
        //Log.sInfo('name=%s, redis hmset %s, data=%j', this.name, hkey, obj);
        this.getClient(db, (error, client) => {
            if (error) {
                return callback(error);
            }

            let arr = [hkey];
            for(let key in obj) {
                arr.push(key);
                arr.push(obj[key]);
            }
            client.hmset(arr, (error) => {
                if (error) {
                    Log.sError('name=%s, redis hmset error ' + error, this.name);
                    return callback(ErrorCode.REDIS.HMSET_ERROR);
                } else {
                    if (expire > 0) {
                        client.expire(hkey, expire, () => {
                        });
                    }
                    return callback(0);
                }
            });
        });
    }

    /**
     * 查询的都不存在的情况，返回一个空的object，换言之，数据不存在的key是不在返回结果KV对的
     * @param hkey
     * @param value
     * @param callback
     * @param db
     */
    public hmget(hkey, value:string[], callback:redis.ResCallbackT<{[key:string]:any}>, db:number = 0) {
        //Log.sInfo('name=%s, redis hmget %s %s', this.name, hkey, util.inspect(value));
        this.getClient(db, (error, client) => {
            if (error) {
                return callback(error, null);
            }

            let arr = [hkey].concat(value);
            client.hmget(arr, (error, reply) => {
                if (error) {
                    Log.sError('name=%s, redis hmget error: ' + error, this.name);
                    return callback(ErrorCode.REDIS.HMGET_ERROR, null);
                } else {
                    //将结果以键值对的形式返回
                    let replyJson:{[key:string]:any} = {};
                    for (let i = 0; i < value.length; i++) {
                        if(reply[i])
                            replyJson[value[i]] = reply[i];
                    }
                    return callback(error, replyJson);
                }
            });
        });
    }

    public hincrby(hkey:string, key:string, incrValue:number, callback:redis.ResCallbackT<number>, db:number = 0) {
        //Log.sInfo('name=%s, redis hincrby %s %s +%s', this.name, hkey, key, incrValue);
        this.getClient(db, (error, client) => {
            if (error) {
                return callback(error);
            }
            client.hincrby(hkey, key, incrValue, (error, reply) => {
                if (error) {
                    Log.sError('name=%s, redis hincrby error ' + error, this.name);
                    return callback(ErrorCode.REDIS.HINCRBY_ERROR);
                } else {
                    return callback(0, reply);
                }
            });
        });
    }

    public hgetall(hkey:string, callback:redis.ResCallbackT<any>, db:number = 0) {
        //Log.sInfo('name=%s, redis hgetall %s', this.name, hkey);
        this.getClient(db, (error, client) => {
            if (error) {
                return callback(error);
            }

            client.hgetall(hkey, (error, reply) => {
                if (error) {
                    Log.sError('name=%s, redis hgetall error ' + error, this.name);
                    return callback(ErrorCode.REDIS.HGETALL_ERROR);
                } else {
                    return callback(error, reply);
                }
            });
        });
    }

    public zadd(arrObj:any[], expire:number, callback:redis.ResCallbackT<any>, db:number = 0) {
        //Log.sInfo('name=%s, redis zadd', this.name);
        this.getClient(db, (error, client) => {
            if (error) {
                return callback(error);
            }

            client.zadd(arrObj, (error) => {
                if (error) {
                    Log.sError('name=%s, redis zadd error ' + error, this.name);
                    return callback(ErrorCode.REDIS.ZADD_ERROR);
                } else {
                    if (expire > 0) {
                        client.expire(arrObj[0], expire, () => {
                        });
                    }
                    return callback(0);
                }
            });
        });
    }

    /**
     * 获取start end之间玩家的排行数据
     * @param key
     * @param start
     * @param end
     * @param callback
     * @param db
     */
    public zrevrange(key:string, start:number, end:number, callback, db) {
        //Log.sInfo('name=%s, redis zrevrange key=%s, start=%d, end=%d', this.name, key, start, end);
        this.getClient(db, (error, client) => {
            if (error) {
                return callback(error);
            }
            client.zrevrange([key, start, end, 'WITHSCORES'], (error, reply) => {
                if (error) {
                    Log.sError('name=%s, redis zrevange error ' + error, this.name);
                    return callback(ErrorCode.REDIS.ZREVRANGE_ERROR);
                } else {
                    return callback(0, reply);
                }
            });
        });
    }

    /**
     * 获取键值为key的有序集合中field的排行
     * @param key
     * @param field
     * @param callback
     * @param db
     */
    public zrevrank(key:string, field:string, callback:redis.ResCallbackT<number>, db:number = 0) {
        //Log.sInfo('name=%s, redis zrevrank key=%s, field=%s', this.name, key, field);
        this.getClient(db, (error, client) => {
            if (error) {
                return callback(error);
            }
            client.zrevrank([key, field], (error, reply) => {
                if (error) {
                    Log.sError('name=%s, redis zrevrank error ' + error, this.name);
                    return callback(ErrorCode.REDIS.GETRANGE_ERROR);
                } else {
                    return callback(0, reply);
                }
            });
        });
    }

    /**
     * 获取键值在排行中的分数
     * @param key
     * @param field
     * @param callback
     * @param db
     */
    public zscore(key:string, field:string, callback:redis.ResCallbackT<number>, db) {
        //Log.sInfo('name=%s, redis score key=%s, field=%s', this.name, key, field);
        this.getClient(db, (error, client) => {
            if (error) {
                return callback(error);
            }
            client.zscore([key, field], (error, reply) => {
                if (error) {
                    Log.sError('name=%s, redis zscore error ' + error, this.name);
                    return callback(ErrorCode.REDIS.ZSCORE_ERROR);
                } else {
                    return callback(0, reply);
                }
            });
        });
    }
}

export = RedisMgr;