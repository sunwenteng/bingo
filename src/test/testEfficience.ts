import * as util from 'util';
import {LinkedList, ListNode} from "../lib/util/linked_list";

let map = new Map<number, number>();
let obj = {};
let t;

console.time('1');
for (let i = 0; i < 1000000; ++i) {
    map.set(i, i);
}
console.timeEnd('1');

console.time('2');
for (let i = 0; i < 1000000; ++i) {
    obj[i] = i;
}
console.timeEnd('2');

console.time('3');
for (let i = 0; i < 1000000; ++i) {
    t = "1" + "2";
}
console.timeEnd('3');

console.time('4');
for (let i = 0; i < 1000000; ++i) {
    t = util.format('%s%s', '1', '2');
}
console.timeEnd('4');

console.time('5');
for (let i = 0; i < 1000000; ++i) {
    new Date();
}
console.timeEnd('5');

console.time('6');
for (let i = 0; i < 1000000; ++i) {
    Date.now();
}
console.timeEnd('6');

console.time('7');
let ll = new LinkedList<number>();
for (let i = 0; i < 1000000; ++i) {
    ll.append(i);
}
console.timeEnd('7');

console.time('8');
let a = [];
for (let i = 0; i < 1000000; ++i) {
    a.push(i);
}
console.timeEnd('8');

console.time('9');
for (let i = 0; i < 1000000; ++i) {
    if(ll.length > 2)
        ll.delete(1);
}
console.timeEnd('9');

console.time('10');
for (let i = 0; i < 1000000; ++i) {
    if(a.length > 2)
        a.splice(1,1);
}
console.timeEnd('10');