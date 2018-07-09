import {UserSession} from '../../lib/net/user_session';
import {Log} from "../../lib/util/log";
import {LoginWorld} from "./login_world";
import * as LoginDB from "../../lib/mysql/login_db";
import {C2S, S2C} from "../proto/cmd";

const MAX_PACKET_COUNT = 10000;

export class LoginSession extends UserSession {
    passportId: number = 0;
    platformId: number = 0;
    gmAuth: number = 0;
    clientVersion: string = '';

    constructor() {
        super();
        this.on('message', (data) => {
            try {
                let msg = C2S.Message.decode(new Uint8Array(data));
                this.pushPacket(msg);
            } catch (e) {
                Log.sError(e);
            }
        });
    }

    public async update() {
        let packet,
            counter = 0,
            cur = this.packets.head,
            t;
        while (cur) {
            if (this.packets.length > MAX_PACKET_COUNT) {
                Log.sError('packet array length too long, force close socket, uid=%d, ip=%s, length=%d', this.socket.uid, this.socket.ip, this.packets.length);
                this.closeSocket();
            }

            packet = cur.element;
            t = cur;
            this.packets.deleteNode(t);
            cur = cur.next;

            Log.sInfo('socketUid=%d, name=%s, data=%j', this.socket.uid, packet.kind, packet[packet.kind]);

            switch (packet.kind) {
                case 'LOGIN_CS_LOGIN' :
                    await this.handleLogin(packet);
                    break;
                case 'LOGIN_CS_CHOOSE_SERVER':
                    await this.handleChooseServer(packet);
                    break;
                case 'LOGIN_CS_GET_SERVER_LIST':
                    await this.handleGetServerList();
                    break;
                case 'LOGIN_CS_GET_INFO':
                    await this.handleGetInfo(packet);
                    break;
                default:
                    Log.sError('controller not found, name=%s', packet.kind);
                    break;
            }
            // per loop do 5 packet
            if (++counter > 5) {
                break;
            }
        }
    }

    public addSessionToWorker(): void {
        LoginWorld.instance.addSession(this);
    }

    private checkIp(ip: string, pattern: string): boolean {
        let ipv6Prefix = '::ffff:';
        let idx = ip.indexOf(ipv6Prefix);
        if (idx !== -1) {
            ip = ip.substr(idx + ipv6Prefix.length);
        }
        let ipArr = ip.split('.');
        if (ipArr.length !== 4) {
            return false;
        }

        let pArr = pattern.split('.');
        if (pArr.length !== 4) {
            return false;
        }

        for (let i = 0; i < ipArr.length; i++) {
            let ipE = ipArr[i];
            if (pArr[i] === '*' || ipE === pArr[i]) {
                continue;
            }
            return false;
        }
        return true;
    }

    private isServerAccess(strategyId: number): boolean {
        if (!strategyId) {
            return true;
        }

        let condArr = LoginWorld.instance.loginStrategyMap[strategyId];
        if (!condArr) {
            return false;
        }

        let tmp = [];
        for (let i = 0; i < condArr.length; i++) {
            let condition = condArr[i];
            switch (condition.type) {
                case LoginDB.LoginStrategyType.PLATFORM:
                    tmp = condition.value.split(',');
                    if (tmp.indexOf(this.platformId) !== -1) {
                        return true;
                    }
                    break;
                case LoginDB.LoginStrategyType.IP:
                    tmp = condition.value.split(',');
                    for (let j = 0; j < tmp.length; j++) {
                        let patten = tmp[j];
                        if (this.checkIp(this.socket.ip, patten)) {
                            return true;
                        }
                    }
                    break;
                case LoginDB.LoginStrategyType.AUTH:
                    return this.gmAuth >= parseInt(condition.value);
                case LoginDB.LoginStrategyType.VERSION:
                    return this.clientVersion === condition.value;
                case LoginDB.LoginStrategyType.DEVICE:
                    return false;
                default:
                    Log.sError('error condition type=' + condition.type);
                    break;
            }
        }

        return false;
    }

