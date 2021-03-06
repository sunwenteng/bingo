import {Log} from '../util/log';
import {MysqlConnection, MysqlConfig} from "./lib/mysql_connection";

export let conn: MysqlConnection;
let _timer;

export async function start(config: MysqlConfig): Promise<void> {
    conn = new MysqlConnection();
    conn.startDb(config);

    let tables: { [tableName: string]: string } = {};
    let columns = [];
    let indexes = [];

    // 玩家分表
    let tableName = '';
    for (let i = 0; i < config.tableSplitCount; i++) {
        tableName = 'player_info_' + i;
        tables[tableName] =
            "CREATE TABLE IF NOT EXISTS " + tableName + " (" +
            "uid 	        BIGINT(20) 	UNSIGNED 	NOT NULL," +
            "nickname 		VARCHAR(64) CHARACTER SET utf8 NOT NULL DEFAULT ''," +
            "headimgurl 	VARCHAR(64) CHARACTER SET utf8 NOT NULL DEFAULT ''," +
            "diamond 		INT 		UNSIGNED	NOT NULL	DEFAULT '0'," +
            "lastLoginTime 	INT      	UNSIGNED	NOT NULL	DEFAULT '0'," +
            "lastAliveTime 	INT      	UNSIGNED	NOT NULL	DEFAULT '0'," +
            "createTime	    INT 		UNSIGNED 	NOT NULL 	DEFAULT '0'," +
            "gold 			INT 		UNSIGNED	NOT NULL	DEFAULT '0'," +
            "level 			INT		 	UNSIGNED	NOT NULL	DEFAULT '0'," +
            "equipModel	    longblob    NULL," +
            "heroModel	    longblob    NULL," +
            "itemModel 	    longblob    NULL," +
            "battleModel    blob        NULL," +
            "PRIMARY KEY (uid)" +
            ") ENGINE=InnoDB DEFAULT CHARSET=utf8;";
        columns = columns.concat([
            [tableName, 'exp', "BIGINT(20) UNSIGNED NOT NULL DEFAULT 0"],
            [tableName, 'vipExp', "INT UNSIGNED NOT NULL DEFAULT 0"],
            [tableName, 'vipLevel', "INT UNSIGNED NOT NULL DEFAULT 0"],
            [tableName, 'valid', "INT UNSIGNED NOT NULL DEFAULT 1"],
            [tableName, 'battleModel', "blob NULL"],
            [tableName, 'taskModel', "blob NULL"],
            [tableName, 'mailModel', "blob NULL"],
            [tableName, 'friendModel', "blob NULL"],
            [tableName, 'summary', "blob NULL"],
            [tableName, 'combat', "BIGINT(20) UNSIGNED NOT NULL DEFAULT 0"],
            [tableName, 'guildId', "INT UNSIGNED NOT NULL DEFAULT 0"],
            // add new update column down here
        ]);

        indexes = indexes.concat([
            [tableName, 'idx_nickname', ['nickname']],
        ]);
    }

    // 全局（分服）数据
    tableName = 'global';
    tables[tableName] =
        "CREATE TABLE IF NOT EXISTS " + tableName + " (" +
        "server_id      INT 	    UNSIGNED 	NOT NULL," +
        "key_id   		VARCHAR(64) CHARACTER SET utf8 NOT NULL DEFAULT ''," +
        "data 		    longblob    NULL," +
        "PRIMARY KEY (server_id, key_id)" +
        ") ENGINE=InnoDB DEFAULT CHARSET=utf8;";

    tableName = 'guild';
    tables[tableName] =
        "CREATE TABLE IF NOT EXISTS " + tableName + " (" +
        "uid            INT 	    UNSIGNED 	NOT NULL AUTO_INCREMENT," +
        "serverId	    INT         UNSIGNED    NOT NULL    DEFAULT 0," +
        "iconId 	    INT         UNSIGNED    NOT NULL    DEFAULT 0," +
        "guildName      VARCHAR(64) CHARACTER SET utf8 NOT NULL DEFAULT ''," +
        "notice         VARCHAR(512) CHARACTER SET utf8 NOT NULL DEFAULT ''," +
        "level  	    INT         UNSIGNED    NOT NULL    DEFAULT 0," +
        "exp 	        BIGINT(20) 	UNSIGNED 	NOT NULL    DEFAULT 0," +
        "gold   	    INT         UNSIGNED    NOT NULL    DEFAULT 0," +
        "members	    blob        NULL," +
        "applicants	    blob        NULL," +
        "logs   	    blob        NULL," +
        "createTime	    INT         UNSIGNED    NOT NULL    DEFAULT 0," +
        "valid  	    INT         UNSIGNED    NOT NULL    DEFAULT 1," +
        "PRIMARY KEY (uid)" +
        ") ENGINE=InnoDB DEFAULT CHARSET=utf8;";
    columns = columns.concat([
        [tableName, 'valid', "INT UNSIGNED NOT NULL DEFAULT 1"],
    ]);

    await conn.createTables(tables);
    await conn.addColumns(columns);
    await conn.addIndexes(indexes);

    _timer = setInterval(async () => {
        await conn.execute('select 1',);
        Log.sInfo('keep mysql alive');
    }, 60000);
}

export async function getDBTime(): Promise<number> {
    let queryResult = await conn.execute('select unix_timestamp() as dbTime');
    return new Promise<number>(resolve => resolve(queryResult[0]['dbTime']));
}

export async function stop() {
    clearInterval(_timer);
    await conn.closeDb();
}