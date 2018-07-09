import {Log} from "./log";
import {ERoleMask, Role} from "../../app/game/modles/role";
import {RedisMgr, RedisType} from "../redis/redis_mgr";
import {BaseModel} from "../../app/game/modles/base_model";

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

/**
 * @param {boolean} readonly 有一些业务不需要回写，可进行条有
 * @param {boolean} lock 很多数据只会自己修改，所以不需要加锁，可以只对会修改的数据枷锁即可，共享数据修改尽量控制，或者设计层面优先修改离线用户的数据
 * @param {ERoleMask[] | ERoleMask} mask
 * @returns {(target: Object, methodName: string, descriptor: TypedPropertyDescriptor<Function>) => void}
 */
export function controller(readonly: boolean = false, lock: boolean = false, mask?: ERoleMask[] | ERoleMask) {
    return (target: Object, methodName: string, descriptor: TypedPropertyDescriptor<Function>) => {
        let originalMethod = descriptor.value;
        descriptor.value = async function (...args) {
            let role = new Role(args[0].roleId, args[0]);
            args[0] = role;
            let returnValue = null;
            if (!readonly) {
                if (lock) {
                    returnValue = await gameRedis.lock(role.getRedisKey(), async () => {
                        await role.load(mask);
                        await originalMethod.apply(this, args);
                        role.sendProUpdate();
                        await role.save();
                    });
                }
                else {
                    await role.load(mask);
                    await originalMethod.apply(this, args);
                    role.sendProUpdate();
                    await role.save();
                }
            }
            else {
                await role.load();
                returnValue = await originalMethod.apply(this, args);
            }
            return returnValue;
        };
    };
}

export function roleField(dynamic: boolean = false) {
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
                    this['dirtyFields'][key] = null;
                }
                this['fields'][key] = newValue;
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