import {Log} from "./log";

export function logTime(bToLog: boolean = true) {
    return (target: Object, methodName: string, descriptor: TypedPropertyDescriptor<Function>) => {
        let originalMethod = descriptor.value;
        descriptor.value = async (...args) => {
            let start = new Date().getTime();
            let returnValue = null;
            if (Object.prototype.toString.call(originalMethod) === "[object AsyncFunction]") {
                returnValue = await originalMethod.apply(this, args);
            }
            else {
                returnValue = originalMethod.apply(this, args);
            }
            let end = new Date().getTime();
            if (bToLog) {
                Log.sInfo('time consumed: ' + methodName + ': ' + (end - start) + 'ms');
            }
            else {
                console.log('time consumed: ' + methodName + ': ' + (end - start) + 'ms');
            }
            return returnValue;
        }
    }
}

// export function logTime() {
//     return (target: Object, methodName: string, descriptor: TypedPropertyDescriptor<Function>) => {
//         let originalMethod = descriptor.value;
//         descriptor.value = (...args) => {
//             let start = new Date().getTime();
//             let returnValue = originalMethod.apply(this, args);
//             let end = new Date().getTime();
//             Log.sInfo('time consumed: ' + methodName + ': ' + (end - start) + 'ms');
//             return returnValue;
//         }
//     }
// }
