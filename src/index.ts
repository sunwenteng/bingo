// import {Role} from "./app/game/modles/role";
// import * as deepDiff from 'deep-diff';
//
// let a = {equips: {1 : {lv: 1, power: 3}}}, b = {equips: {1 : {lv: 2, power: 3}, 2 : {lv: 1, power: 3}}};
//
// console.time('diff');
// let diffs = deepDiff.diff(a, b);
// console.timeEnd('diff');


class T {
    _secret: number;
    public nosecret:number;
    public static instance = new T(1);

    constructor(secret) {
        console.log('i am called');
        this._secret = secret;
    }


}

T.instance.nosecret = 2;
console.log(T.instance.nosecret + ' ' + T.instance._secret);
let t = new T(3);
console.log(t.nosecret + ' ' + t._secret);