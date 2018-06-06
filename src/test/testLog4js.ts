import {Log} from '../lib/util/log'

const Config = require('../../config/config.json');

Log.init(__dirname + Config.log.dir, Config.log.level);
Log.sWarn('trace', 'trace123');
Log.sFatal('fatal', 'fatal123');
Log.sInfo(123123);
Log.sDebug('debug', 'debug123');
Log.sError('error', 'error123');