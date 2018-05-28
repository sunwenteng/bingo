import * as $protobuf from "protobufjs";

export namespace C2S {

    interface ICS_ECHO {
        name?: (string|null);
        msg?: (string|null);
        b?: (number|Long|null);
        data?: (number[]|null);
        color?: (C2S.CS_ECHO.Color|null);
        map?: ({ [k: string]: string }|null);
    }

    class CS_ECHO implements ICS_ECHO {
        constructor(properties?: C2S.ICS_ECHO);
        public name: string;
        public msg: string;
        public b: (number|Long);
        public data: number[];
        public color: C2S.CS_ECHO.Color;
        public map: { [k: string]: string };
        public static create(properties?: C2S.ICS_ECHO): C2S.CS_ECHO;
        public static encode(message: C2S.ICS_ECHO, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: C2S.ICS_ECHO, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2S.CS_ECHO;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2S.CS_ECHO;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): C2S.CS_ECHO;
        public static toObject(message: C2S.CS_ECHO, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    namespace CS_ECHO {

        enum Color {
            RED = 0,
            BLUE = 1,
            YELLOW = 1
        }
    }
}

export namespace S2C {

    interface ISC_ECHO_REPLY {
        cmdId?: (number|null);
        msg?: (string|null);
    }

    class SC_ECHO_REPLY implements ISC_ECHO_REPLY {
        constructor(properties?: S2C.ISC_ECHO_REPLY);
        public cmdId: number;
        public msg: string;
        public static create(properties?: S2C.ISC_ECHO_REPLY): S2C.SC_ECHO_REPLY;
        public static encode(message: S2C.ISC_ECHO_REPLY, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: S2C.ISC_ECHO_REPLY, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C.SC_ECHO_REPLY;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C.SC_ECHO_REPLY;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): S2C.SC_ECHO_REPLY;
        public static toObject(message: S2C.SC_ECHO_REPLY, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }
}
