import {Log} from '../util/log'
import {MysqlConnection, MysqlConfig} from "./lib/mysql_connection";

export let conn: MysqlConnection;
let _timer;

// notice_info_v2 这张表里有乱七八糟各种信息，都是key-value，用来存储各种杂乱信息
export interface LoginNoticeInfo {
    auto_id:number;
    use_type:number;
    condition_type:number;
    condition_value:number;
    content:string;
    start_time:number;
    end_time:string;
}

export interface Server {
    server_id:number;
    server_name:string;
    ip:string;
    local_ip:string;
    port:number;
    version:string;
    res_version:string;
    res_server_ip:string;
    res_server_config:string;
    online_num:number;
    can_login:boolean;
    status:number;
    alive:boolean;
    update_time:number;
    login_strategy_id:number;
    is_recommend:boolean;
}

export interface LoginStrategyCondition {
    type:number;
    value:string;
}

export enum LoginStrategyType {
    PLATFORM = 1,
    IP = 2,
    AUTH = 3,
    VERSION = 4,
    DEVICE = 5
}

export enum NoticeConditionType {
    DEFAULT = 0,
    PLATFORM = 1,
    SERVER_ID = 2
}

export enum NoticeUseType {
    LOGIN = 1,
    GAME = 2,
    CUSTOME_SERVICE = 3,
    WEIBO = 4,
    UPDATE_ADDR = 5,
    PLATFORM_CLIENT_VERSION = 8,
    LOGIN_ROLL = 9,
    LOGIN_PICTURE = 10,
    WEIXINMA = 11,
    CAN_UPDATE = 13,            // 是否开启更新
    FORBID_FUNCTION = 14,       // 禁用功能列表
}

