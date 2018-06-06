export let ErrorCode = {
    NO_ERROR: 0,                              // 正常
    COMMON: {
        SYSTEM_ERROR : 10000,               // 系统错误
        CTL_NOT_FOUND : 10001,              // 控制器找不到
        CTL_FUNC_NOT_FOUND : 10002,         // 控制器方法找不到
        CONFIG_NOT_FOUND: 10003,            // 配置未找到
        JSON_PARSE_ERROR: 10004,            // JSON反序列化错误
        HTTP_NO_RESPONSE: 10005,            // http无响应
        REQ_FREQUENT: 10006,                // 访问过于频繁
        UID_MISSING: 10007,                 // uid missing
        TOKEN_MISSING: 10008,               // token missing
        CTL_NOT_INTERCEPT: 10009,           // 不需要拦截
        ROLE_NOT_EXIST: 10010,              // 角色不存在
        PARAM_ERROR : 10011,                // 参数错误
    },
    REDIS: {
        ERROR: 11000,
        SELECT_ERROR: 11001,
        GET_ERROR: 11002,
        SET_ERROR: 11003,
        EXPIRE_ERROR: 11004,
        INCR_ERROR: 11005,
        DEL_ERROR: 11006,
        HSET_ERROR: 11007,
        HMSET_ERROR: 11008,
        HMGET_ERROR: 11009,
        HINCRBY_ERROR: 11010,
        ZSCORE_ERROR: 110011,
        GETRANGE_ERROR: 11012,
        HGETALL_ERROR: 11013,
        ZADD_ERROR: 11014,
        ZREVRANGE_ERROR: 11015,
        DBSZIE_ERROR: 11016,
        SADD_ERROR: 11017,
        SMEMBERS_ERROR: 11018,
        SREM_ERROR: 11019,
    },
    MYSQL: {
        GET_CONN_ERROR: 12001,
        INSERT_ERROR: 12002,
        DEL_ERROR: 12003,
        UPDATE_ERROR: 12004,
        SELECT_ERROR: 12005,
        EXEC_ERROR: 12006,
    },
};