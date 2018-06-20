import * as redis from 'redis';

let sub = redis.createClient(6379, '127.0.0.1', {
    connect_timeout: 36000000,
    password: "redis@ime"
}), pub = redis.createClient(6379, '127.0.0.1', {
    connect_timeout: 36000000,
    password: "redis@ime"
});
let msg_count = 0;

sub.on("subscribe", function (channel, count) {
    pub.publish("a nice channel", "I am sending a message.");
    pub.publish("a nice channel", "I am sending a second message.");
    pub.publish("a nice channel", "I am sending my last message.");
});

sub.on("message", function (channel, message) {
    console.log("sub channel " + channel + ": " + message);
    msg_count += 1;
    if (msg_count === 3) {
        sub.unsubscribe();
        sub.quit();
        pub.quit();
    }
});

sub.subscribe("a nice channel");