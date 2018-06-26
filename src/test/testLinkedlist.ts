import {LinkedList} from "../lib/util/linked_list";

// async function start(server: Server) {
//     await server.start(GameSession);
//     setInterval(async () => {
//         await GameWorld.getInstance().update();
//     }, 100)
// }
//
// let server = new Server(Config.server.host, Config.server.port);
// start(server);

let ll = new LinkedList<number>();
ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.insert(2, 2.5);
ll.insert(2, 3.5);
console.log(ll.toString(true));
console.log(ll.toString(false));

ll.delete(0);
ll.delete(ll.length - 1);
console.log(ll.toString());
ll.delete(2);
console.log(ll.toString());
ll.delete(1);
console.log(ll.toString());
ll.delete(0);
console.log(ll.toString());
ll.delete(0);
console.log(ll.toString() + ' ' + ll.length);

ll = new LinkedList<number>([1, 2, 3, 4, 5]);
console.log(ll.toString());
ll = new LinkedList<number>([1, 2, 3, 4, 5]);
console.log(ll.toString());

let cur = ll.head, t;
while(cur) {
    console.log(cur.element + ' -- ');
    t = cur;
    ll.deleteNode(cur);
    cur = cur.next;
}

console.log(ll.length + '--------');
