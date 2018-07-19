import {Log} from "../../lib/util/log";
import * as GameUtil from "../../lib/util/game_util";
import * as LoginDB from "../../lib/mysql/login_db";
import bodyParser = require("body-parser");
import * as express from 'express';
import * as http from "http";
import {EChargeState} from "../../lib/mysql/login_db";

let isAppValid = true;

async function main() {
    const config = require('../../config/config.json');
    Log.init(__dirname + '/' + config.log.dir, config.log.level);

    await LoginDB.start(config['mysql']['login_db']);

    process.on('uncaughtException', (error => {
        Log.sError(error);
        process.exit(1);
    }));

    process.on("SIGINT", async () => {
        isAppValid = false;
        process.nextTick(async () => {
            await LoginDB.stop();
            process.exit(0);
        });
    });

    let app = express();
    app.set('port', 8888);
    app.set('host', '0.0.0.0');
    app.use("/*", bodyParser.text({type: "*/*"}));
    app.use(bodyParser.urlencoded({extended: true, limit: '1mb'}));
    app.use((req: express.Request, res: express.Response, next) => {
        let args = GameUtil.parseHttpParams(req);
        Log.sInfo(req.url + ':' + JSON.stringify(args));
        res.header("Access-Control-Allow-Credentials", 'true');
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
        res.header("Access-Control-Allow-Headers", "*");
        res.header("Content-Type", "application/json;charset=utf-8");
        if ("OPTIONS" === req.method) {
            res.send(200);
        } else {
            next();
        }
    });

    http.createServer(app).listen(app.get('port'), app.get('host'), () => {
        Log.sInfo('http server is now listening on ' + app.get('host') + ':' + app.get('port'));
    });

    // TODO add ur own
    app.all("/test", (req: express.Request, res: express.Response) => {
        let args = GameUtil.parseHttpParams(req);
        res.send(JSON.stringify(args));
    });

    const OK = 'OK';
    const FAIL = 'FAIL';

    function assert(obj, name) {
        if (!obj[name]) {
            throw new Error(name + ' not found in obj=' + JSON.stringify(obj));
        }
        return obj[name];
    }

    app.all("/pay", async (req: express.Request, res: express.Response) => {
        let args = GameUtil.parseHttpParams(req);
        let data = {
            role_id: assert(args, 'role_id'),
            goods_id: assert(args, 'goods_id'),
            goods_quantity: assert(args, 'goods_quantity'),
            currency: assert(args, 'currency'),
            value: assert(args, 'value'),
            virtual_value: assert(args, 'virtual_value'),
            type: assert(args, 'type'),
            inner_order_id: assert(args, 'inner_order_id'),
            platform: assert(args, 'platform'),
            platform_order_id: assert(args, 'platform_order_id'),
            platform_account_id: assert(args, 'platform_account_id'),
            platform_payment_type: assert(args, 'platform_payment_type'),
            state: EChargeState.paied,
            payment_time: Date.now(),
            payment_ip: args['IP'],
            payment_device: assert(args, 'payment_device'),
            payment_device_uid: assert(args, 'payment_device_uid'),
            client_order_id: assert(args, 'client_order_id'),
            addition2: assert(args, 'platform'),
            diamond_pay: assert(args, 'diamond_pay')
        };

        // validate
        let ret = await LoginDB.conn.execute('select * from re_passport_player where ?', {role_id: data.role_id});
        if (ret.length === 0) {
            throw new Error('role not found, id=' + data.role_id);
        }
        let server_id = ret[0].server_id;

        ret = await LoginDB.conn.execute('select * from goods_info where ?', {
            server_id: server_id,
            goods_id: args['goods_id'],
            platform_type: args['platform_id']
        });
        if (ret.length === 0) {
            throw new Error('goods_info not found, id=' + args['goods_id']);
        }

        // execute
        await LoginDB.conn.execute('insert into charge_info set ?', data);
        res.send(OK);
    });
}

main().then(() => {
    if (process.env.INSTANCE_ID) {
        process.send('ready');
    }
});