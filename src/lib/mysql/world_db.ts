import {Log} from '../util/log'
import {MysqlConnection, MysqlConfig} from "./lib/mysql_connection";

export let conn: MysqlConnection;
let _timer;

export async function init(config: MysqlConfig): Promise<void> {
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
            "equips 		longblob    NULL," +
            "heroes 		longblob    NULL," +
            "res 		    longblob    NULL," +
            "pve 	    	longblob    NULL," +
            "pvp     		longblob    NULL," +
            "techs     		longblob    NULL," +
            "PRIMARY KEY (uid)" +
            ") ENGINE=InnoDB DEFAULT CHARSET=utf8;";

        columns = columns.concat([
            [tableName, 'exp', "INT UNSIGNED NOT NULL DEFAULT 0"],
            [tableName, 'valid', "INT UNSIGNED NOT NULL DEFAULT 1"]
            // add new update column down here
        ]);

        indexes = indexes.concat([
            [tableName, 'idx_nickname', ['nickname']],
        ]);
    }

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

export async function stop() {
    clearInterval(_timer);
    await conn.closeDb();
}