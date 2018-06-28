import {Log} from '../../../lib/util/log';
import Time = require('../../../lib/util/time');
import {RedisMgr, RedisType, RedisData, RedisChanel} from '../../../lib/redis/redis_mgr';
import * as WorldDB from '../../../lib/mysql/world_db';
import {WorldDataRedisKey} from "../game_world";
import {S2C} from "../../proto/cmd";
import {GameSession} from "../game_session";
import {props} from "../../../lib/util/descriptor";
import {HeroModel} from "./hero_model";
import {EquipModel} from "./equip_model";
import {ItemModel} from "./item_model";

let gameRedis = RedisMgr.getInstance(RedisType.GAME);
export const RoleRedisPrefix: string = 'role';

export enum ERoleMask {
    BASE = 1,
    EQUIP = 2,
    ITEM = 4,
    HERO = 8,
    TASK = 16,
    ACTIVITY = 32
}

export class Role extends RedisData {
    _session: GameSession;

    @props() uid: number = 0;
    @props() nickname: string = '';
    @props() headimgurl: string = '';
    @props() diamond: number = 0;
    @props() exp: number = 0;
    @props() gold: number = 0;
    @props() level: number = 0;
    @props() vipLevel: number = 0;
    @props() vipExp: number = 0;

    @props() lastLoginTime: number = 0;
    @props() lastAliveTime: number = 0;
    @props() createTime: number = 0;

    @props() heroModel = new HeroModel();
    @props() equipModel = new EquipModel();
    @props() itemModel = new ItemModel();

    constructor(uid: number, session?: GameSession) {
        super(RoleRedisPrefix);
        this._session = session;
        this.uid = uid;
    }

    public async save(bSaveAll: boolean = false): Promise<void> {
        if (!this.diffs) {
            this.diff();
        }
        let saveData = this.getSaveData(bSaveAll);
        // 同步存储到redis
        await gameRedis.hmset(this.getRedisKey(), saveData, this.redisKeyExpire);
        // 往脏数据集合添加
        await gameRedis.sadd(WorldDataRedisKey.DIRTY_ROLES, this.uid);
    }

    public async load(readonly: boolean = true, mask?: ERoleMask): Promise<boolean> {
        return new Promise<boolean>(async (resolve) => {
            if (!this.uid || this.uid === 0) {
                resolve(false);
            }
            else {
                let reply = await gameRedis.hmget(this.getRedisKey(), this.getDataFields());
                // 缓存不存在，从db查询然后放到缓存
                if (Object.keys(reply).length === 0) {
                    let result = await WorldDB.conn.execute('select * from player_info_' + this.getTableNum() + ' where ?', {uid: this.uid});

                    if (!result || result.length === 0) {
                        resolve(false);
                    }
                    else {
                        await gameRedis.hmset(this.getRedisKey(), result[0], this.redisKeyExpire);
                        this.deserialize(result[0], readonly);
                        resolve(true);
                    }
                }
                // 缓存命中
                else {
                    this.deserialize(reply, readonly);
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

        let pckData = this.serialize();
        await WorldDB.conn.execute('insert into player_info_' + this.getTableNum() + ' set ?', pckData);
        this.diffs = null;
        this.copyFields();
    }

    public getTableNum(): number {
        return this.uid % WorldDB.conn.config.tableSplitCount;
    }

    public sendProtocol(msg: any) {
        if (this._session) {
            this._session.sendProtocol(msg);
        }
    }
}