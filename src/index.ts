import {Role} from "./app/game/modles/role";
import * as deepDiff from 'deep-diff';

let a = {equips: {1 : {lv: 1, power: 3}}}, b = {equips: {1 : {lv: 2, power: 3}, 2 : {lv: 1, power: 3}}};

console.time('diff');
let diffs = deepDiff.diff(a, b);
console.timeEnd('diff');

