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
import {EDiffOpt} from "./defines";

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

    // NOTE: 声明的属性必须都在mysql有相应列做存储
    @props(true) uid: number = 0;
    @props(true) nickname: string = '';
    @props(true) headimgurl: string = '';
    @props(true) diamond: number = 0;
    @props(true) exp: number = 0;
    @props(true) gold: number = 0;
    @props(true) level: number = 0;
    @props(true) vipLevel: number = 0;
    @props(true) vipExp: number = 0;

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
                // TODO 后续需要根据mask来读取需要的数据，不然每次load数据太大，对每次回写差异比较有负担
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

        this.reset();
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
                pck[key] = this.dynamicFields[key];
            }
            this.sendProtocol(pck);
            this.dynamicFields = {};
        }

        // TODO 根据role中不同的属性写自己的客户端更新包，上层只用赋值即可，下层根据差异来发包
        // other diff model field
        let uid, key, data, pros, pcks = {}, pck, pckInner;
        for (let diff of this.diffs) {
            switch (diff.path[0]) {
                case 'heroModel': {
                    key = diff.path[1];
                    if (key === 'heroes') {
                        uid = diff.kind === EDiffOpt.DELETE ? -parseInt(diff.path[2]) : parseInt(diff.path[2]);
                        data = diff.rhs;
                        pros = diff.path.length > 2 ? diff.path[3] : null;
                        pck = pcks['SC_UPDATE_HERO'];
                        if (!pck) {
                            pck = S2C.SC_UPDATE_HERO.create();
                            pcks['SC_UPDATE_HERO'] = pck;
                        }

                        pckInner = pck.heroes[uid];
                        if (!pckInner) {
                            pckInner = S2C.Hero.create();
                            pck.heroes[uid] = pckInner;
                        }

                        if (diff.kind === EDiffOpt.ADD) {
                            HeroModel.serializeHeroNetMsg(pckInner, data);
                        }
                        else if (diff.kind === EDiffOpt.UPDATE) {
                            pckInner[pros] = data;
                        }
                    }
                    break;
                }
                case 'equipModel': {
                    let uid = diff.path[1];
                    // TODO
                    break;
                }
                default:
                    break;
            }
        }

        for (let key in pcks) {
            this.sendProtocol(pcks[key]);
        }
    }
}