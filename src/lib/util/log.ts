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

const myCustomLevels = {
    levels: {
        debug: 1,
        info: 2,
        warn: 3,
        error: 4
    }
};

export class Log {
    private static _logger: winston.LoggerInstance;

    public static getLogger(): winston.LoggerInstance {
        return this._logger;
    }

    public static init(dirName?: any, logLevel?: string): void {
        sourceMap.install();
        let config = winston.config;
        let file = new winston.transports.DailyRotateFile({
                filename: 'app.log',
                dirname: dirName ? dirName : './log',
                timestamp: () => {
                    return moment().format('YYYY-MM-DD HH:mm:ss');
                },
                formatter: (options) => {
                    let processInfo = process.env.INSTANCE_ID ? ('[' + process.env.name + process.env.INSTANCE_ID + '] ') : '';
                    return processInfo + options.timestamp() + ',' + myCustomLevels.levels[options.level] + ',' +
                        (options.message ? options.message : '');
                }
            }),
            console = new winston.transports.Console({
                timestamp: () => {
                    return moment().format('YYYY-MM-DD HH:mm:ss');
                },
                formatter: (options) => {
                    return config.colorize(options.level, options.timestamp() + ',' + options.level.toUpperCase() + ',' +
                        (options.message ? options.message : ''));
                }
            });
        if (!process.env.INSTANCE_ID) {
            this._logger = new (winston.Logger)({
                level: logLevel ? logLevel : 'debug',
                // levels: myCustomLevels.levels,
                transports: [file, console]
            });
            // winston.addColors(myCustomLevels.colors);
        }
        else {
            this._logger = new (winston.Logger)({
                level: logLevel ? logLevel : 'debug',
                // levels: myCustomLevels.levels,
                transports: [file]
            });
        }
    }

    // user
    public static uDebug(roleId: number, ...args: any[]): void {
        let arg = roleId + ',' + LineInfoDefault() + ',' + util.format.apply(util, args);
        this._logger.debug(arg);
    }

    public static uInfo(roleId: number, ...args: any[]): void {
        let arg = roleId + ',' + LineInfoDefault() + ',' + util.format.apply(util, args);
        this._logger.info(arg);
    }

    public static uWarn(roleId: number, ...args: any[]): void {
        let arg = roleId + ',' + LineInfoDefault() + ',' + util.format.apply(util, args);
        this._logger.warn(arg);
    }

    public static uError(roleId: number, ...args: any[]): void {
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