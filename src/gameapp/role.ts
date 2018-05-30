// import log = require('../util/log');
// import DynObject = require('../util/dynamicobject/dyn_object')
// import Time = require('../util/time');
// import RedisMgr = require('../redis/redis_mgr');
// import WorldDB = require('../database/impl/world_db');
// import defines = require('./defines');
//
// let roleRedis = RedisMgr.getInstance('roleRedis');
//
// class Role {
//     isLoad = false;
//     data:defines.RoleData = {};
//     dirtyFields = {};
//     isDirty = false;
//
//     redisPrefix:string = '';
//     redisKeyExpire:number = 3600;
//
//     constructor(uid:number) {
//         this.redisPrefix = 'role';
//         this.data.uid = uid;
//         this.data.nickname = '';
//         this.data.headimgurl = '';
//         this.data.diamond = 0;
//         this.data.lastLoginTime = Time.realNow();
//         this.data.lastAliveTime = Time.realNow();
//         this.data.createTime = 0;
//         this.data.exp = 0;
//         this.data.gold = 100;
//         this.data.level = 1;
//         this.data.roomLvl = 1;
//         this.data.heroes = {};
//         this.data.equips = {};
//         this.data.res = {};
//         this.data.techs = {};
//         this.data.blueprints = [];
//         this.data.pve = {};
//         this.data.pvp = {};
//         //TODO 所有新属性必须初始化下
//     }
//
//     public initData() {
//         this.isLoad = true;
//     }
//
//     public get(name:string) {
//         this.checkPlayerIsLoadAndThrowError();
//         return this.data[name];
//     }
//
//     public set(name:string, val:any) {
//         this.checkPlayerIsLoadAndThrowError();
//         this.data[name] = val;
//         this.dirtyFields[name] = val;
//         this.isDirty = true;
//     }
//
//     public save(callback:(err)=>void, onlyCache:boolean = false, bSaveAll:boolean = false):void {
//         if (this.isDirty || bSaveAll) {
//             this.checkPlayerIsLoadAndThrowError();
//             let pckData = this.serialize();
//             let checkFields = bSaveAll ? this.data : this.dirtyFields;
//             let saveData:{[key: string]:any} = {};
//             for (let obj in checkFields) {
//                 if (checkFields.hasOwnProperty(obj))
//                     saveData[obj] = pckData[obj];
//             }
//
//             // 异步存储到redis
//             roleRedis.hmset(this.getRedisKey(), saveData, this.redisKeyExpire, (err) => void {
//                 if(err) {
//                     log.sError('redis update err=', err.stack);
//                 }
//             });
//
//             // 异步存储到db
//             if (!onlyCache) {
//                 WorldDB.conn.execute('update player_info_' + this.getTableNum() + ' set ? where ?', [saveData, {uid: this.data.uid}], ()=> {
//                 })
//             }
//
//             this.isDirty = false;
//             this.dirtyFields = {};
//
//             callback(null);
//         }
//         else {
//             return callback(null);
//         }
//     }
//
//     public load(callback:(err, isExist:boolean)=>void):void {
//         roleRedis.hmget(this.getRedisKey(), this.getDataFields(), (err, reply)=> {
//             // 查询出错
//             if (err || reply === null) {
//                 return callback(err, false);
//             }
//             // 缓存不存在，从db查询然后放到缓存
//             else if (Object.keys(reply).length === 0) {
//                 WorldDB.conn.execute('select * from player_info_' + this.getTableNum() + ' where ?', {uid: this.data.uid}, (err, connection, result)=> {
//                     if (err) {
//                         return callback(err, false);
//                     }
//
//                     if (!result || result.length === 0) {
//                         return callback(null, false);
//                     }
//
//                     roleRedis.hmset(this.getRedisKey(), result[0], this.redisKeyExpire, ()=> {
//                     });
//                     this.deserialize(result[0]);
//                     return callback(null, true);
//                 })
//             }
//             // 缓存命中
//             else {
//                 this.deserialize(reply);
//                 return callback(null, true);
//             }
//         });
//     }
//
//     public create(callback:(err:any)=>void):void {
//         this.initData();
//         this.data.createTime = Time.realNow();
//         let pckData = this.serialize();
//         WorldDB.conn.execute('insert into player_info_' + this.getTableNum() + ' set ?', pckData, callback)
//     }
//
//     private checkPlayerIsLoadAndThrowError() {
//         if (!this.isLoad) {
//             throw new Error('player data is not loaded');
//         }
//     }
//
//     private getRedisKey() {
//         return this.redisPrefix + '_' + this.data.uid;
//     }
//
//     private getDataFields():string[] {
//         let ret = [];
//         for (let obj in this.data) {
//             if (this.data.hasOwnProperty(obj)) {
//                 ret.push(obj.toString());
//             }
//         }
//         return ret;
//     }
//
//     private getTableNum():number {
//         return this.data.uid % WorldDB.TABLE_SPLIT_NUM;
//     }
//
//     private deserialize(reply:{[key:string]:any}):void {
//         for (let obj in reply) {
//             if (this.data.hasOwnProperty(obj)) {
//                 switch (typeof this.data[obj]) {
//                     case 'number' :
//                         this.data[obj] = parseInt(reply[obj]);
//                         break;
//                     case 'object' :
//                     case 'array' :
//                         try {
//                             if(reply[obj] === "") {
//                                 this.data[obj] = {};
//                             }
//                             else {
//                                 this.data[obj] = JSON.parse(reply[obj]);
//                             }
//                         }catch (err) {
//                             log.sError('role data parse failed, key=%s, val=%s', obj, reply[obj]);
//                             this.data[obj] = {};
//                         }
//
//                         break;
//                     case 'string' :
//                         this.data[obj] = reply[obj];
//                         break;
//                 }
//             }
//         }
//         this.isLoad = true;
//     }
//
//     private serialize():{[key:string]:any} {
//         let reply:{[key: string]:any} = {};
//         for (let obj in this.data) {
//             if (this.data.hasOwnProperty(obj)) {
//                 switch (typeof this.data) {
//                     case 'number' :
//                     case 'string' :
//                         reply[obj] = this.data[obj];
//                         break;
//                     case 'object' :
//                     case 'array' :
//                         reply[obj] = JSON.stringify(this.data[obj]);
//                         break;
//                 }
//             }
//         }
//
//         return reply;
//     }
// }
//
// export = Role;