import * as mysql from 'mysql'
import {Log} from '../../util/log'

export interface MysqlConfig extends mysql.PoolConfig {
    name?: string;
    tableSplitNumber?:number;
    heartBeatSec?:number;
}

export class MysqlConnection {
    _pool: mysql.Pool;
    configCopy: MysqlConfig;

    constructor() {
    }

    public startDb(config: mysql.PoolConfig): void {
        this._pool = mysql.createPool(config);
        this.configCopy = config;
        Log.sInfo('mysql pool ' + this.configCopy.name + ' created, db=' + this.configCopy.database + ', ip=' + this.configCopy.host +
            ', auth=' + this.configCopy.user + ':' + this.configCopy.password);
        this._pool.on('connection', (connection: mysql.PoolConnection) => {
            connection.query('SET SESSION auto_increment_increment=1');
            connection.on('error', (err: mysql.MysqlError) => {
                Log.sError(err.code);
                if (err.code === 'PROTOCOL_CONNECTION_LOST') {
                    setTimeout(() => {
                        return this.startDb(this.configCopy);
                    }, 2000);
                    Log.sInfo('server disconnect, so reconnect');
                }
            });
            Log.sInfo(this.configCopy.name + ' connected as id successfully, connectionId=' + connection.threadId);
        });

        this._pool.on('enqueue', () => {
            Log.sInfo(this.configCopy.name + ' Waiting for available connection slot');
        });
        this._pool.on("error", (err) => {
            Log.sError(err);
        })
    }

    public closeDb(): Promise<void> {
        return new Promise(((resolve, reject) => {
            this._pool.end((err) => {
                if (err) {
                    Log.sError(this.configCopy.name + ' database pool close failed');
                    reject(err);
                }
                else {
                    Log.sInfo(this.configCopy.name + ' database pool close success');
                    resolve();
                }
            });
        }));
    }

    public async execute(sql: string, param?: any): Promise<any[]> {
        return new Promise<any[]>(((resolve, reject) => {
            this._pool.getConnection((err: mysql.MysqlError, connection: mysql.PoolConnection) => {
                if (err) {
                    Log.sError('sql:' + sql + param ? '\nparam:' + JSON.stringify(param) : '' + '\n' + err.stack);
                    reject(err);
                }
                else {
                    // Use the connection
                    connection.query(sql, param, (err: mysql.MysqlError, result: any[]) => {
                        if (err) {
                            Log.sError('sql:' + sql + param ? '\nparam:' + JSON.stringify(param) : '' + '\n' + err.stack);
                            connection.release();
                            reject(err);
                        }
                        else {
                            // And done with the connection.
                            connection.release();
                            resolve(result);
                            // Don't use the connection here, it has been returned to the pool.
                        }
                    });
                }
            });
        }));
    }


    public async existColumn(table: string, column: string): Promise<boolean> {
        let queryResult = await this.execute(
            "select 1 as res from information_schema.columns where table_name=? and column_name=? and table_schema = ?",
            [table, column, this.configCopy.database]);
        return new Promise<boolean>((resolve => resolve(queryResult.length > 0)));
    }

    public async existIndex(table: string, index: string): Promise<boolean> {
        let queryResult = await this.execute(
            "select 1 as res from information_schema.statistics where table_name=? and index_name=? and table_schema=?",
            [table, index, this.configCopy.database]);
        return new Promise<boolean>((resolve => resolve(queryResult.length > 0)));
    }

    public async createTables(tables: { [tableName: string]: string }) {
        for (let idx in tables) {
            await this.execute(tables[idx]);
        }
    }

    public async addColumns(columns: string[][]) {
        for (let column of columns) {
            await this.addColumn(column[0], column[1], column[2]);
        }
    }

    private async addColumn(tableName: string, columnName: string, columnDesc: string) {
        let isExist = await this.existColumn(tableName, columnName);
        if (!isExist) {
            await this.execute("ALTER TABLE  " + tableName + " ADD COLUMN " + columnName + " " + columnDesc);
        }
    }

    public async addIndexes(indexes: any) {
        for (let index of indexes) {
            await this.addIndex(index[0], index[1], index[2]);
        }
    }

    private async addIndex(tableName: string, indexName: string, columnNames: string[]) {
        let isExist = await this.existIndex(tableName, indexName);
        if (!isExist) {
            await this.execute("CREATE INDEX ?? ON ??(??)", [indexName, tableName, columnNames]);
        }
    }

    // public fetchTableColumns(table: string, callback: (err, columns: { [columnName: string]: any }) => void): void {
    //     let sql = "show columns from ??";
    //     this.execute(sql, [table], (err, connnection, result) => {
    //         if (err) {
    //             callback(err, null);
    //             return;
    //         }
    //
    //         let columns: { [columnName: string]: any } = {}, column: any = {};
    //         for (let i = 0; i < result.length; i += 1) {
    //             column = {
    //                 field: result[i].Field,
    //                 type: result[i].Type,
    //                 isNull: result[i].Null,
    //                 key: result[i].Key,
    //                 defaultVal: result[i].Default
    //             };
    //             columns[column.field] = column;
    //         }
    //         callback(null, columns);
    //     });
    // }
}