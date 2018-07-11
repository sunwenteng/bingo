import {C2S, S2C} from "../../proto/cmd";
import {Role} from "../modles/role";
import {controller, field} from "../../../lib/util/descriptor";
import {GameWorld} from "../game_world";
import {Log} from "../../../lib/util/log";
import {RankInfo, RedisMgr, RedisType} from "../../../lib/redis/redis_mgr";
import * as WorldDB from "../../..//lib/mysql/world_db";
import {Model} from "../modles/model";
import {ERankType} from "../modles/defines";

let gameRedis = RedisMgr.getInstance(RedisType.GAME);

export enum ERankSortType {
    asc = 'asc',
    desc = 'desc'
}

class RankData extends Model {
    @field() ids: number[] = [];
    @field() values: number[] = [];
    @field() lastIds: number[] = [];
    @field() lastValues: number[] = [];
    @field() lastRefreshTime: number = 0;

    serialize(): string {
        return JSON.stringify(this['fields']);
    }

    deserialize(str: string) {
        let t = JSON.parse(str);
        for (let k in t) {
            if (!this['fields'].hasOwnProperty(k)) {
                throw new Error(k + ' not in obj');
            }
            this['fields'][k] = t[k];
        }
    }
}

interface RankMetaInfo {
    sortType: ERankSortType;
    limit: number;
    refreshTime: number;
}

export class RankController {
    public static instance = new RankController();
    private _rankMetaInfo: { [rankType: number]: RankMetaInfo } = {};

    constructor() {
        this._rankMetaInfo[ERankType.level] = {
            sortType: ERankSortType.desc,
            limit: 100,
            refreshTime: 0
        };

        this._rankMetaInfo[ERankType.combat] = {
            sortType: ERankSortType.desc,
            limit: 100,
            refreshTime: 0
        };

        // TODO add new rankType here
    }

    async loadData(serverId: number) {
        await gameRedis.lock('rank_load', async (hasLock: boolean) => {
            if (hasLock) {
                for (let rankType in this._rankMetaInfo) {
                    let redisKey = this.getRankDataRedisKey(rankType, serverId);
                    let data = await gameRedis.get(redisKey);
                    if (!data) {
                        let dbKeyId = this.getRankDBKey(rankType);
                        let ret = await WorldDB.conn.execute('select data from global where server_id=? and key_id= ?',
                            [GameWorld.instance.info.server_id, dbKeyId]);
                        let data = new RankData();
                        if (ret.length === 0) {
                            await WorldDB.conn.execute('insert into global set ?', {
                                data: data.serialize(),
                                key_id: dbKeyId,
                                server_id: GameWorld.instance.info.server_id,
                            });
                        }
                        else if (ret[0].data !== null) {
                            data.deserialize(ret[0].data.toString());
                        }

                        let rankInfo: RankInfo[] = [];
                        for (let i = 0; i < data.ids.length; ++i) {
                            rankInfo.push({
                                id: data.ids[i],
                                value: data.values[i]
                            });
                        }
                        if (rankInfo.length > 0) {
                            await gameRedis.zadd(this.getRankRedisKey(rankType, serverId), rankInfo);
                        }

                        await gameRedis.set(redisKey, data.serialize());
                        Log.sInfo('rank_controller load success');
                    }
                }
            }
        }, false);
    }

    async saveData(serverId: number) {
        await gameRedis.lock('rank_save', async (hasLock: boolean) => {
            if (hasLock) {
                for (let rankType in this._rankMetaInfo) {
                    let redisKey = this.getRankDataRedisKey(rankType, serverId);
                    let data = await gameRedis.get(redisKey);
                    if (data) {
                        let rankData = new RankData();
                        rankData.deserialize(data);
                        rankData.ids = [];
                        rankData.values = [];
                        let rankInfo = await this.getRankInfo(rankType, serverId);
                        for (let o of rankInfo) {
                            rankData.ids.push(o.id);
                            rankData.values.push(o.value);
                        }
                        rankData.serialize();
                        await WorldDB.conn.execute('update global set ? where key_id = ? and server_id = ?', [{
                            data: rankData.serialize()
                        }, this.getRankDBKey(rankType), GameWorld.instance.info.server_id]);
                        Log.sInfo('rank_controller save success');
                    }
                }
            }
        }, false);
    }

    async init() {
        await this.loadData(GameWorld.instance.info.server_id);
    }

    @controller()
    async getRank(role: Role, msg: C2S.CS_RANK_GET_RANK) {
        for (let rankType of msg.types) {
            let key = this.getRankRedisKey(rankType, GameWorld.instance.info.server_id);
            await gameRedis.lock(key, async () => {
            });
        }
    }

    private async getRankInfo(rankType: any | ERankType, serverId): Promise<RankInfo[]> {
        return new Promise<RankInfo[]>(async (resolve, reject) => {
            let rankInfo = this._rankMetaInfo[rankType];
            if (!rankInfo) {
                reject('rankType error, rankType=' + rankType);
            }
            else {
                if (rankInfo.sortType === ERankSortType.desc) {
                    let ret = await gameRedis.zrevrange(this.getRankRedisKey(rankType, serverId), 0, rankInfo.limit - 1);
                    resolve(ret);
                }
                else {
                    let ret = await gameRedis.zrange(this.getRankRedisKey(rankType, serverId), 0, rankInfo.limit - 1);
                    resolve(ret);
                }
            }
        });
    }

    async getRoleRank(roleId: number, serverId: number, rankType: ERankType): Promise<number> {
        if (!this._rankMetaInfo.hasOwnProperty(rankType)) {
            Log.uError(roleId, 'rankType not found, val=' + rankType);
            return;
        }

        return new Promise<number>(async (resolve, reject) => {
            let rankInfo = this._rankMetaInfo[rankType];
            if (!rankInfo) {
                reject('rankType error, rankType=' + rankType);
            }
            else {
                if (rankInfo.sortType === ERankSortType.desc) {
                    let ret = await gameRedis.zrevrank(this.getRankRedisKey(rankType, serverId), roleId, rankInfo.limit);
                    resolve(ret);
                }
                else {
                    let ret = await gameRedis.zrank(this.getRankRedisKey(rankType, serverId), roleId, rankInfo.limit);
                    resolve(ret);
                }
            }
        });
    }

    private async updateRoleRankValue(role: Role, rankType: ERankType, value: number) {
        if (!value) {
            return;
        }

        if (!this._rankMetaInfo.hasOwnProperty(rankType)) {
            Log.uError(role.uid, 'rankType not found, val=' + rankType);
            return;
        }
        await gameRedis.zadd(this.getRankRedisKey(rankType, GameWorld.instance.info.server_id), [{
            id: role.uid,
            value: value
        }]);
    }

    private getRankRedisKey(rankType: any, serverId: number): string {
        return 'rank_' + serverId + '_' + rankType;
    }

    private getRankDataRedisKey(rankType: any, serverId: number): string {
        return 'rank_data_' + serverId + '_' + rankType;
    }

    private getRankDBKey(rankType: any): string {
        return 'rank_data_' + rankType;
    }

    async notify(role: Role) {
        let newValue, rankType;
        for (let key in role.rankFields) {
            newValue = role.fields[key];
            rankType = role.rankFields[key];
            await this.updateRoleRankValue(role, rankType, newValue);
        }

        role.rankFields = {};
    }
}