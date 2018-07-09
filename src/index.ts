// import {Role} from "./app/game/modles/role";
// import * as deepDiff from 'deep-diff';
//
// let a = {equips: {1 : {lv: 1, power: 3}}}, b = {equips: {1 : {lv: 2, power: 3}, 2 : {lv: 1, power: 3}}};
//
// console.time('diff');
// let diffs = deepDiff.diff(a, b);
// console.timeEnd('diff');


// class T {
//     _secret: number;
//     public nosecret:number;
//     public static instance = new T(1);
//
//     constructor(secret) {
//         console.log('i am called');
//         this._secret = secret;
//     }
//
//
// }

// T.instance.nosecret = 2;
// console.log(T.instance.nosecret + ' ' + T.instance._secret);
// let t = new T(3);
// console.log(t.nosecret + ' ' + t._secret);
// console.time('1');
// for(let i = 0; i < 1000000000; ++i) {
//     let {foo, num, test} = obj;
// }
// console.timeEnd('1');
//
// console.time('2');
// for(let i = 0; i < 1000000000; ++i) {
//     let foo = obj['foo'];
//     let num = obj['num'];
//     let test = obj['test'];
// }
// console.timeEnd('2');