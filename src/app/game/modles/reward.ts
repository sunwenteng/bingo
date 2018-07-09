import {Model} from "./model";
import {field} from "../../../lib/util/descriptor";

export class Reward extends Model {
    @field() gold: number = 0;
    @field() diamond: number = 0;
    @field() exp: number = 0;
    @field() vipExp: number = 0;
    @field() heroes: number[] = [];
    @field() equips: number[] = [];
    @field() items: { [itemId: number]: number } = {};

    constructor(o?: any) {
        super();
        if (o) {
            for (let k in o) {
                if (!this['fields'].hasOwnProperty(k)) {
                    throw new Error(JSON.stringify(o) + ' not valid reward format');
                }
            }
            this.add(o);
        }
    }

    add(rwd: any) {
        let o = (rwd instanceof Reward) ? rwd['filed'] : rwd;
        for (let k in o) {
            if (o[k] instanceof Array) {
                this['fields'][k].push(...o[k]);
            }
            else if (o[k] instanceof Object) {
                for (let id in o[k]) {
                    if (this['fields'][k].hasOwnProperty(id)) {
                        this['fields'][k][id] += o[k][id];
                    }
                    else {
                        this['fields'][k][id] = o[k][id];
                    }
                }
            }
            else {
                this['fields'][k] += o[k];
            }
        }
    }

    multi(rate) {
        for (let k in this['fields']) {
            if (this['fields'][k] instanceof Array && this['fields'][k].length > 0) {
                rate = rate < 1 ? 1 : Math.round(rate);
                for (let i = 0; i < rate; i++) {
                    this['fields'][k].push(...this['fields'][k]);
                }
            }
            else if (this['fields'][k] instanceof Object) {
                for (let id in this['fields'][k]) {
                    if (typeof this['fields'][k][id] === 'number') {
                        this['fields'][k][id] = Math.round(this['fields'][k][id] * rate);
                    }
                }
            }
            else if (this['fields'][k] !== 0) {
                this['fields'][k] = Math.round(this['fields'][k] * rate);
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