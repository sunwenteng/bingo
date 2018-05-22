import * as mysql from 'mysql';
import {log} from './util/log'

let conn = mysql.createConnection({host: '127.1.0.1', port: 3306});

log.init(__dirname);
log.sInfo(123123);