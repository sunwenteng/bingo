import {Log} from "./log";
import {Role} from "../../app/game/modles/role";
import {RedisMgr, RedisType} from "../redis/redis_mgr";

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
        }
    }
}

let gameRedis = RedisMgr.getInstance(RedisType.GAME);

export function controller(readonly: boolean = false, mask?: number) {
    return (target: Object, methodName: string, descriptor: TypedPropertyDescriptor<Function>) => {
        let originalMethod = descriptor.value;
        descriptor.value = async function (...args) {
            let role = new Role(args[0].roleId, args[0]);
            args[0] = role;
            let returnValue = null;
            if (!readonly) {
                returnValue = await gameRedis.lock(role.getRedisKey(), async () => {
                    await role.load(false, mask);
                    await originalMethod.apply(this, args);
                    // dynamic fields
                    role.sendProUpdate();
                    // other fields
                    role.diff();
                    for (let diff of role.diffs) {
                        switch (diff.path[0]) {
                            case 'equips':
                                let uid = diff.path[1];
                                switch (diff.kind) {
                                    case 'E':
                                        // update packet
                                        break;
                                    case 'D':
                                        // delete packet
                                        break;
                                    case 'N' :
                                        // new packet
                                        break;
                                }
                                break;
                            default:
                                break;
                        }
                    }
                    await role.save();
                });
            }
            else {
                await role.load();
                returnValue = await originalMethod.apply(this, args);
            }
            return returnValue;
        }
    }
}

export function singleton(target: Function) {
}

// 生命的对象需要与redis和mysql中一致
export function props(dynamic: boolean = false) {
    return function (target: Object, key: string): void {
        Object.defineProperty(target, key, {
            get: function () {
                return this['fields'][key];
            },
            set: function (newValue) {
                if (dynamic && this['fields'][key] !== newValue) {
                    this['dynamicFields'][key] = newValue;
                }
                this['fields'][key] = newValue;
            }
        });
    }
}