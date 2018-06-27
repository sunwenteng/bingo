import {Log} from "./log";
import {Role} from "../../app/game/role";
import {RedisMgr, RedisType} from "../redis/redis_mgr";
import {UserSession} from "../net/user_session";

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

export function controller(readonly: boolean = false) {
    return (target: Object, methodName: string, descriptor: TypedPropertyDescriptor<Function>) => {
        let originalMethod = descriptor.value;
        descriptor.value = async function (...args) {
            let role = new Role(args[0].roleId, args[0]);
            args[0] = role;
            let returnValue = null;
            if (!readonly) {
                await gameRedis.lock(role.getRedisKey(), async () => {
                    await role.load();
                    returnValue = await originalMethod.apply(this, args);
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