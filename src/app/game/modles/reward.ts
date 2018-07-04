import {Model} from "./model";
import {field} from "../../../lib/util/descriptor";

export class Reward extends Model {
    @field() gold: number;
    @field() diamond: number;
    @field() exp: number;
    @field() vipExp: number;
    @field() heroes: number[] = [];
    @field() equips: number[] = [];
    @field() items: { [itemId: number]: number } = {};

    constructor(o: any) {
        super();
        for (let k in o) {
            if (!this.hasOwnProperty(k)) {
                throw new Error(JSON.stringify(o) + ' not valid reward format');
            }
        }
        this.add(o);
    }

    add(rwd: Reward) {
        for (let k in rwd) {
            if (rwd[k] instanceof Array) {
                this['fields'][k].concat(rwd[k]);
            }
            else if (rwd[k] instanceof Object) {
                for (let id in rwd[k]) {
                    if (this['fields'][k].hasOwnProperty(id)) {
                        this['fields'][k][id] += rwd[k][id];
                    }
                    else {
                        this['fields'][k][id] = rwd[k][id];
                    }
                }
            }
            else {
                this['fields'][k] += rwd[k];
            }
        }
    }

    multi(rate) {
        for (let k in this['fields']) {
            if (this['fields'][k] instanceof Array && this['fields'][k].length > 0) {
                rate = rate < 1 ? 1 : Math.round(rate);
                for (let i = 0; i < rate; i++) {
                    this['fields'][k].concat(this['fields'][k]);
                }
            }
            else if (this['fields'][k] instanceof Object) {
                for (let id in this['fields'][k]) {
                    if (typeof this['fields'][k][id] == 'number')
                        this['fields'][k][id] = this['fields'][k][id] * rate;
                }
            }
            else if (this['fields'][k] !== 0) {
                this['fields'][k] *= rate;
            }
        }
    }


    clear() {
        for (let k in this['fields']) {
            if (this['fields'][k] instanceof Array) {
                this['fields'][k] = [];
            }
            else if (this['fields'][k] instanceof Object) {
                this['fields'][k] = {};
            }
            else {
                this['fields'][k] = 0;
            }
        }
    }

    isEmpty() {
        for (let k in this['fields']) {
            if (this['fields'][k] instanceof Array && this['fields'][k].length > 0) {
                return false;
            }
            else if (this['fields'][k] instanceof Object && Object.keys(this['fields'][k]).length > 0) {
                return false;
            }
            else if (this['fields'][k] !== 0) {
                return false;
            }
        }
        return true;
    }
}