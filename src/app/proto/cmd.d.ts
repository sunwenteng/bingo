import * as $protobuf from "protobufjs";

export namespace C2S {

    interface IMessage {
        CS_TEST_ECHO?: (C2S.ICS_TEST_ECHO|null);
        CS_ROLE_ONLINE?: (C2S.ICS_ROLE_ONLINE|null);
        CS_ROLE_HEART_BEAT?: (C2S.ICS_ROLE_HEART_BEAT|null);
        CS_ABC_DEF?: (C2S.ICS_ABC_DEF|null);
        LOGIN_CS_LOGIN?: (C2S.ILOGIN_CS_LOGIN|null);
        LOGIN_CS_CHOOSE_SERVER?: (C2S.ILOGIN_CS_CHOOSE_SERVER|null);
        LOGIN_CS_GET_SERVER_LIST?: (C2S.ILOGIN_CS_GET_SERVER_LIST|null);
        LOGIN_CS_GET_INFO?: (C2S.ILOGIN_CS_GET_INFO|null);
    }

    class Message implements IMessage {
        constructor(properties?: C2S.IMessage);
        public CS_TEST_ECHO?: (C2S.ICS_TEST_ECHO|null);
        public CS_ROLE_ONLINE?: (C2S.ICS_ROLE_ONLINE|null);
        public CS_ROLE_HEART_BEAT?: (C2S.ICS_ROLE_HEART_BEAT|null);
        public CS_ABC_DEF?: (C2S.ICS_ABC_DEF|null);
        public LOGIN_CS_LOGIN?: (C2S.ILOGIN_CS_LOGIN|null);
        public LOGIN_CS_CHOOSE_SERVER?: (C2S.ILOGIN_CS_CHOOSE_SERVER|null);
        public LOGIN_CS_GET_SERVER_LIST?: (C2S.ILOGIN_CS_GET_SERVER_LIST|null);
        public LOGIN_CS_GET_INFO?: (C2S.ILOGIN_CS_GET_INFO|null);
        public kind?: ("CS_TEST_ECHO"|"CS_ROLE_ONLINE"|"CS_ROLE_HEART_BEAT"|"CS_ABC_DEF"|"LOGIN_CS_LOGIN"|"LOGIN_CS_CHOOSE_SERVER"|"LOGIN_CS_GET_SERVER_LIST"|"LOGIN_CS_GET_INFO");
        public static create(properties?: C2S.IMessage): C2S.Message;
        public static encode(message: C2S.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: C2S.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2S.Message;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2S.Message;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): C2S.Message;
        public static toObject(message: C2S.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ICS_TEST_ECHO {
        name?: (string|null);
        msg?: (string|null);
        b?: (number|Long|null);
        data?: (number[]|null);
        color?: (C2S.CS_TEST_ECHO.Color|null);
        map?: ({ [k: string]: string }|null);
    }

    class CS_TEST_ECHO implements ICS_TEST_ECHO {
        constructor(properties?: C2S.ICS_TEST_ECHO);
        public name: string;
        public msg: string;
        public b: (number|Long);
        public data: number[];
        public color: C2S.CS_TEST_ECHO.Color;
        public map: { [k: string]: string };
        public static create(properties?: C2S.ICS_TEST_ECHO): C2S.CS_TEST_ECHO;
        public static encode(message: C2S.ICS_TEST_ECHO, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: C2S.ICS_TEST_ECHO, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2S.CS_TEST_ECHO;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2S.CS_TEST_ECHO;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): C2S.CS_TEST_ECHO;
        public static toObject(message: C2S.CS_TEST_ECHO, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    namespace CS_TEST_ECHO {

        enum Color {
            RED = 0,
            BLUE = 1,
            YELLOW = 1
        }
    }

    interface ICS_ROLE_HEART_BEAT {
    }

    class CS_ROLE_HEART_BEAT implements ICS_ROLE_HEART_BEAT {
        constructor(properties?: C2S.ICS_ROLE_HEART_BEAT);
        public static create(properties?: C2S.ICS_ROLE_HEART_BEAT): C2S.CS_ROLE_HEART_BEAT;
        public static encode(message: C2S.ICS_ROLE_HEART_BEAT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: C2S.ICS_ROLE_HEART_BEAT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2S.CS_ROLE_HEART_BEAT;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2S.CS_ROLE_HEART_BEAT;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): C2S.CS_ROLE_HEART_BEAT;
        public static toObject(message: C2S.CS_ROLE_HEART_BEAT, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ICS_ABC_DEF {
    }

    class CS_ABC_DEF implements ICS_ABC_DEF {
        constructor(properties?: C2S.ICS_ABC_DEF);
        public static create(properties?: C2S.ICS_ABC_DEF): C2S.CS_ABC_DEF;
        public static encode(message: C2S.ICS_ABC_DEF, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: C2S.ICS_ABC_DEF, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2S.CS_ABC_DEF;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2S.CS_ABC_DEF;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): C2S.CS_ABC_DEF;
        public static toObject(message: C2S.CS_ABC_DEF, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ICS_ROLE_ONLINE {
        passport?: (string|null);
        pwd?: (string|null);
    }

    class CS_ROLE_ONLINE implements ICS_ROLE_ONLINE {
        constructor(properties?: C2S.ICS_ROLE_ONLINE);
        public passport: string;
        public pwd: string;
        public static create(properties?: C2S.ICS_ROLE_ONLINE): C2S.CS_ROLE_ONLINE;
        public static encode(message: C2S.ICS_ROLE_ONLINE, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: C2S.ICS_ROLE_ONLINE, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2S.CS_ROLE_ONLINE;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2S.CS_ROLE_ONLINE;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): C2S.CS_ROLE_ONLINE;
        public static toObject(message: C2S.CS_ROLE_ONLINE, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ILOGIN_CS_LOGIN {
        passport?: (string|null);
        pwd?: (string|null);
        device?: (string|null);
        deviceUid?: (string|null);
        deviceType?: (string|null);
        deviceToken?: (string|null);
        platform?: (number|null);
    }

    class LOGIN_CS_LOGIN implements ILOGIN_CS_LOGIN {
        constructor(properties?: C2S.ILOGIN_CS_LOGIN);
        public passport: string;
        public pwd: string;
        public device: string;
        public deviceUid: string;
        public deviceType: string;
        public deviceToken: string;
        public platform: number;
        public static create(properties?: C2S.ILOGIN_CS_LOGIN): C2S.LOGIN_CS_LOGIN;
        public static encode(message: C2S.ILOGIN_CS_LOGIN, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: C2S.ILOGIN_CS_LOGIN, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2S.LOGIN_CS_LOGIN;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2S.LOGIN_CS_LOGIN;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): C2S.LOGIN_CS_LOGIN;
        public static toObject(message: C2S.LOGIN_CS_LOGIN, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ILOGIN_CS_CHOOSE_SERVER {
        serverId?: (number|null);
    }

    class LOGIN_CS_CHOOSE_SERVER implements ILOGIN_CS_CHOOSE_SERVER {
        constructor(properties?: C2S.ILOGIN_CS_CHOOSE_SERVER);
        public serverId: number;
        public static create(properties?: C2S.ILOGIN_CS_CHOOSE_SERVER): C2S.LOGIN_CS_CHOOSE_SERVER;
        public static encode(message: C2S.ILOGIN_CS_CHOOSE_SERVER, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: C2S.ILOGIN_CS_CHOOSE_SERVER, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2S.LOGIN_CS_CHOOSE_SERVER;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2S.LOGIN_CS_CHOOSE_SERVER;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): C2S.LOGIN_CS_CHOOSE_SERVER;
        public static toObject(message: C2S.LOGIN_CS_CHOOSE_SERVER, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ILOGIN_CS_GET_SERVER_LIST {
    }

    class LOGIN_CS_GET_SERVER_LIST implements ILOGIN_CS_GET_SERVER_LIST {
        constructor(properties?: C2S.ILOGIN_CS_GET_SERVER_LIST);
        public static create(properties?: C2S.ILOGIN_CS_GET_SERVER_LIST): C2S.LOGIN_CS_GET_SERVER_LIST;
        public static encode(message: C2S.ILOGIN_CS_GET_SERVER_LIST, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: C2S.ILOGIN_CS_GET_SERVER_LIST, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2S.LOGIN_CS_GET_SERVER_LIST;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2S.LOGIN_CS_GET_SERVER_LIST;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): C2S.LOGIN_CS_GET_SERVER_LIST;
        public static toObject(message: C2S.LOGIN_CS_GET_SERVER_LIST, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ILOGIN_CS_GET_INFO {
        platformId?: (number|null);
        clientVersion?: (string|null);
    }

    class LOGIN_CS_GET_INFO implements ILOGIN_CS_GET_INFO {
        constructor(properties?: C2S.ILOGIN_CS_GET_INFO);
        public platformId: number;
        public clientVersion: string;
        public static create(properties?: C2S.ILOGIN_CS_GET_INFO): C2S.LOGIN_CS_GET_INFO;
        public static encode(message: C2S.ILOGIN_CS_GET_INFO, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: C2S.ILOGIN_CS_GET_INFO, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2S.LOGIN_CS_GET_INFO;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2S.LOGIN_CS_GET_INFO;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): C2S.LOGIN_CS_GET_INFO;
        public static toObject(message: C2S.LOGIN_CS_GET_INFO, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }
}

export namespace S2C {

    interface IMessage {
        Error?: (S2C.IError|null);
        SC_TEST_ECHO?: (S2C.ISC_TEST_ECHO|null);
        SC_ROLE_ONLINE?: (S2C.ISC_ROLE_ONLINE|null);
        SC_ROLE_HEART_BEAT?: (S2C.ISC_ROLE_HEART_BEAT|null);
        SC_ROLE_PRO_UPDATE?: (S2C.ISC_ROLE_PRO_UPDATE|null);
        LOGIN_SC_LOGIN?: (S2C.ILOGIN_SC_LOGIN|null);
        LOGIN_SC_CHOOSE_SERVER?: (S2C.ILOGIN_SC_CHOOSE_SERVER|null);
        LOGIN_SC_GET_SERVER_LIST?: (S2C.ILOGIN_SC_GET_SERVER_LIST|null);
        LOGIN_SC_GET_INFO?: (S2C.ILOGIN_SC_GET_INFO|null);
    }

    class Message implements IMessage {
        constructor(properties?: S2C.IMessage);
        public Error?: (S2C.IError|null);
        public SC_TEST_ECHO?: (S2C.ISC_TEST_ECHO|null);
        public SC_ROLE_ONLINE?: (S2C.ISC_ROLE_ONLINE|null);
        public SC_ROLE_HEART_BEAT?: (S2C.ISC_ROLE_HEART_BEAT|null);
        public SC_ROLE_PRO_UPDATE?: (S2C.ISC_ROLE_PRO_UPDATE|null);
        public LOGIN_SC_LOGIN?: (S2C.ILOGIN_SC_LOGIN|null);
        public LOGIN_SC_CHOOSE_SERVER?: (S2C.ILOGIN_SC_CHOOSE_SERVER|null);
        public LOGIN_SC_GET_SERVER_LIST?: (S2C.ILOGIN_SC_GET_SERVER_LIST|null);
        public LOGIN_SC_GET_INFO?: (S2C.ILOGIN_SC_GET_INFO|null);
        public kind?: ("Error"|"SC_TEST_ECHO"|"SC_ROLE_ONLINE"|"SC_ROLE_HEART_BEAT"|"SC_ROLE_PRO_UPDATE"|"LOGIN_SC_LOGIN"|"LOGIN_SC_CHOOSE_SERVER"|"LOGIN_SC_GET_SERVER_LIST"|"LOGIN_SC_GET_INFO");
        public static create(properties?: S2C.IMessage): S2C.Message;
        public static encode(message: S2C.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.Message;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.Message;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.Message;
        public static toObject(message: S2C.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISC_ROLE_PRO_UPDATE {
        uid?: (number|null);
        nickname?: (string|null);
        headimgurl?: (string|null);
        diamond?: (number|null);
        gold?: (number|Long|null);
        level?: (number|null);
        vipLevel?: (number|null);
        exp?: (number|Long|null);
        vipExp?: (number|null);
    }

    class SC_ROLE_PRO_UPDATE implements ISC_ROLE_PRO_UPDATE {
        constructor(properties?: S2C.ISC_ROLE_PRO_UPDATE);
        public uid: number;
        public nickname: string;
        public headimgurl: string;
        public diamond: number;
        public gold: (number|Long);
        public level: number;
        public vipLevel: number;
        public exp: (number|Long);
        public vipExp: number;
        public static create(properties?: S2C.ISC_ROLE_PRO_UPDATE): S2C.SC_ROLE_PRO_UPDATE;
        public static encode(message: S2C.ISC_ROLE_PRO_UPDATE, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.ISC_ROLE_PRO_UPDATE, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.SC_ROLE_PRO_UPDATE;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.SC_ROLE_PRO_UPDATE;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.SC_ROLE_PRO_UPDATE;
        public static toObject(message: S2C.SC_ROLE_PRO_UPDATE, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISC_TEST_ECHO {
        cmdId?: (number|null);
        msg?: (string|null);
    }

    class SC_TEST_ECHO implements ISC_TEST_ECHO {
        constructor(properties?: S2C.ISC_TEST_ECHO);
        public cmdId: number;
        public msg: string;
        public static create(properties?: S2C.ISC_TEST_ECHO): S2C.SC_TEST_ECHO;
        public static encode(message: S2C.ISC_TEST_ECHO, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.ISC_TEST_ECHO, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.SC_TEST_ECHO;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.SC_TEST_ECHO;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.SC_TEST_ECHO;
        public static toObject(message: S2C.SC_TEST_ECHO, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IError {
        code?: (number|null);
        msg?: (string|null);
    }

    class Error implements IError {
        constructor(properties?: S2C.IError);
        public code: number;
        public msg: string;
        public static create(properties?: S2C.IError): S2C.Error;
        public static encode(message: S2C.IError, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.IError, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.Error;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.Error;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.Error;
        public static toObject(message: S2C.Error, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISC_ROLE_ONLINE {
        roleId?: (number|null);
    }

    class SC_ROLE_ONLINE implements ISC_ROLE_ONLINE {
        constructor(properties?: S2C.ISC_ROLE_ONLINE);
        public roleId: number;
        public static create(properties?: S2C.ISC_ROLE_ONLINE): S2C.SC_ROLE_ONLINE;
        public static encode(message: S2C.ISC_ROLE_ONLINE, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.ISC_ROLE_ONLINE, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.SC_ROLE_ONLINE;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.SC_ROLE_ONLINE;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.SC_ROLE_ONLINE;
        public static toObject(message: S2C.SC_ROLE_ONLINE, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISC_ROLE_HEART_BEAT {
    }

    class SC_ROLE_HEART_BEAT implements ISC_ROLE_HEART_BEAT {
        constructor(properties?: S2C.ISC_ROLE_HEART_BEAT);
        public static create(properties?: S2C.ISC_ROLE_HEART_BEAT): S2C.SC_ROLE_HEART_BEAT;
        public static encode(message: S2C.ISC_ROLE_HEART_BEAT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.ISC_ROLE_HEART_BEAT, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.SC_ROLE_HEART_BEAT;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.SC_ROLE_HEART_BEAT;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.SC_ROLE_HEART_BEAT;
        public static toObject(message: S2C.SC_ROLE_HEART_BEAT, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ILOGIN_SC_LOGIN {
        serverId?: (number|null);
        gmAuth?: (number|null);
    }

    class LOGIN_SC_LOGIN implements ILOGIN_SC_LOGIN {
        constructor(properties?: S2C.ILOGIN_SC_LOGIN);
        public serverId: number;
        public gmAuth: number;
        public static create(properties?: S2C.ILOGIN_SC_LOGIN): S2C.LOGIN_SC_LOGIN;
        public static encode(message: S2C.ILOGIN_SC_LOGIN, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.ILOGIN_SC_LOGIN, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.LOGIN_SC_LOGIN;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.LOGIN_SC_LOGIN;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.LOGIN_SC_LOGIN;
        public static toObject(message: S2C.LOGIN_SC_LOGIN, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ILOGIN_SC_CHOOSE_SERVER {
        ip?: (string|null);
        port?: (number|null);
        version?: (string|null);
        resVersion?: (string|null);
        resServerAddress?: (string|null);
    }

    class LOGIN_SC_CHOOSE_SERVER implements ILOGIN_SC_CHOOSE_SERVER {
        constructor(properties?: S2C.ILOGIN_SC_CHOOSE_SERVER);
        public ip: string;
        public port: number;
        public version: string;
        public resVersion: string;
        public resServerAddress: string;
        public static create(properties?: S2C.ILOGIN_SC_CHOOSE_SERVER): S2C.LOGIN_SC_CHOOSE_SERVER;
        public static encode(message: S2C.ILOGIN_SC_CHOOSE_SERVER, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.ILOGIN_SC_CHOOSE_SERVER, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.LOGIN_SC_CHOOSE_SERVER;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.LOGIN_SC_CHOOSE_SERVER;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.LOGIN_SC_CHOOSE_SERVER;
        public static toObject(message: S2C.LOGIN_SC_CHOOSE_SERVER, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ILOGIN_SC_GET_SERVER_LIST {
        servers?: (S2C.LOGIN_SC_GET_SERVER_LIST.IServer[]|null);
    }

    class LOGIN_SC_GET_SERVER_LIST implements ILOGIN_SC_GET_SERVER_LIST {
        constructor(properties?: S2C.ILOGIN_SC_GET_SERVER_LIST);
        public servers: S2C.LOGIN_SC_GET_SERVER_LIST.IServer[];
        public static create(properties?: S2C.ILOGIN_SC_GET_SERVER_LIST): S2C.LOGIN_SC_GET_SERVER_LIST;
        public static encode(message: S2C.ILOGIN_SC_GET_SERVER_LIST, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.ILOGIN_SC_GET_SERVER_LIST, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.LOGIN_SC_GET_SERVER_LIST;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.LOGIN_SC_GET_SERVER_LIST;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.LOGIN_SC_GET_SERVER_LIST;
        public static toObject(message: S2C.LOGIN_SC_GET_SERVER_LIST, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    namespace LOGIN_SC_GET_SERVER_LIST {

        interface IServer {
            serverId?: (number|null);
            name?: (string|null);
            status?: (number|null);
        }

        class Server implements IServer {
            constructor(properties?: S2C.LOGIN_SC_GET_SERVER_LIST.IServer);
            public serverId: number;
            public name: string;
            public status: number;
            public static create(properties?: S2C.LOGIN_SC_GET_SERVER_LIST.IServer): S2C.LOGIN_SC_GET_SERVER_LIST.Server;
            public static encode(message: S2C.LOGIN_SC_GET_SERVER_LIST.IServer, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: S2C.LOGIN_SC_GET_SERVER_LIST.IServer, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.LOGIN_SC_GET_SERVER_LIST.Server;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.LOGIN_SC_GET_SERVER_LIST.Server;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): S2C.LOGIN_SC_GET_SERVER_LIST.Server;
            public static toObject(message: S2C.LOGIN_SC_GET_SERVER_LIST.Server, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }
    }

    interface ILOGIN_SC_GET_INFO {
        notice?: (string|null);
        version?: (string|null);
        updateAddress?: (string|null);
    }

    class LOGIN_SC_GET_INFO implements ILOGIN_SC_GET_INFO {
        constructor(properties?: S2C.ILOGIN_SC_GET_INFO);
        public notice: string;
        public version: string;
        public updateAddress: string;
        public static create(properties?: S2C.ILOGIN_SC_GET_INFO): S2C.LOGIN_SC_GET_INFO;
        public static encode(message: S2C.ILOGIN_SC_GET_INFO, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.ILOGIN_SC_GET_INFO, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.LOGIN_SC_GET_INFO;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.LOGIN_SC_GET_INFO;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.LOGIN_SC_GET_INFO;
        public static toObject(message: S2C.LOGIN_SC_GET_INFO, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }
}
