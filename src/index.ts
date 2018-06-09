import * as winston from "winston";
import * as sourceMap from "source-map-support";
import * as util from 'util'
import * as moment from 'moment';

require('winston-daily-rotate-file');
winston.cli();

function LineInfoDefault(): string {
    let dummyObject: any = {};
    let v8Handler = Error['prepareStackTrace'];
    Error['prepareStackTrace'] = (error, stack: any[]) => {
        return [sourceMap.wrapCallSite(stack[1])];
    };
    Error['captureStackTrace'](dummyObject, arguments.callee);

    let frame: any = dummyObject.stack[0];
    Error['prepareStackTrace'] = v8Handler;
    return /([^\/]*)$/.exec(frame.getFileName())[1] + ":" + frame.getFunctionName() + ":" + frame.getLineNumber();
}

// const myCustomLevels = {
//     levels: {
//         debug: 1,
//         info: 2,
//         warn: 3,
//         error: 4
//     },
//     colors: {
//         debug: 'blue',
//         info: 'green',
//         warn: 'yellow',
//         error: 'red'
//     }
// };

class Log {
    private static _logger: winston.LoggerInstance;

    public static getLogger(): winston.LoggerInstance {
        return this._logger;
    }

    public static init(dirName?: any, logLevel?: string): void {
        sourceMap.install();
        let config = winston.config;
        this._logger = new (winston.Logger)({
            level: logLevel ? logLevel : 'debug',
            // levels: myCustomLevels.levels,
            transports: [
                new (winston.transports.Console)({
                    timestamp: () => {
                        return moment().format('YYYY-MM-DD HH:mm:ss');
                    },
                    formatter: (options) => {
                        return config.colorize(options.level, options.timestamp() + ',' + options.level.toUpperCase() + ',' +
                            (options.message ? options.message : ''));
                    }
                }),
                new (winston.transports.DailyRotateFile)({
                    filename: 'app.log',
                    dirname: dirName ? dirName : './log'
                })
            ]
        });
        // winston.addColors(myCustomLevels.colors);
    }

    // user
    public static uDebug(roleId: number, operation: string, message: string, ...args: any[]): void {
        let arg = roleId + ',' + LineInfoDefault() + ',' + util.format.apply(util, args);
        this._logger.debug(arg);
    }

    public static uInfo(roleId: number, operation: string, message: any, ...args: any[]): void {
        let arg = roleId + ',' + LineInfoDefault() + ',' + util.format.apply(util, args);
        this._logger.info(arg);
    }

    public static uWarn(roleId: number, operation: string, message: string, ...args: any[]): void {
        let arg = roleId + ',' + LineInfoDefault() + ',' + util.format.apply(util, args);
        this._logger.warn(arg);
    }

    public static uError(roleId: number, operation: string, message: string, ...args: any[]): void {
        let arg = roleId + ',' + LineInfoDefault() + ',' + util.format.apply(util, args);
        this._logger.error(arg);
    }

    public static sDebug(...args: any[]): void {
        let arg = '0,' + LineInfoDefault() + ',' + util.format.apply(util, args);
        this._logger.debug(arg);
    }

    public static sInfo(...args: any[]): void {
        let arg = '0,' + LineInfoDefault() + ',' + util.format.apply(util, args);
        this._logger.info(arg);
    }

    public static sWarn(...args: any[]): void {
        let arg = '0,' + LineInfoDefault() + ',' + util.format.apply(util, args);
        this._logger.warn(arg);
    }

    public static sError(...args: any[]): void {
        let arg = '0,' + LineInfoDefault() + ',' + util.format.apply(util, args);
        this._logger.error(arg);
    }
}

Log.init();
setInterval(() => {
    Log.sInfo([1, 2, 23], '1');
    Log.sDebug('111 %d', 111);
    Log.sWarn('111 %d', 111);
    Log.sError('111 %d', 111);
}, 1000);