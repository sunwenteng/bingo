import {Log} from "./log";
import {Role} from "../../app/game/modles/role";
import {RedisMgr, RedisType} from "../redis/redis_mgr";
import {BaseModel} from "../../app/game/modles/base_model";
import {GameWorld, WorldDataRedisKey} from "../../app/game/game_world";
import {C2S} from "../../app/proto/cmd";
import ERankType = C2S.CS_RANK_GET_RANK.ERankType;

/**
 * 类函数装饰器，计算函数执行是
 * @param {boolean} bToLog
 * @returns {(target: Object, methodName: string, descriptor: TypedPropertyDescriptor<Function>) => void}
 */
export function execTime(bToLog: boolean = true) {
    return (target: Object, methodName: string, descriptor: TypedPropertyDescriptor<Function>) => {
        let originalMethod = descriptor.value;
        descriptor.value = async function (...args) {
            let start = Date.now();
            let returnValue = null;
            if (Object.prototype.toString.call(originalMethod) === "[object AsyncFunction]") {
                returnValue = await originalMethod.apply(this, args);
            }
            else {
                returnValue = originalMethod.apply(this, args);
            }
            let end = Date.now();
            if (bToLog) {
                Log.sInfo('time consumed: ' + this.constructor.name + ':' + methodName + ': ' + (end - start) + 'ms');
            }
            else {
                console.log('time consumed: ' + this.constructor.name + ':' + methodName + ': ' + (end - start) + 'ms');
            }
            return returnValue;
        };
    };
}

let gameRedis = RedisMgr.getInstance(RedisType.GAME);

// export function controller(readonly: boolean = false, lock: boolean = false, mask?: ERoleMask[] | ERoleMask) {
export function controller() {
    return (target: Object, methodName: string, descriptor: TypedPropertyDescriptor<Function>) => {
        let originalMethod = descriptor.value;
        descriptor.value = async (...args) => {
            let role: Role = args[0].role;
            if (!role) {
                throw new Error('no role in session');
            }
            args[0] = role;
            return await gameRedis.lock(role.getRedisKey(), async () => {
                let needReload = await gameRedis.sismember(WorldDataRedisKey.RELOAD_ROLES, role.uid);
                if (needReload) {
                    await role.load();
                    await gameRedis.srem(WorldDataRedisKey.RELOAD_ROLES, role.uid);
                }

                await originalMethod.apply(GameWorld.instance.getScopes(args[1].$type.name), args);
                await role.notify();
                await role.save();
            });

            // let returnValue = null;
            // if (!readonly) {
            //     if (lock) {
            //         returnValue = await gameRedis.lock(role.getRedisKey(), async () => {
            //             await role.load(mask);
            //             await originalMethod.apply(this, args);
            //             role.sendProUpdate();
            //             await role.save();
            //         });
            //     }
            //     else {
            //         await role.load(mask);
            //         await originalMethod.apply(this, args);
            //         role.sendProUpdate();
            //         await role.save();
            //     }
            // }
            // else {
            //     await role.load(mask);
            //     returnValue = await originalMethod.apply(this, args);
            // }
            // return returnValue;
        };
    };
}

export function roleField(dynamic: boolean = false, rankType?: ERankType) {
    return (target: Object, key: string): void => {
        Object.defineProperty(target, key, {
            get: function () {
                if (this['fields'][key] instanceof BaseModel && !this['fields'][key].loaded) {
                    throw new Error(key + ' not loaded, pls loaded first');
                }
                return this['fields'][key];
            },
            set: function (newValue) {
                if (this['fields'].hasOwnProperty(key) && this['fields'][key] !== newValue) {
                    if (dynamic) {
                        this['dynamicFields'][key] = null;
                    }
                    if (rankType !== undefined && rankType !== null) {
                        this['rankFields'][key] = rankType;
                    }
                    this['dirtyFields'][key] = null;
                }
                this['fields'][key] = newValue;
                if (rankType !== undefined && rankType !== null) {
                    this['revRankFields'][rankType] = key;
                }
            }
        });
    };
}

export function modelField() {
    return (target: Object, key: string): void => {
        Object.defineProperty(target, key, {
            get: function () {
                return this['fields'][key];
            },
            set: function (newValue) {
                if (this['fields'][key] !== newValue) {
                    this['makeDirty']();
                }
                this['fields'][key] = newValue;
            }
        });
    };
}

export function field() {
    return (target: Object, key: string): void => {
        Object.defineProperty(target, key, {
            get: function () {
                return this['fields'][key];
            },
            set: function (newValue) {
                this['fields'][key] = newValue;
            }
        });
    };
}