export async function start(config: MysqlConfig): Promise<void> {
    conn = new MysqlConnection();
    conn.startDb(config);

    let tables: { [tableName: string]: string } = {
        "gameserver_info": "CREATE TABLE IF NOT EXISTS gameserver_info (" +
        "server_id		SMALLINT	UNSIGNED	NOT NULL," +
        "server_name	VARCHAR(32)	CHARACTER SET utf8 NOT NULL," +
        "ip				VARCHAR(64)	CHARACTER SET utf8 NOT NULL," +
        "local_ip		VARCHAR(64)	CHARACTER SET utf8 NOT NULL," +
        "port			SMALLINT	UNSIGNED	NOT NULL," +
        "version		VARCHAR(20)	CHARACTER SET utf8 NOT NULL," +
        "res_version	VARCHAR(20)	CHARACTER SET utf8 NOT NULL," +
        "res_server_ip	VARCHAR(64) CHARACTER SET utf8 NOT NULL," +
        "res_server_config	VARCHAR(64) CHARACTER SET utf8 NOT NULL," +
        "res_version_config	VARCHAR(64) CHARACTER SET utf8 NOT NULL," +
        "online_num		MEDIUMINT	UNSIGNED	NOT NULL," +
        "can_login		TINYINT		UNSIGNED	NOT NULL," +
        "status			TINYINT		UNSIGNED	NOT NULL," +
        "update_time	INT			UNSIGNED	NOT NULL," +
        "login_strategy_id	INT		    UNSIGNED	NOT NULL," +
        "is_recommend		TINYINT		UNSIGNED	NOT NULL," +
        "PRIMARY KEY (server_id)" +
        ") ENGINE=InnoDB DEFAULT CHARSET=utf8;",

        "player_info": "CREATE TABLE IF NOT EXISTS player_info (" +
        "role_id		INT			UNSIGNED	NOT NULL," +
        "name			VARCHAR(32)	CHARACTER SET utf8 NOT NULL," +
        "gm_auth		TINYINT		UNSIGNED	NOT NULL," +
        "status			TINYINT		UNSIGNED	NOT NULL," +
        "progress		INT			UNSIGNED	NOT NULL," +
        "level			INT			UNSIGNED	NOT NULL," +
        "gold			INT			UNSIGNED	NOT NULL," +
        "diamond		INT			UNSIGNED	NOT NULL," +
        "vip_level		INT			UNSIGNED	NOT NULL," +
        "vip_exp		INT			UNSIGNED	NOT NULL," +
        "diamond_paid	INT			UNSIGNED	NOT NULL," +
        "last_login_time	INT		UNSIGNED	NOT NULL," +
        "cur_stage  	INT		UNSIGNED	NOT NULL," +
        "PRIMARY KEY (role_id)" +
        ") ENGINE=InnoDB DEFAULT CHARSET=utf8;",

        "player_detail": "CREATE TABLE IF NOT EXISTS player_detail (" +
        "role_id		INT			UNSIGNED	NOT NULL," +
        "PRIMARY KEY (role_id)" +
        ") ENGINE=InnoDB DEFAULT CHARSET=utf8;",

        "passport_info": "CREATE TABLE IF NOT EXISTS passport_info (" +
        "passport_id	BIGINT		UNSIGNED	NOT NULL AUTO_INCREMENT," +
        "passport		VARCHAR(64)	CHARACTER SET utf8 NOT NULL," +
        "pwd			VARCHAR(64) CHARACTER SET utf8 NOT NULL," +
        "mail			VARCHAR(64) CHARACTER SET utf8 NOT NULL," +
        "uid			VARCHAR(128) CHARACTER SET utf8 NOT NULL," +
        "token			VARCHAR(128) CHARACTER SET utf8 NOT NULL," +
        "platform		MEDIUMINT	UNSIGNED	NOT NULL," +
        "auth_type		TINYINT		UNSIGNED	NOT NULL," +
        "create_time	INT			UNSIGNED	NOT NULL," +
        "gm_auth		TINYINT		UNSIGNED	NOT NULL," +
        "reg_ip			VARCHAR(64) CHARACTER SET utf8 NOT NULL," +
        "reg_device		VARCHAR(32)	CHARACTER SET utf8 NOT NULL," +
        "reg_device_type VARCHAR(64) CHARACTER SET utf8 NOT NULL," +
        "last_login_time	INT		UNSIGNED	NOT NULL," +
        "last_login_server	SMALLINT	UNSIGNED	NOT NULL," +
        "status			TINYINT		UNSIGNED	NOT NULL," +
        "diamond_pay	INT			UNSIGNED	NOT NULL," +
        "PRIMARY KEY (passport_id)" +
        ") ENGINE=InnoDB DEFAULT CHARSET=utf8;",

        "login_strategy": "CREATE TABLE IF NOT EXISTS login_strategy (" +
        "auto_id		INT		UNSIGNED	NOT NULL	AUTO_INCREMENT," +
        "strategy_id	INT		UNSIGNED	NOT NULL," +
        "condition_id	TINYINT	UNSIGNED	NOT NULL," +
        "type			TINYINT	UNSIGNED	NOT NULL," +
        "value			VARCHAR(64) CHARACTER SET utf8 NOT NULL," +
        "PRIMARY KEY(auto_id)" +
        ") ENGINE=InnoDB DEFAULT CHARSET=utf8;",

        "login_strategy_backup": "CREATE TABLE IF NOT EXISTS `login_strategy_backup` (" +
        "`idx` int(10) unsigned NOT NULL AUTO_INCREMENT," +
        "`auto_id` int(10) unsigned NOT NULL DEFAULT '0'," +
        "`strategy_id` int(10) unsigned NOT NULL," +
        "`condition_id` tinyint(3) unsigned NOT NULL," +
        "`type` tinyint(3) unsigned NOT NULL," +
        "`value` varchar(64) NOT NULL," +
        "`creator` varchar(32) DEFAULT NULL COMMENT '记录创建人'," +
        "`remark` varchar(100) DEFAULT NULL COMMENT '备注'," +
        "`backup_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '备份时间'," +
        "PRIMARY KEY (`idx`)" +
        ") ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;",

        "re_passport_player": "CREATE TABLE IF NOT EXISTS re_passport_player (" +
        "role_id		INT			UNSIGNED	NOT NULL AUTO_INCREMENT," +
        "passport_id	BIGINT		UNSIGNED	NOT NULL," +
        "server_id		SMALLINT	UNSIGNED	NOT NULL," +
        "create_time	INT			UNSIGNED	NOT NULL," +
        "role_st		SMALLINT	UNSIGNED	NOT NULL DEFAULT '0'," +
        "PRIMARY KEY (role_id)" +
        ") ENGINE=InnoDB DEFAULT CHARSET=utf8;",

        "role_login_info": "CREATE TABLE IF NOT EXISTS role_login_info (" +
        "auto_id		INT			UNSIGNED	NOT NULL AUTO_INCREMENT," +
        "role_id		INT			UNSIGNED	NOT NULL," +
        "login_time		INT			UNSIGNED	NOT NULL," +
        "logout_time	INT			UNSIGNED	NOT NULL," +
        "login_ip				VARCHAR(64) CHARACTER SET utf8 NOT NULL," +
        "login_device			VARCHAR(32)	CHARACTER SET utf8 NOT NULL," +
        "login_device_type		VARCHAR(64) CHARACTER SET utf8 NOT NULL," +
        "PRIMARY KEY (auto_id)" +
        ") ENGINE=InnoDB DEFAULT CHARSET=utf8;",

        "goods_info": "CREATE TABLE IF NOT EXISTS goods_info (" +
        "server_id		SMALLINT	UNSIGNED	NOT NULL," +
        "goods_id			INT		UNSIGNED	NOT NULL," +
        "shop_type			INT		UNSIGNED	NOT NULL," +
        "buy_type_id		INT		UNSIGNED	NOT NULL," +
        "buy_content_id		INT		UNSIGNED	NOT NULL," +
        "buy_count			INT		UNSIGNED	NOT NULL," +
        "cost_type_id		INT		UNSIGNED	NOT NULL," +
        "cost_content_id	INT		UNSIGNED	NOT NULL," +
        "cost_count			INT		UNSIGNED	NOT NULL," +
        "cost_count_old		INT		UNSIGNED	NOT NULL," +
        "status			TINYINT		UNSIGNED	NOT NULL," +
        "limit_day			INT		UNSIGNED	NOT NULL," +
        "sort_idx			INT		UNSIGNED	NOT NULL," +
        "icon_id			INT		UNSIGNED	NOT NULL," +
        "goods_name			VARCHAR(64)	CHARACTER SET utf8 NOT NULL," +
        "description	VARCHAR(256) CHARACTER SET utf8 NOT NULL," +
        "limit_once			INT		UNSIGNED	NOT NULL," +
        "platform_type		TINYINT		UNSIGNED	NOT NULL," +
        "PRIMARY KEY (server_id, goods_id)" +
        ") ENGINE=InnoDB DEFAULT CHARSET=utf8;",

        "notice_info_v2": "CREATE TABLE IF NOT EXISTS notice_info_v2 (" +
        "auto_id			INT		UNSIGNED	NOT NULL AUTO_INCREMENT," +
        "use_type			TINYINT	UNSIGNED	NOT NULL," +
        "condition_type		TINYINT	UNSIGNED	NOT NULL," +
        "condition_value	INT		UNSIGNED	NOT NULL," +
        "content			VARCHAR(1024)	CHARACTER SET utf8 NOT NULL," +
        "start_time	INT		UNSIGNED	NOT NULL," +
        "end_time	INT		UNSIGNED	NOT NULL," +
        "PRIMARY KEY (auto_id)" +
        ") ENGINE=InnoDB DEFAULT CHARSET=utf8;",

        "active_info": "CREATE TABLE IF NOT EXISTS active_info (" +
        "auto_id		INT		UNSIGNED	NOT NULL AUTO_INCREMENT," +
        "server_id		INT		UNSIGNED	NOT NULL," +
        "type_id	TINYINT		UNSIGNED	NOT NULL," +
        "param		VARCHAR(256) CHARACTER SET utf8 NOT NULL," +
        "act_data		blob," +
        "gm_cmd_id		INT		UNSIGNED	NOT NULL," +
        "PRIMARY KEY (auto_id)" +
        ") ENGINE=InnoDB DEFAULT CHARSET=utf8;",

        "charge_info": "CREATE TABLE IF NOT EXISTS charge_info (" +
        "auto_id			INT		UNSIGNED	NOT NULL AUTO_INCREMENT," +
        "role_id			INT		UNSIGNED	NOT NULL," +
        "goods_id			INT		UNSIGNED	NOT NULL," +
        "goods_quantity		INT		UNSIGNED	NOT NULL," +
        "currency			VARCHAR(16) CHARACTER SET utf8 NOT NULL," +
        "value				INT		UNSIGNED	NOT NULL," +
        "virtual_value		INT		UNSIGNED	NOT NULL DEFAULT '0'," +
        "type				INT		UNSIGNED	NOT NULL," +
        "inner_order_id			VARCHAR(128) CHARACTER SET utf8 NOT NULL," +
        "platform			MEDIUMINT	UNSIGNED	NOT NULL," +
        "platform_order_id		VARCHAR(128) CHARACTER SET utf8 NOT NULL," +
        "platform_account_id	VARCHAR(128) CHARACTER SET utf8 NOT NULL," +
        "platform_payment_type	TINYINT	UNSIGNED	NOT NULL," +
        "state				TINYINT	UNSIGNED	NOT NULL," +
        "payment_time		INT	UNSIGNED	NOT NULL DEFAULT '0'," +
        "distribute_time	INT UNSIGNED 	NOT NULL DEFAULT '0'," +
        "payment_ip			VARCHAR(64) CHARACTER SET utf8 NOT NULL DEFAULT ''," +
        "payment_device		VARCHAR(32) CHARACTER SET utf8 NOT NULL DEFAULT ''," +
        "payment_device_type VARCHAR(64) CHARACTER SET utf8 NOT NULL DEFAULT ''," +
        "payment_device_uid VARCHAR(128) CHARACTER SET utf8 NOT NULL DEFAULT ''," +
        "client_order_id	VARCHAR(128) CHARACTER SET utf8 NOT NULL DEFAULT ''," +
        "addition1			VARCHAR(128) CHARACTER SET utf8 NOT NULL DEFAULT ''," +
        "addition2			VARCHAR(128) CHARACTER SET utf8 NOT NULL DEFAULT ''," +
        "addition3			VARCHAR(128) CHARACTER SET utf8 NOT NULL DEFAULT ''," +
        "addition4			VARCHAR(128) CHARACTER SET utf8 NOT NULL DEFAULT ''," +
        "addition5			VARCHAR(128) CHARACTER SET utf8 NOT NULL DEFAULT ''," +
        "PRIMARY KEY (auto_id)" +
        ") ENGINE=InnoDB DEFAULT CHARSET=utf8;",

        "gain_info": "CREATE TABLE IF NOT EXISTS gain_info (" +
        "auto_id		INT 	UNSIGNED	NOT NULL AUTO_INCREMENT," +
        "role_id		INT		UNSIGNED	NOT NULL," +
        "source_type	INT		UNSIGNED	NOT NULL," +
        "source_id		INT		UNSIGNED	NOT NULL," +
        "value			INT		UNSIGNED	NOT NULL," +
        "time			INT		UNSIGNED	NOT NULL," +
        "PRIMARY KEY(auto_id)" +
        ") ENGINE=InnoDB DEFAULT CHARSET=utf8;",

        "purchase_info": "CREATE TABLE IF NOT EXISTS purchase_info (" +
        "auto_id		INT		UNSIGNED	NOT NULL AUTO_INCREMENT," +
        "role_id		INT		UNSIGNED	NOT NULL," +
        "goods_id		INT		UNSIGNED	NOT NULL," +
        "goods_quantity	INT		UNSIGNED	NOT NULL," +
        "value			INT		UNSIGNED	NOT NULL," +
        "time			INT		UNSIGNED	NOT NULL," +
        "diamond_paid_use			INT		UNSIGNED	NOT NULL," +
        "PRIMARY KEY (auto_id)" +
        ") ENGINE=InnoDB DEFAULT CHARSET=utf8;",

        "gm_cmd": "CREATE TABLE IF NOT EXISTS gm_cmd (" +
        "auto_id			INT		UNSIGNED	NOT NULL AUTO_INCREMENT," +
        "opr			VARCHAR(32)	CHARACTER SET utf8 NOT NULL," +
        "params			VARCHAR(8192) CHARACTER SET utf8 NOT NULL DEFAULT ''," +
        "target_type	TINYINT		UNSIGNED	NOT NULL," +
        "target_id		BIGINT		UNSIGNED	NOT NULL," +
        "start_time			INT		UNSIGNED	NOT NULL DEFAULT '0'," +
        "end_time			INT		UNSIGNED	NOT NULL DEFAULT '0'," +
        "backup_value	VARCHAR(128) 	CHARACTER SET utf8 NOT NULL DEFAULT ''," +
        "status			TINYINT		UNSIGNED	NOT NULL DEFAULT '0'," +
        "error_msg		VARCHAR(256)	CHARACTER SET utf8 NOT NULL DEFAULT ''," +
        "create_time		INT		UNSIGNED	NOT NULL DEFAULT '0'," +
        "sortserial		INT		UNSIGNED	NOT NULL DEFAULT '0'," +
        "author			VARCHAR(32) CHARACTER SET utf8 NOT NULL DEFAULT ''," +
        "PRIMARY KEY (auto_id)" +
        ") ENGINE=InnoDB DEFAULT CHARSET=utf8;",

        "active_stat": "CREATE TABLE IF NOT EXISTS active_stat (" +
        "auto_id			INT		UNSIGNED	NOT NULL AUTO_INCREMENT," +
        "active_id			INT		UNSIGNED	NOT NULL," +
        "active_type		INT		UNSIGNED	NOT NULL," +
        "role_id			INT		UNSIGNED	NOT NULL," +
        "reach_idx			INT		UNSIGNED	NOT NULL," +
        "reach_time			INT		UNSIGNED	NOT NULL," +
        "PRIMARY KEY (auto_id)" +
        ") ENGINE=InnoDB DEFAULT CHARSET=utf8;",

        "gift_box": "CREATE TABLE IF NOT EXISTS gift_box(" +
        "id			INT		UNSIGNED	NOT NULL," +
        "idx		INT		UNSIGNED	NOT NULL," +
        "role_id	INT		UNSIGNED	NOT NULL," +
        "PRIMARY KEY(id, idx)" +
        ") ENGINE=InnoDB DEFAULT CHARSET=utf8;",

        "invite_info": "CREATE TABLE IF NOT EXISTS invite_info(" +
        "role_id	INT		UNSIGNED	NOT NULL," +
        "level		INT		UNSIGNED	NOT NULL," +
        "inviter_id	INT		UNSIGNED	NOT NULL," +
        "PRIMARY KEY(role_id)" +
        ") ENGINE=InnoDB DEFAULT CHARSET=utf8;",

        "gift_box_config": "CREATE TABLE IF NOT EXISTS gift_box_config(" +
        "id			INT		UNSIGNED	NOT NULL," +
        "param1		INT		UNSIGNED	NOT NULL," +
        "param2		INT		UNSIGNED	NOT NULL," +
        "param3		INT		UNSIGNED	NOT NULL," +
        "reward		VARCHAR(512) 	CHARACTER SET utf8 NOT NULL DEFAULT ''," +
        "server		VARCHAR(512) 	CHARACTER SET utf8 NOT NULL DEFAULT ''," +
        "dead_time	INT		UNSIGNED	NOT NULL," +
        "use_max	INT		UNSIGNED	NOT NULL," +
        "platform	VARCHAR(512) 	CHARACTER SET utf8 NOT NULL DEFAULT '0'," +
        "use_every	INT		UNSIGNED	NOT NULL DEFAULT '1'," +
        "PRIMARY KEY(id)" +
        ") ENGINE=InnoDB DEFAULT CHARSET=utf8;",

        "gift_box_config_backup": "CREATE TABLE IF NOT EXISTS gift_box_config_backup(" +
        "id			INT		UNSIGNED	NOT NULL," +
        "param1		INT		UNSIGNED	NOT NULL," +
        "param2		INT		UNSIGNED	NOT NULL," +
        "param3		INT		UNSIGNED	NOT NULL," +
        "reward		VARCHAR(512) 	CHARACTER SET utf8 NOT NULL DEFAULT ''," +
        "server		VARCHAR(512) 	CHARACTER SET utf8 NOT NULL DEFAULT ''," +
        "dead_time	INT		UNSIGNED	NOT NULL," +
        "use_max	INT		UNSIGNED	NOT NULL," +
        "platform	VARCHAR(512) 	CHARACTER SET utf8 NOT NULL DEFAULT '0'," +
        "backup_time	INT		UNSIGNED	NOT NULL" +
        ") ENGINE=InnoDB DEFAULT CHARSET=utf8;",

        "gift_box_backup": "CREATE TABLE IF NOT EXISTS gift_box_backup(" +
        "id			INT		UNSIGNED	NOT NULL," +
        "idx		INT		UNSIGNED	NOT NULL," +
        "role_id	INT		UNSIGNED	NOT NULL," +
        "backup_time	INT		UNSIGNED	NOT NULL," +
        "PRIMARY KEY(id)" +
        ") ENGINE=InnoDB DEFAULT CHARSET=utf8;",

        "gift_generate_record": "CREATE TABLE IF NOT EXISTS gift_generate_record(" +
        "id			INT		UNSIGNED	NOT NULL," +
        "idx		INT		UNSIGNED	NOT NULL," +
        "gen_start		INT		UNSIGNED	NOT NULL," +
        "gen_end		INT		UNSIGNED	NOT NULL," +
        "gen_use		VARCHAR(512)	NOT NULL," +
        "create_time		INT		UNSIGNED	NOT NULL," +
        "creator		VARCHAR(512)    NOT NULL," +
        "PRIMARY KEY(id, idx)" +
        ") ENGINE=InnoDB DEFAULT CHARSET=utf8;",

        "gift_generate_record_backup": "CREATE TABLE IF NOT EXISTS gift_generate_record_backup(" +
        "id			INT		UNSIGNED	NOT NULL," +
        "idx		INT		UNSIGNED	NOT NULL," +
        "gen_start		INT		UNSIGNED	NOT NULL," +
        "gen_end		INT		UNSIGNED	NOT NULL," +
        "gen_use		VARCHAR(512)	NOT NULL," +
        "create_time		INT		UNSIGNED	NOT NULL," +
        "creator		VARCHAR(512)    NOT NULL," +
        "backup_time	INT		UNSIGNED	NOT NULL," +
        "PRIMARY KEY(id, idx)" +
        ") ENGINE=InnoDB DEFAULT CHARSET=utf8;"

        // add new here
    };

    let columns = [
        // example: ['gameserver_info', 'test', 'smallint null']
        // add new update column here
        ['re_passport_player', 'server_id_origin', 'INT UNSIGNED NOT NULL'],
        ['player_info', 'cur_stage', 'INT UNSIGNED NOT NULL'],

        ['player_info', 'cur_train', 'INT UNSIGNED NOT NULL'],
        ['player_info', 'energy', 'INT UNSIGNED NOT NULL'],
        ['player_info', 'stamina', 'INT UNSIGNED NOT NULL'],
        ['player_info', 'quest', 'INT UNSIGNED NOT NULL'],

        ['charge_info', 'diamond_pay', 'int(10) unsigned NOT NULL DEFAULT 0'],

        ['gameserver_info', 'res_version_config', 'VARCHAR(64) CHARACTER SET utf8 NOT NULL'],

        ['gift_box_config', "use_every", "INT UNSIGNED NOT NULL DEFAULT '1'"]
    ];

    let indexes = [
        ['passport_info', 'idx_p_p_a', ['passport', 'platform', 'auth_type']],
        ['passport_info', 'index_passport', ['passport']],
        ['gm_cmd', 'index_status', ['status']]
        //['inner_order_id', 'charge_info', ['auto_id']] // sql statement: alter table `charge_info` add unique(`inner_order_id`)
    ];

    await conn.createTables(tables);
    await conn.addColumns(columns);
    await conn.addIndexes(indexes);

    _timer = setInterval(async () => {
        await conn.execute('select 1');
        Log.sInfo('keep mysql alive');
    }, 60000);
}

export async function getDBTime(): Promise<Number> {
    let queryResult = await conn.execute('select unix_timestamp() as dbTime');
    return new Promise<Number>(resolve => resolve(queryResult[0]['dbTime']));
}

export async function stop(): Promise<void> {
    clearInterval(_timer);
    return conn.closeDb();
}