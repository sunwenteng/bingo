import {AppCluster} from "../lib/cluster/app_cluster";

const Config = require('../../config/config.json');
let ports = [];
for (let i = 0; i < AppCluster.getForkCount('game'); i++) {
    ports.push(parseInt(Config['app']['game']['port']) + i);
}

let cluster = new AppCluster('game', __dirname + '/app/app.js', ports);
cluster.start();
