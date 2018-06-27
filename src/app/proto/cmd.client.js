/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
(function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.C2S = (function() {
    
        /**
         * Namespace C2S.
         * @exports C2S
         * @namespace
         */
        var C2S = {};
    
        C2S.Message = (function() {
    
            /**
             * Properties of a Message.
             * @memberof C2S
             * @interface IMessage
             * @property {C2S.ICS_TEST_ECHO|null} [CS_TEST_ECHO] Message CS_TEST_ECHO
             * @property {C2S.ICS_ROLE_ONLINE|null} [CS_ROLE_ONLINE] Message CS_ROLE_ONLINE
             * @property {C2S.ICS_ROLE_HEART_BEAT|null} [CS_ROLE_HEART_BEAT] Message CS_ROLE_HEART_BEAT
             * @property {C2S.ICS_ABC_DEF|null} [CS_ABC_DEF] Message CS_ABC_DEF
             * @property {C2S.ILOGIN_CS_LOGIN|null} [LOGIN_CS_LOGIN] Message LOGIN_CS_LOGIN
             * @property {C2S.ILOGIN_CS_CHOOSE_SERVER|null} [LOGIN_CS_CHOOSE_SERVER] Message LOGIN_CS_CHOOSE_SERVER
             * @property {C2S.ILOGIN_CS_GET_SERVER_LIST|null} [LOGIN_CS_GET_SERVER_LIST] Message LOGIN_CS_GET_SERVER_LIST
             * @property {C2S.ILOGIN_CS_GET_INFO|null} [LOGIN_CS_GET_INFO] Message LOGIN_CS_GET_INFO
             */
    
            /**
             * Constructs a new Message.
             * @memberof C2S
             * @classdesc remember to put your message here as a kind support*
             * @implements IMessage
             * @constructor
             * @param {C2S.IMessage=} [properties] Properties to set
             */
            function Message(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Message CS_TEST_ECHO.
             * @member {C2S.ICS_TEST_ECHO|null|undefined} CS_TEST_ECHO
             * @memberof C2S.Message
             * @instance
             */
            Message.prototype.CS_TEST_ECHO = null;
    
            /**
             * Message CS_ROLE_ONLINE.
             * @member {C2S.ICS_ROLE_ONLINE|null|undefined} CS_ROLE_ONLINE
             * @memberof C2S.Message
             * @instance
             */
            Message.prototype.CS_ROLE_ONLINE = null;
    
            /**
             * Message CS_ROLE_HEART_BEAT.
             * @member {C2S.ICS_ROLE_HEART_BEAT|null|undefined} CS_ROLE_HEART_BEAT
             * @memberof C2S.Message
             * @instance
             */
            Message.prototype.CS_ROLE_HEART_BEAT = null;
    
            /**
             * Message CS_ABC_DEF.
             * @member {C2S.ICS_ABC_DEF|null|undefined} CS_ABC_DEF
             * @memberof C2S.Message
             * @instance
             */
            Message.prototype.CS_ABC_DEF = null;
    
            /**
             * Message LOGIN_CS_LOGIN.
             * @member {C2S.ILOGIN_CS_LOGIN|null|undefined} LOGIN_CS_LOGIN
             * @memberof C2S.Message
             * @instance
             */
            Message.prototype.LOGIN_CS_LOGIN = null;
    
            /**
             * Message LOGIN_CS_CHOOSE_SERVER.
             * @member {C2S.ILOGIN_CS_CHOOSE_SERVER|null|undefined} LOGIN_CS_CHOOSE_SERVER
             * @memberof C2S.Message
             * @instance
             */
            Message.prototype.LOGIN_CS_CHOOSE_SERVER = null;
    
            /**
             * Message LOGIN_CS_GET_SERVER_LIST.
             * @member {C2S.ILOGIN_CS_GET_SERVER_LIST|null|undefined} LOGIN_CS_GET_SERVER_LIST
             * @memberof C2S.Message
             * @instance
             */
            Message.prototype.LOGIN_CS_GET_SERVER_LIST = null;
    
            /**
             * Message LOGIN_CS_GET_INFO.
             * @member {C2S.ILOGIN_CS_GET_INFO|null|undefined} LOGIN_CS_GET_INFO
             * @memberof C2S.Message
             * @instance
             */
            Message.prototype.LOGIN_CS_GET_INFO = null;
    
            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;
    
            /**
             * Message kind.
             * @member {"CS_TEST_ECHO"|"CS_ROLE_ONLINE"|"CS_ROLE_HEART_BEAT"|"CS_ABC_DEF"|"LOGIN_CS_LOGIN"|"LOGIN_CS_CHOOSE_SERVER"|"LOGIN_CS_GET_SERVER_LIST"|"LOGIN_CS_GET_INFO"|undefined} kind
             * @memberof C2S.Message
             * @instance
             */
            Object.defineProperty(Message.prototype, "kind", {
                get: $util.oneOfGetter($oneOfFields = ["CS_TEST_ECHO", "CS_ROLE_ONLINE", "CS_ROLE_HEART_BEAT", "CS_ABC_DEF", "LOGIN_CS_LOGIN", "LOGIN_CS_CHOOSE_SERVER", "LOGIN_CS_GET_SERVER_LIST", "LOGIN_CS_GET_INFO"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Creates a new Message instance using the specified properties.
             * @function create
             * @memberof C2S.Message
             * @static
             * @param {C2S.IMessage=} [properties] Properties to set
             * @returns {C2S.Message} Message instance
             */
            Message.create = function create(properties) {
                return new Message(properties);
            };
    
            /**
             * Encodes the specified Message message. Does not implicitly {@link C2S.Message.verify|verify} messages.
             * @function encode
             * @memberof C2S.Message
             * @static
             * @param {C2S.IMessage} message Message message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Message.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.CS_TEST_ECHO != null && message.hasOwnProperty("CS_TEST_ECHO"))
                    $root.C2S.CS_TEST_ECHO.encode(message.CS_TEST_ECHO, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.CS_ROLE_ONLINE != null && message.hasOwnProperty("CS_ROLE_ONLINE"))
                    $root.C2S.CS_ROLE_ONLINE.encode(message.CS_ROLE_ONLINE, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.CS_ROLE_HEART_BEAT != null && message.hasOwnProperty("CS_ROLE_HEART_BEAT"))
                    $root.C2S.CS_ROLE_HEART_BEAT.encode(message.CS_ROLE_HEART_BEAT, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.CS_ABC_DEF != null && message.hasOwnProperty("CS_ABC_DEF"))
                    $root.C2S.CS_ABC_DEF.encode(message.CS_ABC_DEF, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.LOGIN_CS_LOGIN != null && message.hasOwnProperty("LOGIN_CS_LOGIN"))
                    $root.C2S.LOGIN_CS_LOGIN.encode(message.LOGIN_CS_LOGIN, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.LOGIN_CS_CHOOSE_SERVER != null && message.hasOwnProperty("LOGIN_CS_CHOOSE_SERVER"))
                    $root.C2S.LOGIN_CS_CHOOSE_SERVER.encode(message.LOGIN_CS_CHOOSE_SERVER, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.LOGIN_CS_GET_SERVER_LIST != null && message.hasOwnProperty("LOGIN_CS_GET_SERVER_LIST"))
                    $root.C2S.LOGIN_CS_GET_SERVER_LIST.encode(message.LOGIN_CS_GET_SERVER_LIST, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.LOGIN_CS_GET_INFO != null && message.hasOwnProperty("LOGIN_CS_GET_INFO"))
                    $root.C2S.LOGIN_CS_GET_INFO.encode(message.LOGIN_CS_GET_INFO, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified Message message, length delimited. Does not implicitly {@link C2S.Message.verify|verify} messages.
             * @function encodeDelimited
             * @memberof C2S.Message
             * @static
             * @param {C2S.IMessage} message Message message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Message.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Message message from the specified reader or buffer.
             * @function decode
             * @memberof C2S.Message
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {C2S.Message} Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Message.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2S.Message();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.CS_TEST_ECHO = $root.C2S.CS_TEST_ECHO.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.CS_ROLE_ONLINE = $root.C2S.CS_ROLE_ONLINE.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.CS_ROLE_HEART_BEAT = $root.C2S.CS_ROLE_HEART_BEAT.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.CS_ABC_DEF = $root.C2S.CS_ABC_DEF.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.LOGIN_CS_LOGIN = $root.C2S.LOGIN_CS_LOGIN.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.LOGIN_CS_CHOOSE_SERVER = $root.C2S.LOGIN_CS_CHOOSE_SERVER.decode(reader, reader.uint32());
                        break;
                    case 7:
                        message.LOGIN_CS_GET_SERVER_LIST = $root.C2S.LOGIN_CS_GET_SERVER_LIST.decode(reader, reader.uint32());
                        break;
                    case 8:
                        message.LOGIN_CS_GET_INFO = $root.C2S.LOGIN_CS_GET_INFO.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Message message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof C2S.Message
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {C2S.Message} Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Message.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Message message.
             * @function verify
             * @memberof C2S.Message
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Message.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.CS_TEST_ECHO != null && message.hasOwnProperty("CS_TEST_ECHO")) {
                    properties.kind = 1;
                    {
                        var error = $root.C2S.CS_TEST_ECHO.verify(message.CS_TEST_ECHO);
                        if (error)
                            return "CS_TEST_ECHO." + error;
                    }
                }
                if (message.CS_ROLE_ONLINE != null && message.hasOwnProperty("CS_ROLE_ONLINE")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        var error = $root.C2S.CS_ROLE_ONLINE.verify(message.CS_ROLE_ONLINE);
                        if (error)
                            return "CS_ROLE_ONLINE." + error;
                    }
                }
                if (message.CS_ROLE_HEART_BEAT != null && message.hasOwnProperty("CS_ROLE_HEART_BEAT")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        var error = $root.C2S.CS_ROLE_HEART_BEAT.verify(message.CS_ROLE_HEART_BEAT);
                        if (error)
                            return "CS_ROLE_HEART_BEAT." + error;
                    }
                }
                if (message.CS_ABC_DEF != null && message.hasOwnProperty("CS_ABC_DEF")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        var error = $root.C2S.CS_ABC_DEF.verify(message.CS_ABC_DEF);
                        if (error)
                            return "CS_ABC_DEF." + error;
                    }
                }
                if (message.LOGIN_CS_LOGIN != null && message.hasOwnProperty("LOGIN_CS_LOGIN")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        var error = $root.C2S.LOGIN_CS_LOGIN.verify(message.LOGIN_CS_LOGIN);
                        if (error)
                            return "LOGIN_CS_LOGIN." + error;
                    }
                }
                if (message.LOGIN_CS_CHOOSE_SERVER != null && message.hasOwnProperty("LOGIN_CS_CHOOSE_SERVER")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        var error = $root.C2S.LOGIN_CS_CHOOSE_SERVER.verify(message.LOGIN_CS_CHOOSE_SERVER);
                        if (error)
                            return "LOGIN_CS_CHOOSE_SERVER." + error;
                    }
                }
                if (message.LOGIN_CS_GET_SERVER_LIST != null && message.hasOwnProperty("LOGIN_CS_GET_SERVER_LIST")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        var error = $root.C2S.LOGIN_CS_GET_SERVER_LIST.verify(message.LOGIN_CS_GET_SERVER_LIST);
                        if (error)
                            return "LOGIN_CS_GET_SERVER_LIST." + error;
                    }
                }
                if (message.LOGIN_CS_GET_INFO != null && message.hasOwnProperty("LOGIN_CS_GET_INFO")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        var error = $root.C2S.LOGIN_CS_GET_INFO.verify(message.LOGIN_CS_GET_INFO);
                        if (error)
                            return "LOGIN_CS_GET_INFO." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a Message message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof C2S.Message
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {C2S.Message} Message
             */
            Message.fromObject = function fromObject(object) {
                if (object instanceof $root.C2S.Message)
                    return object;
                var message = new $root.C2S.Message();
                if (object.CS_TEST_ECHO != null) {
                    if (typeof object.CS_TEST_ECHO !== "object")
                        throw TypeError(".C2S.Message.CS_TEST_ECHO: object expected");
                    message.CS_TEST_ECHO = $root.C2S.CS_TEST_ECHO.fromObject(object.CS_TEST_ECHO);
                }
                if (object.CS_ROLE_ONLINE != null) {
                    if (typeof object.CS_ROLE_ONLINE !== "object")
                        throw TypeError(".C2S.Message.CS_ROLE_ONLINE: object expected");
                    message.CS_ROLE_ONLINE = $root.C2S.CS_ROLE_ONLINE.fromObject(object.CS_ROLE_ONLINE);
                }
                if (object.CS_ROLE_HEART_BEAT != null) {
                    if (typeof object.CS_ROLE_HEART_BEAT !== "object")
                        throw TypeError(".C2S.Message.CS_ROLE_HEART_BEAT: object expected");
                    message.CS_ROLE_HEART_BEAT = $root.C2S.CS_ROLE_HEART_BEAT.fromObject(object.CS_ROLE_HEART_BEAT);
                }
                if (object.CS_ABC_DEF != null) {
                    if (typeof object.CS_ABC_DEF !== "object")
                        throw TypeError(".C2S.Message.CS_ABC_DEF: object expected");
                    message.CS_ABC_DEF = $root.C2S.CS_ABC_DEF.fromObject(object.CS_ABC_DEF);
                }
                if (object.LOGIN_CS_LOGIN != null) {
                    if (typeof object.LOGIN_CS_LOGIN !== "object")
                        throw TypeError(".C2S.Message.LOGIN_CS_LOGIN: object expected");
                    message.LOGIN_CS_LOGIN = $root.C2S.LOGIN_CS_LOGIN.fromObject(object.LOGIN_CS_LOGIN);
                }
                if (object.LOGIN_CS_CHOOSE_SERVER != null) {
                    if (typeof object.LOGIN_CS_CHOOSE_SERVER !== "object")
                        throw TypeError(".C2S.Message.LOGIN_CS_CHOOSE_SERVER: object expected");
                    message.LOGIN_CS_CHOOSE_SERVER = $root.C2S.LOGIN_CS_CHOOSE_SERVER.fromObject(object.LOGIN_CS_CHOOSE_SERVER);
                }
                if (object.LOGIN_CS_GET_SERVER_LIST != null) {
                    if (typeof object.LOGIN_CS_GET_SERVER_LIST !== "object")
                        throw TypeError(".C2S.Message.LOGIN_CS_GET_SERVER_LIST: object expected");
                    message.LOGIN_CS_GET_SERVER_LIST = $root.C2S.LOGIN_CS_GET_SERVER_LIST.fromObject(object.LOGIN_CS_GET_SERVER_LIST);
                }
                if (object.LOGIN_CS_GET_INFO != null) {
                    if (typeof object.LOGIN_CS_GET_INFO !== "object")
                        throw TypeError(".C2S.Message.LOGIN_CS_GET_INFO: object expected");
                    message.LOGIN_CS_GET_INFO = $root.C2S.LOGIN_CS_GET_INFO.fromObject(object.LOGIN_CS_GET_INFO);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Message message. Also converts values to other types if specified.
             * @function toObject
             * @memberof C2S.Message
             * @static
             * @param {C2S.Message} message Message
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Message.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.CS_TEST_ECHO != null && message.hasOwnProperty("CS_TEST_ECHO")) {
                    object.CS_TEST_ECHO = $root.C2S.CS_TEST_ECHO.toObject(message.CS_TEST_ECHO, options);
                    if (options.oneofs)
                        object.kind = "CS_TEST_ECHO";
                }
                if (message.CS_ROLE_ONLINE != null && message.hasOwnProperty("CS_ROLE_ONLINE")) {
                    object.CS_ROLE_ONLINE = $root.C2S.CS_ROLE_ONLINE.toObject(message.CS_ROLE_ONLINE, options);
                    if (options.oneofs)
                        object.kind = "CS_ROLE_ONLINE";
                }
                if (message.CS_ROLE_HEART_BEAT != null && message.hasOwnProperty("CS_ROLE_HEART_BEAT")) {
                    object.CS_ROLE_HEART_BEAT = $root.C2S.CS_ROLE_HEART_BEAT.toObject(message.CS_ROLE_HEART_BEAT, options);
                    if (options.oneofs)
                        object.kind = "CS_ROLE_HEART_BEAT";
                }
                if (message.CS_ABC_DEF != null && message.hasOwnProperty("CS_ABC_DEF")) {
                    object.CS_ABC_DEF = $root.C2S.CS_ABC_DEF.toObject(message.CS_ABC_DEF, options);
                    if (options.oneofs)
                        object.kind = "CS_ABC_DEF";
                }
                if (message.LOGIN_CS_LOGIN != null && message.hasOwnProperty("LOGIN_CS_LOGIN")) {
                    object.LOGIN_CS_LOGIN = $root.C2S.LOGIN_CS_LOGIN.toObject(message.LOGIN_CS_LOGIN, options);
                    if (options.oneofs)
                        object.kind = "LOGIN_CS_LOGIN";
                }
                if (message.LOGIN_CS_CHOOSE_SERVER != null && message.hasOwnProperty("LOGIN_CS_CHOOSE_SERVER")) {
                    object.LOGIN_CS_CHOOSE_SERVER = $root.C2S.LOGIN_CS_CHOOSE_SERVER.toObject(message.LOGIN_CS_CHOOSE_SERVER, options);
                    if (options.oneofs)
                        object.kind = "LOGIN_CS_CHOOSE_SERVER";
                }
                if (message.LOGIN_CS_GET_SERVER_LIST != null && message.hasOwnProperty("LOGIN_CS_GET_SERVER_LIST")) {
                    object.LOGIN_CS_GET_SERVER_LIST = $root.C2S.LOGIN_CS_GET_SERVER_LIST.toObject(message.LOGIN_CS_GET_SERVER_LIST, options);
                    if (options.oneofs)
                        object.kind = "LOGIN_CS_GET_SERVER_LIST";
                }
                if (message.LOGIN_CS_GET_INFO != null && message.hasOwnProperty("LOGIN_CS_GET_INFO")) {
                    object.LOGIN_CS_GET_INFO = $root.C2S.LOGIN_CS_GET_INFO.toObject(message.LOGIN_CS_GET_INFO, options);
                    if (options.oneofs)
                        object.kind = "LOGIN_CS_GET_INFO";
                }
                return object;
            };
    
            /**
             * Converts this Message to JSON.
             * @function toJSON
             * @memberof C2S.Message
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Message.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Message;
        })();
    
        C2S.CS_TEST_ECHO = (function() {
    
            /**
             * Properties of a CS_TEST_ECHO.
             * @memberof C2S
             * @interface ICS_TEST_ECHO
             * @property {string|null} [name] CS_TEST_ECHO name
             * @property {string|null} [msg] CS_TEST_ECHO msg
             * @property {number|Long|null} [b] CS_TEST_ECHO b
             * @property {Array.<number>|null} [data] CS_TEST_ECHO data
             * @property {C2S.CS_TEST_ECHO.Color|null} [color] CS_TEST_ECHO color
             * @property {Object.<string,string>|null} [map] CS_TEST_ECHO map
             */
    
            /**
             * Constructs a new CS_TEST_ECHO.
             * @memberof C2S
             * @classdesc you must name the message in the following format: [PACKAGE_NAME]_[CONTROLLER_NAME]_[METHOD_NAME]*
             * @implements ICS_TEST_ECHO
             * @constructor
             * @param {C2S.ICS_TEST_ECHO=} [properties] Properties to set
             */
            function CS_TEST_ECHO(properties) {
                this.data = [];
                this.map = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CS_TEST_ECHO name.
             * @member {string} name
             * @memberof C2S.CS_TEST_ECHO
             * @instance
             */
            CS_TEST_ECHO.prototype.name = "";
    
            /**
             * CS_TEST_ECHO msg.
             * @member {string} msg
             * @memberof C2S.CS_TEST_ECHO
             * @instance
             */
            CS_TEST_ECHO.prototype.msg = "";
    
            /**
             * CS_TEST_ECHO b.
             * @member {number|Long} b
             * @memberof C2S.CS_TEST_ECHO
             * @instance
             */
            CS_TEST_ECHO.prototype.b = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * CS_TEST_ECHO data.
             * @member {Array.<number>} data
             * @memberof C2S.CS_TEST_ECHO
             * @instance
             */
            CS_TEST_ECHO.prototype.data = $util.emptyArray;
    
            /**
             * CS_TEST_ECHO color.
             * @member {C2S.CS_TEST_ECHO.Color} color
             * @memberof C2S.CS_TEST_ECHO
             * @instance
             */
            CS_TEST_ECHO.prototype.color = 0;
    
            /**
             * CS_TEST_ECHO map.
             * @member {Object.<string,string>} map
             * @memberof C2S.CS_TEST_ECHO
             * @instance
             */
            CS_TEST_ECHO.prototype.map = $util.emptyObject;
    
            /**
             * Creates a new CS_TEST_ECHO instance using the specified properties.
             * @function create
             * @memberof C2S.CS_TEST_ECHO
             * @static
             * @param {C2S.ICS_TEST_ECHO=} [properties] Properties to set
             * @returns {C2S.CS_TEST_ECHO} CS_TEST_ECHO instance
             */
            CS_TEST_ECHO.create = function create(properties) {
                return new CS_TEST_ECHO(properties);
            };
    
            /**
             * Encodes the specified CS_TEST_ECHO message. Does not implicitly {@link C2S.CS_TEST_ECHO.verify|verify} messages.
             * @function encode
             * @memberof C2S.CS_TEST_ECHO
             * @static
             * @param {C2S.ICS_TEST_ECHO} message CS_TEST_ECHO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CS_TEST_ECHO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.msg != null && message.hasOwnProperty("msg"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
                if (message.b != null && message.hasOwnProperty("b"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.b);
                if (message.data != null && message.data.length) {
                    writer.uint32(/* id 4, wireType 2 =*/34).fork();
                    for (var i = 0; i < message.data.length; ++i)
                        writer.int32(message.data[i]);
                    writer.ldelim();
                }
                if (message.color != null && message.hasOwnProperty("color"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.color);
                if (message.map != null && message.hasOwnProperty("map"))
                    for (var keys = Object.keys(message.map), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 6, wireType 2 =*/50).fork().uint32(/* id 1, wireType 0 =*/8).uint64(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.map[keys[i]]).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified CS_TEST_ECHO message, length delimited. Does not implicitly {@link C2S.CS_TEST_ECHO.verify|verify} messages.
             * @function encodeDelimited
             * @memberof C2S.CS_TEST_ECHO
             * @static
             * @param {C2S.ICS_TEST_ECHO} message CS_TEST_ECHO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CS_TEST_ECHO.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a CS_TEST_ECHO message from the specified reader or buffer.
             * @function decode
             * @memberof C2S.CS_TEST_ECHO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {C2S.CS_TEST_ECHO} CS_TEST_ECHO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CS_TEST_ECHO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2S.CS_TEST_ECHO(), key;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.msg = reader.string();
                        break;
                    case 3:
                        message.b = reader.int64();
                        break;
                    case 4:
                        if (!(message.data && message.data.length))
                            message.data = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.data.push(reader.int32());
                        } else
                            message.data.push(reader.int32());
                        break;
                    case 5:
                        message.color = reader.int32();
                        break;
                    case 6:
                        reader.skip().pos++;
                        if (message.map === $util.emptyObject)
                            message.map = {};
                        key = reader.uint64();
                        reader.pos++;
                        message.map[typeof key === "object" ? $util.longToHash(key) : key] = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a CS_TEST_ECHO message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof C2S.CS_TEST_ECHO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {C2S.CS_TEST_ECHO} CS_TEST_ECHO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CS_TEST_ECHO.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a CS_TEST_ECHO message.
             * @function verify
             * @memberof C2S.CS_TEST_ECHO
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CS_TEST_ECHO.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.msg != null && message.hasOwnProperty("msg"))
                    if (!$util.isString(message.msg))
                        return "msg: string expected";
                if (message.b != null && message.hasOwnProperty("b"))
                    if (!$util.isInteger(message.b) && !(message.b && $util.isInteger(message.b.low) && $util.isInteger(message.b.high)))
                        return "b: integer|Long expected";
                if (message.data != null && message.hasOwnProperty("data")) {
                    if (!Array.isArray(message.data))
                        return "data: array expected";
                    for (var i = 0; i < message.data.length; ++i)
                        if (!$util.isInteger(message.data[i]))
                            return "data: integer[] expected";
                }
                if (message.color != null && message.hasOwnProperty("color"))
                    switch (message.color) {
                    default:
                        return "color: enum value expected";
                    case 0:
                    case 1:
                    case 1:
                        break;
                    }
                if (message.map != null && message.hasOwnProperty("map")) {
                    if (!$util.isObject(message.map))
                        return "map: object expected";
                    var key = Object.keys(message.map);
                    for (var i = 0; i < key.length; ++i) {
                        if (!$util.key64Re.test(key[i]))
                            return "map: integer|Long key{k:uint64} expected";
                        if (!$util.isString(message.map[key[i]]))
                            return "map: string{k:uint64} expected";
                    }
                }
                return null;
            };
    
            /**
             * Creates a CS_TEST_ECHO message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof C2S.CS_TEST_ECHO
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {C2S.CS_TEST_ECHO} CS_TEST_ECHO
             */
            CS_TEST_ECHO.fromObject = function fromObject(object) {
                if (object instanceof $root.C2S.CS_TEST_ECHO)
                    return object;
                var message = new $root.C2S.CS_TEST_ECHO();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.msg != null)
                    message.msg = String(object.msg);
                if (object.b != null)
                    if ($util.Long)
                        (message.b = $util.Long.fromValue(object.b)).unsigned = false;
                    else if (typeof object.b === "string")
                        message.b = parseInt(object.b, 10);
                    else if (typeof object.b === "number")
                        message.b = object.b;
                    else if (typeof object.b === "object")
                        message.b = new $util.LongBits(object.b.low >>> 0, object.b.high >>> 0).toNumber();
                if (object.data) {
                    if (!Array.isArray(object.data))
                        throw TypeError(".C2S.CS_TEST_ECHO.data: array expected");
                    message.data = [];
                    for (var i = 0; i < object.data.length; ++i)
                        message.data[i] = object.data[i] | 0;
                }
                switch (object.color) {
                case "RED":
                case 0:
                    message.color = 0;
                    break;
                case "BLUE":
                case 1:
                    message.color = 1;
                    break;
                case "YELLOW":
                case 1:
                    message.color = 1;
                    break;
                }
                if (object.map) {
                    if (typeof object.map !== "object")
                        throw TypeError(".C2S.CS_TEST_ECHO.map: object expected");
                    message.map = {};
                    for (var keys = Object.keys(object.map), i = 0; i < keys.length; ++i)
                        message.map[keys[i]] = String(object.map[keys[i]]);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a CS_TEST_ECHO message. Also converts values to other types if specified.
             * @function toObject
             * @memberof C2S.CS_TEST_ECHO
             * @static
             * @param {C2S.CS_TEST_ECHO} message CS_TEST_ECHO
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CS_TEST_ECHO.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.data = [];
                if (options.objects || options.defaults)
                    object.map = {};
                if (options.defaults) {
                    object.name = "";
                    object.msg = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.b = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.b = options.longs === String ? "0" : 0;
                    object.color = options.enums === String ? "RED" : 0;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.msg != null && message.hasOwnProperty("msg"))
                    object.msg = message.msg;
                if (message.b != null && message.hasOwnProperty("b"))
                    if (typeof message.b === "number")
                        object.b = options.longs === String ? String(message.b) : message.b;
                    else
                        object.b = options.longs === String ? $util.Long.prototype.toString.call(message.b) : options.longs === Number ? new $util.LongBits(message.b.low >>> 0, message.b.high >>> 0).toNumber() : message.b;
                if (message.data && message.data.length) {
                    object.data = [];
                    for (var j = 0; j < message.data.length; ++j)
                        object.data[j] = message.data[j];
                }
                if (message.color != null && message.hasOwnProperty("color"))
                    object.color = options.enums === String ? $root.C2S.CS_TEST_ECHO.Color[message.color] : message.color;
                var keys2;
                if (message.map && (keys2 = Object.keys(message.map)).length) {
                    object.map = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.map[keys2[j]] = message.map[keys2[j]];
                }
                return object;
            };
    
            /**
             * Converts this CS_TEST_ECHO to JSON.
             * @function toJSON
             * @memberof C2S.CS_TEST_ECHO
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CS_TEST_ECHO.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Color enum.
             * @name C2S.CS_TEST_ECHO.Color
             * @enum {string}
             * @property {number} RED=0 RED value
             * @property {number} BLUE=1 BLUE value
             * @property {number} YELLOW=1 YELLOW value
             */
            CS_TEST_ECHO.Color = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "RED"] = 0;
                values[valuesById[1] = "BLUE"] = 1;
                values["YELLOW"] = 1;
                return values;
            })();
    
            return CS_TEST_ECHO;
        })();
    
        C2S.CS_ROLE_HEART_BEAT = (function() {
    
            /**
             * Properties of a CS_ROLE_HEART_BEAT.
             * @memberof C2S
             * @interface ICS_ROLE_HEART_BEAT
             */
    
            /**
             * Constructs a new CS_ROLE_HEART_BEAT.
             * @memberof C2S
             * @classdesc Represents a CS_ROLE_HEART_BEAT.
             * @implements ICS_ROLE_HEART_BEAT
             * @constructor
             * @param {C2S.ICS_ROLE_HEART_BEAT=} [properties] Properties to set
             */
            function CS_ROLE_HEART_BEAT(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new CS_ROLE_HEART_BEAT instance using the specified properties.
             * @function create
             * @memberof C2S.CS_ROLE_HEART_BEAT
             * @static
             * @param {C2S.ICS_ROLE_HEART_BEAT=} [properties] Properties to set
             * @returns {C2S.CS_ROLE_HEART_BEAT} CS_ROLE_HEART_BEAT instance
             */
            CS_ROLE_HEART_BEAT.create = function create(properties) {
                return new CS_ROLE_HEART_BEAT(properties);
            };
    
            /**
             * Encodes the specified CS_ROLE_HEART_BEAT message. Does not implicitly {@link C2S.CS_ROLE_HEART_BEAT.verify|verify} messages.
             * @function encode
             * @memberof C2S.CS_ROLE_HEART_BEAT
             * @static
             * @param {C2S.ICS_ROLE_HEART_BEAT} message CS_ROLE_HEART_BEAT message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CS_ROLE_HEART_BEAT.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified CS_ROLE_HEART_BEAT message, length delimited. Does not implicitly {@link C2S.CS_ROLE_HEART_BEAT.verify|verify} messages.
             * @function encodeDelimited
             * @memberof C2S.CS_ROLE_HEART_BEAT
             * @static
             * @param {C2S.ICS_ROLE_HEART_BEAT} message CS_ROLE_HEART_BEAT message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CS_ROLE_HEART_BEAT.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a CS_ROLE_HEART_BEAT message from the specified reader or buffer.
             * @function decode
             * @memberof C2S.CS_ROLE_HEART_BEAT
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {C2S.CS_ROLE_HEART_BEAT} CS_ROLE_HEART_BEAT
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CS_ROLE_HEART_BEAT.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2S.CS_ROLE_HEART_BEAT();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a CS_ROLE_HEART_BEAT message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof C2S.CS_ROLE_HEART_BEAT
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {C2S.CS_ROLE_HEART_BEAT} CS_ROLE_HEART_BEAT
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CS_ROLE_HEART_BEAT.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a CS_ROLE_HEART_BEAT message.
             * @function verify
             * @memberof C2S.CS_ROLE_HEART_BEAT
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CS_ROLE_HEART_BEAT.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a CS_ROLE_HEART_BEAT message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof C2S.CS_ROLE_HEART_BEAT
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {C2S.CS_ROLE_HEART_BEAT} CS_ROLE_HEART_BEAT
             */
            CS_ROLE_HEART_BEAT.fromObject = function fromObject(object) {
                if (object instanceof $root.C2S.CS_ROLE_HEART_BEAT)
                    return object;
                return new $root.C2S.CS_ROLE_HEART_BEAT();
            };
    
            /**
             * Creates a plain object from a CS_ROLE_HEART_BEAT message. Also converts values to other types if specified.
             * @function toObject
             * @memberof C2S.CS_ROLE_HEART_BEAT
             * @static
             * @param {C2S.CS_ROLE_HEART_BEAT} message CS_ROLE_HEART_BEAT
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CS_ROLE_HEART_BEAT.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this CS_ROLE_HEART_BEAT to JSON.
             * @function toJSON
             * @memberof C2S.CS_ROLE_HEART_BEAT
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CS_ROLE_HEART_BEAT.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return CS_ROLE_HEART_BEAT;
        })();
    
        C2S.CS_ABC_DEF = (function() {
    
            /**
             * Properties of a CS_ABC_DEF.
             * @memberof C2S
             * @interface ICS_ABC_DEF
             */
    
            /**
             * Constructs a new CS_ABC_DEF.
             * @memberof C2S
             * @classdesc Represents a CS_ABC_DEF.
             * @implements ICS_ABC_DEF
             * @constructor
             * @param {C2S.ICS_ABC_DEF=} [properties] Properties to set
             */
            function CS_ABC_DEF(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new CS_ABC_DEF instance using the specified properties.
             * @function create
             * @memberof C2S.CS_ABC_DEF
             * @static
             * @param {C2S.ICS_ABC_DEF=} [properties] Properties to set
             * @returns {C2S.CS_ABC_DEF} CS_ABC_DEF instance
             */
            CS_ABC_DEF.create = function create(properties) {
                return new CS_ABC_DEF(properties);
            };
    
            /**
             * Encodes the specified CS_ABC_DEF message. Does not implicitly {@link C2S.CS_ABC_DEF.verify|verify} messages.
             * @function encode
             * @memberof C2S.CS_ABC_DEF
             * @static
             * @param {C2S.ICS_ABC_DEF} message CS_ABC_DEF message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CS_ABC_DEF.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified CS_ABC_DEF message, length delimited. Does not implicitly {@link C2S.CS_ABC_DEF.verify|verify} messages.
             * @function encodeDelimited
             * @memberof C2S.CS_ABC_DEF
             * @static
             * @param {C2S.ICS_ABC_DEF} message CS_ABC_DEF message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CS_ABC_DEF.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a CS_ABC_DEF message from the specified reader or buffer.
             * @function decode
             * @memberof C2S.CS_ABC_DEF
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {C2S.CS_ABC_DEF} CS_ABC_DEF
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CS_ABC_DEF.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2S.CS_ABC_DEF();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a CS_ABC_DEF message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof C2S.CS_ABC_DEF
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {C2S.CS_ABC_DEF} CS_ABC_DEF
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CS_ABC_DEF.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a CS_ABC_DEF message.
             * @function verify
             * @memberof C2S.CS_ABC_DEF
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CS_ABC_DEF.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a CS_ABC_DEF message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof C2S.CS_ABC_DEF
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {C2S.CS_ABC_DEF} CS_ABC_DEF
             */
            CS_ABC_DEF.fromObject = function fromObject(object) {
                if (object instanceof $root.C2S.CS_ABC_DEF)
                    return object;
                return new $root.C2S.CS_ABC_DEF();
            };
    
            /**
             * Creates a plain object from a CS_ABC_DEF message. Also converts values to other types if specified.
             * @function toObject
             * @memberof C2S.CS_ABC_DEF
             * @static
             * @param {C2S.CS_ABC_DEF} message CS_ABC_DEF
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CS_ABC_DEF.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this CS_ABC_DEF to JSON.
             * @function toJSON
             * @memberof C2S.CS_ABC_DEF
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CS_ABC_DEF.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return CS_ABC_DEF;
        })();
    
        C2S.CS_ROLE_ONLINE = (function() {
    
            /**
             * Properties of a CS_ROLE_ONLINE.
             * @memberof C2S
             * @interface ICS_ROLE_ONLINE
             * @property {string|null} [passport] CS_ROLE_ONLINE passport
             * @property {string|null} [pwd] CS_ROLE_ONLINE pwd
             */
    
            /**
             * Constructs a new CS_ROLE_ONLINE.
             * @memberof C2S
             * @classdesc Represents a CS_ROLE_ONLINE.
             * @implements ICS_ROLE_ONLINE
             * @constructor
             * @param {C2S.ICS_ROLE_ONLINE=} [properties] Properties to set
             */
            function CS_ROLE_ONLINE(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CS_ROLE_ONLINE passport.
             * @member {string} passport
             * @memberof C2S.CS_ROLE_ONLINE
             * @instance
             */
            CS_ROLE_ONLINE.prototype.passport = "";
    
            /**
             * CS_ROLE_ONLINE pwd.
             * @member {string} pwd
             * @memberof C2S.CS_ROLE_ONLINE
             * @instance
             */
            CS_ROLE_ONLINE.prototype.pwd = "";
    
            /**
             * Creates a new CS_ROLE_ONLINE instance using the specified properties.
             * @function create
             * @memberof C2S.CS_ROLE_ONLINE
             * @static
             * @param {C2S.ICS_ROLE_ONLINE=} [properties] Properties to set
             * @returns {C2S.CS_ROLE_ONLINE} CS_ROLE_ONLINE instance
             */
            CS_ROLE_ONLINE.create = function create(properties) {
                return new CS_ROLE_ONLINE(properties);
            };
    
            /**
             * Encodes the specified CS_ROLE_ONLINE message. Does not implicitly {@link C2S.CS_ROLE_ONLINE.verify|verify} messages.
             * @function encode
             * @memberof C2S.CS_ROLE_ONLINE
             * @static
             * @param {C2S.ICS_ROLE_ONLINE} message CS_ROLE_ONLINE message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CS_ROLE_ONLINE.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.passport != null && message.hasOwnProperty("passport"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.passport);
                if (message.pwd != null && message.hasOwnProperty("pwd"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.pwd);
                return writer;
            };
    
            /**
             * Encodes the specified CS_ROLE_ONLINE message, length delimited. Does not implicitly {@link C2S.CS_ROLE_ONLINE.verify|verify} messages.
             * @function encodeDelimited
             * @memberof C2S.CS_ROLE_ONLINE
             * @static
             * @param {C2S.ICS_ROLE_ONLINE} message CS_ROLE_ONLINE message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CS_ROLE_ONLINE.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a CS_ROLE_ONLINE message from the specified reader or buffer.
             * @function decode
             * @memberof C2S.CS_ROLE_ONLINE
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {C2S.CS_ROLE_ONLINE} CS_ROLE_ONLINE
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CS_ROLE_ONLINE.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2S.CS_ROLE_ONLINE();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.passport = reader.string();
                        break;
                    case 2:
                        message.pwd = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a CS_ROLE_ONLINE message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof C2S.CS_ROLE_ONLINE
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {C2S.CS_ROLE_ONLINE} CS_ROLE_ONLINE
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CS_ROLE_ONLINE.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a CS_ROLE_ONLINE message.
             * @function verify
             * @memberof C2S.CS_ROLE_ONLINE
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CS_ROLE_ONLINE.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.passport != null && message.hasOwnProperty("passport"))
                    if (!$util.isString(message.passport))
                        return "passport: string expected";
                if (message.pwd != null && message.hasOwnProperty("pwd"))
                    if (!$util.isString(message.pwd))
                        return "pwd: string expected";
                return null;
            };
    
            /**
             * Creates a CS_ROLE_ONLINE message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof C2S.CS_ROLE_ONLINE
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {C2S.CS_ROLE_ONLINE} CS_ROLE_ONLINE
             */
            CS_ROLE_ONLINE.fromObject = function fromObject(object) {
                if (object instanceof $root.C2S.CS_ROLE_ONLINE)
                    return object;
                var message = new $root.C2S.CS_ROLE_ONLINE();
                if (object.passport != null)
                    message.passport = String(object.passport);
                if (object.pwd != null)
                    message.pwd = String(object.pwd);
                return message;
            };
    
            /**
             * Creates a plain object from a CS_ROLE_ONLINE message. Also converts values to other types if specified.
             * @function toObject
             * @memberof C2S.CS_ROLE_ONLINE
             * @static
             * @param {C2S.CS_ROLE_ONLINE} message CS_ROLE_ONLINE
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CS_ROLE_ONLINE.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.passport = "";
                    object.pwd = "";
                }
                if (message.passport != null && message.hasOwnProperty("passport"))
                    object.passport = message.passport;
                if (message.pwd != null && message.hasOwnProperty("pwd"))
                    object.pwd = message.pwd;
                return object;
            };
    
            /**
             * Converts this CS_ROLE_ONLINE to JSON.
             * @function toJSON
             * @memberof C2S.CS_ROLE_ONLINE
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CS_ROLE_ONLINE.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return CS_ROLE_ONLINE;
        })();
    
        C2S.LOGIN_CS_LOGIN = (function() {
    
            /**
             * Properties of a LOGIN_CS_LOGIN.
             * @memberof C2S
             * @interface ILOGIN_CS_LOGIN
             * @property {string|null} [passport] LOGIN_CS_LOGIN passport
             * @property {string|null} [pwd] LOGIN_CS_LOGIN pwd
             * @property {string|null} [device] LOGIN_CS_LOGIN device
             * @property {string|null} [deviceUid] LOGIN_CS_LOGIN deviceUid
             * @property {string|null} [deviceType] LOGIN_CS_LOGIN deviceType
             * @property {string|null} [deviceToken] LOGIN_CS_LOGIN deviceToken
             * @property {number|null} [platform] LOGIN_CS_LOGIN platform
             */
    
            /**
             * Constructs a new LOGIN_CS_LOGIN.
             * @memberof C2S
             * @classdesc Represents a LOGIN_CS_LOGIN.
             * @implements ILOGIN_CS_LOGIN
             * @constructor
             * @param {C2S.ILOGIN_CS_LOGIN=} [properties] Properties to set
             */
            function LOGIN_CS_LOGIN(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * LOGIN_CS_LOGIN passport.
             * @member {string} passport
             * @memberof C2S.LOGIN_CS_LOGIN
             * @instance
             */
            LOGIN_CS_LOGIN.prototype.passport = "";
    
            /**
             * LOGIN_CS_LOGIN pwd.
             * @member {string} pwd
             * @memberof C2S.LOGIN_CS_LOGIN
             * @instance
             */
            LOGIN_CS_LOGIN.prototype.pwd = "";
    
            /**
             * LOGIN_CS_LOGIN device.
             * @member {string} device
             * @memberof C2S.LOGIN_CS_LOGIN
             * @instance
             */
            LOGIN_CS_LOGIN.prototype.device = "";
    
            /**
             * LOGIN_CS_LOGIN deviceUid.
             * @member {string} deviceUid
             * @memberof C2S.LOGIN_CS_LOGIN
             * @instance
             */
            LOGIN_CS_LOGIN.prototype.deviceUid = "";
    
            /**
             * LOGIN_CS_LOGIN deviceType.
             * @member {string} deviceType
             * @memberof C2S.LOGIN_CS_LOGIN
             * @instance
             */
            LOGIN_CS_LOGIN.prototype.deviceType = "";
    
            /**
             * LOGIN_CS_LOGIN deviceToken.
             * @member {string} deviceToken
             * @memberof C2S.LOGIN_CS_LOGIN
             * @instance
             */
            LOGIN_CS_LOGIN.prototype.deviceToken = "";
    
            /**
             * LOGIN_CS_LOGIN platform.
             * @member {number} platform
             * @memberof C2S.LOGIN_CS_LOGIN
             * @instance
             */
            LOGIN_CS_LOGIN.prototype.platform = 0;
    
            /**
             * Creates a new LOGIN_CS_LOGIN instance using the specified properties.
             * @function create
             * @memberof C2S.LOGIN_CS_LOGIN
             * @static
             * @param {C2S.ILOGIN_CS_LOGIN=} [properties] Properties to set
             * @returns {C2S.LOGIN_CS_LOGIN} LOGIN_CS_LOGIN instance
             */
            LOGIN_CS_LOGIN.create = function create(properties) {
                return new LOGIN_CS_LOGIN(properties);
            };
    
            /**
             * Encodes the specified LOGIN_CS_LOGIN message. Does not implicitly {@link C2S.LOGIN_CS_LOGIN.verify|verify} messages.
             * @function encode
             * @memberof C2S.LOGIN_CS_LOGIN
             * @static
             * @param {C2S.ILOGIN_CS_LOGIN} message LOGIN_CS_LOGIN message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LOGIN_CS_LOGIN.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.passport != null && message.hasOwnProperty("passport"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.passport);
                if (message.pwd != null && message.hasOwnProperty("pwd"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.pwd);
                if (message.device != null && message.hasOwnProperty("device"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.device);
                if (message.deviceUid != null && message.hasOwnProperty("deviceUid"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.deviceUid);
                if (message.deviceType != null && message.hasOwnProperty("deviceType"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.deviceType);
                if (message.deviceToken != null && message.hasOwnProperty("deviceToken"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.deviceToken);
                if (message.platform != null && message.hasOwnProperty("platform"))
                    writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.platform);
                return writer;
            };
    
            /**
             * Encodes the specified LOGIN_CS_LOGIN message, length delimited. Does not implicitly {@link C2S.LOGIN_CS_LOGIN.verify|verify} messages.
             * @function encodeDelimited
             * @memberof C2S.LOGIN_CS_LOGIN
             * @static
             * @param {C2S.ILOGIN_CS_LOGIN} message LOGIN_CS_LOGIN message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LOGIN_CS_LOGIN.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a LOGIN_CS_LOGIN message from the specified reader or buffer.
             * @function decode
             * @memberof C2S.LOGIN_CS_LOGIN
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {C2S.LOGIN_CS_LOGIN} LOGIN_CS_LOGIN
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LOGIN_CS_LOGIN.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2S.LOGIN_CS_LOGIN();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.passport = reader.string();
                        break;
                    case 2:
                        message.pwd = reader.string();
                        break;
                    case 3:
                        message.device = reader.string();
                        break;
                    case 4:
                        message.deviceUid = reader.string();
                        break;
                    case 5:
                        message.deviceType = reader.string();
                        break;
                    case 6:
                        message.deviceToken = reader.string();
                        break;
                    case 7:
                        message.platform = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a LOGIN_CS_LOGIN message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof C2S.LOGIN_CS_LOGIN
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {C2S.LOGIN_CS_LOGIN} LOGIN_CS_LOGIN
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LOGIN_CS_LOGIN.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a LOGIN_CS_LOGIN message.
             * @function verify
             * @memberof C2S.LOGIN_CS_LOGIN
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LOGIN_CS_LOGIN.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.passport != null && message.hasOwnProperty("passport"))
                    if (!$util.isString(message.passport))
                        return "passport: string expected";
                if (message.pwd != null && message.hasOwnProperty("pwd"))
                    if (!$util.isString(message.pwd))
                        return "pwd: string expected";
                if (message.device != null && message.hasOwnProperty("device"))
                    if (!$util.isString(message.device))
                        return "device: string expected";
                if (message.deviceUid != null && message.hasOwnProperty("deviceUid"))
                    if (!$util.isString(message.deviceUid))
                        return "deviceUid: string expected";
                if (message.deviceType != null && message.hasOwnProperty("deviceType"))
                    if (!$util.isString(message.deviceType))
                        return "deviceType: string expected";
                if (message.deviceToken != null && message.hasOwnProperty("deviceToken"))
                    if (!$util.isString(message.deviceToken))
                        return "deviceToken: string expected";
                if (message.platform != null && message.hasOwnProperty("platform"))
                    if (!$util.isInteger(message.platform))
                        return "platform: integer expected";
                return null;
            };
    
            /**
             * Creates a LOGIN_CS_LOGIN message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof C2S.LOGIN_CS_LOGIN
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {C2S.LOGIN_CS_LOGIN} LOGIN_CS_LOGIN
             */
            LOGIN_CS_LOGIN.fromObject = function fromObject(object) {
                if (object instanceof $root.C2S.LOGIN_CS_LOGIN)
                    return object;
                var message = new $root.C2S.LOGIN_CS_LOGIN();
                if (object.passport != null)
                    message.passport = String(object.passport);
                if (object.pwd != null)
                    message.pwd = String(object.pwd);
                if (object.device != null)
                    message.device = String(object.device);
                if (object.deviceUid != null)
                    message.deviceUid = String(object.deviceUid);
                if (object.deviceType != null)
                    message.deviceType = String(object.deviceType);
                if (object.deviceToken != null)
                    message.deviceToken = String(object.deviceToken);
                if (object.platform != null)
                    message.platform = object.platform >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a LOGIN_CS_LOGIN message. Also converts values to other types if specified.
             * @function toObject
             * @memberof C2S.LOGIN_CS_LOGIN
             * @static
             * @param {C2S.LOGIN_CS_LOGIN} message LOGIN_CS_LOGIN
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LOGIN_CS_LOGIN.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.passport = "";
                    object.pwd = "";
                    object.device = "";
                    object.deviceUid = "";
                    object.deviceType = "";
                    object.deviceToken = "";
                    object.platform = 0;
                }
                if (message.passport != null && message.hasOwnProperty("passport"))
                    object.passport = message.passport;
                if (message.pwd != null && message.hasOwnProperty("pwd"))
                    object.pwd = message.pwd;
                if (message.device != null && message.hasOwnProperty("device"))
                    object.device = message.device;
                if (message.deviceUid != null && message.hasOwnProperty("deviceUid"))
                    object.deviceUid = message.deviceUid;
                if (message.deviceType != null && message.hasOwnProperty("deviceType"))
                    object.deviceType = message.deviceType;
                if (message.deviceToken != null && message.hasOwnProperty("deviceToken"))
                    object.deviceToken = message.deviceToken;
                if (message.platform != null && message.hasOwnProperty("platform"))
                    object.platform = message.platform;
                return object;
            };
    
            /**
             * Converts this LOGIN_CS_LOGIN to JSON.
             * @function toJSON
             * @memberof C2S.LOGIN_CS_LOGIN
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LOGIN_CS_LOGIN.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return LOGIN_CS_LOGIN;
        })();
    
        C2S.LOGIN_CS_CHOOSE_SERVER = (function() {
    
            /**
             * Properties of a LOGIN_CS_CHOOSE_SERVER.
             * @memberof C2S
             * @interface ILOGIN_CS_CHOOSE_SERVER
             * @property {number|null} [serverId] LOGIN_CS_CHOOSE_SERVER serverId
             */
    
            /**
             * Constructs a new LOGIN_CS_CHOOSE_SERVER.
             * @memberof C2S
             * @classdesc Represents a LOGIN_CS_CHOOSE_SERVER.
             * @implements ILOGIN_CS_CHOOSE_SERVER
             * @constructor
             * @param {C2S.ILOGIN_CS_CHOOSE_SERVER=} [properties] Properties to set
             */
            function LOGIN_CS_CHOOSE_SERVER(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * LOGIN_CS_CHOOSE_SERVER serverId.
             * @member {number} serverId
             * @memberof C2S.LOGIN_CS_CHOOSE_SERVER
             * @instance
             */
            LOGIN_CS_CHOOSE_SERVER.prototype.serverId = 0;
    
            /**
             * Creates a new LOGIN_CS_CHOOSE_SERVER instance using the specified properties.
             * @function create
             * @memberof C2S.LOGIN_CS_CHOOSE_SERVER
             * @static
             * @param {C2S.ILOGIN_CS_CHOOSE_SERVER=} [properties] Properties to set
             * @returns {C2S.LOGIN_CS_CHOOSE_SERVER} LOGIN_CS_CHOOSE_SERVER instance
             */
            LOGIN_CS_CHOOSE_SERVER.create = function create(properties) {
                return new LOGIN_CS_CHOOSE_SERVER(properties);
            };
    
            /**
             * Encodes the specified LOGIN_CS_CHOOSE_SERVER message. Does not implicitly {@link C2S.LOGIN_CS_CHOOSE_SERVER.verify|verify} messages.
             * @function encode
             * @memberof C2S.LOGIN_CS_CHOOSE_SERVER
             * @static
             * @param {C2S.ILOGIN_CS_CHOOSE_SERVER} message LOGIN_CS_CHOOSE_SERVER message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LOGIN_CS_CHOOSE_SERVER.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.serverId != null && message.hasOwnProperty("serverId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.serverId);
                return writer;
            };
    
            /**
             * Encodes the specified LOGIN_CS_CHOOSE_SERVER message, length delimited. Does not implicitly {@link C2S.LOGIN_CS_CHOOSE_SERVER.verify|verify} messages.
             * @function encodeDelimited
             * @memberof C2S.LOGIN_CS_CHOOSE_SERVER
             * @static
             * @param {C2S.ILOGIN_CS_CHOOSE_SERVER} message LOGIN_CS_CHOOSE_SERVER message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LOGIN_CS_CHOOSE_SERVER.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a LOGIN_CS_CHOOSE_SERVER message from the specified reader or buffer.
             * @function decode
             * @memberof C2S.LOGIN_CS_CHOOSE_SERVER
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {C2S.LOGIN_CS_CHOOSE_SERVER} LOGIN_CS_CHOOSE_SERVER
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LOGIN_CS_CHOOSE_SERVER.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2S.LOGIN_CS_CHOOSE_SERVER();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.serverId = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a LOGIN_CS_CHOOSE_SERVER message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof C2S.LOGIN_CS_CHOOSE_SERVER
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {C2S.LOGIN_CS_CHOOSE_SERVER} LOGIN_CS_CHOOSE_SERVER
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LOGIN_CS_CHOOSE_SERVER.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a LOGIN_CS_CHOOSE_SERVER message.
             * @function verify
             * @memberof C2S.LOGIN_CS_CHOOSE_SERVER
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LOGIN_CS_CHOOSE_SERVER.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.serverId != null && message.hasOwnProperty("serverId"))
                    if (!$util.isInteger(message.serverId))
                        return "serverId: integer expected";
                return null;
            };
    
            /**
             * Creates a LOGIN_CS_CHOOSE_SERVER message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof C2S.LOGIN_CS_CHOOSE_SERVER
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {C2S.LOGIN_CS_CHOOSE_SERVER} LOGIN_CS_CHOOSE_SERVER
             */
            LOGIN_CS_CHOOSE_SERVER.fromObject = function fromObject(object) {
                if (object instanceof $root.C2S.LOGIN_CS_CHOOSE_SERVER)
                    return object;
                var message = new $root.C2S.LOGIN_CS_CHOOSE_SERVER();
                if (object.serverId != null)
                    message.serverId = object.serverId >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a LOGIN_CS_CHOOSE_SERVER message. Also converts values to other types if specified.
             * @function toObject
             * @memberof C2S.LOGIN_CS_CHOOSE_SERVER
             * @static
             * @param {C2S.LOGIN_CS_CHOOSE_SERVER} message LOGIN_CS_CHOOSE_SERVER
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LOGIN_CS_CHOOSE_SERVER.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.serverId = 0;
                if (message.serverId != null && message.hasOwnProperty("serverId"))
                    object.serverId = message.serverId;
                return object;
            };
    
            /**
             * Converts this LOGIN_CS_CHOOSE_SERVER to JSON.
             * @function toJSON
             * @memberof C2S.LOGIN_CS_CHOOSE_SERVER
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LOGIN_CS_CHOOSE_SERVER.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return LOGIN_CS_CHOOSE_SERVER;
        })();
    
        C2S.LOGIN_CS_GET_SERVER_LIST = (function() {
    
            /**
             * Properties of a LOGIN_CS_GET_SERVER_LIST.
             * @memberof C2S
             * @interface ILOGIN_CS_GET_SERVER_LIST
             */
    
            /**
             * Constructs a new LOGIN_CS_GET_SERVER_LIST.
             * @memberof C2S
             * @classdesc Represents a LOGIN_CS_GET_SERVER_LIST.
             * @implements ILOGIN_CS_GET_SERVER_LIST
             * @constructor
             * @param {C2S.ILOGIN_CS_GET_SERVER_LIST=} [properties] Properties to set
             */
            function LOGIN_CS_GET_SERVER_LIST(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new LOGIN_CS_GET_SERVER_LIST instance using the specified properties.
             * @function create
             * @memberof C2S.LOGIN_CS_GET_SERVER_LIST
             * @static
             * @param {C2S.ILOGIN_CS_GET_SERVER_LIST=} [properties] Properties to set
             * @returns {C2S.LOGIN_CS_GET_SERVER_LIST} LOGIN_CS_GET_SERVER_LIST instance
             */
            LOGIN_CS_GET_SERVER_LIST.create = function create(properties) {
                return new LOGIN_CS_GET_SERVER_LIST(properties);
            };
    
            /**
             * Encodes the specified LOGIN_CS_GET_SERVER_LIST message. Does not implicitly {@link C2S.LOGIN_CS_GET_SERVER_LIST.verify|verify} messages.
             * @function encode
             * @memberof C2S.LOGIN_CS_GET_SERVER_LIST
             * @static
             * @param {C2S.ILOGIN_CS_GET_SERVER_LIST} message LOGIN_CS_GET_SERVER_LIST message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LOGIN_CS_GET_SERVER_LIST.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified LOGIN_CS_GET_SERVER_LIST message, length delimited. Does not implicitly {@link C2S.LOGIN_CS_GET_SERVER_LIST.verify|verify} messages.
             * @function encodeDelimited
             * @memberof C2S.LOGIN_CS_GET_SERVER_LIST
             * @static
             * @param {C2S.ILOGIN_CS_GET_SERVER_LIST} message LOGIN_CS_GET_SERVER_LIST message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LOGIN_CS_GET_SERVER_LIST.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a LOGIN_CS_GET_SERVER_LIST message from the specified reader or buffer.
             * @function decode
             * @memberof C2S.LOGIN_CS_GET_SERVER_LIST
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {C2S.LOGIN_CS_GET_SERVER_LIST} LOGIN_CS_GET_SERVER_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LOGIN_CS_GET_SERVER_LIST.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2S.LOGIN_CS_GET_SERVER_LIST();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a LOGIN_CS_GET_SERVER_LIST message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof C2S.LOGIN_CS_GET_SERVER_LIST
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {C2S.LOGIN_CS_GET_SERVER_LIST} LOGIN_CS_GET_SERVER_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LOGIN_CS_GET_SERVER_LIST.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a LOGIN_CS_GET_SERVER_LIST message.
             * @function verify
             * @memberof C2S.LOGIN_CS_GET_SERVER_LIST
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LOGIN_CS_GET_SERVER_LIST.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a LOGIN_CS_GET_SERVER_LIST message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof C2S.LOGIN_CS_GET_SERVER_LIST
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {C2S.LOGIN_CS_GET_SERVER_LIST} LOGIN_CS_GET_SERVER_LIST
             */
            LOGIN_CS_GET_SERVER_LIST.fromObject = function fromObject(object) {
                if (object instanceof $root.C2S.LOGIN_CS_GET_SERVER_LIST)
                    return object;
                return new $root.C2S.LOGIN_CS_GET_SERVER_LIST();
            };
    
            /**
             * Creates a plain object from a LOGIN_CS_GET_SERVER_LIST message. Also converts values to other types if specified.
             * @function toObject
             * @memberof C2S.LOGIN_CS_GET_SERVER_LIST
             * @static
             * @param {C2S.LOGIN_CS_GET_SERVER_LIST} message LOGIN_CS_GET_SERVER_LIST
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LOGIN_CS_GET_SERVER_LIST.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this LOGIN_CS_GET_SERVER_LIST to JSON.
             * @function toJSON
             * @memberof C2S.LOGIN_CS_GET_SERVER_LIST
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LOGIN_CS_GET_SERVER_LIST.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return LOGIN_CS_GET_SERVER_LIST;
        })();
    
        C2S.LOGIN_CS_GET_INFO = (function() {
    
            /**
             * Properties of a LOGIN_CS_GET_INFO.
             * @memberof C2S
             * @interface ILOGIN_CS_GET_INFO
             * @property {number|null} [platformId] LOGIN_CS_GET_INFO platformId
             * @property {string|null} [clientVersion] LOGIN_CS_GET_INFO clientVersion
             */
    
            /**
             * Constructs a new LOGIN_CS_GET_INFO.
             * @memberof C2S
             * @classdesc Represents a LOGIN_CS_GET_INFO.
             * @implements ILOGIN_CS_GET_INFO
             * @constructor
             * @param {C2S.ILOGIN_CS_GET_INFO=} [properties] Properties to set
             */
            function LOGIN_CS_GET_INFO(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * LOGIN_CS_GET_INFO platformId.
             * @member {number} platformId
             * @memberof C2S.LOGIN_CS_GET_INFO
             * @instance
             */
            LOGIN_CS_GET_INFO.prototype.platformId = 0;
    
            /**
             * LOGIN_CS_GET_INFO clientVersion.
             * @member {string} clientVersion
             * @memberof C2S.LOGIN_CS_GET_INFO
             * @instance
             */
            LOGIN_CS_GET_INFO.prototype.clientVersion = "";
    
            /**
             * Creates a new LOGIN_CS_GET_INFO instance using the specified properties.
             * @function create
             * @memberof C2S.LOGIN_CS_GET_INFO
             * @static
             * @param {C2S.ILOGIN_CS_GET_INFO=} [properties] Properties to set
             * @returns {C2S.LOGIN_CS_GET_INFO} LOGIN_CS_GET_INFO instance
             */
            LOGIN_CS_GET_INFO.create = function create(properties) {
                return new LOGIN_CS_GET_INFO(properties);
            };
    
            /**
             * Encodes the specified LOGIN_CS_GET_INFO message. Does not implicitly {@link C2S.LOGIN_CS_GET_INFO.verify|verify} messages.
             * @function encode
             * @memberof C2S.LOGIN_CS_GET_INFO
             * @static
             * @param {C2S.ILOGIN_CS_GET_INFO} message LOGIN_CS_GET_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LOGIN_CS_GET_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.platformId != null && message.hasOwnProperty("platformId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.platformId);
                if (message.clientVersion != null && message.hasOwnProperty("clientVersion"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.clientVersion);
                return writer;
            };
    
            /**
             * Encodes the specified LOGIN_CS_GET_INFO message, length delimited. Does not implicitly {@link C2S.LOGIN_CS_GET_INFO.verify|verify} messages.
             * @function encodeDelimited
             * @memberof C2S.LOGIN_CS_GET_INFO
             * @static
             * @param {C2S.ILOGIN_CS_GET_INFO} message LOGIN_CS_GET_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LOGIN_CS_GET_INFO.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a LOGIN_CS_GET_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof C2S.LOGIN_CS_GET_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {C2S.LOGIN_CS_GET_INFO} LOGIN_CS_GET_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LOGIN_CS_GET_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2S.LOGIN_CS_GET_INFO();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.platformId = reader.uint32();
                        break;
                    case 2:
                        message.clientVersion = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a LOGIN_CS_GET_INFO message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof C2S.LOGIN_CS_GET_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {C2S.LOGIN_CS_GET_INFO} LOGIN_CS_GET_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LOGIN_CS_GET_INFO.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a LOGIN_CS_GET_INFO message.
             * @function verify
             * @memberof C2S.LOGIN_CS_GET_INFO
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LOGIN_CS_GET_INFO.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.platformId != null && message.hasOwnProperty("platformId"))
                    if (!$util.isInteger(message.platformId))
                        return "platformId: integer expected";
                if (message.clientVersion != null && message.hasOwnProperty("clientVersion"))
                    if (!$util.isString(message.clientVersion))
                        return "clientVersion: string expected";
                return null;
            };
    
            /**
             * Creates a LOGIN_CS_GET_INFO message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof C2S.LOGIN_CS_GET_INFO
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {C2S.LOGIN_CS_GET_INFO} LOGIN_CS_GET_INFO
             */
            LOGIN_CS_GET_INFO.fromObject = function fromObject(object) {
                if (object instanceof $root.C2S.LOGIN_CS_GET_INFO)
                    return object;
                var message = new $root.C2S.LOGIN_CS_GET_INFO();
                if (object.platformId != null)
                    message.platformId = object.platformId >>> 0;
                if (object.clientVersion != null)
                    message.clientVersion = String(object.clientVersion);
                return message;
            };
    
            /**
             * Creates a plain object from a LOGIN_CS_GET_INFO message. Also converts values to other types if specified.
             * @function toObject
             * @memberof C2S.LOGIN_CS_GET_INFO
             * @static
             * @param {C2S.LOGIN_CS_GET_INFO} message LOGIN_CS_GET_INFO
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LOGIN_CS_GET_INFO.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.platformId = 0;
                    object.clientVersion = "";
                }
                if (message.platformId != null && message.hasOwnProperty("platformId"))
                    object.platformId = message.platformId;
                if (message.clientVersion != null && message.hasOwnProperty("clientVersion"))
                    object.clientVersion = message.clientVersion;
                return object;
            };
    
            /**
             * Converts this LOGIN_CS_GET_INFO to JSON.
             * @function toJSON
             * @memberof C2S.LOGIN_CS_GET_INFO
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LOGIN_CS_GET_INFO.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return LOGIN_CS_GET_INFO;
        })();
    
        return C2S;
    })();
    
    $root.S2C = (function() {
    
        /**
         * Namespace S2C.
         * @exports S2C
         * @namespace
         */
        var S2C = {};
    
        S2C.Message = (function() {
    
            /**
             * Properties of a Message.
             * @memberof S2C
             * @interface IMessage
             * @property {S2C.IError|null} [Error] Message Error
             * @property {S2C.ISC_TEST_ECHO|null} [SC_TEST_ECHO] Message SC_TEST_ECHO
             * @property {S2C.ISC_ROLE_ONLINE|null} [SC_ROLE_ONLINE] Message SC_ROLE_ONLINE
             * @property {S2C.ISC_ROLE_HEART_BEAT|null} [SC_ROLE_HEART_BEAT] Message SC_ROLE_HEART_BEAT
             * @property {S2C.ISC_ROLE_UPDATE|null} [SC_ROLE_UPDATE] Message SC_ROLE_UPDATE
             * @property {S2C.ILOGIN_SC_LOGIN|null} [LOGIN_SC_LOGIN] Message LOGIN_SC_LOGIN
             * @property {S2C.ILOGIN_SC_CHOOSE_SERVER|null} [LOGIN_SC_CHOOSE_SERVER] Message LOGIN_SC_CHOOSE_SERVER
             * @property {S2C.ILOGIN_SC_GET_SERVER_LIST|null} [LOGIN_SC_GET_SERVER_LIST] Message LOGIN_SC_GET_SERVER_LIST
             * @property {S2C.ILOGIN_SC_GET_INFO|null} [LOGIN_SC_GET_INFO] Message LOGIN_SC_GET_INFO
             */
    
            /**
             * Constructs a new Message.
             * @memberof S2C
             * @classdesc remember to put your message here as a kind support*
             * @implements IMessage
             * @constructor
             * @param {S2C.IMessage=} [properties] Properties to set
             */
            function Message(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Message Error.
             * @member {S2C.IError|null|undefined} Error
             * @memberof S2C.Message
             * @instance
             */
            Message.prototype.Error = null;
    
            /**
             * Message SC_TEST_ECHO.
             * @member {S2C.ISC_TEST_ECHO|null|undefined} SC_TEST_ECHO
             * @memberof S2C.Message
             * @instance
             */
            Message.prototype.SC_TEST_ECHO = null;
    
            /**
             * Message SC_ROLE_ONLINE.
             * @member {S2C.ISC_ROLE_ONLINE|null|undefined} SC_ROLE_ONLINE
             * @memberof S2C.Message
             * @instance
             */
            Message.prototype.SC_ROLE_ONLINE = null;
    
            /**
             * Message SC_ROLE_HEART_BEAT.
             * @member {S2C.ISC_ROLE_HEART_BEAT|null|undefined} SC_ROLE_HEART_BEAT
             * @memberof S2C.Message
             * @instance
             */
            Message.prototype.SC_ROLE_HEART_BEAT = null;
    
            /**
             * Message SC_ROLE_UPDATE.
             * @member {S2C.ISC_ROLE_UPDATE|null|undefined} SC_ROLE_UPDATE
             * @memberof S2C.Message
             * @instance
             */
            Message.prototype.SC_ROLE_UPDATE = null;
    
            /**
             * Message LOGIN_SC_LOGIN.
             * @member {S2C.ILOGIN_SC_LOGIN|null|undefined} LOGIN_SC_LOGIN
             * @memberof S2C.Message
             * @instance
             */
            Message.prototype.LOGIN_SC_LOGIN = null;
    
            /**
             * Message LOGIN_SC_CHOOSE_SERVER.
             * @member {S2C.ILOGIN_SC_CHOOSE_SERVER|null|undefined} LOGIN_SC_CHOOSE_SERVER
             * @memberof S2C.Message
             * @instance
             */
            Message.prototype.LOGIN_SC_CHOOSE_SERVER = null;
    
            /**
             * Message LOGIN_SC_GET_SERVER_LIST.
             * @member {S2C.ILOGIN_SC_GET_SERVER_LIST|null|undefined} LOGIN_SC_GET_SERVER_LIST
             * @memberof S2C.Message
             * @instance
             */
            Message.prototype.LOGIN_SC_GET_SERVER_LIST = null;
    
            /**
             * Message LOGIN_SC_GET_INFO.
             * @member {S2C.ILOGIN_SC_GET_INFO|null|undefined} LOGIN_SC_GET_INFO
             * @memberof S2C.Message
             * @instance
             */
            Message.prototype.LOGIN_SC_GET_INFO = null;
    
            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;
    
            /**
             * Message kind.
             * @member {"Error"|"SC_TEST_ECHO"|"SC_ROLE_ONLINE"|"SC_ROLE_HEART_BEAT"|"SC_ROLE_UPDATE"|"LOGIN_SC_LOGIN"|"LOGIN_SC_CHOOSE_SERVER"|"LOGIN_SC_GET_SERVER_LIST"|"LOGIN_SC_GET_INFO"|undefined} kind
             * @memberof S2C.Message
             * @instance
             */
            Object.defineProperty(Message.prototype, "kind", {
                get: $util.oneOfGetter($oneOfFields = ["Error", "SC_TEST_ECHO", "SC_ROLE_ONLINE", "SC_ROLE_HEART_BEAT", "SC_ROLE_UPDATE", "LOGIN_SC_LOGIN", "LOGIN_SC_CHOOSE_SERVER", "LOGIN_SC_GET_SERVER_LIST", "LOGIN_SC_GET_INFO"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Creates a new Message instance using the specified properties.
             * @function create
             * @memberof S2C.Message
             * @static
             * @param {S2C.IMessage=} [properties] Properties to set
             * @returns {S2C.Message} Message instance
             */
            Message.create = function create(properties) {
                return new Message(properties);
            };
    
            /**
             * Encodes the specified Message message. Does not implicitly {@link S2C.Message.verify|verify} messages.
             * @function encode
             * @memberof S2C.Message
             * @static
             * @param {S2C.IMessage} message Message message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Message.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Error != null && message.hasOwnProperty("Error"))
                    $root.S2C.Error.encode(message.Error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.SC_TEST_ECHO != null && message.hasOwnProperty("SC_TEST_ECHO"))
                    $root.S2C.SC_TEST_ECHO.encode(message.SC_TEST_ECHO, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.SC_ROLE_ONLINE != null && message.hasOwnProperty("SC_ROLE_ONLINE"))
                    $root.S2C.SC_ROLE_ONLINE.encode(message.SC_ROLE_ONLINE, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.SC_ROLE_HEART_BEAT != null && message.hasOwnProperty("SC_ROLE_HEART_BEAT"))
                    $root.S2C.SC_ROLE_HEART_BEAT.encode(message.SC_ROLE_HEART_BEAT, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.SC_ROLE_UPDATE != null && message.hasOwnProperty("SC_ROLE_UPDATE"))
                    $root.S2C.SC_ROLE_UPDATE.encode(message.SC_ROLE_UPDATE, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.LOGIN_SC_LOGIN != null && message.hasOwnProperty("LOGIN_SC_LOGIN"))
                    $root.S2C.LOGIN_SC_LOGIN.encode(message.LOGIN_SC_LOGIN, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.LOGIN_SC_CHOOSE_SERVER != null && message.hasOwnProperty("LOGIN_SC_CHOOSE_SERVER"))
                    $root.S2C.LOGIN_SC_CHOOSE_SERVER.encode(message.LOGIN_SC_CHOOSE_SERVER, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.LOGIN_SC_GET_SERVER_LIST != null && message.hasOwnProperty("LOGIN_SC_GET_SERVER_LIST"))
                    $root.S2C.LOGIN_SC_GET_SERVER_LIST.encode(message.LOGIN_SC_GET_SERVER_LIST, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.LOGIN_SC_GET_INFO != null && message.hasOwnProperty("LOGIN_SC_GET_INFO"))
                    $root.S2C.LOGIN_SC_GET_INFO.encode(message.LOGIN_SC_GET_INFO, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified Message message, length delimited. Does not implicitly {@link S2C.Message.verify|verify} messages.
             * @function encodeDelimited
             * @memberof S2C.Message
             * @static
             * @param {S2C.IMessage} message Message message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Message.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Message message from the specified reader or buffer.
             * @function decode
             * @memberof S2C.Message
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {S2C.Message} Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Message.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.Message();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.Error = $root.S2C.Error.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.SC_TEST_ECHO = $root.S2C.SC_TEST_ECHO.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.SC_ROLE_ONLINE = $root.S2C.SC_ROLE_ONLINE.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.SC_ROLE_HEART_BEAT = $root.S2C.SC_ROLE_HEART_BEAT.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.SC_ROLE_UPDATE = $root.S2C.SC_ROLE_UPDATE.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.LOGIN_SC_LOGIN = $root.S2C.LOGIN_SC_LOGIN.decode(reader, reader.uint32());
                        break;
                    case 7:
                        message.LOGIN_SC_CHOOSE_SERVER = $root.S2C.LOGIN_SC_CHOOSE_SERVER.decode(reader, reader.uint32());
                        break;
                    case 8:
                        message.LOGIN_SC_GET_SERVER_LIST = $root.S2C.LOGIN_SC_GET_SERVER_LIST.decode(reader, reader.uint32());
                        break;
                    case 9:
                        message.LOGIN_SC_GET_INFO = $root.S2C.LOGIN_SC_GET_INFO.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Message message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof S2C.Message
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {S2C.Message} Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Message.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Message message.
             * @function verify
             * @memberof S2C.Message
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Message.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.Error != null && message.hasOwnProperty("Error")) {
                    properties.kind = 1;
                    {
                        var error = $root.S2C.Error.verify(message.Error);
                        if (error)
                            return "Error." + error;
                    }
                }
                if (message.SC_TEST_ECHO != null && message.hasOwnProperty("SC_TEST_ECHO")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        var error = $root.S2C.SC_TEST_ECHO.verify(message.SC_TEST_ECHO);
                        if (error)
                            return "SC_TEST_ECHO." + error;
                    }
                }
                if (message.SC_ROLE_ONLINE != null && message.hasOwnProperty("SC_ROLE_ONLINE")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        var error = $root.S2C.SC_ROLE_ONLINE.verify(message.SC_ROLE_ONLINE);
                        if (error)
                            return "SC_ROLE_ONLINE." + error;
                    }
                }
                if (message.SC_ROLE_HEART_BEAT != null && message.hasOwnProperty("SC_ROLE_HEART_BEAT")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        var error = $root.S2C.SC_ROLE_HEART_BEAT.verify(message.SC_ROLE_HEART_BEAT);
                        if (error)
                            return "SC_ROLE_HEART_BEAT." + error;
                    }
                }
                if (message.SC_ROLE_UPDATE != null && message.hasOwnProperty("SC_ROLE_UPDATE")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        var error = $root.S2C.SC_ROLE_UPDATE.verify(message.SC_ROLE_UPDATE);
                        if (error)
                            return "SC_ROLE_UPDATE." + error;
                    }
                }
                if (message.LOGIN_SC_LOGIN != null && message.hasOwnProperty("LOGIN_SC_LOGIN")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        var error = $root.S2C.LOGIN_SC_LOGIN.verify(message.LOGIN_SC_LOGIN);
                        if (error)
                            return "LOGIN_SC_LOGIN." + error;
                    }
                }
                if (message.LOGIN_SC_CHOOSE_SERVER != null && message.hasOwnProperty("LOGIN_SC_CHOOSE_SERVER")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        var error = $root.S2C.LOGIN_SC_CHOOSE_SERVER.verify(message.LOGIN_SC_CHOOSE_SERVER);
                        if (error)
                            return "LOGIN_SC_CHOOSE_SERVER." + error;
                    }
                }
                if (message.LOGIN_SC_GET_SERVER_LIST != null && message.hasOwnProperty("LOGIN_SC_GET_SERVER_LIST")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        var error = $root.S2C.LOGIN_SC_GET_SERVER_LIST.verify(message.LOGIN_SC_GET_SERVER_LIST);
                        if (error)
                            return "LOGIN_SC_GET_SERVER_LIST." + error;
                    }
                }
                if (message.LOGIN_SC_GET_INFO != null && message.hasOwnProperty("LOGIN_SC_GET_INFO")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        var error = $root.S2C.LOGIN_SC_GET_INFO.verify(message.LOGIN_SC_GET_INFO);
                        if (error)
                            return "LOGIN_SC_GET_INFO." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a Message message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof S2C.Message
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {S2C.Message} Message
             */
            Message.fromObject = function fromObject(object) {
                if (object instanceof $root.S2C.Message)
                    return object;
                var message = new $root.S2C.Message();
                if (object.Error != null) {
                    if (typeof object.Error !== "object")
                        throw TypeError(".S2C.Message.Error: object expected");
                    message.Error = $root.S2C.Error.fromObject(object.Error);
                }
                if (object.SC_TEST_ECHO != null) {
                    if (typeof object.SC_TEST_ECHO !== "object")
                        throw TypeError(".S2C.Message.SC_TEST_ECHO: object expected");
                    message.SC_TEST_ECHO = $root.S2C.SC_TEST_ECHO.fromObject(object.SC_TEST_ECHO);
                }
                if (object.SC_ROLE_ONLINE != null) {
                    if (typeof object.SC_ROLE_ONLINE !== "object")
                        throw TypeError(".S2C.Message.SC_ROLE_ONLINE: object expected");
                    message.SC_ROLE_ONLINE = $root.S2C.SC_ROLE_ONLINE.fromObject(object.SC_ROLE_ONLINE);
                }
                if (object.SC_ROLE_HEART_BEAT != null) {
                    if (typeof object.SC_ROLE_HEART_BEAT !== "object")
                        throw TypeError(".S2C.Message.SC_ROLE_HEART_BEAT: object expected");
                    message.SC_ROLE_HEART_BEAT = $root.S2C.SC_ROLE_HEART_BEAT.fromObject(object.SC_ROLE_HEART_BEAT);
                }
                if (object.SC_ROLE_UPDATE != null) {
                    if (typeof object.SC_ROLE_UPDATE !== "object")
                        throw TypeError(".S2C.Message.SC_ROLE_UPDATE: object expected");
                    message.SC_ROLE_UPDATE = $root.S2C.SC_ROLE_UPDATE.fromObject(object.SC_ROLE_UPDATE);
                }
                if (object.LOGIN_SC_LOGIN != null) {
                    if (typeof object.LOGIN_SC_LOGIN !== "object")
                        throw TypeError(".S2C.Message.LOGIN_SC_LOGIN: object expected");
                    message.LOGIN_SC_LOGIN = $root.S2C.LOGIN_SC_LOGIN.fromObject(object.LOGIN_SC_LOGIN);
                }
                if (object.LOGIN_SC_CHOOSE_SERVER != null) {
                    if (typeof object.LOGIN_SC_CHOOSE_SERVER !== "object")
                        throw TypeError(".S2C.Message.LOGIN_SC_CHOOSE_SERVER: object expected");
                    message.LOGIN_SC_CHOOSE_SERVER = $root.S2C.LOGIN_SC_CHOOSE_SERVER.fromObject(object.LOGIN_SC_CHOOSE_SERVER);
                }
                if (object.LOGIN_SC_GET_SERVER_LIST != null) {
                    if (typeof object.LOGIN_SC_GET_SERVER_LIST !== "object")
                        throw TypeError(".S2C.Message.LOGIN_SC_GET_SERVER_LIST: object expected");
                    message.LOGIN_SC_GET_SERVER_LIST = $root.S2C.LOGIN_SC_GET_SERVER_LIST.fromObject(object.LOGIN_SC_GET_SERVER_LIST);
                }
                if (object.LOGIN_SC_GET_INFO != null) {
                    if (typeof object.LOGIN_SC_GET_INFO !== "object")
                        throw TypeError(".S2C.Message.LOGIN_SC_GET_INFO: object expected");
                    message.LOGIN_SC_GET_INFO = $root.S2C.LOGIN_SC_GET_INFO.fromObject(object.LOGIN_SC_GET_INFO);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Message message. Also converts values to other types if specified.
             * @function toObject
             * @memberof S2C.Message
             * @static
             * @param {S2C.Message} message Message
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Message.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.Error != null && message.hasOwnProperty("Error")) {
                    object.Error = $root.S2C.Error.toObject(message.Error, options);
                    if (options.oneofs)
                        object.kind = "Error";
                }
                if (message.SC_TEST_ECHO != null && message.hasOwnProperty("SC_TEST_ECHO")) {
                    object.SC_TEST_ECHO = $root.S2C.SC_TEST_ECHO.toObject(message.SC_TEST_ECHO, options);
                    if (options.oneofs)
                        object.kind = "SC_TEST_ECHO";
                }
                if (message.SC_ROLE_ONLINE != null && message.hasOwnProperty("SC_ROLE_ONLINE")) {
                    object.SC_ROLE_ONLINE = $root.S2C.SC_ROLE_ONLINE.toObject(message.SC_ROLE_ONLINE, options);
                    if (options.oneofs)
                        object.kind = "SC_ROLE_ONLINE";
                }
                if (message.SC_ROLE_HEART_BEAT != null && message.hasOwnProperty("SC_ROLE_HEART_BEAT")) {
                    object.SC_ROLE_HEART_BEAT = $root.S2C.SC_ROLE_HEART_BEAT.toObject(message.SC_ROLE_HEART_BEAT, options);
                    if (options.oneofs)
                        object.kind = "SC_ROLE_HEART_BEAT";
                }
                if (message.SC_ROLE_UPDATE != null && message.hasOwnProperty("SC_ROLE_UPDATE")) {
                    object.SC_ROLE_UPDATE = $root.S2C.SC_ROLE_UPDATE.toObject(message.SC_ROLE_UPDATE, options);
                    if (options.oneofs)
                        object.kind = "SC_ROLE_UPDATE";
                }
                if (message.LOGIN_SC_LOGIN != null && message.hasOwnProperty("LOGIN_SC_LOGIN")) {
                    object.LOGIN_SC_LOGIN = $root.S2C.LOGIN_SC_LOGIN.toObject(message.LOGIN_SC_LOGIN, options);
                    if (options.oneofs)
                        object.kind = "LOGIN_SC_LOGIN";
                }
                if (message.LOGIN_SC_CHOOSE_SERVER != null && message.hasOwnProperty("LOGIN_SC_CHOOSE_SERVER")) {
                    object.LOGIN_SC_CHOOSE_SERVER = $root.S2C.LOGIN_SC_CHOOSE_SERVER.toObject(message.LOGIN_SC_CHOOSE_SERVER, options);
                    if (options.oneofs)
                        object.kind = "LOGIN_SC_CHOOSE_SERVER";
                }
                if (message.LOGIN_SC_GET_SERVER_LIST != null && message.hasOwnProperty("LOGIN_SC_GET_SERVER_LIST")) {
                    object.LOGIN_SC_GET_SERVER_LIST = $root.S2C.LOGIN_SC_GET_SERVER_LIST.toObject(message.LOGIN_SC_GET_SERVER_LIST, options);
                    if (options.oneofs)
                        object.kind = "LOGIN_SC_GET_SERVER_LIST";
                }
                if (message.LOGIN_SC_GET_INFO != null && message.hasOwnProperty("LOGIN_SC_GET_INFO")) {
                    object.LOGIN_SC_GET_INFO = $root.S2C.LOGIN_SC_GET_INFO.toObject(message.LOGIN_SC_GET_INFO, options);
                    if (options.oneofs)
                        object.kind = "LOGIN_SC_GET_INFO";
                }
                return object;
            };
    
            /**
             * Converts this Message to JSON.
             * @function toJSON
             * @memberof S2C.Message
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Message.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Message;
        })();
    
        S2C.Role = (function() {
    
            /**
             * Properties of a Role.
             * @memberof S2C
             * @interface IRole
             * @property {number|null} [uid] Role uid
             * @property {string|null} [nickname] Role nickname
             * @property {string|null} [headimgurl] Role headimgurl
             * @property {number|null} [diamond] Role diamond
             * @property {number|Long|null} [gold] Role gold
             * @property {number|null} [level] Role level
             * @property {S2C.Role.IEquipModel|null} [equipModel] Role equipModel
             */
    
            /**
             * Constructs a new Role.
             * @memberof S2C
             * @classdesc Represents a Role.
             * @implements IRole
             * @constructor
             * @param {S2C.IRole=} [properties] Properties to set
             */
            function Role(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Role uid.
             * @member {number} uid
             * @memberof S2C.Role
             * @instance
             */
            Role.prototype.uid = 0;
    
            /**
             * Role nickname.
             * @member {string} nickname
             * @memberof S2C.Role
             * @instance
             */
            Role.prototype.nickname = "";
    
            /**
             * Role headimgurl.
             * @member {string} headimgurl
             * @memberof S2C.Role
             * @instance
             */
            Role.prototype.headimgurl = "";
    
            /**
             * Role diamond.
             * @member {number} diamond
             * @memberof S2C.Role
             * @instance
             */
            Role.prototype.diamond = 0;
    
            /**
             * Role gold.
             * @member {number|Long} gold
             * @memberof S2C.Role
             * @instance
             */
            Role.prototype.gold = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Role level.
             * @member {number} level
             * @memberof S2C.Role
             * @instance
             */
            Role.prototype.level = 0;
    
            /**
             * Role equipModel.
             * @member {S2C.Role.IEquipModel|null|undefined} equipModel
             * @memberof S2C.Role
             * @instance
             */
            Role.prototype.equipModel = null;
    
            /**
             * Creates a new Role instance using the specified properties.
             * @function create
             * @memberof S2C.Role
             * @static
             * @param {S2C.IRole=} [properties] Properties to set
             * @returns {S2C.Role} Role instance
             */
            Role.create = function create(properties) {
                return new Role(properties);
            };
    
            /**
             * Encodes the specified Role message. Does not implicitly {@link S2C.Role.verify|verify} messages.
             * @function encode
             * @memberof S2C.Role
             * @static
             * @param {S2C.IRole} message Role message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Role.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uid != null && message.hasOwnProperty("uid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
                if (message.headimgurl != null && message.hasOwnProperty("headimgurl"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.headimgurl);
                if (message.diamond != null && message.hasOwnProperty("diamond"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.diamond);
                if (message.gold != null && message.hasOwnProperty("gold"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.gold);
                if (message.level != null && message.hasOwnProperty("level"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.level);
                if (message.equipModel != null && message.hasOwnProperty("equipModel"))
                    $root.S2C.Role.EquipModel.encode(message.equipModel, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified Role message, length delimited. Does not implicitly {@link S2C.Role.verify|verify} messages.
             * @function encodeDelimited
             * @memberof S2C.Role
             * @static
             * @param {S2C.IRole} message Role message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Role.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Role message from the specified reader or buffer.
             * @function decode
             * @memberof S2C.Role
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {S2C.Role} Role
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Role.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.Role();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.uid = reader.uint32();
                        break;
                    case 2:
                        message.nickname = reader.string();
                        break;
                    case 3:
                        message.headimgurl = reader.string();
                        break;
                    case 4:
                        message.diamond = reader.uint32();
                        break;
                    case 5:
                        message.gold = reader.uint64();
                        break;
                    case 6:
                        message.level = reader.uint32();
                        break;
                    case 7:
                        message.equipModel = $root.S2C.Role.EquipModel.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Role message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof S2C.Role
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {S2C.Role} Role
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Role.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Role message.
             * @function verify
             * @memberof S2C.Role
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Role.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uid != null && message.hasOwnProperty("uid"))
                    if (!$util.isInteger(message.uid))
                        return "uid: integer expected";
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    if (!$util.isString(message.nickname))
                        return "nickname: string expected";
                if (message.headimgurl != null && message.hasOwnProperty("headimgurl"))
                    if (!$util.isString(message.headimgurl))
                        return "headimgurl: string expected";
                if (message.diamond != null && message.hasOwnProperty("diamond"))
                    if (!$util.isInteger(message.diamond))
                        return "diamond: integer expected";
                if (message.gold != null && message.hasOwnProperty("gold"))
                    if (!$util.isInteger(message.gold) && !(message.gold && $util.isInteger(message.gold.low) && $util.isInteger(message.gold.high)))
                        return "gold: integer|Long expected";
                if (message.level != null && message.hasOwnProperty("level"))
                    if (!$util.isInteger(message.level))
                        return "level: integer expected";
                if (message.equipModel != null && message.hasOwnProperty("equipModel")) {
                    var error = $root.S2C.Role.EquipModel.verify(message.equipModel);
                    if (error)
                        return "equipModel." + error;
                }
                return null;
            };
    
            /**
             * Creates a Role message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof S2C.Role
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {S2C.Role} Role
             */
            Role.fromObject = function fromObject(object) {
                if (object instanceof $root.S2C.Role)
                    return object;
                var message = new $root.S2C.Role();
                if (object.uid != null)
                    message.uid = object.uid >>> 0;
                if (object.nickname != null)
                    message.nickname = String(object.nickname);
                if (object.headimgurl != null)
                    message.headimgurl = String(object.headimgurl);
                if (object.diamond != null)
                    message.diamond = object.diamond >>> 0;
                if (object.gold != null)
                    if ($util.Long)
                        (message.gold = $util.Long.fromValue(object.gold)).unsigned = true;
                    else if (typeof object.gold === "string")
                        message.gold = parseInt(object.gold, 10);
                    else if (typeof object.gold === "number")
                        message.gold = object.gold;
                    else if (typeof object.gold === "object")
                        message.gold = new $util.LongBits(object.gold.low >>> 0, object.gold.high >>> 0).toNumber(true);
                if (object.level != null)
                    message.level = object.level >>> 0;
                if (object.equipModel != null) {
                    if (typeof object.equipModel !== "object")
                        throw TypeError(".S2C.Role.equipModel: object expected");
                    message.equipModel = $root.S2C.Role.EquipModel.fromObject(object.equipModel);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Role message. Also converts values to other types if specified.
             * @function toObject
             * @memberof S2C.Role
             * @static
             * @param {S2C.Role} message Role
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Role.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.uid = 0;
                    object.nickname = "";
                    object.headimgurl = "";
                    object.diamond = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.gold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.gold = options.longs === String ? "0" : 0;
                    object.level = 0;
                    object.equipModel = null;
                }
                if (message.uid != null && message.hasOwnProperty("uid"))
                    object.uid = message.uid;
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    object.nickname = message.nickname;
                if (message.headimgurl != null && message.hasOwnProperty("headimgurl"))
                    object.headimgurl = message.headimgurl;
                if (message.diamond != null && message.hasOwnProperty("diamond"))
                    object.diamond = message.diamond;
                if (message.gold != null && message.hasOwnProperty("gold"))
                    if (typeof message.gold === "number")
                        object.gold = options.longs === String ? String(message.gold) : message.gold;
                    else
                        object.gold = options.longs === String ? $util.Long.prototype.toString.call(message.gold) : options.longs === Number ? new $util.LongBits(message.gold.low >>> 0, message.gold.high >>> 0).toNumber(true) : message.gold;
                if (message.level != null && message.hasOwnProperty("level"))
                    object.level = message.level;
                if (message.equipModel != null && message.hasOwnProperty("equipModel"))
                    object.equipModel = $root.S2C.Role.EquipModel.toObject(message.equipModel, options);
                return object;
            };
    
            /**
             * Converts this Role to JSON.
             * @function toJSON
             * @memberof S2C.Role
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Role.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            Role.EquipModel = (function() {
    
                /**
                 * Properties of an EquipModel.
                 * @memberof S2C.Role
                 * @interface IEquipModel
                 * @property {Object.<string,S2C.Role.EquipModel.IEquip>|null} [equips] EquipModel equips
                 */
    
                /**
                 * Constructs a new EquipModel.
                 * @memberof S2C.Role
                 * @classdesc Represents an EquipModel.
                 * @implements IEquipModel
                 * @constructor
                 * @param {S2C.Role.IEquipModel=} [properties] Properties to set
                 */
                function EquipModel(properties) {
                    this.equips = {};
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EquipModel equips.
                 * @member {Object.<string,S2C.Role.EquipModel.IEquip>} equips
                 * @memberof S2C.Role.EquipModel
                 * @instance
                 */
                EquipModel.prototype.equips = $util.emptyObject;
    
                /**
                 * Creates a new EquipModel instance using the specified properties.
                 * @function create
                 * @memberof S2C.Role.EquipModel
                 * @static
                 * @param {S2C.Role.IEquipModel=} [properties] Properties to set
                 * @returns {S2C.Role.EquipModel} EquipModel instance
                 */
                EquipModel.create = function create(properties) {
                    return new EquipModel(properties);
                };
    
                /**
                 * Encodes the specified EquipModel message. Does not implicitly {@link S2C.Role.EquipModel.verify|verify} messages.
                 * @function encode
                 * @memberof S2C.Role.EquipModel
                 * @static
                 * @param {S2C.Role.IEquipModel} message EquipModel message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EquipModel.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.equips != null && message.hasOwnProperty("equips"))
                        for (var keys = Object.keys(message.equips), i = 0; i < keys.length; ++i) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                            $root.S2C.Role.EquipModel.Equip.encode(message.equips[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                        }
                    return writer;
                };
    
                /**
                 * Encodes the specified EquipModel message, length delimited. Does not implicitly {@link S2C.Role.EquipModel.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof S2C.Role.EquipModel
                 * @static
                 * @param {S2C.Role.IEquipModel} message EquipModel message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EquipModel.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EquipModel message from the specified reader or buffer.
                 * @function decode
                 * @memberof S2C.Role.EquipModel
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {S2C.Role.EquipModel} EquipModel
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EquipModel.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.Role.EquipModel(), key;
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            reader.skip().pos++;
                            if (message.equips === $util.emptyObject)
                                message.equips = {};
                            key = reader.int32();
                            reader.pos++;
                            message.equips[key] = $root.S2C.Role.EquipModel.Equip.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EquipModel message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof S2C.Role.EquipModel
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {S2C.Role.EquipModel} EquipModel
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EquipModel.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EquipModel message.
                 * @function verify
                 * @memberof S2C.Role.EquipModel
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EquipModel.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.equips != null && message.hasOwnProperty("equips")) {
                        if (!$util.isObject(message.equips))
                            return "equips: object expected";
                        var key = Object.keys(message.equips);
                        for (var i = 0; i < key.length; ++i) {
                            if (!$util.key32Re.test(key[i]))
                                return "equips: integer key{k:int32} expected";
                            {
                                var error = $root.S2C.Role.EquipModel.Equip.verify(message.equips[key[i]]);
                                if (error)
                                    return "equips." + error;
                            }
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an EquipModel message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof S2C.Role.EquipModel
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {S2C.Role.EquipModel} EquipModel
                 */
                EquipModel.fromObject = function fromObject(object) {
                    if (object instanceof $root.S2C.Role.EquipModel)
                        return object;
                    var message = new $root.S2C.Role.EquipModel();
                    if (object.equips) {
                        if (typeof object.equips !== "object")
                            throw TypeError(".S2C.Role.EquipModel.equips: object expected");
                        message.equips = {};
                        for (var keys = Object.keys(object.equips), i = 0; i < keys.length; ++i) {
                            if (typeof object.equips[keys[i]] !== "object")
                                throw TypeError(".S2C.Role.EquipModel.equips: object expected");
                            message.equips[keys[i]] = $root.S2C.Role.EquipModel.Equip.fromObject(object.equips[keys[i]]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EquipModel message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof S2C.Role.EquipModel
                 * @static
                 * @param {S2C.Role.EquipModel} message EquipModel
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EquipModel.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.objects || options.defaults)
                        object.equips = {};
                    var keys2;
                    if (message.equips && (keys2 = Object.keys(message.equips)).length) {
                        object.equips = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.equips[keys2[j]] = $root.S2C.Role.EquipModel.Equip.toObject(message.equips[keys2[j]], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this EquipModel to JSON.
                 * @function toJSON
                 * @memberof S2C.Role.EquipModel
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EquipModel.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                EquipModel.Equip = (function() {
    
                    /**
                     * Properties of an Equip.
                     * @memberof S2C.Role.EquipModel
                     * @interface IEquip
                     * @property {number|null} [uid] Equip uid
                     * @property {number|null} [id] Equip id
                     * @property {number|null} [level] Equip level
                     */
    
                    /**
                     * Constructs a new Equip.
                     * @memberof S2C.Role.EquipModel
                     * @classdesc Represents an Equip.
                     * @implements IEquip
                     * @constructor
                     * @param {S2C.Role.EquipModel.IEquip=} [properties] Properties to set
                     */
                    function Equip(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Equip uid.
                     * @member {number} uid
                     * @memberof S2C.Role.EquipModel.Equip
                     * @instance
                     */
                    Equip.prototype.uid = 0;
    
                    /**
                     * Equip id.
                     * @member {number} id
                     * @memberof S2C.Role.EquipModel.Equip
                     * @instance
                     */
                    Equip.prototype.id = 0;
    
                    /**
                     * Equip level.
                     * @member {number} level
                     * @memberof S2C.Role.EquipModel.Equip
                     * @instance
                     */
                    Equip.prototype.level = 0;
    
                    /**
                     * Creates a new Equip instance using the specified properties.
                     * @function create
                     * @memberof S2C.Role.EquipModel.Equip
                     * @static
                     * @param {S2C.Role.EquipModel.IEquip=} [properties] Properties to set
                     * @returns {S2C.Role.EquipModel.Equip} Equip instance
                     */
                    Equip.create = function create(properties) {
                        return new Equip(properties);
                    };
    
                    /**
                     * Encodes the specified Equip message. Does not implicitly {@link S2C.Role.EquipModel.Equip.verify|verify} messages.
                     * @function encode
                     * @memberof S2C.Role.EquipModel.Equip
                     * @static
                     * @param {S2C.Role.EquipModel.IEquip} message Equip message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Equip.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.uid != null && message.hasOwnProperty("uid"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
                        if (message.id != null && message.hasOwnProperty("id"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.id);
                        if (message.level != null && message.hasOwnProperty("level"))
                            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.level);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Equip message, length delimited. Does not implicitly {@link S2C.Role.EquipModel.Equip.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof S2C.Role.EquipModel.Equip
                     * @static
                     * @param {S2C.Role.EquipModel.IEquip} message Equip message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Equip.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an Equip message from the specified reader or buffer.
                     * @function decode
                     * @memberof S2C.Role.EquipModel.Equip
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {S2C.Role.EquipModel.Equip} Equip
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Equip.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.Role.EquipModel.Equip();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.uid = reader.uint32();
                                break;
                            case 2:
                                message.id = reader.uint32();
                                break;
                            case 3:
                                message.level = reader.uint32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an Equip message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof S2C.Role.EquipModel.Equip
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {S2C.Role.EquipModel.Equip} Equip
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Equip.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an Equip message.
                     * @function verify
                     * @memberof S2C.Role.EquipModel.Equip
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Equip.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.uid != null && message.hasOwnProperty("uid"))
                            if (!$util.isInteger(message.uid))
                                return "uid: integer expected";
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isInteger(message.id))
                                return "id: integer expected";
                        if (message.level != null && message.hasOwnProperty("level"))
                            if (!$util.isInteger(message.level))
                                return "level: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates an Equip message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof S2C.Role.EquipModel.Equip
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {S2C.Role.EquipModel.Equip} Equip
                     */
                    Equip.fromObject = function fromObject(object) {
                        if (object instanceof $root.S2C.Role.EquipModel.Equip)
                            return object;
                        var message = new $root.S2C.Role.EquipModel.Equip();
                        if (object.uid != null)
                            message.uid = object.uid >>> 0;
                        if (object.id != null)
                            message.id = object.id >>> 0;
                        if (object.level != null)
                            message.level = object.level >>> 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an Equip message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof S2C.Role.EquipModel.Equip
                     * @static
                     * @param {S2C.Role.EquipModel.Equip} message Equip
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Equip.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.uid = 0;
                            object.id = 0;
                            object.level = 0;
                        }
                        if (message.uid != null && message.hasOwnProperty("uid"))
                            object.uid = message.uid;
                        if (message.id != null && message.hasOwnProperty("id"))
                            object.id = message.id;
                        if (message.level != null && message.hasOwnProperty("level"))
                            object.level = message.level;
                        return object;
                    };
    
                    /**
                     * Converts this Equip to JSON.
                     * @function toJSON
                     * @memberof S2C.Role.EquipModel.Equip
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Equip.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return Equip;
                })();
    
                return EquipModel;
            })();
    
            Role.HeroModel = (function() {
    
                /**
                 * Properties of a HeroModel.
                 * @memberof S2C.Role
                 * @interface IHeroModel
                 * @property {number|null} [uid] HeroModel uid
                 * @property {number|null} [id] HeroModel id
                 * @property {number|null} [level] HeroModel level
                 */
    
                /**
                 * Constructs a new HeroModel.
                 * @memberof S2C.Role
                 * @classdesc Represents a HeroModel.
                 * @implements IHeroModel
                 * @constructor
                 * @param {S2C.Role.IHeroModel=} [properties] Properties to set
                 */
                function HeroModel(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * HeroModel uid.
                 * @member {number} uid
                 * @memberof S2C.Role.HeroModel
                 * @instance
                 */
                HeroModel.prototype.uid = 0;
    
                /**
                 * HeroModel id.
                 * @member {number} id
                 * @memberof S2C.Role.HeroModel
                 * @instance
                 */
                HeroModel.prototype.id = 0;
    
                /**
                 * HeroModel level.
                 * @member {number} level
                 * @memberof S2C.Role.HeroModel
                 * @instance
                 */
                HeroModel.prototype.level = 0;
    
                /**
                 * Creates a new HeroModel instance using the specified properties.
                 * @function create
                 * @memberof S2C.Role.HeroModel
                 * @static
                 * @param {S2C.Role.IHeroModel=} [properties] Properties to set
                 * @returns {S2C.Role.HeroModel} HeroModel instance
                 */
                HeroModel.create = function create(properties) {
                    return new HeroModel(properties);
                };
    
                /**
                 * Encodes the specified HeroModel message. Does not implicitly {@link S2C.Role.HeroModel.verify|verify} messages.
                 * @function encode
                 * @memberof S2C.Role.HeroModel
                 * @static
                 * @param {S2C.Role.IHeroModel} message HeroModel message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HeroModel.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.uid != null && message.hasOwnProperty("uid"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.id);
                    if (message.level != null && message.hasOwnProperty("level"))
                        writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.level);
                    return writer;
                };
    
                /**
                 * Encodes the specified HeroModel message, length delimited. Does not implicitly {@link S2C.Role.HeroModel.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof S2C.Role.HeroModel
                 * @static
                 * @param {S2C.Role.IHeroModel} message HeroModel message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HeroModel.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a HeroModel message from the specified reader or buffer.
                 * @function decode
                 * @memberof S2C.Role.HeroModel
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {S2C.Role.HeroModel} HeroModel
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HeroModel.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.Role.HeroModel();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.uid = reader.uint32();
                            break;
                        case 2:
                            message.id = reader.uint32();
                            break;
                        case 3:
                            message.level = reader.uint32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a HeroModel message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof S2C.Role.HeroModel
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {S2C.Role.HeroModel} HeroModel
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HeroModel.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a HeroModel message.
                 * @function verify
                 * @memberof S2C.Role.HeroModel
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                HeroModel.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.uid != null && message.hasOwnProperty("uid"))
                        if (!$util.isInteger(message.uid))
                            return "uid: integer expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isInteger(message.id))
                            return "id: integer expected";
                    if (message.level != null && message.hasOwnProperty("level"))
                        if (!$util.isInteger(message.level))
                            return "level: integer expected";
                    return null;
                };
    
                /**
                 * Creates a HeroModel message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof S2C.Role.HeroModel
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {S2C.Role.HeroModel} HeroModel
                 */
                HeroModel.fromObject = function fromObject(object) {
                    if (object instanceof $root.S2C.Role.HeroModel)
                        return object;
                    var message = new $root.S2C.Role.HeroModel();
                    if (object.uid != null)
                        message.uid = object.uid >>> 0;
                    if (object.id != null)
                        message.id = object.id >>> 0;
                    if (object.level != null)
                        message.level = object.level >>> 0;
                    return message;
                };
    
                /**
                 * Creates a plain object from a HeroModel message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof S2C.Role.HeroModel
                 * @static
                 * @param {S2C.Role.HeroModel} message HeroModel
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                HeroModel.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.uid = 0;
                        object.id = 0;
                        object.level = 0;
                    }
                    if (message.uid != null && message.hasOwnProperty("uid"))
                        object.uid = message.uid;
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.level != null && message.hasOwnProperty("level"))
                        object.level = message.level;
                    return object;
                };
    
                /**
                 * Converts this HeroModel to JSON.
                 * @function toJSON
                 * @memberof S2C.Role.HeroModel
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                HeroModel.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return HeroModel;
            })();
    
            return Role;
        })();
    
        S2C.SC_TEST_ECHO = (function() {
    
            /**
             * Properties of a SC_TEST_ECHO.
             * @memberof S2C
             * @interface ISC_TEST_ECHO
             * @property {number|null} [cmdId] SC_TEST_ECHO cmdId
             * @property {string|null} [msg] SC_TEST_ECHO msg
             */
    
            /**
             * Constructs a new SC_TEST_ECHO.
             * @memberof S2C
             * @classdesc Represents a SC_TEST_ECHO.
             * @implements ISC_TEST_ECHO
             * @constructor
             * @param {S2C.ISC_TEST_ECHO=} [properties] Properties to set
             */
            function SC_TEST_ECHO(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SC_TEST_ECHO cmdId.
             * @member {number} cmdId
             * @memberof S2C.SC_TEST_ECHO
             * @instance
             */
            SC_TEST_ECHO.prototype.cmdId = 0;
    
            /**
             * SC_TEST_ECHO msg.
             * @member {string} msg
             * @memberof S2C.SC_TEST_ECHO
             * @instance
             */
            SC_TEST_ECHO.prototype.msg = "";
    
            /**
             * Creates a new SC_TEST_ECHO instance using the specified properties.
             * @function create
             * @memberof S2C.SC_TEST_ECHO
             * @static
             * @param {S2C.ISC_TEST_ECHO=} [properties] Properties to set
             * @returns {S2C.SC_TEST_ECHO} SC_TEST_ECHO instance
             */
            SC_TEST_ECHO.create = function create(properties) {
                return new SC_TEST_ECHO(properties);
            };
    
            /**
             * Encodes the specified SC_TEST_ECHO message. Does not implicitly {@link S2C.SC_TEST_ECHO.verify|verify} messages.
             * @function encode
             * @memberof S2C.SC_TEST_ECHO
             * @static
             * @param {S2C.ISC_TEST_ECHO} message SC_TEST_ECHO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SC_TEST_ECHO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.cmdId != null && message.hasOwnProperty("cmdId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmdId);
                if (message.msg != null && message.hasOwnProperty("msg"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
                return writer;
            };
    
            /**
             * Encodes the specified SC_TEST_ECHO message, length delimited. Does not implicitly {@link S2C.SC_TEST_ECHO.verify|verify} messages.
             * @function encodeDelimited
             * @memberof S2C.SC_TEST_ECHO
             * @static
             * @param {S2C.ISC_TEST_ECHO} message SC_TEST_ECHO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SC_TEST_ECHO.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SC_TEST_ECHO message from the specified reader or buffer.
             * @function decode
             * @memberof S2C.SC_TEST_ECHO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {S2C.SC_TEST_ECHO} SC_TEST_ECHO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SC_TEST_ECHO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.SC_TEST_ECHO();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.cmdId = reader.int32();
                        break;
                    case 2:
                        message.msg = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a SC_TEST_ECHO message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof S2C.SC_TEST_ECHO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {S2C.SC_TEST_ECHO} SC_TEST_ECHO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SC_TEST_ECHO.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SC_TEST_ECHO message.
             * @function verify
             * @memberof S2C.SC_TEST_ECHO
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SC_TEST_ECHO.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.cmdId != null && message.hasOwnProperty("cmdId"))
                    if (!$util.isInteger(message.cmdId))
                        return "cmdId: integer expected";
                if (message.msg != null && message.hasOwnProperty("msg"))
                    if (!$util.isString(message.msg))
                        return "msg: string expected";
                return null;
            };
    
            /**
             * Creates a SC_TEST_ECHO message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof S2C.SC_TEST_ECHO
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {S2C.SC_TEST_ECHO} SC_TEST_ECHO
             */
            SC_TEST_ECHO.fromObject = function fromObject(object) {
                if (object instanceof $root.S2C.SC_TEST_ECHO)
                    return object;
                var message = new $root.S2C.SC_TEST_ECHO();
                if (object.cmdId != null)
                    message.cmdId = object.cmdId | 0;
                if (object.msg != null)
                    message.msg = String(object.msg);
                return message;
            };
    
            /**
             * Creates a plain object from a SC_TEST_ECHO message. Also converts values to other types if specified.
             * @function toObject
             * @memberof S2C.SC_TEST_ECHO
             * @static
             * @param {S2C.SC_TEST_ECHO} message SC_TEST_ECHO
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SC_TEST_ECHO.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.cmdId = 0;
                    object.msg = "";
                }
                if (message.cmdId != null && message.hasOwnProperty("cmdId"))
                    object.cmdId = message.cmdId;
                if (message.msg != null && message.hasOwnProperty("msg"))
                    object.msg = message.msg;
                return object;
            };
    
            /**
             * Converts this SC_TEST_ECHO to JSON.
             * @function toJSON
             * @memberof S2C.SC_TEST_ECHO
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SC_TEST_ECHO.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return SC_TEST_ECHO;
        })();
    
        S2C.Error = (function() {
    
            /**
             * Properties of an Error.
             * @memberof S2C
             * @interface IError
             * @property {number|null} [code] Error code
             * @property {string|null} [msg] Error msg
             */
    
            /**
             * Constructs a new Error.
             * @memberof S2C
             * @classdesc Represents an Error.
             * @implements IError
             * @constructor
             * @param {S2C.IError=} [properties] Properties to set
             */
            function Error(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Error code.
             * @member {number} code
             * @memberof S2C.Error
             * @instance
             */
            Error.prototype.code = 0;
    
            /**
             * Error msg.
             * @member {string} msg
             * @memberof S2C.Error
             * @instance
             */
            Error.prototype.msg = "";
    
            /**
             * Creates a new Error instance using the specified properties.
             * @function create
             * @memberof S2C.Error
             * @static
             * @param {S2C.IError=} [properties] Properties to set
             * @returns {S2C.Error} Error instance
             */
            Error.create = function create(properties) {
                return new Error(properties);
            };
    
            /**
             * Encodes the specified Error message. Does not implicitly {@link S2C.Error.verify|verify} messages.
             * @function encode
             * @memberof S2C.Error
             * @static
             * @param {S2C.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.code != null && message.hasOwnProperty("code"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
                if (message.msg != null && message.hasOwnProperty("msg"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
                return writer;
            };
    
            /**
             * Encodes the specified Error message, length delimited. Does not implicitly {@link S2C.Error.verify|verify} messages.
             * @function encodeDelimited
             * @memberof S2C.Error
             * @static
             * @param {S2C.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an Error message from the specified reader or buffer.
             * @function decode
             * @memberof S2C.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {S2C.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.Error();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.code = reader.int32();
                        break;
                    case 2:
                        message.msg = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an Error message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof S2C.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {S2C.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an Error message.
             * @function verify
             * @memberof S2C.Error
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Error.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.code != null && message.hasOwnProperty("code"))
                    if (!$util.isInteger(message.code))
                        return "code: integer expected";
                if (message.msg != null && message.hasOwnProperty("msg"))
                    if (!$util.isString(message.msg))
                        return "msg: string expected";
                return null;
            };
    
            /**
             * Creates an Error message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof S2C.Error
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {S2C.Error} Error
             */
            Error.fromObject = function fromObject(object) {
                if (object instanceof $root.S2C.Error)
                    return object;
                var message = new $root.S2C.Error();
                if (object.code != null)
                    message.code = object.code | 0;
                if (object.msg != null)
                    message.msg = String(object.msg);
                return message;
            };
    
            /**
             * Creates a plain object from an Error message. Also converts values to other types if specified.
             * @function toObject
             * @memberof S2C.Error
             * @static
             * @param {S2C.Error} message Error
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Error.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.code = 0;
                    object.msg = "";
                }
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = message.code;
                if (message.msg != null && message.hasOwnProperty("msg"))
                    object.msg = message.msg;
                return object;
            };
    
            /**
             * Converts this Error to JSON.
             * @function toJSON
             * @memberof S2C.Error
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Error.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Error;
        })();
    
        S2C.SC_ROLE_ONLINE = (function() {
    
            /**
             * Properties of a SC_ROLE_ONLINE.
             * @memberof S2C
             * @interface ISC_ROLE_ONLINE
             * @property {number|null} [roleId] SC_ROLE_ONLINE roleId
             */
    
            /**
             * Constructs a new SC_ROLE_ONLINE.
             * @memberof S2C
             * @classdesc Represents a SC_ROLE_ONLINE.
             * @implements ISC_ROLE_ONLINE
             * @constructor
             * @param {S2C.ISC_ROLE_ONLINE=} [properties] Properties to set
             */
            function SC_ROLE_ONLINE(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SC_ROLE_ONLINE roleId.
             * @member {number} roleId
             * @memberof S2C.SC_ROLE_ONLINE
             * @instance
             */
            SC_ROLE_ONLINE.prototype.roleId = 0;
    
            /**
             * Creates a new SC_ROLE_ONLINE instance using the specified properties.
             * @function create
             * @memberof S2C.SC_ROLE_ONLINE
             * @static
             * @param {S2C.ISC_ROLE_ONLINE=} [properties] Properties to set
             * @returns {S2C.SC_ROLE_ONLINE} SC_ROLE_ONLINE instance
             */
            SC_ROLE_ONLINE.create = function create(properties) {
                return new SC_ROLE_ONLINE(properties);
            };
    
            /**
             * Encodes the specified SC_ROLE_ONLINE message. Does not implicitly {@link S2C.SC_ROLE_ONLINE.verify|verify} messages.
             * @function encode
             * @memberof S2C.SC_ROLE_ONLINE
             * @static
             * @param {S2C.ISC_ROLE_ONLINE} message SC_ROLE_ONLINE message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SC_ROLE_ONLINE.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.roleId != null && message.hasOwnProperty("roleId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roleId);
                return writer;
            };
    
            /**
             * Encodes the specified SC_ROLE_ONLINE message, length delimited. Does not implicitly {@link S2C.SC_ROLE_ONLINE.verify|verify} messages.
             * @function encodeDelimited
             * @memberof S2C.SC_ROLE_ONLINE
             * @static
             * @param {S2C.ISC_ROLE_ONLINE} message SC_ROLE_ONLINE message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SC_ROLE_ONLINE.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SC_ROLE_ONLINE message from the specified reader or buffer.
             * @function decode
             * @memberof S2C.SC_ROLE_ONLINE
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {S2C.SC_ROLE_ONLINE} SC_ROLE_ONLINE
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SC_ROLE_ONLINE.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.SC_ROLE_ONLINE();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.roleId = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a SC_ROLE_ONLINE message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof S2C.SC_ROLE_ONLINE
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {S2C.SC_ROLE_ONLINE} SC_ROLE_ONLINE
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SC_ROLE_ONLINE.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SC_ROLE_ONLINE message.
             * @function verify
             * @memberof S2C.SC_ROLE_ONLINE
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SC_ROLE_ONLINE.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.roleId != null && message.hasOwnProperty("roleId"))
                    if (!$util.isInteger(message.roleId))
                        return "roleId: integer expected";
                return null;
            };
    
            /**
             * Creates a SC_ROLE_ONLINE message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof S2C.SC_ROLE_ONLINE
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {S2C.SC_ROLE_ONLINE} SC_ROLE_ONLINE
             */
            SC_ROLE_ONLINE.fromObject = function fromObject(object) {
                if (object instanceof $root.S2C.SC_ROLE_ONLINE)
                    return object;
                var message = new $root.S2C.SC_ROLE_ONLINE();
                if (object.roleId != null)
                    message.roleId = object.roleId | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a SC_ROLE_ONLINE message. Also converts values to other types if specified.
             * @function toObject
             * @memberof S2C.SC_ROLE_ONLINE
             * @static
             * @param {S2C.SC_ROLE_ONLINE} message SC_ROLE_ONLINE
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SC_ROLE_ONLINE.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.roleId = 0;
                if (message.roleId != null && message.hasOwnProperty("roleId"))
                    object.roleId = message.roleId;
                return object;
            };
    
            /**
             * Converts this SC_ROLE_ONLINE to JSON.
             * @function toJSON
             * @memberof S2C.SC_ROLE_ONLINE
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SC_ROLE_ONLINE.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return SC_ROLE_ONLINE;
        })();
    
        S2C.SC_ROLE_HEART_BEAT = (function() {
    
            /**
             * Properties of a SC_ROLE_HEART_BEAT.
             * @memberof S2C
             * @interface ISC_ROLE_HEART_BEAT
             */
    
            /**
             * Constructs a new SC_ROLE_HEART_BEAT.
             * @memberof S2C
             * @classdesc Represents a SC_ROLE_HEART_BEAT.
             * @implements ISC_ROLE_HEART_BEAT
             * @constructor
             * @param {S2C.ISC_ROLE_HEART_BEAT=} [properties] Properties to set
             */
            function SC_ROLE_HEART_BEAT(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new SC_ROLE_HEART_BEAT instance using the specified properties.
             * @function create
             * @memberof S2C.SC_ROLE_HEART_BEAT
             * @static
             * @param {S2C.ISC_ROLE_HEART_BEAT=} [properties] Properties to set
             * @returns {S2C.SC_ROLE_HEART_BEAT} SC_ROLE_HEART_BEAT instance
             */
            SC_ROLE_HEART_BEAT.create = function create(properties) {
                return new SC_ROLE_HEART_BEAT(properties);
            };
    
            /**
             * Encodes the specified SC_ROLE_HEART_BEAT message. Does not implicitly {@link S2C.SC_ROLE_HEART_BEAT.verify|verify} messages.
             * @function encode
             * @memberof S2C.SC_ROLE_HEART_BEAT
             * @static
             * @param {S2C.ISC_ROLE_HEART_BEAT} message SC_ROLE_HEART_BEAT message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SC_ROLE_HEART_BEAT.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified SC_ROLE_HEART_BEAT message, length delimited. Does not implicitly {@link S2C.SC_ROLE_HEART_BEAT.verify|verify} messages.
             * @function encodeDelimited
             * @memberof S2C.SC_ROLE_HEART_BEAT
             * @static
             * @param {S2C.ISC_ROLE_HEART_BEAT} message SC_ROLE_HEART_BEAT message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SC_ROLE_HEART_BEAT.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SC_ROLE_HEART_BEAT message from the specified reader or buffer.
             * @function decode
             * @memberof S2C.SC_ROLE_HEART_BEAT
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {S2C.SC_ROLE_HEART_BEAT} SC_ROLE_HEART_BEAT
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SC_ROLE_HEART_BEAT.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.SC_ROLE_HEART_BEAT();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a SC_ROLE_HEART_BEAT message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof S2C.SC_ROLE_HEART_BEAT
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {S2C.SC_ROLE_HEART_BEAT} SC_ROLE_HEART_BEAT
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SC_ROLE_HEART_BEAT.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SC_ROLE_HEART_BEAT message.
             * @function verify
             * @memberof S2C.SC_ROLE_HEART_BEAT
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SC_ROLE_HEART_BEAT.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a SC_ROLE_HEART_BEAT message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof S2C.SC_ROLE_HEART_BEAT
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {S2C.SC_ROLE_HEART_BEAT} SC_ROLE_HEART_BEAT
             */
            SC_ROLE_HEART_BEAT.fromObject = function fromObject(object) {
                if (object instanceof $root.S2C.SC_ROLE_HEART_BEAT)
                    return object;
                return new $root.S2C.SC_ROLE_HEART_BEAT();
            };
    
            /**
             * Creates a plain object from a SC_ROLE_HEART_BEAT message. Also converts values to other types if specified.
             * @function toObject
             * @memberof S2C.SC_ROLE_HEART_BEAT
             * @static
             * @param {S2C.SC_ROLE_HEART_BEAT} message SC_ROLE_HEART_BEAT
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SC_ROLE_HEART_BEAT.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this SC_ROLE_HEART_BEAT to JSON.
             * @function toJSON
             * @memberof S2C.SC_ROLE_HEART_BEAT
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SC_ROLE_HEART_BEAT.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return SC_ROLE_HEART_BEAT;
        })();
    
        S2C.SC_ROLE_UPDATE = (function() {
    
            /**
             * Properties of a SC_ROLE_UPDATE.
             * @memberof S2C
             * @interface ISC_ROLE_UPDATE
             * @property {string|null} [nickname] SC_ROLE_UPDATE nickname
             * @property {number|null} [level] SC_ROLE_UPDATE level
             * @property {number|Long|null} [exp] SC_ROLE_UPDATE exp
             * @property {number|null} [vipLevel] SC_ROLE_UPDATE vipLevel
             * @property {number|null} [vipExp] SC_ROLE_UPDATE vipExp
             * @property {number|null} [diamond] SC_ROLE_UPDATE diamond
             * @property {number|Long|null} [gold] SC_ROLE_UPDATE gold
             */
    
            /**
             * Constructs a new SC_ROLE_UPDATE.
             * @memberof S2C
             * @classdesc Represents a SC_ROLE_UPDATE.
             * @implements ISC_ROLE_UPDATE
             * @constructor
             * @param {S2C.ISC_ROLE_UPDATE=} [properties] Properties to set
             */
            function SC_ROLE_UPDATE(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SC_ROLE_UPDATE nickname.
             * @member {string} nickname
             * @memberof S2C.SC_ROLE_UPDATE
             * @instance
             */
            SC_ROLE_UPDATE.prototype.nickname = "";
    
            /**
             * SC_ROLE_UPDATE level.
             * @member {number} level
             * @memberof S2C.SC_ROLE_UPDATE
             * @instance
             */
            SC_ROLE_UPDATE.prototype.level = 0;
    
            /**
             * SC_ROLE_UPDATE exp.
             * @member {number|Long} exp
             * @memberof S2C.SC_ROLE_UPDATE
             * @instance
             */
            SC_ROLE_UPDATE.prototype.exp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * SC_ROLE_UPDATE vipLevel.
             * @member {number} vipLevel
             * @memberof S2C.SC_ROLE_UPDATE
             * @instance
             */
            SC_ROLE_UPDATE.prototype.vipLevel = 0;
    
            /**
             * SC_ROLE_UPDATE vipExp.
             * @member {number} vipExp
             * @memberof S2C.SC_ROLE_UPDATE
             * @instance
             */
            SC_ROLE_UPDATE.prototype.vipExp = 0;
    
            /**
             * SC_ROLE_UPDATE diamond.
             * @member {number} diamond
             * @memberof S2C.SC_ROLE_UPDATE
             * @instance
             */
            SC_ROLE_UPDATE.prototype.diamond = 0;
    
            /**
             * SC_ROLE_UPDATE gold.
             * @member {number|Long} gold
             * @memberof S2C.SC_ROLE_UPDATE
             * @instance
             */
            SC_ROLE_UPDATE.prototype.gold = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Creates a new SC_ROLE_UPDATE instance using the specified properties.
             * @function create
             * @memberof S2C.SC_ROLE_UPDATE
             * @static
             * @param {S2C.ISC_ROLE_UPDATE=} [properties] Properties to set
             * @returns {S2C.SC_ROLE_UPDATE} SC_ROLE_UPDATE instance
             */
            SC_ROLE_UPDATE.create = function create(properties) {
                return new SC_ROLE_UPDATE(properties);
            };
    
            /**
             * Encodes the specified SC_ROLE_UPDATE message. Does not implicitly {@link S2C.SC_ROLE_UPDATE.verify|verify} messages.
             * @function encode
             * @memberof S2C.SC_ROLE_UPDATE
             * @static
             * @param {S2C.ISC_ROLE_UPDATE} message SC_ROLE_UPDATE message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SC_ROLE_UPDATE.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.nickname);
                if (message.level != null && message.hasOwnProperty("level"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.level);
                if (message.exp != null && message.hasOwnProperty("exp"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.exp);
                if (message.vipLevel != null && message.hasOwnProperty("vipLevel"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.vipLevel);
                if (message.vipExp != null && message.hasOwnProperty("vipExp"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.vipExp);
                if (message.diamond != null && message.hasOwnProperty("diamond"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.diamond);
                if (message.gold != null && message.hasOwnProperty("gold"))
                    writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.gold);
                return writer;
            };
    
            /**
             * Encodes the specified SC_ROLE_UPDATE message, length delimited. Does not implicitly {@link S2C.SC_ROLE_UPDATE.verify|verify} messages.
             * @function encodeDelimited
             * @memberof S2C.SC_ROLE_UPDATE
             * @static
             * @param {S2C.ISC_ROLE_UPDATE} message SC_ROLE_UPDATE message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SC_ROLE_UPDATE.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SC_ROLE_UPDATE message from the specified reader or buffer.
             * @function decode
             * @memberof S2C.SC_ROLE_UPDATE
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {S2C.SC_ROLE_UPDATE} SC_ROLE_UPDATE
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SC_ROLE_UPDATE.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.SC_ROLE_UPDATE();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.nickname = reader.string();
                        break;
                    case 2:
                        message.level = reader.uint32();
                        break;
                    case 3:
                        message.exp = reader.uint64();
                        break;
                    case 4:
                        message.vipLevel = reader.uint32();
                        break;
                    case 5:
                        message.vipExp = reader.uint32();
                        break;
                    case 6:
                        message.diamond = reader.uint32();
                        break;
                    case 7:
                        message.gold = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a SC_ROLE_UPDATE message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof S2C.SC_ROLE_UPDATE
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {S2C.SC_ROLE_UPDATE} SC_ROLE_UPDATE
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SC_ROLE_UPDATE.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SC_ROLE_UPDATE message.
             * @function verify
             * @memberof S2C.SC_ROLE_UPDATE
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SC_ROLE_UPDATE.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    if (!$util.isString(message.nickname))
                        return "nickname: string expected";
                if (message.level != null && message.hasOwnProperty("level"))
                    if (!$util.isInteger(message.level))
                        return "level: integer expected";
                if (message.exp != null && message.hasOwnProperty("exp"))
                    if (!$util.isInteger(message.exp) && !(message.exp && $util.isInteger(message.exp.low) && $util.isInteger(message.exp.high)))
                        return "exp: integer|Long expected";
                if (message.vipLevel != null && message.hasOwnProperty("vipLevel"))
                    if (!$util.isInteger(message.vipLevel))
                        return "vipLevel: integer expected";
                if (message.vipExp != null && message.hasOwnProperty("vipExp"))
                    if (!$util.isInteger(message.vipExp))
                        return "vipExp: integer expected";
                if (message.diamond != null && message.hasOwnProperty("diamond"))
                    if (!$util.isInteger(message.diamond))
                        return "diamond: integer expected";
                if (message.gold != null && message.hasOwnProperty("gold"))
                    if (!$util.isInteger(message.gold) && !(message.gold && $util.isInteger(message.gold.low) && $util.isInteger(message.gold.high)))
                        return "gold: integer|Long expected";
                return null;
            };
    
            /**
             * Creates a SC_ROLE_UPDATE message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof S2C.SC_ROLE_UPDATE
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {S2C.SC_ROLE_UPDATE} SC_ROLE_UPDATE
             */
            SC_ROLE_UPDATE.fromObject = function fromObject(object) {
                if (object instanceof $root.S2C.SC_ROLE_UPDATE)
                    return object;
                var message = new $root.S2C.SC_ROLE_UPDATE();
                if (object.nickname != null)
                    message.nickname = String(object.nickname);
                if (object.level != null)
                    message.level = object.level >>> 0;
                if (object.exp != null)
                    if ($util.Long)
                        (message.exp = $util.Long.fromValue(object.exp)).unsigned = true;
                    else if (typeof object.exp === "string")
                        message.exp = parseInt(object.exp, 10);
                    else if (typeof object.exp === "number")
                        message.exp = object.exp;
                    else if (typeof object.exp === "object")
                        message.exp = new $util.LongBits(object.exp.low >>> 0, object.exp.high >>> 0).toNumber(true);
                if (object.vipLevel != null)
                    message.vipLevel = object.vipLevel >>> 0;
                if (object.vipExp != null)
                    message.vipExp = object.vipExp >>> 0;
                if (object.diamond != null)
                    message.diamond = object.diamond >>> 0;
                if (object.gold != null)
                    if ($util.Long)
                        (message.gold = $util.Long.fromValue(object.gold)).unsigned = true;
                    else if (typeof object.gold === "string")
                        message.gold = parseInt(object.gold, 10);
                    else if (typeof object.gold === "number")
                        message.gold = object.gold;
                    else if (typeof object.gold === "object")
                        message.gold = new $util.LongBits(object.gold.low >>> 0, object.gold.high >>> 0).toNumber(true);
                return message;
            };
    
            /**
             * Creates a plain object from a SC_ROLE_UPDATE message. Also converts values to other types if specified.
             * @function toObject
             * @memberof S2C.SC_ROLE_UPDATE
             * @static
             * @param {S2C.SC_ROLE_UPDATE} message SC_ROLE_UPDATE
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SC_ROLE_UPDATE.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.nickname = "";
                    object.level = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.exp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.exp = options.longs === String ? "0" : 0;
                    object.vipLevel = 0;
                    object.vipExp = 0;
                    object.diamond = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.gold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.gold = options.longs === String ? "0" : 0;
                }
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    object.nickname = message.nickname;
                if (message.level != null && message.hasOwnProperty("level"))
                    object.level = message.level;
                if (message.exp != null && message.hasOwnProperty("exp"))
                    if (typeof message.exp === "number")
                        object.exp = options.longs === String ? String(message.exp) : message.exp;
                    else
                        object.exp = options.longs === String ? $util.Long.prototype.toString.call(message.exp) : options.longs === Number ? new $util.LongBits(message.exp.low >>> 0, message.exp.high >>> 0).toNumber(true) : message.exp;
                if (message.vipLevel != null && message.hasOwnProperty("vipLevel"))
                    object.vipLevel = message.vipLevel;
                if (message.vipExp != null && message.hasOwnProperty("vipExp"))
                    object.vipExp = message.vipExp;
                if (message.diamond != null && message.hasOwnProperty("diamond"))
                    object.diamond = message.diamond;
                if (message.gold != null && message.hasOwnProperty("gold"))
                    if (typeof message.gold === "number")
                        object.gold = options.longs === String ? String(message.gold) : message.gold;
                    else
                        object.gold = options.longs === String ? $util.Long.prototype.toString.call(message.gold) : options.longs === Number ? new $util.LongBits(message.gold.low >>> 0, message.gold.high >>> 0).toNumber(true) : message.gold;
                return object;
            };
    
            /**
             * Converts this SC_ROLE_UPDATE to JSON.
             * @function toJSON
             * @memberof S2C.SC_ROLE_UPDATE
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SC_ROLE_UPDATE.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return SC_ROLE_UPDATE;
        })();
    
        S2C.LOGIN_SC_LOGIN = (function() {
    
            /**
             * Properties of a LOGIN_SC_LOGIN.
             * @memberof S2C
             * @interface ILOGIN_SC_LOGIN
             * @property {number|null} [serverId] LOGIN_SC_LOGIN serverId
             * @property {number|null} [gmAuth] LOGIN_SC_LOGIN gmAuth
             */
    
            /**
             * Constructs a new LOGIN_SC_LOGIN.
             * @memberof S2C
             * @classdesc Represents a LOGIN_SC_LOGIN.
             * @implements ILOGIN_SC_LOGIN
             * @constructor
             * @param {S2C.ILOGIN_SC_LOGIN=} [properties] Properties to set
             */
            function LOGIN_SC_LOGIN(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * LOGIN_SC_LOGIN serverId.
             * @member {number} serverId
             * @memberof S2C.LOGIN_SC_LOGIN
             * @instance
             */
            LOGIN_SC_LOGIN.prototype.serverId = 0;
    
            /**
             * LOGIN_SC_LOGIN gmAuth.
             * @member {number} gmAuth
             * @memberof S2C.LOGIN_SC_LOGIN
             * @instance
             */
            LOGIN_SC_LOGIN.prototype.gmAuth = 0;
    
            /**
             * Creates a new LOGIN_SC_LOGIN instance using the specified properties.
             * @function create
             * @memberof S2C.LOGIN_SC_LOGIN
             * @static
             * @param {S2C.ILOGIN_SC_LOGIN=} [properties] Properties to set
             * @returns {S2C.LOGIN_SC_LOGIN} LOGIN_SC_LOGIN instance
             */
            LOGIN_SC_LOGIN.create = function create(properties) {
                return new LOGIN_SC_LOGIN(properties);
            };
    
            /**
             * Encodes the specified LOGIN_SC_LOGIN message. Does not implicitly {@link S2C.LOGIN_SC_LOGIN.verify|verify} messages.
             * @function encode
             * @memberof S2C.LOGIN_SC_LOGIN
             * @static
             * @param {S2C.ILOGIN_SC_LOGIN} message LOGIN_SC_LOGIN message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LOGIN_SC_LOGIN.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.serverId != null && message.hasOwnProperty("serverId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.serverId);
                if (message.gmAuth != null && message.hasOwnProperty("gmAuth"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.gmAuth);
                return writer;
            };
    
            /**
             * Encodes the specified LOGIN_SC_LOGIN message, length delimited. Does not implicitly {@link S2C.LOGIN_SC_LOGIN.verify|verify} messages.
             * @function encodeDelimited
             * @memberof S2C.LOGIN_SC_LOGIN
             * @static
             * @param {S2C.ILOGIN_SC_LOGIN} message LOGIN_SC_LOGIN message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LOGIN_SC_LOGIN.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a LOGIN_SC_LOGIN message from the specified reader or buffer.
             * @function decode
             * @memberof S2C.LOGIN_SC_LOGIN
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {S2C.LOGIN_SC_LOGIN} LOGIN_SC_LOGIN
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LOGIN_SC_LOGIN.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.LOGIN_SC_LOGIN();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.serverId = reader.uint32();
                        break;
                    case 2:
                        message.gmAuth = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a LOGIN_SC_LOGIN message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof S2C.LOGIN_SC_LOGIN
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {S2C.LOGIN_SC_LOGIN} LOGIN_SC_LOGIN
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LOGIN_SC_LOGIN.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a LOGIN_SC_LOGIN message.
             * @function verify
             * @memberof S2C.LOGIN_SC_LOGIN
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LOGIN_SC_LOGIN.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.serverId != null && message.hasOwnProperty("serverId"))
                    if (!$util.isInteger(message.serverId))
                        return "serverId: integer expected";
                if (message.gmAuth != null && message.hasOwnProperty("gmAuth"))
                    if (!$util.isInteger(message.gmAuth))
                        return "gmAuth: integer expected";
                return null;
            };
    
            /**
             * Creates a LOGIN_SC_LOGIN message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof S2C.LOGIN_SC_LOGIN
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {S2C.LOGIN_SC_LOGIN} LOGIN_SC_LOGIN
             */
            LOGIN_SC_LOGIN.fromObject = function fromObject(object) {
                if (object instanceof $root.S2C.LOGIN_SC_LOGIN)
                    return object;
                var message = new $root.S2C.LOGIN_SC_LOGIN();
                if (object.serverId != null)
                    message.serverId = object.serverId >>> 0;
                if (object.gmAuth != null)
                    message.gmAuth = object.gmAuth >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a LOGIN_SC_LOGIN message. Also converts values to other types if specified.
             * @function toObject
             * @memberof S2C.LOGIN_SC_LOGIN
             * @static
             * @param {S2C.LOGIN_SC_LOGIN} message LOGIN_SC_LOGIN
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LOGIN_SC_LOGIN.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.serverId = 0;
                    object.gmAuth = 0;
                }
                if (message.serverId != null && message.hasOwnProperty("serverId"))
                    object.serverId = message.serverId;
                if (message.gmAuth != null && message.hasOwnProperty("gmAuth"))
                    object.gmAuth = message.gmAuth;
                return object;
            };
    
            /**
             * Converts this LOGIN_SC_LOGIN to JSON.
             * @function toJSON
             * @memberof S2C.LOGIN_SC_LOGIN
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LOGIN_SC_LOGIN.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return LOGIN_SC_LOGIN;
        })();
    
        S2C.LOGIN_SC_CHOOSE_SERVER = (function() {
    
            /**
             * Properties of a LOGIN_SC_CHOOSE_SERVER.
             * @memberof S2C
             * @interface ILOGIN_SC_CHOOSE_SERVER
             * @property {string|null} [ip] LOGIN_SC_CHOOSE_SERVER ip
             * @property {number|null} [port] LOGIN_SC_CHOOSE_SERVER port
             * @property {string|null} [version] LOGIN_SC_CHOOSE_SERVER version
             * @property {string|null} [resVersion] LOGIN_SC_CHOOSE_SERVER resVersion
             * @property {string|null} [resServerAddress] LOGIN_SC_CHOOSE_SERVER resServerAddress
             */
    
            /**
             * Constructs a new LOGIN_SC_CHOOSE_SERVER.
             * @memberof S2C
             * @classdesc Represents a LOGIN_SC_CHOOSE_SERVER.
             * @implements ILOGIN_SC_CHOOSE_SERVER
             * @constructor
             * @param {S2C.ILOGIN_SC_CHOOSE_SERVER=} [properties] Properties to set
             */
            function LOGIN_SC_CHOOSE_SERVER(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * LOGIN_SC_CHOOSE_SERVER ip.
             * @member {string} ip
             * @memberof S2C.LOGIN_SC_CHOOSE_SERVER
             * @instance
             */
            LOGIN_SC_CHOOSE_SERVER.prototype.ip = "";
    
            /**
             * LOGIN_SC_CHOOSE_SERVER port.
             * @member {number} port
             * @memberof S2C.LOGIN_SC_CHOOSE_SERVER
             * @instance
             */
            LOGIN_SC_CHOOSE_SERVER.prototype.port = 0;
    
            /**
             * LOGIN_SC_CHOOSE_SERVER version.
             * @member {string} version
             * @memberof S2C.LOGIN_SC_CHOOSE_SERVER
             * @instance
             */
            LOGIN_SC_CHOOSE_SERVER.prototype.version = "";
    
            /**
             * LOGIN_SC_CHOOSE_SERVER resVersion.
             * @member {string} resVersion
             * @memberof S2C.LOGIN_SC_CHOOSE_SERVER
             * @instance
             */
            LOGIN_SC_CHOOSE_SERVER.prototype.resVersion = "";
    
            /**
             * LOGIN_SC_CHOOSE_SERVER resServerAddress.
             * @member {string} resServerAddress
             * @memberof S2C.LOGIN_SC_CHOOSE_SERVER
             * @instance
             */
            LOGIN_SC_CHOOSE_SERVER.prototype.resServerAddress = "";
    
            /**
             * Creates a new LOGIN_SC_CHOOSE_SERVER instance using the specified properties.
             * @function create
             * @memberof S2C.LOGIN_SC_CHOOSE_SERVER
             * @static
             * @param {S2C.ILOGIN_SC_CHOOSE_SERVER=} [properties] Properties to set
             * @returns {S2C.LOGIN_SC_CHOOSE_SERVER} LOGIN_SC_CHOOSE_SERVER instance
             */
            LOGIN_SC_CHOOSE_SERVER.create = function create(properties) {
                return new LOGIN_SC_CHOOSE_SERVER(properties);
            };
    
            /**
             * Encodes the specified LOGIN_SC_CHOOSE_SERVER message. Does not implicitly {@link S2C.LOGIN_SC_CHOOSE_SERVER.verify|verify} messages.
             * @function encode
             * @memberof S2C.LOGIN_SC_CHOOSE_SERVER
             * @static
             * @param {S2C.ILOGIN_SC_CHOOSE_SERVER} message LOGIN_SC_CHOOSE_SERVER message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LOGIN_SC_CHOOSE_SERVER.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ip != null && message.hasOwnProperty("ip"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.ip);
                if (message.port != null && message.hasOwnProperty("port"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.port);
                if (message.version != null && message.hasOwnProperty("version"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.version);
                if (message.resVersion != null && message.hasOwnProperty("resVersion"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.resVersion);
                if (message.resServerAddress != null && message.hasOwnProperty("resServerAddress"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.resServerAddress);
                return writer;
            };
    
            /**
             * Encodes the specified LOGIN_SC_CHOOSE_SERVER message, length delimited. Does not implicitly {@link S2C.LOGIN_SC_CHOOSE_SERVER.verify|verify} messages.
             * @function encodeDelimited
             * @memberof S2C.LOGIN_SC_CHOOSE_SERVER
             * @static
             * @param {S2C.ILOGIN_SC_CHOOSE_SERVER} message LOGIN_SC_CHOOSE_SERVER message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LOGIN_SC_CHOOSE_SERVER.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a LOGIN_SC_CHOOSE_SERVER message from the specified reader or buffer.
             * @function decode
             * @memberof S2C.LOGIN_SC_CHOOSE_SERVER
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {S2C.LOGIN_SC_CHOOSE_SERVER} LOGIN_SC_CHOOSE_SERVER
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LOGIN_SC_CHOOSE_SERVER.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.LOGIN_SC_CHOOSE_SERVER();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.ip = reader.string();
                        break;
                    case 2:
                        message.port = reader.uint32();
                        break;
                    case 3:
                        message.version = reader.string();
                        break;
                    case 4:
                        message.resVersion = reader.string();
                        break;
                    case 5:
                        message.resServerAddress = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a LOGIN_SC_CHOOSE_SERVER message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof S2C.LOGIN_SC_CHOOSE_SERVER
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {S2C.LOGIN_SC_CHOOSE_SERVER} LOGIN_SC_CHOOSE_SERVER
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LOGIN_SC_CHOOSE_SERVER.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a LOGIN_SC_CHOOSE_SERVER message.
             * @function verify
             * @memberof S2C.LOGIN_SC_CHOOSE_SERVER
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LOGIN_SC_CHOOSE_SERVER.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.ip != null && message.hasOwnProperty("ip"))
                    if (!$util.isString(message.ip))
                        return "ip: string expected";
                if (message.port != null && message.hasOwnProperty("port"))
                    if (!$util.isInteger(message.port))
                        return "port: integer expected";
                if (message.version != null && message.hasOwnProperty("version"))
                    if (!$util.isString(message.version))
                        return "version: string expected";
                if (message.resVersion != null && message.hasOwnProperty("resVersion"))
                    if (!$util.isString(message.resVersion))
                        return "resVersion: string expected";
                if (message.resServerAddress != null && message.hasOwnProperty("resServerAddress"))
                    if (!$util.isString(message.resServerAddress))
                        return "resServerAddress: string expected";
                return null;
            };
    
            /**
             * Creates a LOGIN_SC_CHOOSE_SERVER message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof S2C.LOGIN_SC_CHOOSE_SERVER
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {S2C.LOGIN_SC_CHOOSE_SERVER} LOGIN_SC_CHOOSE_SERVER
             */
            LOGIN_SC_CHOOSE_SERVER.fromObject = function fromObject(object) {
                if (object instanceof $root.S2C.LOGIN_SC_CHOOSE_SERVER)
                    return object;
                var message = new $root.S2C.LOGIN_SC_CHOOSE_SERVER();
                if (object.ip != null)
                    message.ip = String(object.ip);
                if (object.port != null)
                    message.port = object.port >>> 0;
                if (object.version != null)
                    message.version = String(object.version);
                if (object.resVersion != null)
                    message.resVersion = String(object.resVersion);
                if (object.resServerAddress != null)
                    message.resServerAddress = String(object.resServerAddress);
                return message;
            };
    
            /**
             * Creates a plain object from a LOGIN_SC_CHOOSE_SERVER message. Also converts values to other types if specified.
             * @function toObject
             * @memberof S2C.LOGIN_SC_CHOOSE_SERVER
             * @static
             * @param {S2C.LOGIN_SC_CHOOSE_SERVER} message LOGIN_SC_CHOOSE_SERVER
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LOGIN_SC_CHOOSE_SERVER.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.ip = "";
                    object.port = 0;
                    object.version = "";
                    object.resVersion = "";
                    object.resServerAddress = "";
                }
                if (message.ip != null && message.hasOwnProperty("ip"))
                    object.ip = message.ip;
                if (message.port != null && message.hasOwnProperty("port"))
                    object.port = message.port;
                if (message.version != null && message.hasOwnProperty("version"))
                    object.version = message.version;
                if (message.resVersion != null && message.hasOwnProperty("resVersion"))
                    object.resVersion = message.resVersion;
                if (message.resServerAddress != null && message.hasOwnProperty("resServerAddress"))
                    object.resServerAddress = message.resServerAddress;
                return object;
            };
    
            /**
             * Converts this LOGIN_SC_CHOOSE_SERVER to JSON.
             * @function toJSON
             * @memberof S2C.LOGIN_SC_CHOOSE_SERVER
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LOGIN_SC_CHOOSE_SERVER.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return LOGIN_SC_CHOOSE_SERVER;
        })();
    
        S2C.LOGIN_SC_GET_SERVER_LIST = (function() {
    
            /**
             * Properties of a LOGIN_SC_GET_SERVER_LIST.
             * @memberof S2C
             * @interface ILOGIN_SC_GET_SERVER_LIST
             * @property {Array.<S2C.LOGIN_SC_GET_SERVER_LIST.IServer>|null} [servers] LOGIN_SC_GET_SERVER_LIST servers
             */
    
            /**
             * Constructs a new LOGIN_SC_GET_SERVER_LIST.
             * @memberof S2C
             * @classdesc Represents a LOGIN_SC_GET_SERVER_LIST.
             * @implements ILOGIN_SC_GET_SERVER_LIST
             * @constructor
             * @param {S2C.ILOGIN_SC_GET_SERVER_LIST=} [properties] Properties to set
             */
            function LOGIN_SC_GET_SERVER_LIST(properties) {
                this.servers = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * LOGIN_SC_GET_SERVER_LIST servers.
             * @member {Array.<S2C.LOGIN_SC_GET_SERVER_LIST.IServer>} servers
             * @memberof S2C.LOGIN_SC_GET_SERVER_LIST
             * @instance
             */
            LOGIN_SC_GET_SERVER_LIST.prototype.servers = $util.emptyArray;
    
            /**
             * Creates a new LOGIN_SC_GET_SERVER_LIST instance using the specified properties.
             * @function create
             * @memberof S2C.LOGIN_SC_GET_SERVER_LIST
             * @static
             * @param {S2C.ILOGIN_SC_GET_SERVER_LIST=} [properties] Properties to set
             * @returns {S2C.LOGIN_SC_GET_SERVER_LIST} LOGIN_SC_GET_SERVER_LIST instance
             */
            LOGIN_SC_GET_SERVER_LIST.create = function create(properties) {
                return new LOGIN_SC_GET_SERVER_LIST(properties);
            };
    
            /**
             * Encodes the specified LOGIN_SC_GET_SERVER_LIST message. Does not implicitly {@link S2C.LOGIN_SC_GET_SERVER_LIST.verify|verify} messages.
             * @function encode
             * @memberof S2C.LOGIN_SC_GET_SERVER_LIST
             * @static
             * @param {S2C.ILOGIN_SC_GET_SERVER_LIST} message LOGIN_SC_GET_SERVER_LIST message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LOGIN_SC_GET_SERVER_LIST.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.servers != null && message.servers.length)
                    for (var i = 0; i < message.servers.length; ++i)
                        $root.S2C.LOGIN_SC_GET_SERVER_LIST.Server.encode(message.servers[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified LOGIN_SC_GET_SERVER_LIST message, length delimited. Does not implicitly {@link S2C.LOGIN_SC_GET_SERVER_LIST.verify|verify} messages.
             * @function encodeDelimited
             * @memberof S2C.LOGIN_SC_GET_SERVER_LIST
             * @static
             * @param {S2C.ILOGIN_SC_GET_SERVER_LIST} message LOGIN_SC_GET_SERVER_LIST message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LOGIN_SC_GET_SERVER_LIST.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a LOGIN_SC_GET_SERVER_LIST message from the specified reader or buffer.
             * @function decode
             * @memberof S2C.LOGIN_SC_GET_SERVER_LIST
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {S2C.LOGIN_SC_GET_SERVER_LIST} LOGIN_SC_GET_SERVER_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LOGIN_SC_GET_SERVER_LIST.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.LOGIN_SC_GET_SERVER_LIST();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.servers && message.servers.length))
                            message.servers = [];
                        message.servers.push($root.S2C.LOGIN_SC_GET_SERVER_LIST.Server.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a LOGIN_SC_GET_SERVER_LIST message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof S2C.LOGIN_SC_GET_SERVER_LIST
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {S2C.LOGIN_SC_GET_SERVER_LIST} LOGIN_SC_GET_SERVER_LIST
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LOGIN_SC_GET_SERVER_LIST.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a LOGIN_SC_GET_SERVER_LIST message.
             * @function verify
             * @memberof S2C.LOGIN_SC_GET_SERVER_LIST
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LOGIN_SC_GET_SERVER_LIST.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.servers != null && message.hasOwnProperty("servers")) {
                    if (!Array.isArray(message.servers))
                        return "servers: array expected";
                    for (var i = 0; i < message.servers.length; ++i) {
                        var error = $root.S2C.LOGIN_SC_GET_SERVER_LIST.Server.verify(message.servers[i]);
                        if (error)
                            return "servers." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a LOGIN_SC_GET_SERVER_LIST message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof S2C.LOGIN_SC_GET_SERVER_LIST
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {S2C.LOGIN_SC_GET_SERVER_LIST} LOGIN_SC_GET_SERVER_LIST
             */
            LOGIN_SC_GET_SERVER_LIST.fromObject = function fromObject(object) {
                if (object instanceof $root.S2C.LOGIN_SC_GET_SERVER_LIST)
                    return object;
                var message = new $root.S2C.LOGIN_SC_GET_SERVER_LIST();
                if (object.servers) {
                    if (!Array.isArray(object.servers))
                        throw TypeError(".S2C.LOGIN_SC_GET_SERVER_LIST.servers: array expected");
                    message.servers = [];
                    for (var i = 0; i < object.servers.length; ++i) {
                        if (typeof object.servers[i] !== "object")
                            throw TypeError(".S2C.LOGIN_SC_GET_SERVER_LIST.servers: object expected");
                        message.servers[i] = $root.S2C.LOGIN_SC_GET_SERVER_LIST.Server.fromObject(object.servers[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a LOGIN_SC_GET_SERVER_LIST message. Also converts values to other types if specified.
             * @function toObject
             * @memberof S2C.LOGIN_SC_GET_SERVER_LIST
             * @static
             * @param {S2C.LOGIN_SC_GET_SERVER_LIST} message LOGIN_SC_GET_SERVER_LIST
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LOGIN_SC_GET_SERVER_LIST.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.servers = [];
                if (message.servers && message.servers.length) {
                    object.servers = [];
                    for (var j = 0; j < message.servers.length; ++j)
                        object.servers[j] = $root.S2C.LOGIN_SC_GET_SERVER_LIST.Server.toObject(message.servers[j], options);
                }
                return object;
            };
    
            /**
             * Converts this LOGIN_SC_GET_SERVER_LIST to JSON.
             * @function toJSON
             * @memberof S2C.LOGIN_SC_GET_SERVER_LIST
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LOGIN_SC_GET_SERVER_LIST.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            LOGIN_SC_GET_SERVER_LIST.Server = (function() {
    
                /**
                 * Properties of a Server.
                 * @memberof S2C.LOGIN_SC_GET_SERVER_LIST
                 * @interface IServer
                 * @property {number|null} [serverId] Server serverId
                 * @property {string|null} [name] Server name
                 * @property {number|null} [status] Server status
                 */
    
                /**
                 * Constructs a new Server.
                 * @memberof S2C.LOGIN_SC_GET_SERVER_LIST
                 * @classdesc Represents a Server.
                 * @implements IServer
                 * @constructor
                 * @param {S2C.LOGIN_SC_GET_SERVER_LIST.IServer=} [properties] Properties to set
                 */
                function Server(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Server serverId.
                 * @member {number} serverId
                 * @memberof S2C.LOGIN_SC_GET_SERVER_LIST.Server
                 * @instance
                 */
                Server.prototype.serverId = 0;
    
                /**
                 * Server name.
                 * @member {string} name
                 * @memberof S2C.LOGIN_SC_GET_SERVER_LIST.Server
                 * @instance
                 */
                Server.prototype.name = "";
    
                /**
                 * Server status.
                 * @member {number} status
                 * @memberof S2C.LOGIN_SC_GET_SERVER_LIST.Server
                 * @instance
                 */
                Server.prototype.status = 0;
    
                /**
                 * Creates a new Server instance using the specified properties.
                 * @function create
                 * @memberof S2C.LOGIN_SC_GET_SERVER_LIST.Server
                 * @static
                 * @param {S2C.LOGIN_SC_GET_SERVER_LIST.IServer=} [properties] Properties to set
                 * @returns {S2C.LOGIN_SC_GET_SERVER_LIST.Server} Server instance
                 */
                Server.create = function create(properties) {
                    return new Server(properties);
                };
    
                /**
                 * Encodes the specified Server message. Does not implicitly {@link S2C.LOGIN_SC_GET_SERVER_LIST.Server.verify|verify} messages.
                 * @function encode
                 * @memberof S2C.LOGIN_SC_GET_SERVER_LIST.Server
                 * @static
                 * @param {S2C.LOGIN_SC_GET_SERVER_LIST.IServer} message Server message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Server.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.serverId != null && message.hasOwnProperty("serverId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.serverId);
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                    if (message.status != null && message.hasOwnProperty("status"))
                        writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.status);
                    return writer;
                };
    
                /**
                 * Encodes the specified Server message, length delimited. Does not implicitly {@link S2C.LOGIN_SC_GET_SERVER_LIST.Server.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof S2C.LOGIN_SC_GET_SERVER_LIST.Server
                 * @static
                 * @param {S2C.LOGIN_SC_GET_SERVER_LIST.IServer} message Server message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Server.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Server message from the specified reader or buffer.
                 * @function decode
                 * @memberof S2C.LOGIN_SC_GET_SERVER_LIST.Server
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {S2C.LOGIN_SC_GET_SERVER_LIST.Server} Server
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Server.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.LOGIN_SC_GET_SERVER_LIST.Server();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.serverId = reader.uint32();
                            break;
                        case 2:
                            message.name = reader.string();
                            break;
                        case 3:
                            message.status = reader.uint32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Server message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof S2C.LOGIN_SC_GET_SERVER_LIST.Server
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {S2C.LOGIN_SC_GET_SERVER_LIST.Server} Server
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Server.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Server message.
                 * @function verify
                 * @memberof S2C.LOGIN_SC_GET_SERVER_LIST.Server
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Server.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.serverId != null && message.hasOwnProperty("serverId"))
                        if (!$util.isInteger(message.serverId))
                            return "serverId: integer expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.status != null && message.hasOwnProperty("status"))
                        if (!$util.isInteger(message.status))
                            return "status: integer expected";
                    return null;
                };
    
                /**
                 * Creates a Server message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof S2C.LOGIN_SC_GET_SERVER_LIST.Server
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {S2C.LOGIN_SC_GET_SERVER_LIST.Server} Server
                 */
                Server.fromObject = function fromObject(object) {
                    if (object instanceof $root.S2C.LOGIN_SC_GET_SERVER_LIST.Server)
                        return object;
                    var message = new $root.S2C.LOGIN_SC_GET_SERVER_LIST.Server();
                    if (object.serverId != null)
                        message.serverId = object.serverId >>> 0;
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.status != null)
                        message.status = object.status >>> 0;
                    return message;
                };
    
                /**
                 * Creates a plain object from a Server message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof S2C.LOGIN_SC_GET_SERVER_LIST.Server
                 * @static
                 * @param {S2C.LOGIN_SC_GET_SERVER_LIST.Server} message Server
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Server.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.serverId = 0;
                        object.name = "";
                        object.status = 0;
                    }
                    if (message.serverId != null && message.hasOwnProperty("serverId"))
                        object.serverId = message.serverId;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = message.status;
                    return object;
                };
    
                /**
                 * Converts this Server to JSON.
                 * @function toJSON
                 * @memberof S2C.LOGIN_SC_GET_SERVER_LIST.Server
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Server.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Server;
            })();
    
            return LOGIN_SC_GET_SERVER_LIST;
        })();
    
        S2C.LOGIN_SC_GET_INFO = (function() {
    
            /**
             * Properties of a LOGIN_SC_GET_INFO.
             * @memberof S2C
             * @interface ILOGIN_SC_GET_INFO
             * @property {string|null} [notice] LOGIN_SC_GET_INFO notice
             * @property {string|null} [version] LOGIN_SC_GET_INFO version
             * @property {string|null} [updateAddress] LOGIN_SC_GET_INFO updateAddress
             */
    
            /**
             * Constructs a new LOGIN_SC_GET_INFO.
             * @memberof S2C
             * @classdesc Represents a LOGIN_SC_GET_INFO.
             * @implements ILOGIN_SC_GET_INFO
             * @constructor
             * @param {S2C.ILOGIN_SC_GET_INFO=} [properties] Properties to set
             */
            function LOGIN_SC_GET_INFO(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * LOGIN_SC_GET_INFO notice.
             * @member {string} notice
             * @memberof S2C.LOGIN_SC_GET_INFO
             * @instance
             */
            LOGIN_SC_GET_INFO.prototype.notice = "";
    
            /**
             * LOGIN_SC_GET_INFO version.
             * @member {string} version
             * @memberof S2C.LOGIN_SC_GET_INFO
             * @instance
             */
            LOGIN_SC_GET_INFO.prototype.version = "";
    
            /**
             * LOGIN_SC_GET_INFO updateAddress.
             * @member {string} updateAddress
             * @memberof S2C.LOGIN_SC_GET_INFO
             * @instance
             */
            LOGIN_SC_GET_INFO.prototype.updateAddress = "";
    
            /**
             * Creates a new LOGIN_SC_GET_INFO instance using the specified properties.
             * @function create
             * @memberof S2C.LOGIN_SC_GET_INFO
             * @static
             * @param {S2C.ILOGIN_SC_GET_INFO=} [properties] Properties to set
             * @returns {S2C.LOGIN_SC_GET_INFO} LOGIN_SC_GET_INFO instance
             */
            LOGIN_SC_GET_INFO.create = function create(properties) {
                return new LOGIN_SC_GET_INFO(properties);
            };
    
            /**
             * Encodes the specified LOGIN_SC_GET_INFO message. Does not implicitly {@link S2C.LOGIN_SC_GET_INFO.verify|verify} messages.
             * @function encode
             * @memberof S2C.LOGIN_SC_GET_INFO
             * @static
             * @param {S2C.ILOGIN_SC_GET_INFO} message LOGIN_SC_GET_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LOGIN_SC_GET_INFO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.notice != null && message.hasOwnProperty("notice"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.notice);
                if (message.version != null && message.hasOwnProperty("version"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.version);
                if (message.updateAddress != null && message.hasOwnProperty("updateAddress"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.updateAddress);
                return writer;
            };
    
            /**
             * Encodes the specified LOGIN_SC_GET_INFO message, length delimited. Does not implicitly {@link S2C.LOGIN_SC_GET_INFO.verify|verify} messages.
             * @function encodeDelimited
             * @memberof S2C.LOGIN_SC_GET_INFO
             * @static
             * @param {S2C.ILOGIN_SC_GET_INFO} message LOGIN_SC_GET_INFO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LOGIN_SC_GET_INFO.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a LOGIN_SC_GET_INFO message from the specified reader or buffer.
             * @function decode
             * @memberof S2C.LOGIN_SC_GET_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {S2C.LOGIN_SC_GET_INFO} LOGIN_SC_GET_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LOGIN_SC_GET_INFO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.LOGIN_SC_GET_INFO();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.notice = reader.string();
                        break;
                    case 2:
                        message.version = reader.string();
                        break;
                    case 3:
                        message.updateAddress = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a LOGIN_SC_GET_INFO message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof S2C.LOGIN_SC_GET_INFO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {S2C.LOGIN_SC_GET_INFO} LOGIN_SC_GET_INFO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LOGIN_SC_GET_INFO.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a LOGIN_SC_GET_INFO message.
             * @function verify
             * @memberof S2C.LOGIN_SC_GET_INFO
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LOGIN_SC_GET_INFO.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.notice != null && message.hasOwnProperty("notice"))
                    if (!$util.isString(message.notice))
                        return "notice: string expected";
                if (message.version != null && message.hasOwnProperty("version"))
                    if (!$util.isString(message.version))
                        return "version: string expected";
                if (message.updateAddress != null && message.hasOwnProperty("updateAddress"))
                    if (!$util.isString(message.updateAddress))
                        return "updateAddress: string expected";
                return null;
            };
    
            /**
             * Creates a LOGIN_SC_GET_INFO message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof S2C.LOGIN_SC_GET_INFO
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {S2C.LOGIN_SC_GET_INFO} LOGIN_SC_GET_INFO
             */
            LOGIN_SC_GET_INFO.fromObject = function fromObject(object) {
                if (object instanceof $root.S2C.LOGIN_SC_GET_INFO)
                    return object;
                var message = new $root.S2C.LOGIN_SC_GET_INFO();
                if (object.notice != null)
                    message.notice = String(object.notice);
                if (object.version != null)
                    message.version = String(object.version);
                if (object.updateAddress != null)
                    message.updateAddress = String(object.updateAddress);
                return message;
            };
    
            /**
             * Creates a plain object from a LOGIN_SC_GET_INFO message. Also converts values to other types if specified.
             * @function toObject
             * @memberof S2C.LOGIN_SC_GET_INFO
             * @static
             * @param {S2C.LOGIN_SC_GET_INFO} message LOGIN_SC_GET_INFO
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LOGIN_SC_GET_INFO.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.notice = "";
                    object.version = "";
                    object.updateAddress = "";
                }
                if (message.notice != null && message.hasOwnProperty("notice"))
                    object.notice = message.notice;
                if (message.version != null && message.hasOwnProperty("version"))
                    object.version = message.version;
                if (message.updateAddress != null && message.hasOwnProperty("updateAddress"))
                    object.updateAddress = message.updateAddress;
                return object;
            };
    
            /**
             * Converts this LOGIN_SC_GET_INFO to JSON.
             * @function toJSON
             * @memberof S2C.LOGIN_SC_GET_INFO
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LOGIN_SC_GET_INFO.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return LOGIN_SC_GET_INFO;
        })();
    
        return S2C;
    })();

    return $root;
})(protobuf);
