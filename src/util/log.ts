import * as log4js from 'log4js';
import * as sourceMap from 'source-map-support';
import * as util from 'util';
import * as mkdirp from 'mkdirp';

function getLineInfo(): string {
    let dummyObject: any = {};
    let v8Handler = Error['prepareStackTrace'];
    Error['prepareStackTrace'] = (error, stack: any[]) => {
        /* 使用9是因为要跳过 log4j 本身的堆栈 */
        return [sourceMap.wrapCallSite(stack[1])];
    };
    Error['captureStackTrace'](dummyObject, arguments.callee);

    let frame: any = dummyObject.stack[0];
    Error['prepareStackTrace'] = v8Handler;
    //Error['stackTraceLimit'] = oldLimit;

    return /([^\/]*)$/.exec(frame.getFileName())[1] + ":" + frame.getFunctionName() + ":" + frame.getLineNumber();
}

function getLevelNum(level: number): number {
    switch (level) {
        case 5000   :
            return 1;   /* trace */
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

class Log {
    m_logger: log4js.Logger;

    constructor() {
        let _format = ':remote-addr :method :url :http-version :status :response-time ms';
        this.m_logger = log4js.connectLogger(this.m_logger, {format: _format});
    }

    init(path) {
        let logDir = path + '/logs/';
        mkdirp.sync(logDir);
        log4js.configure({
            appenders: {
                default: {
                    type: "dateFile",
                    filename: logDir + "/my.log",
                    pattern: ".yyyy-MM-dd",
                    layout: {
                        type: "pattern",
                        pattern: "%d{yyyy-MM-dd hh:mm:ss},%x{level},%x{line},%x{roleId},%x{content}",
                        tokens: {
                            line: () => {
                                return getLineInfo();
                            },
                            roleId: (log: log4js.LoggingEvent) => {
                                return log.data[0];
                            },
                            /* 此处 pattern 中使用 %x{content} 代替 %m 是为了支持 roleId */
                            content: (log: log4js.LoggingEvent) => {
                                return util.format.apply(util, log.data.slice(1));
                            },
                            level: (log: log4js.LoggingEvent) => {
                                return getLevelNum(log.level['level']);
                            }

                        }
                    }
                },
                out: {
                    type: "console",
                    layout: {
                        type: "pattern",
                        /* 多加了颜色 */
                        pattern: "%[%d{yyyy-MM-dd hh:mm:ss},%x{level},%x{line},%x{roleId},%x{content}",
                        tokens: {
                            line: () => {
                                // return getLineInfo();
                            },
                            roleId: (log: log4js.LoggingEvent) => {
                                return log.data[0];
                            },
                            /* 此处 pattern 中使用 %x{content} 代替 %m 是为了支持 roleId */
                            content: (log: log4js.LoggingEvent) => {
                                return util.format.apply(util, log.data.slice(1));
                            },
                            level: (log: log4js.LoggingEvent) => {
                                return getLevelNum(log.level['level']);
                            }
                        }
                    }
                }
            },
            categories: {
                default: {appenders: ['out', 'default'], level: 'debug'},
            }
        });
        this.m_logger = log4js.getLogger();
    }

    uInfo(roleId, message): void {
        this.m_logger.info.apply(this.m_logger, [].slice.call(arguments));
    }

    uWarn(roleId, message): void {
        this.m_logger.warn.apply(this.m_logger, [].slice.call(arguments));
    }

    uError(roleId, message): void {
        this.m_logger.error.apply(this.m_logger, [].slice.call(arguments));
    }

    sDebug(message): void {
        this.m_logger.debug.apply(this.m_logger, [0].concat([].slice.call(arguments)));
    }

    sInfo(message): void {
        this.m_logger.info.apply(this.m_logger, [0].concat([].slice.call(arguments)));
    }

    sWarn(message): void {
        this.m_logger.warn.apply(this.m_logger, [0].concat([].slice.call(arguments)));
    }

    sError(message): void {
        this.m_logger.error.apply(this.m_logger, [0].concat([].slice.call(arguments)));
    }

    getLogger(): void {
        let _format = ':remote-addr :method :url :http-version :status :response-time ms';
        return log4js.connectLogger(this.m_logger, {format: _format});
    }
}

export var log = new Log();