import * as log4js from 'log4js'
import * as sourceMap from 'source-map-support'
import * as util from 'util'
import * as mkdirp from 'mkdirp'

function LineInfoFromStack(stack) {
    let lines = stack ? stack.split('\n') : [''];
    let firstFrame = parseFrame(lines[1]);
    return /([^\/]*)$/.exec(firstFrame.file)[1] + ":" + firstFrame.func + ":" + firstFrame.line;
}

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

interface FrameMatch {
    func: string;
    file: string;
    line: number;
    column: number;
}

function parseFrame(line): FrameMatch {
    function namedFrame(line) {
        let match = /at ([^(]+) \((.+):(\d+):(\d+)\)/i.exec(line);
        return match ? {
            func: match[1],
            file: match[2],
            line: parseInt(match[3]),
            column: parseInt(match[4])
        } : {
            func: '<native>',
            file: '<native>',
            line: 0,
            column: 0
        };
    }

    function unnamedFrame(line) {
        let match = /at (.+):(\d+):(\d+)/i.exec(line);
        return match ? {
            func: '<anonymous>',
            file: match[1],
            line: parseInt(match[2], 10),
            column: parseInt(match[3], 10)
        } : null;
    }

    return line.indexOf('(') !== -1 ? namedFrame(line) : unnamedFrame(line);
}

export class Log {
    private static m_logger: log4js.Logger;
    private static m_haveInit: boolean = false;

    public static isInit(): boolean {
        return this.m_haveInit;
    }

    public static init(dirName: any, logLevel?: string): void {
        let logDir: string = dirName;
        mkdirp.sync(logDir);

        let consoleAppender: log4js.Appender = {
            type: "console",
            layout: {
                type: "pattern",
                /* 多加了颜色 */
                pattern: "%[%d{yyyy-MM-dd hh:mm:ss},%p,%x{roleId},%x{operation},%x{line},%x{content}%]",
                tokens: {
                    line: (log: log4js.LoggingEvent) => {
                        return log.data[0];
                    },
                    roleId: (log: log4js.LoggingEvent) => {
                        return log.data[1];
                    },
                    operation: (log: log4js.LoggingEvent) => {
                        return log.data[2];
                    },
                    /* 此处 pattern 中使用 %x{content} 代替 %m 是为了支持 roleId */
                    content: (log: log4js.LoggingEvent) => {
                        return util.format.apply(util, log.data.slice(3));
                    }
                }
            }
        };

        let logFileAppender: log4js.Appender = {
            type: "dateFile",
            filename: logDir + "/server.log",
            pattern: ".yyyy-MM-dd",
            layout: {
                type: "pattern",
                pattern: "%d{yyyy-MM-dd hh:mm:ss},%x{level},%x{roleId},%x{operation},%x{line},%x{content}",
                tokens: {
                    line: (log: log4js.LoggingEvent) => {
                        return log.data[0];
                    },
                    roleId: (log: log4js.LoggingEvent) => {
                        return log.data[1];
                    },
                    operation: (log: log4js.LoggingEvent) => {
                        return log.data[2];
                    },
                    /* 此处 pattern 中使用 %x{content} 代替 %m 是为了支持 roleId */
                    content: (log: log4js.LoggingEvent) => {
                        return util.format.apply(util, log.data.slice(3));
                    },
                    level: (log: log4js.LoggingEvent) => {
                        switch (log.level['level']) {
                            case 10000  :
                                return 1;   /* debug */
                            case 20000  :
                                return 2;   /* info */
                            case 30000  :
                                return 3;   /* warning */
                            case 40000  :
                                return 4;   /* error */
                            case 50000  :
                                return 4;   /* fatal */
                        }
                        return 0;
                    }
                }
            }
        };

        log4js.configure({
            appenders: {
                console: consoleAppender,
                file: logFileAppender,
            },
            categories: {
                default: {appenders: ['console', 'file'], level: logLevel},
            }
        });

        this.m_logger = log4js.getLogger('default');
    }

    // user
    public static uDebug(roleId: number, operation: string, message: string, ...args: any[]): void {
        let arg = [LineInfoDefault()].concat(Array.prototype.slice.call(arguments));

        this.m_logger.debug.apply(this.m_logger, arg);
    }

    public static uInfo(roleId: number, operation: string, message: any, ...args: any[]): void {
        let i, arg = [LineInfoDefault()].concat(Array.prototype.slice.call(arguments));
        this.m_logger.info.apply(this.m_logger, arg);
    }

    public static uWarn(roleId: number, operation: string, message: string, ...args: any[]): void {
        let arg = [LineInfoDefault()].concat(Array.prototype.slice.call(arguments));
        this.m_logger.warn.apply(this.m_logger, arg);
    }

    public static uError(roleId: number, operation: string, message: string, ...args: any[]): void {
        let arg = [LineInfoDefault()].concat(Array.prototype.slice.call(arguments));
        this.m_logger.error.apply(this.m_logger, arg);
    }

    // system
    public static sDebug(operation: string, message: string, ...args: any[]): void {
        let arg = [LineInfoDefault(), 0].concat(Array.prototype.slice.call(arguments));
        this.m_logger.debug.apply(this.m_logger, arg);
    }

    public static sInfo(...args: any[]): void {
        let arg = [LineInfoDefault(), 0].concat(Array.prototype.slice.call(arguments));
        this.m_logger.info.apply(this.m_logger, arg);
    }

    public static sWarn(operation: string, message: string, ...args: any[]): void {
        let arg = [LineInfoDefault(), 0].concat(Array.prototype.slice.call(arguments));
        this.m_logger.warn.apply(this.m_logger, arg);
    }

    public static sError(...args: any[]): void {
        let arg = [LineInfoDefault(), 0].concat(Array.prototype.slice.call(arguments));
        this.m_logger.error.apply(this.m_logger, arg);
    }

    public static sFatal(operation: string, message: string, ...args: any[]): void {
        let arg = [LineInfoDefault(), 0].concat(Array.prototype.slice.call(arguments));
        this.m_logger.fatal.apply(this.m_logger, arg);
    }

    public static sFatalError(err: Error, operation: string, message: string, ...args: any[]): void {
        let arg = [LineInfoFromStack(err['stack']), 0].concat(Array.prototype.slice.call(arguments, 1));
        this.m_logger.fatal.apply(this.m_logger, arg);
    }

    public static userError(err: Error, roleId: number, operation: string, message: string, ...args: any[]): void {
        let arg = [LineInfoFromStack(err['stack'])].concat(Array.prototype.slice.call(arguments, 1));
        this.m_logger.error.apply(this.m_logger, arg);
    }

    public static stackError(err: Error, operation: string, message: string, ...args: any[]): void {
        let arg = [LineInfoFromStack(err['stack']), 0].concat(Array.prototype.slice.call(arguments, 1));
        this.m_logger.error.apply(this.m_logger, arg);
    }
}