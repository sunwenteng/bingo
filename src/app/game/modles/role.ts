import {Log} from '../../../lib/util/log';
import * as Time from '../../../lib/util/time';
import {
    RedisMgr,
    RedisType,
    RedisData,
    RedisChanel
} from '../../../lib/redis/redis_mgr';
import * as WorldDB from '../../../lib/mysql/world_db';
import {WorldDataRedisKey} from "../game_world";
import {S2C} from "../../proto/cmd";
import {GameSession} from "../game_session";
import {roleField} from "../../../lib/util/descriptor";
import {HeroModel} from "./hero_model";
import {EquipModel} from "./equip_model";
import {ItemModel} from "./item_model";
import {BaseModel} from "./base_model";
import {BattleModel} from "./battle_model";
import {TaskModel} from "./task_model";

let gameRedis = RedisMgr.getInstance(RedisType.GAME);
export const roleRedisPrefix: string = 'role';

export enum ERoleMask {
    EQUIP = 'equipModel',
    ITEM = 'itemModel',
    HERO = 'heroModel',
    TASK = 'taskModel',
    BATTLE = 'battleModel',
}

export class Role extends RedisData {
    _session: GameSession;

    // NOTE: 声明的属性必须都在mysql有相应列做存储
    @roleField(true) uid: number = 0;
    @roleField(true) nickname: string = '';
    @roleField(true) headimgurl: string = '';
    @roleField(true) diamond: number = 0;
    @roleField(true) exp: number = 0;
    @roleField(true) gold: number = 0;
    @roleField(true) level: number = 0;
    @roleField(true) vipLevel: number = 0;
    @roleField(true) vipExp: number = 0;

    @roleField() lastLoginTime: number = 0;
    @roleField() lastAliveTime: number = 0;
    @roleField() createTime: number = 0;

    @roleField() heroModel = new HeroModel(this, 'heroModel');
    @roleField() equipModel = new EquipModel(this, 'equipModel');
    @roleField() itemModel = new ItemModel(this, 'itemModel');
    @roleField() battleModel = new BattleModel(this, 'battleModel');
    @roleField() taskModel = new TaskModel(this, 'taskModel');

    constructor(uid: number, session?: GameSession) {
        super(roleRedisPrefix);
        this._session = session;
        this.uid = uid;
    }

    private getDataFields(mask?: ERoleMask | ERoleMask[]): string[] {
        if (!mask) {
            return Object.keys(this.fields);
        }
        else {
            let ret = [];
            for (let k in this.fields) {
                if (!(this.fields[k] instanceof BaseModel)) {
                    ret.push(k);
                }
            }
            for (let e of mask) {
                if (this.fields.hasOwnProperty(e)) {
                    ret.push(e.toString());
                }
                else {
                    Log.sError('%s not exist in role fields', e);
                }
            }
            return ret;
        }
    }

    public async save(bSaveAll: boolean = false): Promise<void> {
        let saveData = this.serialize(bSaveAll);
        if (Object.keys(this.dirtyFields).length === 0) {
            return;
        }
        // 同步存储到redis
        await gameRedis.hmset(this.getRedisKey(), saveData, this.redisKeyExpire);
        // 往脏数据集合添加
        await gameRedis.sadd(WorldDataRedisKey.DIRTY_ROLES, this.uid);

        if (!this._session) {
            await gameRedis.sadd(WorldDataRedisKey.RELOAD_ROLES, this.uid);
        }
    }

    public async load(mask?: ERoleMask | ERoleMask[]): Promise<boolean> {
        return new Promise<boolean>(async (resolve) => {
            if (!this.uid || this.uid === 0) {
                resolve(false);
            }
            else {
                // TODO 后续需要根据mask来读取需要的数据，不然每次load数据太大，对每次回写差异比较有负担
                let queryField = this.getDataFields(mask);
                let reply = await gameRedis.hmget(this.getRedisKey(), queryField);
                // 缓存不存在，从db查询然后放到缓存
                if (Object.keys(reply).length === 0) {
                    let result = await WorldDB.conn.execute('select * from player_info_' + this.getTableNum() + ' where ?', {uid: this.uid});

                    if (!result || result.length === 0) {
                        resolve(false);
                    }
                    else {
                        for (let f of queryField) {
                            if (!result[0].hasOwnProperty(f)) {
                                throw new Error('role column ' + f + ' not in db');
                            }
                        }
                        this.deserialize(result[0]);
                        await gameRedis.hmset(this.getRedisKey(), this.serialize(true), this.redisKeyExpire);
                        resolve(true);
                    }
                }
                // 缓存命中
                else {
                    for (let f of queryField) {
                        if (!reply[f]) {
                            reply[f] = '';
                        }
                    }
                    this.deserialize(reply);
                    resolve(true);
                }
            }
        });
    }

    public async create() {
        this.createTime = Time.realNow();
        this.lastAliveTime = Time.realNow();
        this.lastLoginTime = Time.realNow();
        // TODO
        this.diamond = Math.floor(Math.random() * 10000);
        this.gold = Math.floor(Math.random() * 10000);
        this.level = Math.floor(Math.random() * 10000);
        this.exp = Math.floor(Math.random() * 10000);
        this.vipExp = Math.floor(Math.random() * 10000);
        this.vipLevel = Math.floor(Math.random() * 10000);
        this.nickname = 'robot' + this.uid;
        this.headimgurl = 'img' + this.uid;

        let pckData = this.serialize(true);
        await WorldDB.conn.execute('insert into player_info_' + this.getTableNum() + ' set ?', pckData);
        this.dynamicFields = {};
    }

    public getTableNum(): number {
        return this.uid % WorldDB.conn.config.tableSplitCount;
    }

    public sendProtocol(msg: any) {
        if (this._session) {
            this._session.sendProtocol(msg);
        }
    }

    public sendProUpdate() {
        // dynamic field
        if (Object.keys(this.dynamicFields).length > 0) {
            let pck = S2C.SC_ROLE_PRO_UPDATE.create();
            for (let key in this.dynamicFields) {
                pck[key] = this.fields[key];
            }
            this.sendProtocol(pck);
            this.dynamicFields = {};
        }
    }
}