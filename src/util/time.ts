/**
 * 游戏可用的一些时间判断函数
 */

let offset = 0;

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
