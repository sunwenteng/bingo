import {RedisMgr, RedisType} from "../redis/redis_mgr";

/**
 * 游戏可用的一些时间判断函数
 */

export const SECOND = 1000;
export const MINUTE = 60 * SECOND;
export const HOUR = 60 * MINUTE;
export const DAY = 24 * HOUR;
export const WEEK = 7 * DAY;

let offset = 0;

export async function sleep(time) {
    return new Promise<void>((resolve => {
        setTimeout(() => {
            resolve();
        }, time);
    }));
}

export function realNow(): number {
    return Math.floor(Date.now() / 1000);
}

export function gameNow(): number {
    return Math.floor(Date.now() / 1000) + offset;
}

export function toSecTime(strtime: string): number {
    let temp = new Date(strtime);
    return Math.floor(temp.getTime() / 1000);
}

export function getOffset(): number {
    return offset;
}

export function setOffset(os: number) {
    offset = os;
}

export function isSameDay(time1: number, time2: number): boolean {
    let d1 = new Date(time1 * 1000),
        d2 = new Date(time2 * 1000);
    return d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear();
}

export function isToday(time: number): boolean {
    let d1 = new Date(time * 1000), d2 = new Date();
    return d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear();
}

export function isYesterday(time: number): boolean {
    return isToday(time + 86400);
}

export function getDaySeconds(time: number): number {
    let date = new Date(time * 1000);
    return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
}

// 适合主推类型的定时器判断
export class RoundCounter {
    private _interval: number;
    private _start: number;

    constructor(interval) {
        this._interval = interval;
        this._start = 0;
    }

    public setStart(now: number): void {
        this._start = now;
    }

    public getStart(): number {
        return this._start;
    }

    public roundCount(now: number): number {
        if (now <= this._start) {
            return 0;
        } else {
            let count = Math.floor((now - this._start) / this._interval);
            this._start += count * this._interval;
            return count;
        }
    }

    public leftSecondForCount(now: number, count: number): number {
        if (now <= this._start) {
            return count * this._interval;
        }
        return this._interval * count - (now - this._start) % this._interval;
    }
}

export class IntervalTimer {
    private _interval: number = 1;
    private _lastUpdate: number = 0;

    constructor(interval: number, start = 0) {
        this._interval = interval;
        this._lastUpdate = start;
    }

    public passed(now: number): boolean {
        return now >= this._lastUpdate + this._interval;
    }

    public update(now: number): void {
        this._lastUpdate = now;
    }
}

export class RaceTimer {
    private readonly _mutex: string;
    private _interval: number;
    private readonly _callback: Function;
    private _bFirstUpdate: boolean;
    private _timer:any;

    constructor(mutex: string, interval: number, callback: Function) {
        this._bFirstUpdate = true;
        this._mutex = mutex;
        this._interval = interval;
        if (!callback) {
            throw new Error('race timer callback should be valid');
        }
        this._callback = callback;
    }

    public async run() {
        if (this._bFirstUpdate) {
            this._bFirstUpdate = false;
            // Log.sInfo('start run raceTimer mutex=' + this._mutex);
            await this._callback();
            // Log.sInfo('end run raceTimer mutex=' + this._mutex);
        }

        let self = this;
        doUpdate();

        function doUpdate() {
            self._timer = setTimeout(() => {
                RedisMgr.getInstance(RedisType.GAME).lock(self._mutex, async (hasLock: boolean) => {
                    if (hasLock) {
                        // Log.sInfo('start run raceTimer mutex=' + self._mutex);
                        await self._callback();
                        // Log.sInfo('end run raceTimer mutex=' + self._mutex);
                    }
                }, false).then(doUpdate);
            }, self._interval);
        }
    }

    public stop() {
        clearTimeout(this._timer);
    }
}