import {Log} from "../util/log";
import * as child_process from "child_process";
import * as os from "os";
import * as fs from "fs";

const config = require('../../config/config.json');

export class AppCluster {
    private readonly _appPath: string;
    // Config中文件填写0则使用最大cpu数量创建子进程
    private readonly _forkCount: number;
    private _workers: child_process.ChildProcess[];
    private readonly _args: string[];

    constructor(appName: string, appPath: string, args?: string[]) {
        Log.init(__dirname + config.log.dir, config.log.level);

        if (!fs.existsSync(appPath)) {
            throw new Error('path not found, path=' + appPath);
        }

        if (!config['app'][appName]) {
            throw new Error('no app find in config.json, name=' + appName);
        }

        if (args && args.length != AppCluster.getForkCount(appName)) {
            throw new Error('arguments length must equip for count');
        }

        this._appPath = appPath;
        this._forkCount = AppCluster.getForkCount(appName);
        this._workers = [];
        this._args = args;
    }

    public static getForkCount(appName: string): number {
        let ret = parseInt(config['app'][appName]['instances']) === 0 ? os.cpus().length - 1 : parseInt(config['app'][appName]['instances']);
        if (!ret || ret < 0) {
            throw new Error('app instance config error, name=' + appName);
        }
        return ret;
    }

    public start() {
        for (let i = 0; i < this._forkCount; i++) {
            this._workers.push(child_process['fork'](this._appPath, this._args ? [this._args[i]] : undefined));
        }

        Log.sInfo('forked ' + __dirname + this._appPath + ', count=' + this._forkCount);
    }
}