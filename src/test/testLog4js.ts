import * as mysql from 'mysql';
import {Log} from '../util/log'

let conn = mysql.createConnection({host: '127.1.0.1', port: 3306});

Log.init(__dirname + '/log', 'info');
Log.sWarn('trace', 'trace123');
Log.sFatal('fatal', 'fatal123');
Log.sInfo(123123);
Log.sDebug('debug', 'debug123');
Log.sError('error', 'error123');