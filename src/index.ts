import {ConfigMgr} from "./config/data/config_struct";
import {Log} from "./lib/util/log";

Log.init();

ConfigMgr.getInstance().loadAllConfig(__dirname + '/config/data/');

let allEquip = ConfigMgr.getInstance().equipdb.all();
for (let idx in allEquip) {
    console.log(idx + ',' + allEquip[idx].Text_name + ',' + allEquip[idx].Text_des);
}