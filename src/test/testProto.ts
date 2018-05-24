import {Log} from '../util/log'

const Config = require('../config/config.json');
Log.init(__dirname + Config.log.dir, Config.log.level);

import {C2S, S2C} from '../proto/cmd'

let msg = C2S.CS_ECHO.create({
    name: "123123",
    b: 123123123123123,
    color: C2S.CS_ECHO.Color.BLUE,
    data: [1, 2, 3],
    map: {12: '12'}
});

let buffer = C2S.CS_ECHO.encode(msg).finish();
let decoded = C2S.CS_ECHO.decode(buffer);
Log.sInfo(buffer.length + " " + decoded + ' ' + msg['$type'].options.code);