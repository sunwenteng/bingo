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
        msg?: (string|null);
    }

    class CS_ROLE_HEART_BEAT implements ICS_ROLE_HEART_BEAT {
        constructor(properties?: C2S.ICS_ROLE_HEART_BEAT);
        public msg: string;
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
        SC_TEST_ECHO?: (S2C.ISC_TEST_ECHO|null);
        LOGIN_SC_LOGIN?: (S2C.ILOGIN_SC_LOGIN|null);
        LOGIN_SC_CHOOSE_SERVER?: (S2C.ILOGIN_SC_CHOOSE_SERVER|null);
        LOGIN_SC_GET_SERVER_LIST?: (S2C.ILOGIN_SC_GET_SERVER_LIST|null);
        LOGIN_SC_GET_INFO?: (S2C.ILOGIN_SC_GET_INFO|null);
        SC_ROLE_ONLINE?: (S2C.ISC_ROLE_ONLINE|null);
        SC_ROLE_HEART_BEAT?: (S2C.ISC_ROLE_HEART_BEAT|null);
        SC_ROLE_PRO_UPDATE?: (S2C.ISC_ROLE_PRO_UPDATE|null);
        SC_GET_REWARD?: (S2C.ISC_GET_REWARD|null);
        SC_INIT_HERO?: (S2C.ISC_INIT_HERO|null);
        SC_UPDATE_HERO?: (S2C.ISC_UPDATE_HERO|null);
        SC_INIT_EQUIP?: (S2C.ISC_INIT_EQUIP|null);
        SC_UPDATE_EQUIP?: (S2C.ISC_UPDATE_EQUIP|null);
        SC_INIT_ITEM?: (S2C.ISC_INIT_ITEM|null);
        SC_UPDATE_ITEM?: (S2C.ISC_UPDATE_ITEM|null);
        SC_INIT_BATTLE_INFO?: (S2C.ISC_INIT_BATTLE_INFO|null);
        SC_INIT_TASK?: (S2C.ISC_INIT_TASK|null);
        SC_UPDATE_TASK?: (S2C.ISC_UPDATE_TASK|null);
        SC_INIT_MAIL?: (S2C.ISC_INIT_MAIL|null);
        SC_UPDATE_MAIL?: (S2C.ISC_UPDATE_MAIL|null);
        SC_INIT_FRIEND?: (S2C.ISC_INIT_FRIEND|null);
        SC_UPDATE_FRIEND?: (S2C.ISC_UPDATE_FRIEND|null);
    }

    class Message implements IMessage {
        constructor(properties?: S2C.IMessage);
        public SC_TEST_ECHO?: (S2C.ISC_TEST_ECHO|null);
        public LOGIN_SC_LOGIN?: (S2C.ILOGIN_SC_LOGIN|null);
        public LOGIN_SC_CHOOSE_SERVER?: (S2C.ILOGIN_SC_CHOOSE_SERVER|null);
        public LOGIN_SC_GET_SERVER_LIST?: (S2C.ILOGIN_SC_GET_SERVER_LIST|null);
        public LOGIN_SC_GET_INFO?: (S2C.ILOGIN_SC_GET_INFO|null);
        public SC_ROLE_ONLINE?: (S2C.ISC_ROLE_ONLINE|null);
        public SC_ROLE_HEART_BEAT?: (S2C.ISC_ROLE_HEART_BEAT|null);
        public SC_ROLE_PRO_UPDATE?: (S2C.ISC_ROLE_PRO_UPDATE|null);
        public SC_GET_REWARD?: (S2C.ISC_GET_REWARD|null);
        public SC_INIT_HERO?: (S2C.ISC_INIT_HERO|null);
        public SC_UPDATE_HERO?: (S2C.ISC_UPDATE_HERO|null);
        public SC_INIT_EQUIP?: (S2C.ISC_INIT_EQUIP|null);
        public SC_UPDATE_EQUIP?: (S2C.ISC_UPDATE_EQUIP|null);
        public SC_INIT_ITEM?: (S2C.ISC_INIT_ITEM|null);
        public SC_UPDATE_ITEM?: (S2C.ISC_UPDATE_ITEM|null);
        public SC_INIT_BATTLE_INFO?: (S2C.ISC_INIT_BATTLE_INFO|null);
        public SC_INIT_TASK?: (S2C.ISC_INIT_TASK|null);
        public SC_UPDATE_TASK?: (S2C.ISC_UPDATE_TASK|null);
        public SC_INIT_MAIL?: (S2C.ISC_INIT_MAIL|null);
        public SC_UPDATE_MAIL?: (S2C.ISC_UPDATE_MAIL|null);
        public SC_INIT_FRIEND?: (S2C.ISC_INIT_FRIEND|null);
        public SC_UPDATE_FRIEND?: (S2C.ISC_UPDATE_FRIEND|null);
        public kind?: ("SC_TEST_ECHO"|"LOGIN_SC_LOGIN"|"LOGIN_SC_CHOOSE_SERVER"|"LOGIN_SC_GET_SERVER_LIST"|"LOGIN_SC_GET_INFO"|"SC_ROLE_ONLINE"|"SC_ROLE_HEART_BEAT"|"SC_ROLE_PRO_UPDATE"|"SC_GET_REWARD"|"SC_INIT_HERO"|"SC_UPDATE_HERO"|"SC_INIT_EQUIP"|"SC_UPDATE_EQUIP"|"SC_INIT_ITEM"|"SC_UPDATE_ITEM"|"SC_INIT_BATTLE_INFO"|"SC_INIT_TASK"|"SC_UPDATE_TASK"|"SC_INIT_MAIL"|"SC_UPDATE_MAIL"|"SC_INIT_FRIEND"|"SC_UPDATE_FRIEND");
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

    interface IFriend {
        uid?: (number|null);
        state?: (number|null);
    }

    class Friend implements IFriend {
        constructor(properties?: S2C.IFriend);
        public uid: number;
        public state: number;
        public static create(properties?: S2C.IFriend): S2C.Friend;
        public static encode(message: S2C.IFriend, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.IFriend, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.Friend;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.Friend;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.Friend;
        public static toObject(message: S2C.Friend, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISC_INIT_FRIEND {
        friends?: ({ [k: string]: S2C.IFriend }|null);
    }

    class SC_INIT_FRIEND implements ISC_INIT_FRIEND {
        constructor(properties?: S2C.ISC_INIT_FRIEND);
        public friends: { [k: string]: S2C.IFriend };
        public static create(properties?: S2C.ISC_INIT_FRIEND): S2C.SC_INIT_FRIEND;
        public static encode(message: S2C.ISC_INIT_FRIEND, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.ISC_INIT_FRIEND, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.SC_INIT_FRIEND;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.SC_INIT_FRIEND;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.SC_INIT_FRIEND;
        public static toObject(message: S2C.SC_INIT_FRIEND, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISC_UPDATE_FRIEND {
        friends?: ({ [k: string]: S2C.IFriend }|null);
    }

    class SC_UPDATE_FRIEND implements ISC_UPDATE_FRIEND {
        constructor(properties?: S2C.ISC_UPDATE_FRIEND);
        public friends: { [k: string]: S2C.IFriend };
        public static create(properties?: S2C.ISC_UPDATE_FRIEND): S2C.SC_UPDATE_FRIEND;
        public static encode(message: S2C.ISC_UPDATE_FRIEND, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.ISC_UPDATE_FRIEND, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.SC_UPDATE_FRIEND;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.SC_UPDATE_FRIEND;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.SC_UPDATE_FRIEND;
        public static toObject(message: S2C.SC_UPDATE_FRIEND, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IMail {
        uid?: (number|null);
        title?: (string|null);
        content?: (string|null);
        rwds?: (S2C.IReward[]|null);
        senderName?: (string|null);
        senderId?: (number|null);
        createTme?: (number|null);
        isNew?: (number|null);
    }

    class Mail implements IMail {
        constructor(properties?: S2C.IMail);
        public uid: number;
        public title: string;
        public content: string;
        public rwds: S2C.IReward[];
        public senderName: string;
        public senderId: number;
        public createTme: number;
        public isNew: number;
        public static create(properties?: S2C.IMail): S2C.Mail;
        public static encode(message: S2C.IMail, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.IMail, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.Mail;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.Mail;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.Mail;
        public static toObject(message: S2C.Mail, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISC_INIT_MAIL {
        mails?: ({ [k: string]: S2C.IMail }|null);
    }

    class SC_INIT_MAIL implements ISC_INIT_MAIL {
        constructor(properties?: S2C.ISC_INIT_MAIL);
        public mails: { [k: string]: S2C.IMail };
        public static create(properties?: S2C.ISC_INIT_MAIL): S2C.SC_INIT_MAIL;
        public static encode(message: S2C.ISC_INIT_MAIL, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.ISC_INIT_MAIL, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.SC_INIT_MAIL;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.SC_INIT_MAIL;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.SC_INIT_MAIL;
        public static toObject(message: S2C.SC_INIT_MAIL, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISC_UPDATE_MAIL {
        mails?: ({ [k: string]: S2C.IMail }|null);
    }

    class SC_UPDATE_MAIL implements ISC_UPDATE_MAIL {
        constructor(properties?: S2C.ISC_UPDATE_MAIL);
        public mails: { [k: string]: S2C.IMail };
        public static create(properties?: S2C.ISC_UPDATE_MAIL): S2C.SC_UPDATE_MAIL;
        public static encode(message: S2C.ISC_UPDATE_MAIL, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.ISC_UPDATE_MAIL, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.SC_UPDATE_MAIL;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.SC_UPDATE_MAIL;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.SC_UPDATE_MAIL;
        public static toObject(message: S2C.SC_UPDATE_MAIL, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ITask {
        uid?: (number|null);
        id?: (number|null);
        state?: (number|null);
    }

    class Task implements ITask {
        constructor(properties?: S2C.ITask);
        public uid: number;
        public id: number;
        public state: number;
        public static create(properties?: S2C.ITask): S2C.Task;
        public static encode(message: S2C.ITask, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.ITask, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.Task;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.Task;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.Task;
        public static toObject(message: S2C.Task, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISC_INIT_TASK {
        tasks?: ({ [k: string]: S2C.ITask }|null);
    }

    class SC_INIT_TASK implements ISC_INIT_TASK {
        constructor(properties?: S2C.ISC_INIT_TASK);
        public tasks: { [k: string]: S2C.ITask };
        public static create(properties?: S2C.ISC_INIT_TASK): S2C.SC_INIT_TASK;
        public static encode(message: S2C.ISC_INIT_TASK, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.ISC_INIT_TASK, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.SC_INIT_TASK;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.SC_INIT_TASK;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.SC_INIT_TASK;
        public static toObject(message: S2C.SC_INIT_TASK, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISC_UPDATE_TASK {
        tasks?: ({ [k: string]: S2C.ITask }|null);
    }

    class SC_UPDATE_TASK implements ISC_UPDATE_TASK {
        constructor(properties?: S2C.ISC_UPDATE_TASK);
        public tasks: { [k: string]: S2C.ITask };
        public static create(properties?: S2C.ISC_UPDATE_TASK): S2C.SC_UPDATE_TASK;
        public static encode(message: S2C.ISC_UPDATE_TASK, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.ISC_UPDATE_TASK, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.SC_UPDATE_TASK;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.SC_UPDATE_TASK;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.SC_UPDATE_TASK;
        public static toObject(message: S2C.SC_UPDATE_TASK, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISC_INIT_BATTLE_INFO {
        slotInfo?: ({ [k: string]: number }|null);
    }

    class SC_INIT_BATTLE_INFO implements ISC_INIT_BATTLE_INFO {
        constructor(properties?: S2C.ISC_INIT_BATTLE_INFO);
        public slotInfo: { [k: string]: number };
        public static create(properties?: S2C.ISC_INIT_BATTLE_INFO): S2C.SC_INIT_BATTLE_INFO;
        public static encode(message: S2C.ISC_INIT_BATTLE_INFO, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.ISC_INIT_BATTLE_INFO, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.SC_INIT_BATTLE_INFO;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.SC_INIT_BATTLE_INFO;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.SC_INIT_BATTLE_INFO;
        public static toObject(message: S2C.SC_INIT_BATTLE_INFO, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IReward {
        gold?: (number|Long|null);
        diamond?: (number|null);
        exp?: (number|Long|null);
        vipExp?: (number|null);
        heroes?: (number[]|null);
        equips?: (number[]|null);
        items?: ({ [k: string]: number }|null);
    }

    class Reward implements IReward {
        constructor(properties?: S2C.IReward);
        public gold: (number|Long);
        public diamond: number;
        public exp: (number|Long);
        public vipExp: number;
        public heroes: number[];
        public equips: number[];
        public items: { [k: string]: number };
        public static create(properties?: S2C.IReward): S2C.Reward;
        public static encode(message: S2C.IReward, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.IReward, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.Reward;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.Reward;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.Reward;
        public static toObject(message: S2C.Reward, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISC_GET_REWARD {
        reward?: (S2C.IReward|null);
    }

    class SC_GET_REWARD implements ISC_GET_REWARD {
        constructor(properties?: S2C.ISC_GET_REWARD);
        public reward?: (S2C.IReward|null);
        public static create(properties?: S2C.ISC_GET_REWARD): S2C.SC_GET_REWARD;
        public static encode(message: S2C.ISC_GET_REWARD, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.ISC_GET_REWARD, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.SC_GET_REWARD;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.SC_GET_REWARD;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.SC_GET_REWARD;
        public static toObject(message: S2C.SC_GET_REWARD, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IHero {
        uid?: (number|null);
        id?: (number|null);
        combat?: (number|null);
        lvl?: (number|null);
    }

    class Hero implements IHero {
        constructor(properties?: S2C.IHero);
        public uid: number;
        public id: number;
        public combat: number;
        public lvl: number;
        public static create(properties?: S2C.IHero): S2C.Hero;
        public static encode(message: S2C.IHero, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.IHero, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.Hero;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.Hero;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.Hero;
        public static toObject(message: S2C.Hero, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISC_INIT_HERO {
        heroes?: ({ [k: string]: S2C.IHero }|null);
    }

    class SC_INIT_HERO implements ISC_INIT_HERO {
        constructor(properties?: S2C.ISC_INIT_HERO);
        public heroes: { [k: string]: S2C.IHero };
        public static create(properties?: S2C.ISC_INIT_HERO): S2C.SC_INIT_HERO;
        public static encode(message: S2C.ISC_INIT_HERO, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.ISC_INIT_HERO, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.SC_INIT_HERO;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.SC_INIT_HERO;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.SC_INIT_HERO;
        public static toObject(message: S2C.SC_INIT_HERO, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISC_UPDATE_HERO {
        heroes?: ({ [k: string]: S2C.IHero }|null);
    }

    class SC_UPDATE_HERO implements ISC_UPDATE_HERO {
        constructor(properties?: S2C.ISC_UPDATE_HERO);
        public heroes: { [k: string]: S2C.IHero };
        public static create(properties?: S2C.ISC_UPDATE_HERO): S2C.SC_UPDATE_HERO;
        public static encode(message: S2C.ISC_UPDATE_HERO, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.ISC_UPDATE_HERO, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.SC_UPDATE_HERO;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.SC_UPDATE_HERO;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.SC_UPDATE_HERO;
        public static toObject(message: S2C.SC_UPDATE_HERO, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IEquip {
        uid?: (number|null);
        id?: (number|null);
        lvl?: (number|null);
        rank?: (number|null);
        star?: (number|null);
    }

    class Equip implements IEquip {
        constructor(properties?: S2C.IEquip);
        public uid: number;
        public id: number;
        public lvl: number;
        public rank: number;
        public star: number;
        public static create(properties?: S2C.IEquip): S2C.Equip;
        public static encode(message: S2C.IEquip, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.IEquip, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.Equip;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.Equip;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.Equip;
        public static toObject(message: S2C.Equip, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISC_INIT_EQUIP {
        equips?: ({ [k: string]: S2C.IEquip }|null);
    }

    class SC_INIT_EQUIP implements ISC_INIT_EQUIP {
        constructor(properties?: S2C.ISC_INIT_EQUIP);
        public equips: { [k: string]: S2C.IEquip };
        public static create(properties?: S2C.ISC_INIT_EQUIP): S2C.SC_INIT_EQUIP;
        public static encode(message: S2C.ISC_INIT_EQUIP, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.ISC_INIT_EQUIP, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.SC_INIT_EQUIP;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.SC_INIT_EQUIP;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.SC_INIT_EQUIP;
        public static toObject(message: S2C.SC_INIT_EQUIP, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISC_UPDATE_EQUIP {
        equips?: ({ [k: string]: S2C.IEquip }|null);
    }

    class SC_UPDATE_EQUIP implements ISC_UPDATE_EQUIP {
        constructor(properties?: S2C.ISC_UPDATE_EQUIP);
        public equips: { [k: string]: S2C.IEquip };
        public static create(properties?: S2C.ISC_UPDATE_EQUIP): S2C.SC_UPDATE_EQUIP;
        public static encode(message: S2C.ISC_UPDATE_EQUIP, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.ISC_UPDATE_EQUIP, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.SC_UPDATE_EQUIP;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.SC_UPDATE_EQUIP;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.SC_UPDATE_EQUIP;
        public static toObject(message: S2C.SC_UPDATE_EQUIP, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IItem {
        id?: (number|null);
        cnt?: (number|null);
    }

    class Item implements IItem {
        constructor(properties?: S2C.IItem);
        public id: number;
        public cnt: number;
        public static create(properties?: S2C.IItem): S2C.Item;
        public static encode(message: S2C.IItem, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.IItem, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.Item;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.Item;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.Item;
        public static toObject(message: S2C.Item, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISC_INIT_ITEM {
        items?: ({ [k: string]: S2C.IItem }|null);
    }

    class SC_INIT_ITEM implements ISC_INIT_ITEM {
        constructor(properties?: S2C.ISC_INIT_ITEM);
        public items: { [k: string]: S2C.IItem };
        public static create(properties?: S2C.ISC_INIT_ITEM): S2C.SC_INIT_ITEM;
        public static encode(message: S2C.ISC_INIT_ITEM, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.ISC_INIT_ITEM, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.SC_INIT_ITEM;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.SC_INIT_ITEM;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.SC_INIT_ITEM;
        public static toObject(message: S2C.SC_INIT_ITEM, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISC_UPDATE_ITEM {
        items?: ({ [k: string]: S2C.IItem }|null);
    }

    class SC_UPDATE_ITEM implements ISC_UPDATE_ITEM {
        constructor(properties?: S2C.ISC_UPDATE_ITEM);
        public items: { [k: string]: S2C.IItem };
        public static create(properties?: S2C.ISC_UPDATE_ITEM): S2C.SC_UPDATE_ITEM;
        public static encode(message: S2C.ISC_UPDATE_ITEM, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.ISC_UPDATE_ITEM, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.SC_UPDATE_ITEM;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.SC_UPDATE_ITEM;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.SC_UPDATE_ITEM;
        public static toObject(message: S2C.SC_UPDATE_ITEM, options?: $protobuf.IConversionOptions): { [k: string]: any };
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
        msg?: (string|null);
    }

    class SC_ROLE_HEART_BEAT implements ISC_ROLE_HEART_BEAT {
        constructor(properties?: S2C.ISC_ROLE_HEART_BEAT);
        public msg: string;
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
