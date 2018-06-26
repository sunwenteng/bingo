// import * as zlib from 'zlib';
// import * as fs from 'fs';
// import {Log} from "../lib/util/log";
//
// import tar = require('tar');
// import ncp = require('ncp');
//
// import ConfigStruct = require('./config/data/config_struct');
//
//
// import Util = require('./util/game_util');
//
// export let configMgr = new ConfigStruct.ConfigMgr();
//
// export function updateConfigRevision(baseUrl:string, revision:number, callback:(err)=>void):void {
//     async.waterfall([
//         (next) => {
//             if (!baseUrl || baseUrl === '') {
//                 next(new Error('config base url Error: baseUrl=' + baseUrl));
//                 return ;
//             }
//             downloadConfigData(baseUrl, revision, next);
//         },
//         (next) => {
//             targzConfigData(revision, next);
//         },
//         (next) => {
//             // TODO check tmp and current data config diff
//
//             // do update config data
//             let configPath = index.sourceRoot + '/src/config/';
//             Util.deleteFileInDir(configPath + 'data', /.*\.json/, (err) => {
//                 if (err) {
//                     Log.sError('Config', 'deleteFileInDir Error: ', err.message);
//                 }
//                 ncp.ncp(configPath + 'tmp', configPath + 'data', {
//                     filter: /^.*(tmp|\.json)$/,
//                     clobber: true       //  if set to false, ncp will not overwrite destination files that already exist.
//                 }, (err) => {
//                     if (err) {
//                         Log.sError('Config', 'ncp Error: configPath=' + configPath);
//                     }
//                     next(err);
//                 });
//             });
//         },
//
//         (next) => {
//             reloadAllConfig();
//             next();
//         }
//     ], (err) =>{
//         if (err) {
//             console.log(err.message);
//         }
//         callback(err);
//     });
// }
//
// async function downloadConfigData(baseUrl:string, revision:number, callback:(err)=>void):Promise<void> {
//     return new Promise<void>(((resolve, reject) => {
//         let configPath = index.sourceRoot + '/src/config/';
//
//         let fileName = 'dh-config-' + revision + '.tar.gz';
//         let url = baseUrl + fileName;
//         let dest = configPath + "archive/" + fileName;
//
//         let archivePath = configPath + 'archive/';
//         if (!fs.existsSync(archivePath)) {
//             console.log('mkdir ' + archivePath);
//             fs.mkdirSync(archivePath);
//         }
//         Util.httpDownload(url, dest, (err) => {
//             if (err) {
//                 Log.sError('Config', 'Download ' + url + ' Failed, ' + err.message);
//                 callback(err);
//             } else {
//                 Log.sInfo('Config', 'Download ' + url + ' Successfully, Destination=' + dest);
//                 callback(null);
//             }
//         });
//     }));
// }
//
// function targzConfigData(revision, callback:(err)=>void):void {
//     let configPath = index.sourceRoot + '/src/config/';
//     let fileName = 'dh-config-' + revision + '.tar.gz';
//     let src = configPath + "archive/" + fileName;
//
//     let streamZlib = zlib.createGunzip();
//     let streamRead = fs.createReadStream(src);
//     let streamTar = tar.Extract({
//         path: configPath + 'tmp',
//         strip: 0
//     });
//
//     streamRead.pipe(streamZlib).pipe(streamTar);
//
//     streamTar.on('finish', function () {
//         console.log('streamTar done');
//         callback(null);
//     });
//     streamTar.on('error', function (err) {
//         console.log('streamTar Error: ' + err.stack);
//         callback(err);
//     });
//
//     streamZlib.on('finish', function () {
//         console.log('streamZlib done');
//     });
//     streamZlib.on('error', function (err) {
//         console.log('streamZlib Error: ' + err.stack);
//         callback(err);
//     });
//
//     streamRead.on('error', function (err) {
//         console.log('streamRead Error: ' + err.stack);
//     });
// }