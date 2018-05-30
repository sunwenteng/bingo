import * as $protobuf from "protobufjs";

export namespace C2S {

    interface IMessage {
        CS_TEST_ECHO?: (C2S.ICS_TEST_ECHO|null);
        CS_ROLE_ONLINE?: (C2S.ICS_ROLE_ONLINE|null);
        CS_ROLE_HEART_BEAT?: (C2S.ICS_ROLE_HEART_BEAT|null);
    }

    class Message implements IMessage {
        constructor(properties?: C2S.IMessage);
        public CS_TEST_ECHO?: (C2S.ICS_TEST_ECHO|null);
        public CS_ROLE_ONLINE?: (C2S.ICS_ROLE_ONLINE|null);
        public CS_ROLE_HEART_BEAT?: (C2S.ICS_ROLE_HEART_BEAT|null);
        public kind?: ("CS_TEST_ECHO"|"CS_ROLE_ONLINE"|"CS_ROLE_HEART_BEAT");
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
}

export namespace S2C {

    interface IMessage {
        Error?: (S2C.IError|null);
        SC_TEST_ECHO?: (S2C.ISC_TEST_ECHO|null);
        SC_ROLE_ONLINE?: (S2C.ISC_ROLE_ONLINE|null);
        SC_ROLE_HEART_BEAT?: (S2C.ISC_ROLE_HEART_BEAT|null);
    }

    class Message implements IMessage {
        constructor(properties?: S2C.IMessage);
        public Error?: (S2C.IError|null);
        public SC_TEST_ECHO?: (S2C.ISC_TEST_ECHO|null);
        public SC_ROLE_ONLINE?: (S2C.ISC_ROLE_ONLINE|null);
        public SC_ROLE_HEART_BEAT?: (S2C.ISC_ROLE_HEART_BEAT|null);
        public kind?: ("Error"|"SC_TEST_ECHO"|"SC_ROLE_ONLINE"|"SC_ROLE_HEART_BEAT");
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

    interface ISC_ROLE_ONLINE {
    }

    class SC_ROLE_ONLINE implements ISC_ROLE_ONLINE {
        constructor(properties?: S2C.ISC_ROLE_ONLINE);
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
}
