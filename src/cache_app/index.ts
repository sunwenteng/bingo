import {AppCluster} from "../lib/cluster/app_cluster";

let cluster = new AppCluster('cache', __dirname + '/app/app.js');
cluster.start();