    public async handleLogin(packet: C2S.LOGIN_CS_LOGIN) {
        let pck = S2C.LOGIN_SC_LOGIN.create();
        let sql = 'select passport_id, gm_auth, last_login_server from passport_info where ? and ? and ?',
            lastLoginServer = 0;
        let result = await LoginDB.conn.execute(sql, [{passport: packet.passport}, {platform: packet.platform}, {auth_type: 2}]);
        if (result.length === 0) {
            let dbTime = await LoginDB.getDBTime();
            let insertSql = "insert into passport_info set ?";
            result = await LoginDB.conn.execute(insertSql, {
                passport: packet.passport,
                platform: packet.platform,
                auth_type: 2,
                pwd: '',
                mail: '',
                uid: packet.deviceUid,
                token: packet.deviceToken,
                create_time: dbTime,
                gm_auth: 0,
                reg_ip: this.socket.ip,
                reg_device: packet.device,
                reg_device_type: packet.deviceType,
                last_login_time: dbTime,
                status: 0,
                last_login_server: 0
            });
            this.passportId = result['insertId'];
        }
        else {
            this.passportId = result[0]['passport_id'];
            this.gmAuth = result[0]['gm_auth'];
            lastLoginServer = result[0]['last_login_server'];
        }

        if (!lastLoginServer) {
            let maxServerId = 0;
            for (let key in LoginWorld.instance.serverMap) {
                let server = LoginWorld.instance.serverMap[key];
                if (!server.can_login || !server.alive) {
                    continue;
                }
                if (!this.isServerAccess(server.login_strategy_id)) {
                    continue;
                }

                if (maxServerId < server.server_id) {
                    maxServerId = server.server_id;
                }
            }

            if (maxServerId) {
                lastLoginServer = maxServerId;
                Log.sInfo('new passport, allocate server[' + lastLoginServer + ']');
                let sql = 'update passport_info set ? where ?';
                await LoginDB.conn.execute(sql, [{last_login_server: lastLoginServer}, {passport_id: this.passportId}]);
            }
        } else {
            Log.sInfo('old passport, allocate server[' + lastLoginServer + ']');
        }

        pck.serverId = lastLoginServer;
        pck.gmAuth = this.gmAuth;
        this.sendProtocol(pck);
    }

    public handleGetServerList() {
        let pck = S2C.LOGIN_SC_GET_SERVER_LIST.create();
        for (let obj in LoginWorld.instance.serverMap) {
            let server = LoginWorld.instance.serverMap[obj];
            if (this.isServerAccess(server.login_strategy_id)) {
                pck.servers.push({
                    serverId: server.server_id,
                    name: server.server_name,
                    status: 1
                });
            }
        }
        this.sendProtocol(pck);
    }

    public handleGetInfo(packet: C2S.LOGIN_CS_GET_INFO) {
        let platformId = packet.platformId,
            clientVersion = packet.clientVersion,
            notice = '',
            reqVersion = LoginWorld.instance.getNoticeStr(LoginDB.NoticeUseType.PLATFORM_CLIENT_VERSION, LoginDB.NoticeConditionType.PLATFORM, platformId),
            updateAddress = '';

        this.platformId = platformId;
        this.clientVersion = clientVersion;

        let pck = S2C.LOGIN_SC_GET_INFO.create();
        if (reqVersion !== '' && reqVersion !== clientVersion) {
            updateAddress = LoginWorld.instance.getNoticeStr(LoginDB.NoticeUseType.UPDATE_ADDR, LoginDB.NoticeConditionType.PLATFORM, platformId);
            pck.notice = '';
            pck.version = reqVersion;
            pck.updateAddress = updateAddress;
        } else {
            notice = LoginWorld.instance.getNoticeStr(LoginDB.NoticeUseType.LOGIN, LoginDB.NoticeConditionType.PLATFORM, platformId);
            pck.notice = notice;
            pck.version = reqVersion;
            pck.updateAddress = '';
        }

        this.sendProtocol(pck);
    }

    public async handleChooseServer(packet: C2S.LOGIN_CS_CHOOSE_SERVER) {
        let server = LoginWorld.instance.serverMap[packet.serverId];
        if (server) {
            let sql = 'update passport_info set ? where ?';
            await LoginDB.conn.execute(sql, [{last_login_server: packet.serverId}, {passport_id: this.passportId}]);
            let pck = S2C.LOGIN_SC_CHOOSE_SERVER.create();
            pck.ip = server.ip;
            pck.port = server.port;
            pck.resServerAddress = server.res_server_ip;
            pck.resVersion = server.res_version;
            pck.version = server.version;
            this.sendProtocol(pck);
        }
    }
}