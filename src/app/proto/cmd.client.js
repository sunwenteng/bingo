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
             * @property {C2S.ICS_RANK_GET_RANK|null} [CS_RANK_GET_RANK] Message CS_RANK_GET_RANK
             * @property {C2S.ICS_GUILD_CREATE|null} [CS_GUILD_CREATE] Message CS_GUILD_CREATE
             * @property {C2S.ICS_GUILD_DISMISS|null} [CS_GUILD_DISMISS] Message CS_GUILD_DISMISS
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
    
            /**
             * Message CS_RANK_GET_RANK.
             * @member {C2S.ICS_RANK_GET_RANK|null|undefined} CS_RANK_GET_RANK
             * @memberof C2S.Message
             * @instance
             */
            Message.prototype.CS_RANK_GET_RANK = null;
    
            /**
             * Message CS_GUILD_CREATE.
             * @member {C2S.ICS_GUILD_CREATE|null|undefined} CS_GUILD_CREATE
             * @memberof C2S.Message
             * @instance
             */
            Message.prototype.CS_GUILD_CREATE = null;
    
            /**
             * Message CS_GUILD_DISMISS.
             * @member {C2S.ICS_GUILD_DISMISS|null|undefined} CS_GUILD_DISMISS
             * @memberof C2S.Message
             * @instance
             */
            Message.prototype.CS_GUILD_DISMISS = null;
    
            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;
    
            /**
             * Message kind.
             * @member {"CS_TEST_ECHO"|"CS_ROLE_ONLINE"|"CS_ROLE_HEART_BEAT"|"CS_ABC_DEF"|"LOGIN_CS_LOGIN"|"LOGIN_CS_CHOOSE_SERVER"|"LOGIN_CS_GET_SERVER_LIST"|"LOGIN_CS_GET_INFO"|"CS_RANK_GET_RANK"|"CS_GUILD_CREATE"|"CS_GUILD_DISMISS"|undefined} kind
             * @memberof C2S.Message
             * @instance
             */
            Object.defineProperty(Message.prototype, "kind", {
                get: $util.oneOfGetter($oneOfFields = ["CS_TEST_ECHO", "CS_ROLE_ONLINE", "CS_ROLE_HEART_BEAT", "CS_ABC_DEF", "LOGIN_CS_LOGIN", "LOGIN_CS_CHOOSE_SERVER", "LOGIN_CS_GET_SERVER_LIST", "LOGIN_CS_GET_INFO", "CS_RANK_GET_RANK", "CS_GUILD_CREATE", "CS_GUILD_DISMISS"]),
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
                if (message.CS_RANK_GET_RANK != null && message.hasOwnProperty("CS_RANK_GET_RANK"))
                    $root.C2S.CS_RANK_GET_RANK.encode(message.CS_RANK_GET_RANK, writer.uint32(/* id 1801, wireType 2 =*/14410).fork()).ldelim();
                if (message.CS_GUILD_CREATE != null && message.hasOwnProperty("CS_GUILD_CREATE"))
                    $root.C2S.CS_GUILD_CREATE.encode(message.CS_GUILD_CREATE, writer.uint32(/* id 1901, wireType 2 =*/15210).fork()).ldelim();
                if (message.CS_GUILD_DISMISS != null && message.hasOwnProperty("CS_GUILD_DISMISS"))
                    $root.C2S.CS_GUILD_DISMISS.encode(message.CS_GUILD_DISMISS, writer.uint32(/* id 1902, wireType 2 =*/15218).fork()).ldelim();
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
                    case 1801:
                        message.CS_RANK_GET_RANK = $root.C2S.CS_RANK_GET_RANK.decode(reader, reader.uint32());
                        break;
                    case 1901:
                        message.CS_GUILD_CREATE = $root.C2S.CS_GUILD_CREATE.decode(reader, reader.uint32());
                        break;
                    case 1902:
                        message.CS_GUILD_DISMISS = $root.C2S.CS_GUILD_DISMISS.decode(reader, reader.uint32());
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
                if (message.CS_RANK_GET_RANK != null && message.hasOwnProperty("CS_RANK_GET_RANK")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        var error = $root.C2S.CS_RANK_GET_RANK.verify(message.CS_RANK_GET_RANK);
                        if (error)
                            return "CS_RANK_GET_RANK." + error;
                    }
                }
                if (message.CS_GUILD_CREATE != null && message.hasOwnProperty("CS_GUILD_CREATE")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        var error = $root.C2S.CS_GUILD_CREATE.verify(message.CS_GUILD_CREATE);
                        if (error)
                            return "CS_GUILD_CREATE." + error;
                    }
                }
                if (message.CS_GUILD_DISMISS != null && message.hasOwnProperty("CS_GUILD_DISMISS")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        var error = $root.C2S.CS_GUILD_DISMISS.verify(message.CS_GUILD_DISMISS);
                        if (error)
                            return "CS_GUILD_DISMISS." + error;
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
                if (object.CS_RANK_GET_RANK != null) {
                    if (typeof object.CS_RANK_GET_RANK !== "object")
                        throw TypeError(".C2S.Message.CS_RANK_GET_RANK: object expected");
                    message.CS_RANK_GET_RANK = $root.C2S.CS_RANK_GET_RANK.fromObject(object.CS_RANK_GET_RANK);
                }
                if (object.CS_GUILD_CREATE != null) {
                    if (typeof object.CS_GUILD_CREATE !== "object")
                        throw TypeError(".C2S.Message.CS_GUILD_CREATE: object expected");
                    message.CS_GUILD_CREATE = $root.C2S.CS_GUILD_CREATE.fromObject(object.CS_GUILD_CREATE);
                }
                if (object.CS_GUILD_DISMISS != null) {
                    if (typeof object.CS_GUILD_DISMISS !== "object")
                        throw TypeError(".C2S.Message.CS_GUILD_DISMISS: object expected");
                    message.CS_GUILD_DISMISS = $root.C2S.CS_GUILD_DISMISS.fromObject(object.CS_GUILD_DISMISS);
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
                if (message.CS_RANK_GET_RANK != null && message.hasOwnProperty("CS_RANK_GET_RANK")) {
                    object.CS_RANK_GET_RANK = $root.C2S.CS_RANK_GET_RANK.toObject(message.CS_RANK_GET_RANK, options);
                    if (options.oneofs)
                        object.kind = "CS_RANK_GET_RANK";
                }
                if (message.CS_GUILD_CREATE != null && message.hasOwnProperty("CS_GUILD_CREATE")) {
                    object.CS_GUILD_CREATE = $root.C2S.CS_GUILD_CREATE.toObject(message.CS_GUILD_CREATE, options);
                    if (options.oneofs)
                        object.kind = "CS_GUILD_CREATE";
                }
                if (message.CS_GUILD_DISMISS != null && message.hasOwnProperty("CS_GUILD_DISMISS")) {
                    object.CS_GUILD_DISMISS = $root.C2S.CS_GUILD_DISMISS.toObject(message.CS_GUILD_DISMISS, options);
                    if (options.oneofs)
                        object.kind = "CS_GUILD_DISMISS";
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
             * @property {string|null} [msg] CS_ROLE_HEART_BEAT msg
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
             * CS_ROLE_HEART_BEAT msg.
             * @member {string} msg
             * @memberof C2S.CS_ROLE_HEART_BEAT
             * @instance
             */
            CS_ROLE_HEART_BEAT.prototype.msg = "";
    
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
                if (message.msg != null && message.hasOwnProperty("msg"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.msg);
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
                    case 1:
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
                if (message.msg != null && message.hasOwnProperty("msg"))
                    if (!$util.isString(message.msg))
                        return "msg: string expected";
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
                var message = new $root.C2S.CS_ROLE_HEART_BEAT();
                if (object.msg != null)
                    message.msg = String(object.msg);
                return message;
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
            CS_ROLE_HEART_BEAT.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.msg = "";
                if (message.msg != null && message.hasOwnProperty("msg"))
                    object.msg = message.msg;
                return object;
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
             * @property {string|null} [token] CS_ROLE_ONLINE token
             * @property {number|null} [uid] CS_ROLE_ONLINE uid
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
             * CS_ROLE_ONLINE token.
             * @member {string} token
             * @memberof C2S.CS_ROLE_ONLINE
             * @instance
             */
            CS_ROLE_ONLINE.prototype.token = "";
    
            /**
             * CS_ROLE_ONLINE uid.
             * @member {number} uid
             * @memberof C2S.CS_ROLE_ONLINE
             * @instance
             */
            CS_ROLE_ONLINE.prototype.uid = 0;
    
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
                if (message.token != null && message.hasOwnProperty("token"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
                if (message.uid != null && message.hasOwnProperty("uid"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.uid);
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
                        message.token = reader.string();
                        break;
                    case 2:
                        message.uid = reader.uint32();
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
                if (message.token != null && message.hasOwnProperty("token"))
                    if (!$util.isString(message.token))
                        return "token: string expected";
                if (message.uid != null && message.hasOwnProperty("uid"))
                    if (!$util.isInteger(message.uid))
                        return "uid: integer expected";
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
                if (object.token != null)
                    message.token = String(object.token);
                if (object.uid != null)
                    message.uid = object.uid >>> 0;
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
                    object.token = "";
                    object.uid = 0;
                }
                if (message.token != null && message.hasOwnProperty("token"))
                    object.token = message.token;
                if (message.uid != null && message.hasOwnProperty("uid"))
                    object.uid = message.uid;
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
    
        C2S.CS_RANK_GET_RANK = (function() {
    
            /**
             * Properties of a CS_RANK_GET_RANK.
             * @memberof C2S
             * @interface ICS_RANK_GET_RANK
             * @property {Array.<C2S.CS_RANK_GET_RANK.ERankType>|null} [types] CS_RANK_GET_RANK types
             */
    
            /**
             * Constructs a new CS_RANK_GET_RANK.
             * @memberof C2S
             * @classdesc Represents a CS_RANK_GET_RANK.
             * @implements ICS_RANK_GET_RANK
             * @constructor
             * @param {C2S.ICS_RANK_GET_RANK=} [properties] Properties to set
             */
            function CS_RANK_GET_RANK(properties) {
                this.types = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CS_RANK_GET_RANK types.
             * @member {Array.<C2S.CS_RANK_GET_RANK.ERankType>} types
             * @memberof C2S.CS_RANK_GET_RANK
             * @instance
             */
            CS_RANK_GET_RANK.prototype.types = $util.emptyArray;
    
            /**
             * Creates a new CS_RANK_GET_RANK instance using the specified properties.
             * @function create
             * @memberof C2S.CS_RANK_GET_RANK
             * @static
             * @param {C2S.ICS_RANK_GET_RANK=} [properties] Properties to set
             * @returns {C2S.CS_RANK_GET_RANK} CS_RANK_GET_RANK instance
             */
            CS_RANK_GET_RANK.create = function create(properties) {
                return new CS_RANK_GET_RANK(properties);
            };
    
            /**
             * Encodes the specified CS_RANK_GET_RANK message. Does not implicitly {@link C2S.CS_RANK_GET_RANK.verify|verify} messages.
             * @function encode
             * @memberof C2S.CS_RANK_GET_RANK
             * @static
             * @param {C2S.ICS_RANK_GET_RANK} message CS_RANK_GET_RANK message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CS_RANK_GET_RANK.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.types != null && message.types.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.types.length; ++i)
                        writer.int32(message.types[i]);
                    writer.ldelim();
                }
                return writer;
            };
    
            /**
             * Encodes the specified CS_RANK_GET_RANK message, length delimited. Does not implicitly {@link C2S.CS_RANK_GET_RANK.verify|verify} messages.
             * @function encodeDelimited
             * @memberof C2S.CS_RANK_GET_RANK
             * @static
             * @param {C2S.ICS_RANK_GET_RANK} message CS_RANK_GET_RANK message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CS_RANK_GET_RANK.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a CS_RANK_GET_RANK message from the specified reader or buffer.
             * @function decode
             * @memberof C2S.CS_RANK_GET_RANK
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {C2S.CS_RANK_GET_RANK} CS_RANK_GET_RANK
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CS_RANK_GET_RANK.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2S.CS_RANK_GET_RANK();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.types && message.types.length))
                            message.types = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.types.push(reader.int32());
                        } else
                            message.types.push(reader.int32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a CS_RANK_GET_RANK message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof C2S.CS_RANK_GET_RANK
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {C2S.CS_RANK_GET_RANK} CS_RANK_GET_RANK
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CS_RANK_GET_RANK.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a CS_RANK_GET_RANK message.
             * @function verify
             * @memberof C2S.CS_RANK_GET_RANK
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CS_RANK_GET_RANK.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.types != null && message.hasOwnProperty("types")) {
                    if (!Array.isArray(message.types))
                        return "types: array expected";
                    for (var i = 0; i < message.types.length; ++i)
                        switch (message.types[i]) {
                        default:
                            return "types: enum value[] expected";
                        case 0:
                        case 1:
                            break;
                        }
                }
                return null;
            };
    
            /**
             * Creates a CS_RANK_GET_RANK message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof C2S.CS_RANK_GET_RANK
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {C2S.CS_RANK_GET_RANK} CS_RANK_GET_RANK
             */
            CS_RANK_GET_RANK.fromObject = function fromObject(object) {
                if (object instanceof $root.C2S.CS_RANK_GET_RANK)
                    return object;
                var message = new $root.C2S.CS_RANK_GET_RANK();
                if (object.types) {
                    if (!Array.isArray(object.types))
                        throw TypeError(".C2S.CS_RANK_GET_RANK.types: array expected");
                    message.types = [];
                    for (var i = 0; i < object.types.length; ++i)
                        switch (object.types[i]) {
                        default:
                        case "level":
                        case 0:
                            message.types[i] = 0;
                            break;
                        case "combat":
                        case 1:
                            message.types[i] = 1;
                            break;
                        }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a CS_RANK_GET_RANK message. Also converts values to other types if specified.
             * @function toObject
             * @memberof C2S.CS_RANK_GET_RANK
             * @static
             * @param {C2S.CS_RANK_GET_RANK} message CS_RANK_GET_RANK
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CS_RANK_GET_RANK.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.types = [];
                if (message.types && message.types.length) {
                    object.types = [];
                    for (var j = 0; j < message.types.length; ++j)
                        object.types[j] = options.enums === String ? $root.C2S.CS_RANK_GET_RANK.ERankType[message.types[j]] : message.types[j];
                }
                return object;
            };
    
            /**
             * Converts this CS_RANK_GET_RANK to JSON.
             * @function toJSON
             * @memberof C2S.CS_RANK_GET_RANK
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CS_RANK_GET_RANK.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * ERankType enum.
             * @name C2S.CS_RANK_GET_RANK.ERankType
             * @enum {string}
             * @property {number} level=0 level value
             * @property {number} combat=1 combat value
             */
            CS_RANK_GET_RANK.ERankType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "level"] = 0;
                values[valuesById[1] = "combat"] = 1;
                return values;
            })();
    
            return CS_RANK_GET_RANK;
        })();
    
        C2S.CS_GUILD_CREATE = (function() {
    
            /**
             * Properties of a CS_GUILD_CREATE.
             * @memberof C2S
             * @interface ICS_GUILD_CREATE
             * @property {number|null} [iconId] CS_GUILD_CREATE iconId
             * @property {string|null} [guildName] CS_GUILD_CREATE guildName
             */
    
            /**
             * Constructs a new CS_GUILD_CREATE.
             * @memberof C2S
             * @classdesc Represents a CS_GUILD_CREATE.
             * @implements ICS_GUILD_CREATE
             * @constructor
             * @param {C2S.ICS_GUILD_CREATE=} [properties] Properties to set
             */
            function CS_GUILD_CREATE(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CS_GUILD_CREATE iconId.
             * @member {number} iconId
             * @memberof C2S.CS_GUILD_CREATE
             * @instance
             */
            CS_GUILD_CREATE.prototype.iconId = 0;
    
            /**
             * CS_GUILD_CREATE guildName.
             * @member {string} guildName
             * @memberof C2S.CS_GUILD_CREATE
             * @instance
             */
            CS_GUILD_CREATE.prototype.guildName = "";
    
            /**
             * Creates a new CS_GUILD_CREATE instance using the specified properties.
             * @function create
             * @memberof C2S.CS_GUILD_CREATE
             * @static
             * @param {C2S.ICS_GUILD_CREATE=} [properties] Properties to set
             * @returns {C2S.CS_GUILD_CREATE} CS_GUILD_CREATE instance
             */
            CS_GUILD_CREATE.create = function create(properties) {
                return new CS_GUILD_CREATE(properties);
            };
    
            /**
             * Encodes the specified CS_GUILD_CREATE message. Does not implicitly {@link C2S.CS_GUILD_CREATE.verify|verify} messages.
             * @function encode
             * @memberof C2S.CS_GUILD_CREATE
             * @static
             * @param {C2S.ICS_GUILD_CREATE} message CS_GUILD_CREATE message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CS_GUILD_CREATE.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.iconId != null && message.hasOwnProperty("iconId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.iconId);
                if (message.guildName != null && message.hasOwnProperty("guildName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.guildName);
                return writer;
            };
    
            /**
             * Encodes the specified CS_GUILD_CREATE message, length delimited. Does not implicitly {@link C2S.CS_GUILD_CREATE.verify|verify} messages.
             * @function encodeDelimited
             * @memberof C2S.CS_GUILD_CREATE
             * @static
             * @param {C2S.ICS_GUILD_CREATE} message CS_GUILD_CREATE message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CS_GUILD_CREATE.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a CS_GUILD_CREATE message from the specified reader or buffer.
             * @function decode
             * @memberof C2S.CS_GUILD_CREATE
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {C2S.CS_GUILD_CREATE} CS_GUILD_CREATE
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CS_GUILD_CREATE.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2S.CS_GUILD_CREATE();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.iconId = reader.uint32();
                        break;
                    case 2:
                        message.guildName = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a CS_GUILD_CREATE message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof C2S.CS_GUILD_CREATE
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {C2S.CS_GUILD_CREATE} CS_GUILD_CREATE
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CS_GUILD_CREATE.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a CS_GUILD_CREATE message.
             * @function verify
             * @memberof C2S.CS_GUILD_CREATE
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CS_GUILD_CREATE.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.iconId != null && message.hasOwnProperty("iconId"))
                    if (!$util.isInteger(message.iconId))
                        return "iconId: integer expected";
                if (message.guildName != null && message.hasOwnProperty("guildName"))
                    if (!$util.isString(message.guildName))
                        return "guildName: string expected";
                return null;
            };
    
            /**
             * Creates a CS_GUILD_CREATE message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof C2S.CS_GUILD_CREATE
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {C2S.CS_GUILD_CREATE} CS_GUILD_CREATE
             */
            CS_GUILD_CREATE.fromObject = function fromObject(object) {
                if (object instanceof $root.C2S.CS_GUILD_CREATE)
                    return object;
                var message = new $root.C2S.CS_GUILD_CREATE();
                if (object.iconId != null)
                    message.iconId = object.iconId >>> 0;
                if (object.guildName != null)
                    message.guildName = String(object.guildName);
                return message;
            };
    
            /**
             * Creates a plain object from a CS_GUILD_CREATE message. Also converts values to other types if specified.
             * @function toObject
             * @memberof C2S.CS_GUILD_CREATE
             * @static
             * @param {C2S.CS_GUILD_CREATE} message CS_GUILD_CREATE
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CS_GUILD_CREATE.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.iconId = 0;
                    object.guildName = "";
                }
                if (message.iconId != null && message.hasOwnProperty("iconId"))
                    object.iconId = message.iconId;
                if (message.guildName != null && message.hasOwnProperty("guildName"))
                    object.guildName = message.guildName;
                return object;
            };
    
            /**
             * Converts this CS_GUILD_CREATE to JSON.
             * @function toJSON
             * @memberof C2S.CS_GUILD_CREATE
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CS_GUILD_CREATE.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return CS_GUILD_CREATE;
        })();
    
        C2S.CS_GUILD_DISMISS = (function() {
    
            /**
             * Properties of a CS_GUILD_DISMISS.
             * @memberof C2S
             * @interface ICS_GUILD_DISMISS
             */
    
            /**
             * Constructs a new CS_GUILD_DISMISS.
             * @memberof C2S
             * @classdesc Represents a CS_GUILD_DISMISS.
             * @implements ICS_GUILD_DISMISS
             * @constructor
             * @param {C2S.ICS_GUILD_DISMISS=} [properties] Properties to set
             */
            function CS_GUILD_DISMISS(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new CS_GUILD_DISMISS instance using the specified properties.
             * @function create
             * @memberof C2S.CS_GUILD_DISMISS
             * @static
             * @param {C2S.ICS_GUILD_DISMISS=} [properties] Properties to set
             * @returns {C2S.CS_GUILD_DISMISS} CS_GUILD_DISMISS instance
             */
            CS_GUILD_DISMISS.create = function create(properties) {
                return new CS_GUILD_DISMISS(properties);
            };
    
            /**
             * Encodes the specified CS_GUILD_DISMISS message. Does not implicitly {@link C2S.CS_GUILD_DISMISS.verify|verify} messages.
             * @function encode
             * @memberof C2S.CS_GUILD_DISMISS
             * @static
             * @param {C2S.ICS_GUILD_DISMISS} message CS_GUILD_DISMISS message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CS_GUILD_DISMISS.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified CS_GUILD_DISMISS message, length delimited. Does not implicitly {@link C2S.CS_GUILD_DISMISS.verify|verify} messages.
             * @function encodeDelimited
             * @memberof C2S.CS_GUILD_DISMISS
             * @static
             * @param {C2S.ICS_GUILD_DISMISS} message CS_GUILD_DISMISS message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CS_GUILD_DISMISS.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a CS_GUILD_DISMISS message from the specified reader or buffer.
             * @function decode
             * @memberof C2S.CS_GUILD_DISMISS
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {C2S.CS_GUILD_DISMISS} CS_GUILD_DISMISS
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CS_GUILD_DISMISS.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2S.CS_GUILD_DISMISS();
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
             * Decodes a CS_GUILD_DISMISS message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof C2S.CS_GUILD_DISMISS
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {C2S.CS_GUILD_DISMISS} CS_GUILD_DISMISS
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CS_GUILD_DISMISS.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a CS_GUILD_DISMISS message.
             * @function verify
             * @memberof C2S.CS_GUILD_DISMISS
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CS_GUILD_DISMISS.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a CS_GUILD_DISMISS message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof C2S.CS_GUILD_DISMISS
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {C2S.CS_GUILD_DISMISS} CS_GUILD_DISMISS
             */
            CS_GUILD_DISMISS.fromObject = function fromObject(object) {
                if (object instanceof $root.C2S.CS_GUILD_DISMISS)
                    return object;
                return new $root.C2S.CS_GUILD_DISMISS();
            };
    
            /**
             * Creates a plain object from a CS_GUILD_DISMISS message. Also converts values to other types if specified.
             * @function toObject
             * @memberof C2S.CS_GUILD_DISMISS
             * @static
             * @param {C2S.CS_GUILD_DISMISS} message CS_GUILD_DISMISS
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CS_GUILD_DISMISS.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this CS_GUILD_DISMISS to JSON.
             * @function toJSON
             * @memberof C2S.CS_GUILD_DISMISS
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CS_GUILD_DISMISS.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return CS_GUILD_DISMISS;
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
             * @property {S2C.ISC_TEST_ECHO|null} [SC_TEST_ECHO] Message SC_TEST_ECHO
             * @property {S2C.ILOGIN_SC_LOGIN|null} [LOGIN_SC_LOGIN] Message LOGIN_SC_LOGIN
             * @property {S2C.ILOGIN_SC_CHOOSE_SERVER|null} [LOGIN_SC_CHOOSE_SERVER] Message LOGIN_SC_CHOOSE_SERVER
             * @property {S2C.ILOGIN_SC_GET_SERVER_LIST|null} [LOGIN_SC_GET_SERVER_LIST] Message LOGIN_SC_GET_SERVER_LIST
             * @property {S2C.ILOGIN_SC_GET_INFO|null} [LOGIN_SC_GET_INFO] Message LOGIN_SC_GET_INFO
             * @property {S2C.ISC_ROLE_ONLINE|null} [SC_ROLE_ONLINE] Message SC_ROLE_ONLINE
             * @property {S2C.ISC_ROLE_HEART_BEAT|null} [SC_ROLE_HEART_BEAT] Message SC_ROLE_HEART_BEAT
             * @property {S2C.ISC_ROLE_PRO_UPDATE|null} [SC_ROLE_PRO_UPDATE] Message SC_ROLE_PRO_UPDATE
             * @property {S2C.ISC_GET_REWARD|null} [SC_GET_REWARD] Message SC_GET_REWARD
             * @property {S2C.ISC_ROLE_SUMMARY|null} [SC_ROLE_SUMMARY] Message SC_ROLE_SUMMARY
             * @property {S2C.ISC_UPDATE_HERO|null} [SC_UPDATE_HERO] Message SC_UPDATE_HERO
             * @property {S2C.ISC_UPDATE_EQUIP|null} [SC_UPDATE_EQUIP] Message SC_UPDATE_EQUIP
             * @property {S2C.ISC_UPDATE_ITEM|null} [SC_UPDATE_ITEM] Message SC_UPDATE_ITEM
             * @property {S2C.ISC_UPDATE_TASK|null} [SC_UPDATE_TASK] Message SC_UPDATE_TASK
             * @property {S2C.ISC_UPDATE_MAIL|null} [SC_UPDATE_MAIL] Message SC_UPDATE_MAIL
             * @property {S2C.ISC_UPDATE_FRIEND|null} [SC_UPDATE_FRIEND] Message SC_UPDATE_FRIEND
             * @property {S2C.ISC_UPDATE_BATTLE|null} [SC_UPDATE_BATTLE] Message SC_UPDATE_BATTLE
             * @property {S2C.ISC_RANK_GET_RANK|null} [SC_RANK_GET_RANK] Message SC_RANK_GET_RANK
             * @property {S2C.ISC_GUILD_CREATE|null} [SC_GUILD_CREATE] Message SC_GUILD_CREATE
             * @property {S2C.ISC_GUILD_DISMISS|null} [SC_GUILD_DISMISS] Message SC_GUILD_DISMISS
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
             * Message SC_TEST_ECHO.
             * @member {S2C.ISC_TEST_ECHO|null|undefined} SC_TEST_ECHO
             * @memberof S2C.Message
             * @instance
             */
            Message.prototype.SC_TEST_ECHO = null;
    
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
             * Message SC_ROLE_PRO_UPDATE.
             * @member {S2C.ISC_ROLE_PRO_UPDATE|null|undefined} SC_ROLE_PRO_UPDATE
             * @memberof S2C.Message
             * @instance
             */
            Message.prototype.SC_ROLE_PRO_UPDATE = null;
    
            /**
             * Message SC_GET_REWARD.
             * @member {S2C.ISC_GET_REWARD|null|undefined} SC_GET_REWARD
             * @memberof S2C.Message
             * @instance
             */
            Message.prototype.SC_GET_REWARD = null;
    
            /**
             * Message SC_ROLE_SUMMARY.
             * @member {S2C.ISC_ROLE_SUMMARY|null|undefined} SC_ROLE_SUMMARY
             * @memberof S2C.Message
             * @instance
             */
            Message.prototype.SC_ROLE_SUMMARY = null;
    
            /**
             * Message SC_UPDATE_HERO.
             * @member {S2C.ISC_UPDATE_HERO|null|undefined} SC_UPDATE_HERO
             * @memberof S2C.Message
             * @instance
             */
            Message.prototype.SC_UPDATE_HERO = null;
    
            /**
             * Message SC_UPDATE_EQUIP.
             * @member {S2C.ISC_UPDATE_EQUIP|null|undefined} SC_UPDATE_EQUIP
             * @memberof S2C.Message
             * @instance
             */
            Message.prototype.SC_UPDATE_EQUIP = null;
    
            /**
             * Message SC_UPDATE_ITEM.
             * @member {S2C.ISC_UPDATE_ITEM|null|undefined} SC_UPDATE_ITEM
             * @memberof S2C.Message
             * @instance
             */
            Message.prototype.SC_UPDATE_ITEM = null;
    
            /**
             * Message SC_UPDATE_TASK.
             * @member {S2C.ISC_UPDATE_TASK|null|undefined} SC_UPDATE_TASK
             * @memberof S2C.Message
             * @instance
             */
            Message.prototype.SC_UPDATE_TASK = null;
    
            /**
             * Message SC_UPDATE_MAIL.
             * @member {S2C.ISC_UPDATE_MAIL|null|undefined} SC_UPDATE_MAIL
             * @memberof S2C.Message
             * @instance
             */
            Message.prototype.SC_UPDATE_MAIL = null;
    
            /**
             * Message SC_UPDATE_FRIEND.
             * @member {S2C.ISC_UPDATE_FRIEND|null|undefined} SC_UPDATE_FRIEND
             * @memberof S2C.Message
             * @instance
             */
            Message.prototype.SC_UPDATE_FRIEND = null;
    
            /**
             * Message SC_UPDATE_BATTLE.
             * @member {S2C.ISC_UPDATE_BATTLE|null|undefined} SC_UPDATE_BATTLE
             * @memberof S2C.Message
             * @instance
             */
            Message.prototype.SC_UPDATE_BATTLE = null;
    
            /**
             * Message SC_RANK_GET_RANK.
             * @member {S2C.ISC_RANK_GET_RANK|null|undefined} SC_RANK_GET_RANK
             * @memberof S2C.Message
             * @instance
             */
            Message.prototype.SC_RANK_GET_RANK = null;
    
            /**
             * Message SC_GUILD_CREATE.
             * @member {S2C.ISC_GUILD_CREATE|null|undefined} SC_GUILD_CREATE
             * @memberof S2C.Message
             * @instance
             */
            Message.prototype.SC_GUILD_CREATE = null;
    
            /**
             * Message SC_GUILD_DISMISS.
             * @member {S2C.ISC_GUILD_DISMISS|null|undefined} SC_GUILD_DISMISS
             * @memberof S2C.Message
             * @instance
             */
            Message.prototype.SC_GUILD_DISMISS = null;
    
            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;
    
            /**
             * Message kind.
             * @member {"SC_TEST_ECHO"|"LOGIN_SC_LOGIN"|"LOGIN_SC_CHOOSE_SERVER"|"LOGIN_SC_GET_SERVER_LIST"|"LOGIN_SC_GET_INFO"|"SC_ROLE_ONLINE"|"SC_ROLE_HEART_BEAT"|"SC_ROLE_PRO_UPDATE"|"SC_GET_REWARD"|"SC_ROLE_SUMMARY"|"SC_UPDATE_HERO"|"SC_UPDATE_EQUIP"|"SC_UPDATE_ITEM"|"SC_UPDATE_TASK"|"SC_UPDATE_MAIL"|"SC_UPDATE_FRIEND"|"SC_UPDATE_BATTLE"|"SC_RANK_GET_RANK"|"SC_GUILD_CREATE"|"SC_GUILD_DISMISS"|undefined} kind
             * @memberof S2C.Message
             * @instance
             */
            Object.defineProperty(Message.prototype, "kind", {
                get: $util.oneOfGetter($oneOfFields = ["SC_TEST_ECHO", "LOGIN_SC_LOGIN", "LOGIN_SC_CHOOSE_SERVER", "LOGIN_SC_GET_SERVER_LIST", "LOGIN_SC_GET_INFO", "SC_ROLE_ONLINE", "SC_ROLE_HEART_BEAT", "SC_ROLE_PRO_UPDATE", "SC_GET_REWARD", "SC_ROLE_SUMMARY", "SC_UPDATE_HERO", "SC_UPDATE_EQUIP", "SC_UPDATE_ITEM", "SC_UPDATE_TASK", "SC_UPDATE_MAIL", "SC_UPDATE_FRIEND", "SC_UPDATE_BATTLE", "SC_RANK_GET_RANK", "SC_GUILD_CREATE", "SC_GUILD_DISMISS"]),
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
                if (message.SC_TEST_ECHO != null && message.hasOwnProperty("SC_TEST_ECHO"))
                    $root.S2C.SC_TEST_ECHO.encode(message.SC_TEST_ECHO, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.SC_ROLE_ONLINE != null && message.hasOwnProperty("SC_ROLE_ONLINE"))
                    $root.S2C.SC_ROLE_ONLINE.encode(message.SC_ROLE_ONLINE, writer.uint32(/* id 1001, wireType 2 =*/8010).fork()).ldelim();
                if (message.SC_ROLE_HEART_BEAT != null && message.hasOwnProperty("SC_ROLE_HEART_BEAT"))
                    $root.S2C.SC_ROLE_HEART_BEAT.encode(message.SC_ROLE_HEART_BEAT, writer.uint32(/* id 1002, wireType 2 =*/8018).fork()).ldelim();
                if (message.SC_ROLE_PRO_UPDATE != null && message.hasOwnProperty("SC_ROLE_PRO_UPDATE"))
                    $root.S2C.SC_ROLE_PRO_UPDATE.encode(message.SC_ROLE_PRO_UPDATE, writer.uint32(/* id 1003, wireType 2 =*/8026).fork()).ldelim();
                if (message.SC_GET_REWARD != null && message.hasOwnProperty("SC_GET_REWARD"))
                    $root.S2C.SC_GET_REWARD.encode(message.SC_GET_REWARD, writer.uint32(/* id 1004, wireType 2 =*/8034).fork()).ldelim();
                if (message.SC_ROLE_SUMMARY != null && message.hasOwnProperty("SC_ROLE_SUMMARY"))
                    $root.S2C.SC_ROLE_SUMMARY.encode(message.SC_ROLE_SUMMARY, writer.uint32(/* id 1005, wireType 2 =*/8042).fork()).ldelim();
                if (message.SC_UPDATE_HERO != null && message.hasOwnProperty("SC_UPDATE_HERO"))
                    $root.S2C.SC_UPDATE_HERO.encode(message.SC_UPDATE_HERO, writer.uint32(/* id 1006, wireType 2 =*/8050).fork()).ldelim();
                if (message.SC_UPDATE_EQUIP != null && message.hasOwnProperty("SC_UPDATE_EQUIP"))
                    $root.S2C.SC_UPDATE_EQUIP.encode(message.SC_UPDATE_EQUIP, writer.uint32(/* id 1007, wireType 2 =*/8058).fork()).ldelim();
                if (message.SC_UPDATE_ITEM != null && message.hasOwnProperty("SC_UPDATE_ITEM"))
                    $root.S2C.SC_UPDATE_ITEM.encode(message.SC_UPDATE_ITEM, writer.uint32(/* id 1008, wireType 2 =*/8066).fork()).ldelim();
                if (message.SC_UPDATE_TASK != null && message.hasOwnProperty("SC_UPDATE_TASK"))
                    $root.S2C.SC_UPDATE_TASK.encode(message.SC_UPDATE_TASK, writer.uint32(/* id 1009, wireType 2 =*/8074).fork()).ldelim();
                if (message.SC_UPDATE_MAIL != null && message.hasOwnProperty("SC_UPDATE_MAIL"))
                    $root.S2C.SC_UPDATE_MAIL.encode(message.SC_UPDATE_MAIL, writer.uint32(/* id 1010, wireType 2 =*/8082).fork()).ldelim();
                if (message.SC_UPDATE_FRIEND != null && message.hasOwnProperty("SC_UPDATE_FRIEND"))
                    $root.S2C.SC_UPDATE_FRIEND.encode(message.SC_UPDATE_FRIEND, writer.uint32(/* id 1011, wireType 2 =*/8090).fork()).ldelim();
                if (message.SC_UPDATE_BATTLE != null && message.hasOwnProperty("SC_UPDATE_BATTLE"))
                    $root.S2C.SC_UPDATE_BATTLE.encode(message.SC_UPDATE_BATTLE, writer.uint32(/* id 1012, wireType 2 =*/8098).fork()).ldelim();
                if (message.SC_RANK_GET_RANK != null && message.hasOwnProperty("SC_RANK_GET_RANK"))
                    $root.S2C.SC_RANK_GET_RANK.encode(message.SC_RANK_GET_RANK, writer.uint32(/* id 1801, wireType 2 =*/14410).fork()).ldelim();
                if (message.SC_GUILD_CREATE != null && message.hasOwnProperty("SC_GUILD_CREATE"))
                    $root.S2C.SC_GUILD_CREATE.encode(message.SC_GUILD_CREATE, writer.uint32(/* id 1901, wireType 2 =*/15210).fork()).ldelim();
                if (message.SC_GUILD_DISMISS != null && message.hasOwnProperty("SC_GUILD_DISMISS"))
                    $root.S2C.SC_GUILD_DISMISS.encode(message.SC_GUILD_DISMISS, writer.uint32(/* id 1902, wireType 2 =*/15218).fork()).ldelim();
                if (message.LOGIN_SC_LOGIN != null && message.hasOwnProperty("LOGIN_SC_LOGIN"))
                    $root.S2C.LOGIN_SC_LOGIN.encode(message.LOGIN_SC_LOGIN, writer.uint32(/* id 9001, wireType 2 =*/72010).fork()).ldelim();
                if (message.LOGIN_SC_CHOOSE_SERVER != null && message.hasOwnProperty("LOGIN_SC_CHOOSE_SERVER"))
                    $root.S2C.LOGIN_SC_CHOOSE_SERVER.encode(message.LOGIN_SC_CHOOSE_SERVER, writer.uint32(/* id 9002, wireType 2 =*/72018).fork()).ldelim();
                if (message.LOGIN_SC_GET_SERVER_LIST != null && message.hasOwnProperty("LOGIN_SC_GET_SERVER_LIST"))
                    $root.S2C.LOGIN_SC_GET_SERVER_LIST.encode(message.LOGIN_SC_GET_SERVER_LIST, writer.uint32(/* id 9003, wireType 2 =*/72026).fork()).ldelim();
                if (message.LOGIN_SC_GET_INFO != null && message.hasOwnProperty("LOGIN_SC_GET_INFO"))
                    $root.S2C.LOGIN_SC_GET_INFO.encode(message.LOGIN_SC_GET_INFO, writer.uint32(/* id 9004, wireType 2 =*/72034).fork()).ldelim();
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
                        message.SC_TEST_ECHO = $root.S2C.SC_TEST_ECHO.decode(reader, reader.uint32());
                        break;
                    case 9001:
                        message.LOGIN_SC_LOGIN = $root.S2C.LOGIN_SC_LOGIN.decode(reader, reader.uint32());
                        break;
                    case 9002:
                        message.LOGIN_SC_CHOOSE_SERVER = $root.S2C.LOGIN_SC_CHOOSE_SERVER.decode(reader, reader.uint32());
                        break;
                    case 9003:
                        message.LOGIN_SC_GET_SERVER_LIST = $root.S2C.LOGIN_SC_GET_SERVER_LIST.decode(reader, reader.uint32());
                        break;
                    case 9004:
                        message.LOGIN_SC_GET_INFO = $root.S2C.LOGIN_SC_GET_INFO.decode(reader, reader.uint32());
                        break;
                    case 1001:
                        message.SC_ROLE_ONLINE = $root.S2C.SC_ROLE_ONLINE.decode(reader, reader.uint32());
                        break;
                    case 1002:
                        message.SC_ROLE_HEART_BEAT = $root.S2C.SC_ROLE_HEART_BEAT.decode(reader, reader.uint32());
                        break;
                    case 1003:
                        message.SC_ROLE_PRO_UPDATE = $root.S2C.SC_ROLE_PRO_UPDATE.decode(reader, reader.uint32());
                        break;
                    case 1004:
                        message.SC_GET_REWARD = $root.S2C.SC_GET_REWARD.decode(reader, reader.uint32());
                        break;
                    case 1005:
                        message.SC_ROLE_SUMMARY = $root.S2C.SC_ROLE_SUMMARY.decode(reader, reader.uint32());
                        break;
                    case 1006:
                        message.SC_UPDATE_HERO = $root.S2C.SC_UPDATE_HERO.decode(reader, reader.uint32());
                        break;
                    case 1007:
                        message.SC_UPDATE_EQUIP = $root.S2C.SC_UPDATE_EQUIP.decode(reader, reader.uint32());
                        break;
                    case 1008:
                        message.SC_UPDATE_ITEM = $root.S2C.SC_UPDATE_ITEM.decode(reader, reader.uint32());
                        break;
                    case 1009:
                        message.SC_UPDATE_TASK = $root.S2C.SC_UPDATE_TASK.decode(reader, reader.uint32());
                        break;
                    case 1010:
                        message.SC_UPDATE_MAIL = $root.S2C.SC_UPDATE_MAIL.decode(reader, reader.uint32());
                        break;
                    case 1011:
                        message.SC_UPDATE_FRIEND = $root.S2C.SC_UPDATE_FRIEND.decode(reader, reader.uint32());
                        break;
                    case 1012:
                        message.SC_UPDATE_BATTLE = $root.S2C.SC_UPDATE_BATTLE.decode(reader, reader.uint32());
                        break;
                    case 1801:
                        message.SC_RANK_GET_RANK = $root.S2C.SC_RANK_GET_RANK.decode(reader, reader.uint32());
                        break;
                    case 1901:
                        message.SC_GUILD_CREATE = $root.S2C.SC_GUILD_CREATE.decode(reader, reader.uint32());
                        break;
                    case 1902:
                        message.SC_GUILD_DISMISS = $root.S2C.SC_GUILD_DISMISS.decode(reader, reader.uint32());
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
                if (message.SC_TEST_ECHO != null && message.hasOwnProperty("SC_TEST_ECHO")) {
                    properties.kind = 1;
                    {
                        var error = $root.S2C.SC_TEST_ECHO.verify(message.SC_TEST_ECHO);
                        if (error)
                            return "SC_TEST_ECHO." + error;
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
                if (message.SC_ROLE_PRO_UPDATE != null && message.hasOwnProperty("SC_ROLE_PRO_UPDATE")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        var error = $root.S2C.SC_ROLE_PRO_UPDATE.verify(message.SC_ROLE_PRO_UPDATE);
                        if (error)
                            return "SC_ROLE_PRO_UPDATE." + error;
                    }
                }
                if (message.SC_GET_REWARD != null && message.hasOwnProperty("SC_GET_REWARD")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        var error = $root.S2C.SC_GET_REWARD.verify(message.SC_GET_REWARD);
                        if (error)
                            return "SC_GET_REWARD." + error;
                    }
                }
                if (message.SC_ROLE_SUMMARY != null && message.hasOwnProperty("SC_ROLE_SUMMARY")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        var error = $root.S2C.SC_ROLE_SUMMARY.verify(message.SC_ROLE_SUMMARY);
                        if (error)
                            return "SC_ROLE_SUMMARY." + error;
                    }
                }
                if (message.SC_UPDATE_HERO != null && message.hasOwnProperty("SC_UPDATE_HERO")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        var error = $root.S2C.SC_UPDATE_HERO.verify(message.SC_UPDATE_HERO);
                        if (error)
                            return "SC_UPDATE_HERO." + error;
                    }
                }
                if (message.SC_UPDATE_EQUIP != null && message.hasOwnProperty("SC_UPDATE_EQUIP")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        var error = $root.S2C.SC_UPDATE_EQUIP.verify(message.SC_UPDATE_EQUIP);
                        if (error)
                            return "SC_UPDATE_EQUIP." + error;
                    }
                }
                if (message.SC_UPDATE_ITEM != null && message.hasOwnProperty("SC_UPDATE_ITEM")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        var error = $root.S2C.SC_UPDATE_ITEM.verify(message.SC_UPDATE_ITEM);
                        if (error)
                            return "SC_UPDATE_ITEM." + error;
                    }
                }
                if (message.SC_UPDATE_TASK != null && message.hasOwnProperty("SC_UPDATE_TASK")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        var error = $root.S2C.SC_UPDATE_TASK.verify(message.SC_UPDATE_TASK);
                        if (error)
                            return "SC_UPDATE_TASK." + error;
                    }
                }
                if (message.SC_UPDATE_MAIL != null && message.hasOwnProperty("SC_UPDATE_MAIL")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        var error = $root.S2C.SC_UPDATE_MAIL.verify(message.SC_UPDATE_MAIL);
                        if (error)
                            return "SC_UPDATE_MAIL." + error;
                    }
                }
                if (message.SC_UPDATE_FRIEND != null && message.hasOwnProperty("SC_UPDATE_FRIEND")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        var error = $root.S2C.SC_UPDATE_FRIEND.verify(message.SC_UPDATE_FRIEND);
                        if (error)
                            return "SC_UPDATE_FRIEND." + error;
                    }
                }
                if (message.SC_UPDATE_BATTLE != null && message.hasOwnProperty("SC_UPDATE_BATTLE")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        var error = $root.S2C.SC_UPDATE_BATTLE.verify(message.SC_UPDATE_BATTLE);
                        if (error)
                            return "SC_UPDATE_BATTLE." + error;
                    }
                }
                if (message.SC_RANK_GET_RANK != null && message.hasOwnProperty("SC_RANK_GET_RANK")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        var error = $root.S2C.SC_RANK_GET_RANK.verify(message.SC_RANK_GET_RANK);
                        if (error)
                            return "SC_RANK_GET_RANK." + error;
                    }
                }
                if (message.SC_GUILD_CREATE != null && message.hasOwnProperty("SC_GUILD_CREATE")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        var error = $root.S2C.SC_GUILD_CREATE.verify(message.SC_GUILD_CREATE);
                        if (error)
                            return "SC_GUILD_CREATE." + error;
                    }
                }
                if (message.SC_GUILD_DISMISS != null && message.hasOwnProperty("SC_GUILD_DISMISS")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        var error = $root.S2C.SC_GUILD_DISMISS.verify(message.SC_GUILD_DISMISS);
                        if (error)
                            return "SC_GUILD_DISMISS." + error;
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
                if (object.SC_TEST_ECHO != null) {
                    if (typeof object.SC_TEST_ECHO !== "object")
                        throw TypeError(".S2C.Message.SC_TEST_ECHO: object expected");
                    message.SC_TEST_ECHO = $root.S2C.SC_TEST_ECHO.fromObject(object.SC_TEST_ECHO);
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
                if (object.SC_ROLE_PRO_UPDATE != null) {
                    if (typeof object.SC_ROLE_PRO_UPDATE !== "object")
                        throw TypeError(".S2C.Message.SC_ROLE_PRO_UPDATE: object expected");
                    message.SC_ROLE_PRO_UPDATE = $root.S2C.SC_ROLE_PRO_UPDATE.fromObject(object.SC_ROLE_PRO_UPDATE);
                }
                if (object.SC_GET_REWARD != null) {
                    if (typeof object.SC_GET_REWARD !== "object")
                        throw TypeError(".S2C.Message.SC_GET_REWARD: object expected");
                    message.SC_GET_REWARD = $root.S2C.SC_GET_REWARD.fromObject(object.SC_GET_REWARD);
                }
                if (object.SC_ROLE_SUMMARY != null) {
                    if (typeof object.SC_ROLE_SUMMARY !== "object")
                        throw TypeError(".S2C.Message.SC_ROLE_SUMMARY: object expected");
                    message.SC_ROLE_SUMMARY = $root.S2C.SC_ROLE_SUMMARY.fromObject(object.SC_ROLE_SUMMARY);
                }
                if (object.SC_UPDATE_HERO != null) {
                    if (typeof object.SC_UPDATE_HERO !== "object")
                        throw TypeError(".S2C.Message.SC_UPDATE_HERO: object expected");
                    message.SC_UPDATE_HERO = $root.S2C.SC_UPDATE_HERO.fromObject(object.SC_UPDATE_HERO);
                }
                if (object.SC_UPDATE_EQUIP != null) {
                    if (typeof object.SC_UPDATE_EQUIP !== "object")
                        throw TypeError(".S2C.Message.SC_UPDATE_EQUIP: object expected");
                    message.SC_UPDATE_EQUIP = $root.S2C.SC_UPDATE_EQUIP.fromObject(object.SC_UPDATE_EQUIP);
                }
                if (object.SC_UPDATE_ITEM != null) {
                    if (typeof object.SC_UPDATE_ITEM !== "object")
                        throw TypeError(".S2C.Message.SC_UPDATE_ITEM: object expected");
                    message.SC_UPDATE_ITEM = $root.S2C.SC_UPDATE_ITEM.fromObject(object.SC_UPDATE_ITEM);
                }
                if (object.SC_UPDATE_TASK != null) {
                    if (typeof object.SC_UPDATE_TASK !== "object")
                        throw TypeError(".S2C.Message.SC_UPDATE_TASK: object expected");
                    message.SC_UPDATE_TASK = $root.S2C.SC_UPDATE_TASK.fromObject(object.SC_UPDATE_TASK);
                }
                if (object.SC_UPDATE_MAIL != null) {
                    if (typeof object.SC_UPDATE_MAIL !== "object")
                        throw TypeError(".S2C.Message.SC_UPDATE_MAIL: object expected");
                    message.SC_UPDATE_MAIL = $root.S2C.SC_UPDATE_MAIL.fromObject(object.SC_UPDATE_MAIL);
                }
                if (object.SC_UPDATE_FRIEND != null) {
                    if (typeof object.SC_UPDATE_FRIEND !== "object")
                        throw TypeError(".S2C.Message.SC_UPDATE_FRIEND: object expected");
                    message.SC_UPDATE_FRIEND = $root.S2C.SC_UPDATE_FRIEND.fromObject(object.SC_UPDATE_FRIEND);
                }
                if (object.SC_UPDATE_BATTLE != null) {
                    if (typeof object.SC_UPDATE_BATTLE !== "object")
                        throw TypeError(".S2C.Message.SC_UPDATE_BATTLE: object expected");
                    message.SC_UPDATE_BATTLE = $root.S2C.SC_UPDATE_BATTLE.fromObject(object.SC_UPDATE_BATTLE);
                }
                if (object.SC_RANK_GET_RANK != null) {
                    if (typeof object.SC_RANK_GET_RANK !== "object")
                        throw TypeError(".S2C.Message.SC_RANK_GET_RANK: object expected");
                    message.SC_RANK_GET_RANK = $root.S2C.SC_RANK_GET_RANK.fromObject(object.SC_RANK_GET_RANK);
                }
                if (object.SC_GUILD_CREATE != null) {
                    if (typeof object.SC_GUILD_CREATE !== "object")
                        throw TypeError(".S2C.Message.SC_GUILD_CREATE: object expected");
                    message.SC_GUILD_CREATE = $root.S2C.SC_GUILD_CREATE.fromObject(object.SC_GUILD_CREATE);
                }
                if (object.SC_GUILD_DISMISS != null) {
                    if (typeof object.SC_GUILD_DISMISS !== "object")
                        throw TypeError(".S2C.Message.SC_GUILD_DISMISS: object expected");
                    message.SC_GUILD_DISMISS = $root.S2C.SC_GUILD_DISMISS.fromObject(object.SC_GUILD_DISMISS);
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
                if (message.SC_ROLE_PRO_UPDATE != null && message.hasOwnProperty("SC_ROLE_PRO_UPDATE")) {
                    object.SC_ROLE_PRO_UPDATE = $root.S2C.SC_ROLE_PRO_UPDATE.toObject(message.SC_ROLE_PRO_UPDATE, options);
                    if (options.oneofs)
                        object.kind = "SC_ROLE_PRO_UPDATE";
                }
                if (message.SC_GET_REWARD != null && message.hasOwnProperty("SC_GET_REWARD")) {
                    object.SC_GET_REWARD = $root.S2C.SC_GET_REWARD.toObject(message.SC_GET_REWARD, options);
                    if (options.oneofs)
                        object.kind = "SC_GET_REWARD";
                }
                if (message.SC_ROLE_SUMMARY != null && message.hasOwnProperty("SC_ROLE_SUMMARY")) {
                    object.SC_ROLE_SUMMARY = $root.S2C.SC_ROLE_SUMMARY.toObject(message.SC_ROLE_SUMMARY, options);
                    if (options.oneofs)
                        object.kind = "SC_ROLE_SUMMARY";
                }
                if (message.SC_UPDATE_HERO != null && message.hasOwnProperty("SC_UPDATE_HERO")) {
                    object.SC_UPDATE_HERO = $root.S2C.SC_UPDATE_HERO.toObject(message.SC_UPDATE_HERO, options);
                    if (options.oneofs)
                        object.kind = "SC_UPDATE_HERO";
                }
                if (message.SC_UPDATE_EQUIP != null && message.hasOwnProperty("SC_UPDATE_EQUIP")) {
                    object.SC_UPDATE_EQUIP = $root.S2C.SC_UPDATE_EQUIP.toObject(message.SC_UPDATE_EQUIP, options);
                    if (options.oneofs)
                        object.kind = "SC_UPDATE_EQUIP";
                }
                if (message.SC_UPDATE_ITEM != null && message.hasOwnProperty("SC_UPDATE_ITEM")) {
                    object.SC_UPDATE_ITEM = $root.S2C.SC_UPDATE_ITEM.toObject(message.SC_UPDATE_ITEM, options);
                    if (options.oneofs)
                        object.kind = "SC_UPDATE_ITEM";
                }
                if (message.SC_UPDATE_TASK != null && message.hasOwnProperty("SC_UPDATE_TASK")) {
                    object.SC_UPDATE_TASK = $root.S2C.SC_UPDATE_TASK.toObject(message.SC_UPDATE_TASK, options);
                    if (options.oneofs)
                        object.kind = "SC_UPDATE_TASK";
                }
                if (message.SC_UPDATE_MAIL != null && message.hasOwnProperty("SC_UPDATE_MAIL")) {
                    object.SC_UPDATE_MAIL = $root.S2C.SC_UPDATE_MAIL.toObject(message.SC_UPDATE_MAIL, options);
                    if (options.oneofs)
                        object.kind = "SC_UPDATE_MAIL";
                }
                if (message.SC_UPDATE_FRIEND != null && message.hasOwnProperty("SC_UPDATE_FRIEND")) {
                    object.SC_UPDATE_FRIEND = $root.S2C.SC_UPDATE_FRIEND.toObject(message.SC_UPDATE_FRIEND, options);
                    if (options.oneofs)
                        object.kind = "SC_UPDATE_FRIEND";
                }
                if (message.SC_UPDATE_BATTLE != null && message.hasOwnProperty("SC_UPDATE_BATTLE")) {
                    object.SC_UPDATE_BATTLE = $root.S2C.SC_UPDATE_BATTLE.toObject(message.SC_UPDATE_BATTLE, options);
                    if (options.oneofs)
                        object.kind = "SC_UPDATE_BATTLE";
                }
                if (message.SC_RANK_GET_RANK != null && message.hasOwnProperty("SC_RANK_GET_RANK")) {
                    object.SC_RANK_GET_RANK = $root.S2C.SC_RANK_GET_RANK.toObject(message.SC_RANK_GET_RANK, options);
                    if (options.oneofs)
                        object.kind = "SC_RANK_GET_RANK";
                }
                if (message.SC_GUILD_CREATE != null && message.hasOwnProperty("SC_GUILD_CREATE")) {
                    object.SC_GUILD_CREATE = $root.S2C.SC_GUILD_CREATE.toObject(message.SC_GUILD_CREATE, options);
                    if (options.oneofs)
                        object.kind = "SC_GUILD_CREATE";
                }
                if (message.SC_GUILD_DISMISS != null && message.hasOwnProperty("SC_GUILD_DISMISS")) {
                    object.SC_GUILD_DISMISS = $root.S2C.SC_GUILD_DISMISS.toObject(message.SC_GUILD_DISMISS, options);
                    if (options.oneofs)
                        object.kind = "SC_GUILD_DISMISS";
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
    
        S2C.SC_GUILD_DISMISS = (function() {
    
            /**
             * Properties of a SC_GUILD_DISMISS.
             * @memberof S2C
             * @interface ISC_GUILD_DISMISS
             */
    
            /**
             * Constructs a new SC_GUILD_DISMISS.
             * @memberof S2C
             * @classdesc Represents a SC_GUILD_DISMISS.
             * @implements ISC_GUILD_DISMISS
             * @constructor
             * @param {S2C.ISC_GUILD_DISMISS=} [properties] Properties to set
             */
            function SC_GUILD_DISMISS(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new SC_GUILD_DISMISS instance using the specified properties.
             * @function create
             * @memberof S2C.SC_GUILD_DISMISS
             * @static
             * @param {S2C.ISC_GUILD_DISMISS=} [properties] Properties to set
             * @returns {S2C.SC_GUILD_DISMISS} SC_GUILD_DISMISS instance
             */
            SC_GUILD_DISMISS.create = function create(properties) {
                return new SC_GUILD_DISMISS(properties);
            };
    
            /**
             * Encodes the specified SC_GUILD_DISMISS message. Does not implicitly {@link S2C.SC_GUILD_DISMISS.verify|verify} messages.
             * @function encode
             * @memberof S2C.SC_GUILD_DISMISS
             * @static
             * @param {S2C.ISC_GUILD_DISMISS} message SC_GUILD_DISMISS message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SC_GUILD_DISMISS.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified SC_GUILD_DISMISS message, length delimited. Does not implicitly {@link S2C.SC_GUILD_DISMISS.verify|verify} messages.
             * @function encodeDelimited
             * @memberof S2C.SC_GUILD_DISMISS
             * @static
             * @param {S2C.ISC_GUILD_DISMISS} message SC_GUILD_DISMISS message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SC_GUILD_DISMISS.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SC_GUILD_DISMISS message from the specified reader or buffer.
             * @function decode
             * @memberof S2C.SC_GUILD_DISMISS
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {S2C.SC_GUILD_DISMISS} SC_GUILD_DISMISS
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SC_GUILD_DISMISS.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.SC_GUILD_DISMISS();
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
             * Decodes a SC_GUILD_DISMISS message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof S2C.SC_GUILD_DISMISS
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {S2C.SC_GUILD_DISMISS} SC_GUILD_DISMISS
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SC_GUILD_DISMISS.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SC_GUILD_DISMISS message.
             * @function verify
             * @memberof S2C.SC_GUILD_DISMISS
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SC_GUILD_DISMISS.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a SC_GUILD_DISMISS message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof S2C.SC_GUILD_DISMISS
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {S2C.SC_GUILD_DISMISS} SC_GUILD_DISMISS
             */
            SC_GUILD_DISMISS.fromObject = function fromObject(object) {
                if (object instanceof $root.S2C.SC_GUILD_DISMISS)
                    return object;
                return new $root.S2C.SC_GUILD_DISMISS();
            };
    
            /**
             * Creates a plain object from a SC_GUILD_DISMISS message. Also converts values to other types if specified.
             * @function toObject
             * @memberof S2C.SC_GUILD_DISMISS
             * @static
             * @param {S2C.SC_GUILD_DISMISS} message SC_GUILD_DISMISS
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SC_GUILD_DISMISS.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this SC_GUILD_DISMISS to JSON.
             * @function toJSON
             * @memberof S2C.SC_GUILD_DISMISS
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SC_GUILD_DISMISS.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return SC_GUILD_DISMISS;
        })();
    
        S2C.SC_UPDATE_BATTLE = (function() {
    
            /**
             * Properties of a SC_UPDATE_BATTLE.
             * @memberof S2C
             * @interface ISC_UPDATE_BATTLE
             * @property {Object.<string,number>|null} [slotInfo] SC_UPDATE_BATTLE slotInfo
             */
    
            /**
             * Constructs a new SC_UPDATE_BATTLE.
             * @memberof S2C
             * @classdesc Represents a SC_UPDATE_BATTLE.
             * @implements ISC_UPDATE_BATTLE
             * @constructor
             * @param {S2C.ISC_UPDATE_BATTLE=} [properties] Properties to set
             */
            function SC_UPDATE_BATTLE(properties) {
                this.slotInfo = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SC_UPDATE_BATTLE slotInfo.
             * @member {Object.<string,number>} slotInfo
             * @memberof S2C.SC_UPDATE_BATTLE
             * @instance
             */
            SC_UPDATE_BATTLE.prototype.slotInfo = $util.emptyObject;
    
            /**
             * Creates a new SC_UPDATE_BATTLE instance using the specified properties.
             * @function create
             * @memberof S2C.SC_UPDATE_BATTLE
             * @static
             * @param {S2C.ISC_UPDATE_BATTLE=} [properties] Properties to set
             * @returns {S2C.SC_UPDATE_BATTLE} SC_UPDATE_BATTLE instance
             */
            SC_UPDATE_BATTLE.create = function create(properties) {
                return new SC_UPDATE_BATTLE(properties);
            };
    
            /**
             * Encodes the specified SC_UPDATE_BATTLE message. Does not implicitly {@link S2C.SC_UPDATE_BATTLE.verify|verify} messages.
             * @function encode
             * @memberof S2C.SC_UPDATE_BATTLE
             * @static
             * @param {S2C.ISC_UPDATE_BATTLE} message SC_UPDATE_BATTLE message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SC_UPDATE_BATTLE.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.slotInfo != null && message.hasOwnProperty("slotInfo"))
                    for (var keys = Object.keys(message.slotInfo), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 0 =*/16).uint32(message.slotInfo[keys[i]]).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified SC_UPDATE_BATTLE message, length delimited. Does not implicitly {@link S2C.SC_UPDATE_BATTLE.verify|verify} messages.
             * @function encodeDelimited
             * @memberof S2C.SC_UPDATE_BATTLE
             * @static
             * @param {S2C.ISC_UPDATE_BATTLE} message SC_UPDATE_BATTLE message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SC_UPDATE_BATTLE.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SC_UPDATE_BATTLE message from the specified reader or buffer.
             * @function decode
             * @memberof S2C.SC_UPDATE_BATTLE
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {S2C.SC_UPDATE_BATTLE} SC_UPDATE_BATTLE
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SC_UPDATE_BATTLE.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.SC_UPDATE_BATTLE(), key;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        reader.skip().pos++;
                        if (message.slotInfo === $util.emptyObject)
                            message.slotInfo = {};
                        key = reader.int32();
                        reader.pos++;
                        message.slotInfo[key] = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a SC_UPDATE_BATTLE message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof S2C.SC_UPDATE_BATTLE
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {S2C.SC_UPDATE_BATTLE} SC_UPDATE_BATTLE
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SC_UPDATE_BATTLE.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SC_UPDATE_BATTLE message.
             * @function verify
             * @memberof S2C.SC_UPDATE_BATTLE
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SC_UPDATE_BATTLE.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.slotInfo != null && message.hasOwnProperty("slotInfo")) {
                    if (!$util.isObject(message.slotInfo))
                        return "slotInfo: object expected";
                    var key = Object.keys(message.slotInfo);
                    for (var i = 0; i < key.length; ++i) {
                        if (!$util.key32Re.test(key[i]))
                            return "slotInfo: integer key{k:int32} expected";
                        if (!$util.isInteger(message.slotInfo[key[i]]))
                            return "slotInfo: integer{k:int32} expected";
                    }
                }
                return null;
            };
    
            /**
             * Creates a SC_UPDATE_BATTLE message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof S2C.SC_UPDATE_BATTLE
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {S2C.SC_UPDATE_BATTLE} SC_UPDATE_BATTLE
             */
            SC_UPDATE_BATTLE.fromObject = function fromObject(object) {
                if (object instanceof $root.S2C.SC_UPDATE_BATTLE)
                    return object;
                var message = new $root.S2C.SC_UPDATE_BATTLE();
                if (object.slotInfo) {
                    if (typeof object.slotInfo !== "object")
                        throw TypeError(".S2C.SC_UPDATE_BATTLE.slotInfo: object expected");
                    message.slotInfo = {};
                    for (var keys = Object.keys(object.slotInfo), i = 0; i < keys.length; ++i)
                        message.slotInfo[keys[i]] = object.slotInfo[keys[i]] >>> 0;
                }
                return message;
            };
    
            /**
             * Creates a plain object from a SC_UPDATE_BATTLE message. Also converts values to other types if specified.
             * @function toObject
             * @memberof S2C.SC_UPDATE_BATTLE
             * @static
             * @param {S2C.SC_UPDATE_BATTLE} message SC_UPDATE_BATTLE
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SC_UPDATE_BATTLE.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.slotInfo = {};
                var keys2;
                if (message.slotInfo && (keys2 = Object.keys(message.slotInfo)).length) {
                    object.slotInfo = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.slotInfo[keys2[j]] = message.slotInfo[keys2[j]];
                }
                return object;
            };
    
            /**
             * Converts this SC_UPDATE_BATTLE to JSON.
             * @function toJSON
             * @memberof S2C.SC_UPDATE_BATTLE
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SC_UPDATE_BATTLE.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return SC_UPDATE_BATTLE;
        })();
    
        S2C.GuildSummary = (function() {
    
            /**
             * Properties of a GuildSummary.
             * @memberof S2C
             * @interface IGuildSummary
             * @property {number|null} [uid] GuildSummary uid
             * @property {string|null} [guildName] GuildSummary guildName
             * @property {number|null} [iconId] GuildSummary iconId
             * @property {number|null} [level] GuildSummary level
             * @property {number|Long|null} [combat] GuildSummary combat
             * @property {string|null} [notice] GuildSummary notice
             */
    
            /**
             * Constructs a new GuildSummary.
             * @memberof S2C
             * @classdesc Represents a GuildSummary.
             * @implements IGuildSummary
             * @constructor
             * @param {S2C.IGuildSummary=} [properties] Properties to set
             */
            function GuildSummary(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GuildSummary uid.
             * @member {number} uid
             * @memberof S2C.GuildSummary
             * @instance
             */
            GuildSummary.prototype.uid = 0;
    
            /**
             * GuildSummary guildName.
             * @member {string} guildName
             * @memberof S2C.GuildSummary
             * @instance
             */
            GuildSummary.prototype.guildName = "";
    
            /**
             * GuildSummary iconId.
             * @member {number} iconId
             * @memberof S2C.GuildSummary
             * @instance
             */
            GuildSummary.prototype.iconId = 0;
    
            /**
             * GuildSummary level.
             * @member {number} level
             * @memberof S2C.GuildSummary
             * @instance
             */
            GuildSummary.prototype.level = 0;
    
            /**
             * GuildSummary combat.
             * @member {number|Long} combat
             * @memberof S2C.GuildSummary
             * @instance
             */
            GuildSummary.prototype.combat = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * GuildSummary notice.
             * @member {string} notice
             * @memberof S2C.GuildSummary
             * @instance
             */
            GuildSummary.prototype.notice = "";
    
            /**
             * Creates a new GuildSummary instance using the specified properties.
             * @function create
             * @memberof S2C.GuildSummary
             * @static
             * @param {S2C.IGuildSummary=} [properties] Properties to set
             * @returns {S2C.GuildSummary} GuildSummary instance
             */
            GuildSummary.create = function create(properties) {
                return new GuildSummary(properties);
            };
    
            /**
             * Encodes the specified GuildSummary message. Does not implicitly {@link S2C.GuildSummary.verify|verify} messages.
             * @function encode
             * @memberof S2C.GuildSummary
             * @static
             * @param {S2C.IGuildSummary} message GuildSummary message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GuildSummary.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uid != null && message.hasOwnProperty("uid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
                if (message.guildName != null && message.hasOwnProperty("guildName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.guildName);
                if (message.iconId != null && message.hasOwnProperty("iconId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.iconId);
                if (message.level != null && message.hasOwnProperty("level"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.level);
                if (message.combat != null && message.hasOwnProperty("combat"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.combat);
                if (message.notice != null && message.hasOwnProperty("notice"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.notice);
                return writer;
            };
    
            /**
             * Encodes the specified GuildSummary message, length delimited. Does not implicitly {@link S2C.GuildSummary.verify|verify} messages.
             * @function encodeDelimited
             * @memberof S2C.GuildSummary
             * @static
             * @param {S2C.IGuildSummary} message GuildSummary message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GuildSummary.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a GuildSummary message from the specified reader or buffer.
             * @function decode
             * @memberof S2C.GuildSummary
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {S2C.GuildSummary} GuildSummary
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GuildSummary.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.GuildSummary();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.uid = reader.uint32();
                        break;
                    case 2:
                        message.guildName = reader.string();
                        break;
                    case 3:
                        message.iconId = reader.uint32();
                        break;
                    case 4:
                        message.level = reader.uint32();
                        break;
                    case 5:
                        message.combat = reader.uint64();
                        break;
                    case 6:
                        message.notice = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a GuildSummary message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof S2C.GuildSummary
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {S2C.GuildSummary} GuildSummary
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GuildSummary.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a GuildSummary message.
             * @function verify
             * @memberof S2C.GuildSummary
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GuildSummary.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uid != null && message.hasOwnProperty("uid"))
                    if (!$util.isInteger(message.uid))
                        return "uid: integer expected";
                if (message.guildName != null && message.hasOwnProperty("guildName"))
                    if (!$util.isString(message.guildName))
                        return "guildName: string expected";
                if (message.iconId != null && message.hasOwnProperty("iconId"))
                    if (!$util.isInteger(message.iconId))
                        return "iconId: integer expected";
                if (message.level != null && message.hasOwnProperty("level"))
                    if (!$util.isInteger(message.level))
                        return "level: integer expected";
                if (message.combat != null && message.hasOwnProperty("combat"))
                    if (!$util.isInteger(message.combat) && !(message.combat && $util.isInteger(message.combat.low) && $util.isInteger(message.combat.high)))
                        return "combat: integer|Long expected";
                if (message.notice != null && message.hasOwnProperty("notice"))
                    if (!$util.isString(message.notice))
                        return "notice: string expected";
                return null;
            };
    
            /**
             * Creates a GuildSummary message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof S2C.GuildSummary
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {S2C.GuildSummary} GuildSummary
             */
            GuildSummary.fromObject = function fromObject(object) {
                if (object instanceof $root.S2C.GuildSummary)
                    return object;
                var message = new $root.S2C.GuildSummary();
                if (object.uid != null)
                    message.uid = object.uid >>> 0;
                if (object.guildName != null)
                    message.guildName = String(object.guildName);
                if (object.iconId != null)
                    message.iconId = object.iconId >>> 0;
                if (object.level != null)
                    message.level = object.level >>> 0;
                if (object.combat != null)
                    if ($util.Long)
                        (message.combat = $util.Long.fromValue(object.combat)).unsigned = true;
                    else if (typeof object.combat === "string")
                        message.combat = parseInt(object.combat, 10);
                    else if (typeof object.combat === "number")
                        message.combat = object.combat;
                    else if (typeof object.combat === "object")
                        message.combat = new $util.LongBits(object.combat.low >>> 0, object.combat.high >>> 0).toNumber(true);
                if (object.notice != null)
                    message.notice = String(object.notice);
                return message;
            };
    
            /**
             * Creates a plain object from a GuildSummary message. Also converts values to other types if specified.
             * @function toObject
             * @memberof S2C.GuildSummary
             * @static
             * @param {S2C.GuildSummary} message GuildSummary
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GuildSummary.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.uid = 0;
                    object.guildName = "";
                    object.iconId = 0;
                    object.level = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.combat = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.combat = options.longs === String ? "0" : 0;
                    object.notice = "";
                }
                if (message.uid != null && message.hasOwnProperty("uid"))
                    object.uid = message.uid;
                if (message.guildName != null && message.hasOwnProperty("guildName"))
                    object.guildName = message.guildName;
                if (message.iconId != null && message.hasOwnProperty("iconId"))
                    object.iconId = message.iconId;
                if (message.level != null && message.hasOwnProperty("level"))
                    object.level = message.level;
                if (message.combat != null && message.hasOwnProperty("combat"))
                    if (typeof message.combat === "number")
                        object.combat = options.longs === String ? String(message.combat) : message.combat;
                    else
                        object.combat = options.longs === String ? $util.Long.prototype.toString.call(message.combat) : options.longs === Number ? new $util.LongBits(message.combat.low >>> 0, message.combat.high >>> 0).toNumber(true) : message.combat;
                if (message.notice != null && message.hasOwnProperty("notice"))
                    object.notice = message.notice;
                return object;
            };
    
            /**
             * Converts this GuildSummary to JSON.
             * @function toJSON
             * @memberof S2C.GuildSummary
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GuildSummary.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return GuildSummary;
        })();
    
        S2C.Guild = (function() {
    
            /**
             * Properties of a Guild.
             * @memberof S2C
             * @interface IGuild
             * @property {number|null} [uid] Guild uid
             * @property {string|null} [guildName] Guild guildName
             * @property {number|null} [iconId] Guild iconId
             * @property {number|null} [level] Guild level
             * @property {number|Long|null} [combat] Guild combat
             * @property {string|null} [notice] Guild notice
             * @property {number|null} [gold] Guild gold
             * @property {number|Long|null} [exp] Guild exp
             */
    
            /**
             * Constructs a new Guild.
             * @memberof S2C
             * @classdesc Represents a Guild.
             * @implements IGuild
             * @constructor
             * @param {S2C.IGuild=} [properties] Properties to set
             */
            function Guild(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Guild uid.
             * @member {number} uid
             * @memberof S2C.Guild
             * @instance
             */
            Guild.prototype.uid = 0;
    
            /**
             * Guild guildName.
             * @member {string} guildName
             * @memberof S2C.Guild
             * @instance
             */
            Guild.prototype.guildName = "";
    
            /**
             * Guild iconId.
             * @member {number} iconId
             * @memberof S2C.Guild
             * @instance
             */
            Guild.prototype.iconId = 0;
    
            /**
             * Guild level.
             * @member {number} level
             * @memberof S2C.Guild
             * @instance
             */
            Guild.prototype.level = 0;
    
            /**
             * Guild combat.
             * @member {number|Long} combat
             * @memberof S2C.Guild
             * @instance
             */
            Guild.prototype.combat = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Guild notice.
             * @member {string} notice
             * @memberof S2C.Guild
             * @instance
             */
            Guild.prototype.notice = "";
    
            /**
             * Guild gold.
             * @member {number} gold
             * @memberof S2C.Guild
             * @instance
             */
            Guild.prototype.gold = 0;
    
            /**
             * Guild exp.
             * @member {number|Long} exp
             * @memberof S2C.Guild
             * @instance
             */
            Guild.prototype.exp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Creates a new Guild instance using the specified properties.
             * @function create
             * @memberof S2C.Guild
             * @static
             * @param {S2C.IGuild=} [properties] Properties to set
             * @returns {S2C.Guild} Guild instance
             */
            Guild.create = function create(properties) {
                return new Guild(properties);
            };
    
            /**
             * Encodes the specified Guild message. Does not implicitly {@link S2C.Guild.verify|verify} messages.
             * @function encode
             * @memberof S2C.Guild
             * @static
             * @param {S2C.IGuild} message Guild message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Guild.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uid != null && message.hasOwnProperty("uid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
                if (message.guildName != null && message.hasOwnProperty("guildName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.guildName);
                if (message.iconId != null && message.hasOwnProperty("iconId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.iconId);
                if (message.level != null && message.hasOwnProperty("level"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.level);
                if (message.combat != null && message.hasOwnProperty("combat"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.combat);
                if (message.notice != null && message.hasOwnProperty("notice"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.notice);
                if (message.gold != null && message.hasOwnProperty("gold"))
                    writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.gold);
                if (message.exp != null && message.hasOwnProperty("exp"))
                    writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.exp);
                return writer;
            };
    
            /**
             * Encodes the specified Guild message, length delimited. Does not implicitly {@link S2C.Guild.verify|verify} messages.
             * @function encodeDelimited
             * @memberof S2C.Guild
             * @static
             * @param {S2C.IGuild} message Guild message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Guild.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Guild message from the specified reader or buffer.
             * @function decode
             * @memberof S2C.Guild
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {S2C.Guild} Guild
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Guild.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.Guild();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.uid = reader.uint32();
                        break;
                    case 2:
                        message.guildName = reader.string();
                        break;
                    case 3:
                        message.iconId = reader.uint32();
                        break;
                    case 4:
                        message.level = reader.uint32();
                        break;
                    case 5:
                        message.combat = reader.uint64();
                        break;
                    case 6:
                        message.notice = reader.string();
                        break;
                    case 7:
                        message.gold = reader.uint32();
                        break;
                    case 8:
                        message.exp = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Guild message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof S2C.Guild
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {S2C.Guild} Guild
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Guild.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Guild message.
             * @function verify
             * @memberof S2C.Guild
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Guild.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uid != null && message.hasOwnProperty("uid"))
                    if (!$util.isInteger(message.uid))
                        return "uid: integer expected";
                if (message.guildName != null && message.hasOwnProperty("guildName"))
                    if (!$util.isString(message.guildName))
                        return "guildName: string expected";
                if (message.iconId != null && message.hasOwnProperty("iconId"))
                    if (!$util.isInteger(message.iconId))
                        return "iconId: integer expected";
                if (message.level != null && message.hasOwnProperty("level"))
                    if (!$util.isInteger(message.level))
                        return "level: integer expected";
                if (message.combat != null && message.hasOwnProperty("combat"))
                    if (!$util.isInteger(message.combat) && !(message.combat && $util.isInteger(message.combat.low) && $util.isInteger(message.combat.high)))
                        return "combat: integer|Long expected";
                if (message.notice != null && message.hasOwnProperty("notice"))
                    if (!$util.isString(message.notice))
                        return "notice: string expected";
                if (message.gold != null && message.hasOwnProperty("gold"))
                    if (!$util.isInteger(message.gold))
                        return "gold: integer expected";
                if (message.exp != null && message.hasOwnProperty("exp"))
                    if (!$util.isInteger(message.exp) && !(message.exp && $util.isInteger(message.exp.low) && $util.isInteger(message.exp.high)))
                        return "exp: integer|Long expected";
                return null;
            };
    
            /**
             * Creates a Guild message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof S2C.Guild
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {S2C.Guild} Guild
             */
            Guild.fromObject = function fromObject(object) {
                if (object instanceof $root.S2C.Guild)
                    return object;
                var message = new $root.S2C.Guild();
                if (object.uid != null)
                    message.uid = object.uid >>> 0;
                if (object.guildName != null)
                    message.guildName = String(object.guildName);
                if (object.iconId != null)
                    message.iconId = object.iconId >>> 0;
                if (object.level != null)
                    message.level = object.level >>> 0;
                if (object.combat != null)
                    if ($util.Long)
                        (message.combat = $util.Long.fromValue(object.combat)).unsigned = true;
                    else if (typeof object.combat === "string")
                        message.combat = parseInt(object.combat, 10);
                    else if (typeof object.combat === "number")
                        message.combat = object.combat;
                    else if (typeof object.combat === "object")
                        message.combat = new $util.LongBits(object.combat.low >>> 0, object.combat.high >>> 0).toNumber(true);
                if (object.notice != null)
                    message.notice = String(object.notice);
                if (object.gold != null)
                    message.gold = object.gold >>> 0;
                if (object.exp != null)
                    if ($util.Long)
                        (message.exp = $util.Long.fromValue(object.exp)).unsigned = true;
                    else if (typeof object.exp === "string")
                        message.exp = parseInt(object.exp, 10);
                    else if (typeof object.exp === "number")
                        message.exp = object.exp;
                    else if (typeof object.exp === "object")
                        message.exp = new $util.LongBits(object.exp.low >>> 0, object.exp.high >>> 0).toNumber(true);
                return message;
            };
    
            /**
             * Creates a plain object from a Guild message. Also converts values to other types if specified.
             * @function toObject
             * @memberof S2C.Guild
             * @static
             * @param {S2C.Guild} message Guild
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Guild.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.uid = 0;
                    object.guildName = "";
                    object.iconId = 0;
                    object.level = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.combat = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.combat = options.longs === String ? "0" : 0;
                    object.notice = "";
                    object.gold = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.exp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.exp = options.longs === String ? "0" : 0;
                }
                if (message.uid != null && message.hasOwnProperty("uid"))
                    object.uid = message.uid;
                if (message.guildName != null && message.hasOwnProperty("guildName"))
                    object.guildName = message.guildName;
                if (message.iconId != null && message.hasOwnProperty("iconId"))
                    object.iconId = message.iconId;
                if (message.level != null && message.hasOwnProperty("level"))
                    object.level = message.level;
                if (message.combat != null && message.hasOwnProperty("combat"))
                    if (typeof message.combat === "number")
                        object.combat = options.longs === String ? String(message.combat) : message.combat;
                    else
                        object.combat = options.longs === String ? $util.Long.prototype.toString.call(message.combat) : options.longs === Number ? new $util.LongBits(message.combat.low >>> 0, message.combat.high >>> 0).toNumber(true) : message.combat;
                if (message.notice != null && message.hasOwnProperty("notice"))
                    object.notice = message.notice;
                if (message.gold != null && message.hasOwnProperty("gold"))
                    object.gold = message.gold;
                if (message.exp != null && message.hasOwnProperty("exp"))
                    if (typeof message.exp === "number")
                        object.exp = options.longs === String ? String(message.exp) : message.exp;
                    else
                        object.exp = options.longs === String ? $util.Long.prototype.toString.call(message.exp) : options.longs === Number ? new $util.LongBits(message.exp.low >>> 0, message.exp.high >>> 0).toNumber(true) : message.exp;
                return object;
            };
    
            /**
             * Converts this Guild to JSON.
             * @function toJSON
             * @memberof S2C.Guild
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Guild.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Guild;
        })();
    
        S2C.SC_GUILD_INIT = (function() {
    
            /**
             * Properties of a SC_GUILD_INIT.
             * @memberof S2C
             * @interface ISC_GUILD_INIT
             */
    
            /**
             * Constructs a new SC_GUILD_INIT.
             * @memberof S2C
             * @classdesc Represents a SC_GUILD_INIT.
             * @implements ISC_GUILD_INIT
             * @constructor
             * @param {S2C.ISC_GUILD_INIT=} [properties] Properties to set
             */
            function SC_GUILD_INIT(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new SC_GUILD_INIT instance using the specified properties.
             * @function create
             * @memberof S2C.SC_GUILD_INIT
             * @static
             * @param {S2C.ISC_GUILD_INIT=} [properties] Properties to set
             * @returns {S2C.SC_GUILD_INIT} SC_GUILD_INIT instance
             */
            SC_GUILD_INIT.create = function create(properties) {
                return new SC_GUILD_INIT(properties);
            };
    
            /**
             * Encodes the specified SC_GUILD_INIT message. Does not implicitly {@link S2C.SC_GUILD_INIT.verify|verify} messages.
             * @function encode
             * @memberof S2C.SC_GUILD_INIT
             * @static
             * @param {S2C.ISC_GUILD_INIT} message SC_GUILD_INIT message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SC_GUILD_INIT.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified SC_GUILD_INIT message, length delimited. Does not implicitly {@link S2C.SC_GUILD_INIT.verify|verify} messages.
             * @function encodeDelimited
             * @memberof S2C.SC_GUILD_INIT
             * @static
             * @param {S2C.ISC_GUILD_INIT} message SC_GUILD_INIT message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SC_GUILD_INIT.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SC_GUILD_INIT message from the specified reader or buffer.
             * @function decode
             * @memberof S2C.SC_GUILD_INIT
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {S2C.SC_GUILD_INIT} SC_GUILD_INIT
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SC_GUILD_INIT.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.SC_GUILD_INIT();
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
             * Decodes a SC_GUILD_INIT message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof S2C.SC_GUILD_INIT
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {S2C.SC_GUILD_INIT} SC_GUILD_INIT
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SC_GUILD_INIT.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SC_GUILD_INIT message.
             * @function verify
             * @memberof S2C.SC_GUILD_INIT
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SC_GUILD_INIT.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a SC_GUILD_INIT message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof S2C.SC_GUILD_INIT
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {S2C.SC_GUILD_INIT} SC_GUILD_INIT
             */
            SC_GUILD_INIT.fromObject = function fromObject(object) {
                if (object instanceof $root.S2C.SC_GUILD_INIT)
                    return object;
                return new $root.S2C.SC_GUILD_INIT();
            };
    
            /**
             * Creates a plain object from a SC_GUILD_INIT message. Also converts values to other types if specified.
             * @function toObject
             * @memberof S2C.SC_GUILD_INIT
             * @static
             * @param {S2C.SC_GUILD_INIT} message SC_GUILD_INIT
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SC_GUILD_INIT.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this SC_GUILD_INIT to JSON.
             * @function toJSON
             * @memberof S2C.SC_GUILD_INIT
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SC_GUILD_INIT.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return SC_GUILD_INIT;
        })();
    
        S2C.SC_GUILD_CREATE = (function() {
    
            /**
             * Properties of a SC_GUILD_CREATE.
             * @memberof S2C
             * @interface ISC_GUILD_CREATE
             */
    
            /**
             * Constructs a new SC_GUILD_CREATE.
             * @memberof S2C
             * @classdesc Represents a SC_GUILD_CREATE.
             * @implements ISC_GUILD_CREATE
             * @constructor
             * @param {S2C.ISC_GUILD_CREATE=} [properties] Properties to set
             */
            function SC_GUILD_CREATE(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new SC_GUILD_CREATE instance using the specified properties.
             * @function create
             * @memberof S2C.SC_GUILD_CREATE
             * @static
             * @param {S2C.ISC_GUILD_CREATE=} [properties] Properties to set
             * @returns {S2C.SC_GUILD_CREATE} SC_GUILD_CREATE instance
             */
            SC_GUILD_CREATE.create = function create(properties) {
                return new SC_GUILD_CREATE(properties);
            };
    
            /**
             * Encodes the specified SC_GUILD_CREATE message. Does not implicitly {@link S2C.SC_GUILD_CREATE.verify|verify} messages.
             * @function encode
             * @memberof S2C.SC_GUILD_CREATE
             * @static
             * @param {S2C.ISC_GUILD_CREATE} message SC_GUILD_CREATE message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SC_GUILD_CREATE.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified SC_GUILD_CREATE message, length delimited. Does not implicitly {@link S2C.SC_GUILD_CREATE.verify|verify} messages.
             * @function encodeDelimited
             * @memberof S2C.SC_GUILD_CREATE
             * @static
             * @param {S2C.ISC_GUILD_CREATE} message SC_GUILD_CREATE message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SC_GUILD_CREATE.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SC_GUILD_CREATE message from the specified reader or buffer.
             * @function decode
             * @memberof S2C.SC_GUILD_CREATE
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {S2C.SC_GUILD_CREATE} SC_GUILD_CREATE
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SC_GUILD_CREATE.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.SC_GUILD_CREATE();
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
             * Decodes a SC_GUILD_CREATE message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof S2C.SC_GUILD_CREATE
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {S2C.SC_GUILD_CREATE} SC_GUILD_CREATE
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SC_GUILD_CREATE.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SC_GUILD_CREATE message.
             * @function verify
             * @memberof S2C.SC_GUILD_CREATE
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SC_GUILD_CREATE.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a SC_GUILD_CREATE message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof S2C.SC_GUILD_CREATE
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {S2C.SC_GUILD_CREATE} SC_GUILD_CREATE
             */
            SC_GUILD_CREATE.fromObject = function fromObject(object) {
                if (object instanceof $root.S2C.SC_GUILD_CREATE)
                    return object;
                return new $root.S2C.SC_GUILD_CREATE();
            };
    
            /**
             * Creates a plain object from a SC_GUILD_CREATE message. Also converts values to other types if specified.
             * @function toObject
             * @memberof S2C.SC_GUILD_CREATE
             * @static
             * @param {S2C.SC_GUILD_CREATE} message SC_GUILD_CREATE
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SC_GUILD_CREATE.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this SC_GUILD_CREATE to JSON.
             * @function toJSON
             * @memberof S2C.SC_GUILD_CREATE
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SC_GUILD_CREATE.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return SC_GUILD_CREATE;
        })();
    
        S2C.RankInfo = (function() {
    
            /**
             * Properties of a RankInfo.
             * @memberof S2C
             * @interface IRankInfo
             * @property {Array.<S2C.ISC_ROLE_SUMMARY>|null} [roles] RankInfo roles
             * @property {Array.<number>|null} [values] RankInfo values
             * @property {number|null} [rank] RankInfo rank
             * @property {number|null} [value] RankInfo value
             * @property {number|null} [rankType] RankInfo rankType
             */
    
            /**
             * Constructs a new RankInfo.
             * @memberof S2C
             * @classdesc Represents a RankInfo.
             * @implements IRankInfo
             * @constructor
             * @param {S2C.IRankInfo=} [properties] Properties to set
             */
            function RankInfo(properties) {
                this.roles = [];
                this.values = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RankInfo roles.
             * @member {Array.<S2C.ISC_ROLE_SUMMARY>} roles
             * @memberof S2C.RankInfo
             * @instance
             */
            RankInfo.prototype.roles = $util.emptyArray;
    
            /**
             * RankInfo values.
             * @member {Array.<number>} values
             * @memberof S2C.RankInfo
             * @instance
             */
            RankInfo.prototype.values = $util.emptyArray;
    
            /**
             * RankInfo rank.
             * @member {number} rank
             * @memberof S2C.RankInfo
             * @instance
             */
            RankInfo.prototype.rank = 0;
    
            /**
             * RankInfo value.
             * @member {number} value
             * @memberof S2C.RankInfo
             * @instance
             */
            RankInfo.prototype.value = 0;
    
            /**
             * RankInfo rankType.
             * @member {number} rankType
             * @memberof S2C.RankInfo
             * @instance
             */
            RankInfo.prototype.rankType = 0;
    
            /**
             * Creates a new RankInfo instance using the specified properties.
             * @function create
             * @memberof S2C.RankInfo
             * @static
             * @param {S2C.IRankInfo=} [properties] Properties to set
             * @returns {S2C.RankInfo} RankInfo instance
             */
            RankInfo.create = function create(properties) {
                return new RankInfo(properties);
            };
    
            /**
             * Encodes the specified RankInfo message. Does not implicitly {@link S2C.RankInfo.verify|verify} messages.
             * @function encode
             * @memberof S2C.RankInfo
             * @static
             * @param {S2C.IRankInfo} message RankInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RankInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.roles != null && message.roles.length)
                    for (var i = 0; i < message.roles.length; ++i)
                        $root.S2C.SC_ROLE_SUMMARY.encode(message.roles[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.values != null && message.values.length) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork();
                    for (var i = 0; i < message.values.length; ++i)
                        writer.uint32(message.values[i]);
                    writer.ldelim();
                }
                if (message.rank != null && message.hasOwnProperty("rank"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.rank);
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.value);
                if (message.rankType != null && message.hasOwnProperty("rankType"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.rankType);
                return writer;
            };
    
            /**
             * Encodes the specified RankInfo message, length delimited. Does not implicitly {@link S2C.RankInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof S2C.RankInfo
             * @static
             * @param {S2C.IRankInfo} message RankInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RankInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RankInfo message from the specified reader or buffer.
             * @function decode
             * @memberof S2C.RankInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {S2C.RankInfo} RankInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RankInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.RankInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.roles && message.roles.length))
                            message.roles = [];
                        message.roles.push($root.S2C.SC_ROLE_SUMMARY.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        if (!(message.values && message.values.length))
                            message.values = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.values.push(reader.uint32());
                        } else
                            message.values.push(reader.uint32());
                        break;
                    case 3:
                        message.rank = reader.uint32();
                        break;
                    case 4:
                        message.value = reader.uint32();
                        break;
                    case 5:
                        message.rankType = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RankInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof S2C.RankInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {S2C.RankInfo} RankInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RankInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RankInfo message.
             * @function verify
             * @memberof S2C.RankInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RankInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.roles != null && message.hasOwnProperty("roles")) {
                    if (!Array.isArray(message.roles))
                        return "roles: array expected";
                    for (var i = 0; i < message.roles.length; ++i) {
                        var error = $root.S2C.SC_ROLE_SUMMARY.verify(message.roles[i]);
                        if (error)
                            return "roles." + error;
                    }
                }
                if (message.values != null && message.hasOwnProperty("values")) {
                    if (!Array.isArray(message.values))
                        return "values: array expected";
                    for (var i = 0; i < message.values.length; ++i)
                        if (!$util.isInteger(message.values[i]))
                            return "values: integer[] expected";
                }
                if (message.rank != null && message.hasOwnProperty("rank"))
                    if (!$util.isInteger(message.rank))
                        return "rank: integer expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value))
                        return "value: integer expected";
                if (message.rankType != null && message.hasOwnProperty("rankType"))
                    if (!$util.isInteger(message.rankType))
                        return "rankType: integer expected";
                return null;
            };
    
            /**
             * Creates a RankInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof S2C.RankInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {S2C.RankInfo} RankInfo
             */
            RankInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.S2C.RankInfo)
                    return object;
                var message = new $root.S2C.RankInfo();
                if (object.roles) {
                    if (!Array.isArray(object.roles))
                        throw TypeError(".S2C.RankInfo.roles: array expected");
                    message.roles = [];
                    for (var i = 0; i < object.roles.length; ++i) {
                        if (typeof object.roles[i] !== "object")
                            throw TypeError(".S2C.RankInfo.roles: object expected");
                        message.roles[i] = $root.S2C.SC_ROLE_SUMMARY.fromObject(object.roles[i]);
                    }
                }
                if (object.values) {
                    if (!Array.isArray(object.values))
                        throw TypeError(".S2C.RankInfo.values: array expected");
                    message.values = [];
                    for (var i = 0; i < object.values.length; ++i)
                        message.values[i] = object.values[i] >>> 0;
                }
                if (object.rank != null)
                    message.rank = object.rank >>> 0;
                if (object.value != null)
                    message.value = object.value >>> 0;
                if (object.rankType != null)
                    message.rankType = object.rankType >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a RankInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof S2C.RankInfo
             * @static
             * @param {S2C.RankInfo} message RankInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RankInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.roles = [];
                    object.values = [];
                }
                if (options.defaults) {
                    object.rank = 0;
                    object.value = 0;
                    object.rankType = 0;
                }
                if (message.roles && message.roles.length) {
                    object.roles = [];
                    for (var j = 0; j < message.roles.length; ++j)
                        object.roles[j] = $root.S2C.SC_ROLE_SUMMARY.toObject(message.roles[j], options);
                }
                if (message.values && message.values.length) {
                    object.values = [];
                    for (var j = 0; j < message.values.length; ++j)
                        object.values[j] = message.values[j];
                }
                if (message.rank != null && message.hasOwnProperty("rank"))
                    object.rank = message.rank;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                if (message.rankType != null && message.hasOwnProperty("rankType"))
                    object.rankType = message.rankType;
                return object;
            };
    
            /**
             * Converts this RankInfo to JSON.
             * @function toJSON
             * @memberof S2C.RankInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RankInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RankInfo;
        })();
    
        S2C.SC_RANK_GET_RANK = (function() {
    
            /**
             * Properties of a SC_RANK_GET_RANK.
             * @memberof S2C
             * @interface ISC_RANK_GET_RANK
             * @property {Object.<string,S2C.IRankInfo>|null} [ranks] SC_RANK_GET_RANK ranks
             */
    
            /**
             * Constructs a new SC_RANK_GET_RANK.
             * @memberof S2C
             * @classdesc Represents a SC_RANK_GET_RANK.
             * @implements ISC_RANK_GET_RANK
             * @constructor
             * @param {S2C.ISC_RANK_GET_RANK=} [properties] Properties to set
             */
            function SC_RANK_GET_RANK(properties) {
                this.ranks = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SC_RANK_GET_RANK ranks.
             * @member {Object.<string,S2C.IRankInfo>} ranks
             * @memberof S2C.SC_RANK_GET_RANK
             * @instance
             */
            SC_RANK_GET_RANK.prototype.ranks = $util.emptyObject;
    
            /**
             * Creates a new SC_RANK_GET_RANK instance using the specified properties.
             * @function create
             * @memberof S2C.SC_RANK_GET_RANK
             * @static
             * @param {S2C.ISC_RANK_GET_RANK=} [properties] Properties to set
             * @returns {S2C.SC_RANK_GET_RANK} SC_RANK_GET_RANK instance
             */
            SC_RANK_GET_RANK.create = function create(properties) {
                return new SC_RANK_GET_RANK(properties);
            };
    
            /**
             * Encodes the specified SC_RANK_GET_RANK message. Does not implicitly {@link S2C.SC_RANK_GET_RANK.verify|verify} messages.
             * @function encode
             * @memberof S2C.SC_RANK_GET_RANK
             * @static
             * @param {S2C.ISC_RANK_GET_RANK} message SC_RANK_GET_RANK message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SC_RANK_GET_RANK.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ranks != null && message.hasOwnProperty("ranks"))
                    for (var keys = Object.keys(message.ranks), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]);
                        $root.S2C.RankInfo.encode(message.ranks[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                return writer;
            };
    
            /**
             * Encodes the specified SC_RANK_GET_RANK message, length delimited. Does not implicitly {@link S2C.SC_RANK_GET_RANK.verify|verify} messages.
             * @function encodeDelimited
             * @memberof S2C.SC_RANK_GET_RANK
             * @static
             * @param {S2C.ISC_RANK_GET_RANK} message SC_RANK_GET_RANK message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SC_RANK_GET_RANK.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SC_RANK_GET_RANK message from the specified reader or buffer.
             * @function decode
             * @memberof S2C.SC_RANK_GET_RANK
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {S2C.SC_RANK_GET_RANK} SC_RANK_GET_RANK
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SC_RANK_GET_RANK.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.SC_RANK_GET_RANK(), key;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        reader.skip().pos++;
                        if (message.ranks === $util.emptyObject)
                            message.ranks = {};
                        key = reader.uint32();
                        reader.pos++;
                        message.ranks[key] = $root.S2C.RankInfo.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a SC_RANK_GET_RANK message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof S2C.SC_RANK_GET_RANK
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {S2C.SC_RANK_GET_RANK} SC_RANK_GET_RANK
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SC_RANK_GET_RANK.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SC_RANK_GET_RANK message.
             * @function verify
             * @memberof S2C.SC_RANK_GET_RANK
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SC_RANK_GET_RANK.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.ranks != null && message.hasOwnProperty("ranks")) {
                    if (!$util.isObject(message.ranks))
                        return "ranks: object expected";
                    var key = Object.keys(message.ranks);
                    for (var i = 0; i < key.length; ++i) {
                        if (!$util.key32Re.test(key[i]))
                            return "ranks: integer key{k:uint32} expected";
                        {
                            var error = $root.S2C.RankInfo.verify(message.ranks[key[i]]);
                            if (error)
                                return "ranks." + error;
                        }
                    }
                }
                return null;
            };
    
            /**
             * Creates a SC_RANK_GET_RANK message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof S2C.SC_RANK_GET_RANK
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {S2C.SC_RANK_GET_RANK} SC_RANK_GET_RANK
             */
            SC_RANK_GET_RANK.fromObject = function fromObject(object) {
                if (object instanceof $root.S2C.SC_RANK_GET_RANK)
                    return object;
                var message = new $root.S2C.SC_RANK_GET_RANK();
                if (object.ranks) {
                    if (typeof object.ranks !== "object")
                        throw TypeError(".S2C.SC_RANK_GET_RANK.ranks: object expected");
                    message.ranks = {};
                    for (var keys = Object.keys(object.ranks), i = 0; i < keys.length; ++i) {
                        if (typeof object.ranks[keys[i]] !== "object")
                            throw TypeError(".S2C.SC_RANK_GET_RANK.ranks: object expected");
                        message.ranks[keys[i]] = $root.S2C.RankInfo.fromObject(object.ranks[keys[i]]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a SC_RANK_GET_RANK message. Also converts values to other types if specified.
             * @function toObject
             * @memberof S2C.SC_RANK_GET_RANK
             * @static
             * @param {S2C.SC_RANK_GET_RANK} message SC_RANK_GET_RANK
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SC_RANK_GET_RANK.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.ranks = {};
                var keys2;
                if (message.ranks && (keys2 = Object.keys(message.ranks)).length) {
                    object.ranks = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.ranks[keys2[j]] = $root.S2C.RankInfo.toObject(message.ranks[keys2[j]], options);
                }
                return object;
            };
    
            /**
             * Converts this SC_RANK_GET_RANK to JSON.
             * @function toJSON
             * @memberof S2C.SC_RANK_GET_RANK
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SC_RANK_GET_RANK.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return SC_RANK_GET_RANK;
        })();
    
        S2C.Friend = (function() {
    
            /**
             * Properties of a Friend.
             * @memberof S2C
             * @interface IFriend
             * @property {number|null} [uid] Friend uid
             * @property {number|null} [state] Friend state
             */
    
            /**
             * Constructs a new Friend.
             * @memberof S2C
             * @classdesc Represents a Friend.
             * @implements IFriend
             * @constructor
             * @param {S2C.IFriend=} [properties] Properties to set
             */
            function Friend(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Friend uid.
             * @member {number} uid
             * @memberof S2C.Friend
             * @instance
             */
            Friend.prototype.uid = 0;
    
            /**
             * Friend state.
             * @member {number} state
             * @memberof S2C.Friend
             * @instance
             */
            Friend.prototype.state = 0;
    
            /**
             * Creates a new Friend instance using the specified properties.
             * @function create
             * @memberof S2C.Friend
             * @static
             * @param {S2C.IFriend=} [properties] Properties to set
             * @returns {S2C.Friend} Friend instance
             */
            Friend.create = function create(properties) {
                return new Friend(properties);
            };
    
            /**
             * Encodes the specified Friend message. Does not implicitly {@link S2C.Friend.verify|verify} messages.
             * @function encode
             * @memberof S2C.Friend
             * @static
             * @param {S2C.IFriend} message Friend message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Friend.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uid != null && message.hasOwnProperty("uid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
                if (message.state != null && message.hasOwnProperty("state"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.state);
                return writer;
            };
    
            /**
             * Encodes the specified Friend message, length delimited. Does not implicitly {@link S2C.Friend.verify|verify} messages.
             * @function encodeDelimited
             * @memberof S2C.Friend
             * @static
             * @param {S2C.IFriend} message Friend message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Friend.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Friend message from the specified reader or buffer.
             * @function decode
             * @memberof S2C.Friend
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {S2C.Friend} Friend
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Friend.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.Friend();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.uid = reader.uint32();
                        break;
                    case 2:
                        message.state = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Friend message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof S2C.Friend
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {S2C.Friend} Friend
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Friend.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Friend message.
             * @function verify
             * @memberof S2C.Friend
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Friend.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uid != null && message.hasOwnProperty("uid"))
                    if (!$util.isInteger(message.uid))
                        return "uid: integer expected";
                if (message.state != null && message.hasOwnProperty("state"))
                    if (!$util.isInteger(message.state))
                        return "state: integer expected";
                return null;
            };
    
            /**
             * Creates a Friend message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof S2C.Friend
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {S2C.Friend} Friend
             */
            Friend.fromObject = function fromObject(object) {
                if (object instanceof $root.S2C.Friend)
                    return object;
                var message = new $root.S2C.Friend();
                if (object.uid != null)
                    message.uid = object.uid >>> 0;
                if (object.state != null)
                    message.state = object.state >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a Friend message. Also converts values to other types if specified.
             * @function toObject
             * @memberof S2C.Friend
             * @static
             * @param {S2C.Friend} message Friend
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Friend.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.uid = 0;
                    object.state = 0;
                }
                if (message.uid != null && message.hasOwnProperty("uid"))
                    object.uid = message.uid;
                if (message.state != null && message.hasOwnProperty("state"))
                    object.state = message.state;
                return object;
            };
    
            /**
             * Converts this Friend to JSON.
             * @function toJSON
             * @memberof S2C.Friend
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Friend.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Friend;
        })();
    
        S2C.SC_UPDATE_FRIEND = (function() {
    
            /**
             * Properties of a SC_UPDATE_FRIEND.
             * @memberof S2C
             * @interface ISC_UPDATE_FRIEND
             * @property {Object.<string,S2C.IFriend>|null} [friends] SC_UPDATE_FRIEND friends
             */
    
            /**
             * Constructs a new SC_UPDATE_FRIEND.
             * @memberof S2C
             * @classdesc Represents a SC_UPDATE_FRIEND.
             * @implements ISC_UPDATE_FRIEND
             * @constructor
             * @param {S2C.ISC_UPDATE_FRIEND=} [properties] Properties to set
             */
            function SC_UPDATE_FRIEND(properties) {
                this.friends = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SC_UPDATE_FRIEND friends.
             * @member {Object.<string,S2C.IFriend>} friends
             * @memberof S2C.SC_UPDATE_FRIEND
             * @instance
             */
            SC_UPDATE_FRIEND.prototype.friends = $util.emptyObject;
    
            /**
             * Creates a new SC_UPDATE_FRIEND instance using the specified properties.
             * @function create
             * @memberof S2C.SC_UPDATE_FRIEND
             * @static
             * @param {S2C.ISC_UPDATE_FRIEND=} [properties] Properties to set
             * @returns {S2C.SC_UPDATE_FRIEND} SC_UPDATE_FRIEND instance
             */
            SC_UPDATE_FRIEND.create = function create(properties) {
                return new SC_UPDATE_FRIEND(properties);
            };
    
            /**
             * Encodes the specified SC_UPDATE_FRIEND message. Does not implicitly {@link S2C.SC_UPDATE_FRIEND.verify|verify} messages.
             * @function encode
             * @memberof S2C.SC_UPDATE_FRIEND
             * @static
             * @param {S2C.ISC_UPDATE_FRIEND} message SC_UPDATE_FRIEND message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SC_UPDATE_FRIEND.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.friends != null && message.hasOwnProperty("friends"))
                    for (var keys = Object.keys(message.friends), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                        $root.S2C.Friend.encode(message.friends[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                return writer;
            };
    
            /**
             * Encodes the specified SC_UPDATE_FRIEND message, length delimited. Does not implicitly {@link S2C.SC_UPDATE_FRIEND.verify|verify} messages.
             * @function encodeDelimited
             * @memberof S2C.SC_UPDATE_FRIEND
             * @static
             * @param {S2C.ISC_UPDATE_FRIEND} message SC_UPDATE_FRIEND message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SC_UPDATE_FRIEND.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SC_UPDATE_FRIEND message from the specified reader or buffer.
             * @function decode
             * @memberof S2C.SC_UPDATE_FRIEND
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {S2C.SC_UPDATE_FRIEND} SC_UPDATE_FRIEND
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SC_UPDATE_FRIEND.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.SC_UPDATE_FRIEND(), key;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        reader.skip().pos++;
                        if (message.friends === $util.emptyObject)
                            message.friends = {};
                        key = reader.int32();
                        reader.pos++;
                        message.friends[key] = $root.S2C.Friend.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a SC_UPDATE_FRIEND message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof S2C.SC_UPDATE_FRIEND
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {S2C.SC_UPDATE_FRIEND} SC_UPDATE_FRIEND
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SC_UPDATE_FRIEND.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SC_UPDATE_FRIEND message.
             * @function verify
             * @memberof S2C.SC_UPDATE_FRIEND
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SC_UPDATE_FRIEND.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.friends != null && message.hasOwnProperty("friends")) {
                    if (!$util.isObject(message.friends))
                        return "friends: object expected";
                    var key = Object.keys(message.friends);
                    for (var i = 0; i < key.length; ++i) {
                        if (!$util.key32Re.test(key[i]))
                            return "friends: integer key{k:int32} expected";
                        {
                            var error = $root.S2C.Friend.verify(message.friends[key[i]]);
                            if (error)
                                return "friends." + error;
                        }
                    }
                }
                return null;
            };
    
            /**
             * Creates a SC_UPDATE_FRIEND message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof S2C.SC_UPDATE_FRIEND
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {S2C.SC_UPDATE_FRIEND} SC_UPDATE_FRIEND
             */
            SC_UPDATE_FRIEND.fromObject = function fromObject(object) {
                if (object instanceof $root.S2C.SC_UPDATE_FRIEND)
                    return object;
                var message = new $root.S2C.SC_UPDATE_FRIEND();
                if (object.friends) {
                    if (typeof object.friends !== "object")
                        throw TypeError(".S2C.SC_UPDATE_FRIEND.friends: object expected");
                    message.friends = {};
                    for (var keys = Object.keys(object.friends), i = 0; i < keys.length; ++i) {
                        if (typeof object.friends[keys[i]] !== "object")
                            throw TypeError(".S2C.SC_UPDATE_FRIEND.friends: object expected");
                        message.friends[keys[i]] = $root.S2C.Friend.fromObject(object.friends[keys[i]]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a SC_UPDATE_FRIEND message. Also converts values to other types if specified.
             * @function toObject
             * @memberof S2C.SC_UPDATE_FRIEND
             * @static
             * @param {S2C.SC_UPDATE_FRIEND} message SC_UPDATE_FRIEND
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SC_UPDATE_FRIEND.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.friends = {};
                var keys2;
                if (message.friends && (keys2 = Object.keys(message.friends)).length) {
                    object.friends = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.friends[keys2[j]] = $root.S2C.Friend.toObject(message.friends[keys2[j]], options);
                }
                return object;
            };
    
            /**
             * Converts this SC_UPDATE_FRIEND to JSON.
             * @function toJSON
             * @memberof S2C.SC_UPDATE_FRIEND
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SC_UPDATE_FRIEND.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return SC_UPDATE_FRIEND;
        })();
    
        S2C.Mail = (function() {
    
            /**
             * Properties of a Mail.
             * @memberof S2C
             * @interface IMail
             * @property {number|null} [uid] Mail uid
             * @property {string|null} [title] Mail title
             * @property {string|null} [content] Mail content
             * @property {Array.<S2C.IReward>|null} [rwds] Mail rwds
             * @property {string|null} [senderName] Mail senderName
             * @property {number|null} [senderId] Mail senderId
             * @property {number|null} [createTme] Mail createTme
             * @property {number|null} [isNew] Mail isNew
             */
    
            /**
             * Constructs a new Mail.
             * @memberof S2C
             * @classdesc Represents a Mail.
             * @implements IMail
             * @constructor
             * @param {S2C.IMail=} [properties] Properties to set
             */
            function Mail(properties) {
                this.rwds = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Mail uid.
             * @member {number} uid
             * @memberof S2C.Mail
             * @instance
             */
            Mail.prototype.uid = 0;
    
            /**
             * Mail title.
             * @member {string} title
             * @memberof S2C.Mail
             * @instance
             */
            Mail.prototype.title = "";
    
            /**
             * Mail content.
             * @member {string} content
             * @memberof S2C.Mail
             * @instance
             */
            Mail.prototype.content = "";
    
            /**
             * Mail rwds.
             * @member {Array.<S2C.IReward>} rwds
             * @memberof S2C.Mail
             * @instance
             */
            Mail.prototype.rwds = $util.emptyArray;
    
            /**
             * Mail senderName.
             * @member {string} senderName
             * @memberof S2C.Mail
             * @instance
             */
            Mail.prototype.senderName = "";
    
            /**
             * Mail senderId.
             * @member {number} senderId
             * @memberof S2C.Mail
             * @instance
             */
            Mail.prototype.senderId = 0;
    
            /**
             * Mail createTme.
             * @member {number} createTme
             * @memberof S2C.Mail
             * @instance
             */
            Mail.prototype.createTme = 0;
    
            /**
             * Mail isNew.
             * @member {number} isNew
             * @memberof S2C.Mail
             * @instance
             */
            Mail.prototype.isNew = 0;
    
            /**
             * Creates a new Mail instance using the specified properties.
             * @function create
             * @memberof S2C.Mail
             * @static
             * @param {S2C.IMail=} [properties] Properties to set
             * @returns {S2C.Mail} Mail instance
             */
            Mail.create = function create(properties) {
                return new Mail(properties);
            };
    
            /**
             * Encodes the specified Mail message. Does not implicitly {@link S2C.Mail.verify|verify} messages.
             * @function encode
             * @memberof S2C.Mail
             * @static
             * @param {S2C.IMail} message Mail message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Mail.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uid != null && message.hasOwnProperty("uid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
                if (message.title != null && message.hasOwnProperty("title"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
                if (message.content != null && message.hasOwnProperty("content"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.content);
                if (message.rwds != null && message.rwds.length)
                    for (var i = 0; i < message.rwds.length; ++i)
                        $root.S2C.Reward.encode(message.rwds[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.senderName != null && message.hasOwnProperty("senderName"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.senderName);
                if (message.senderId != null && message.hasOwnProperty("senderId"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.senderId);
                if (message.createTme != null && message.hasOwnProperty("createTme"))
                    writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.createTme);
                if (message.isNew != null && message.hasOwnProperty("isNew"))
                    writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.isNew);
                return writer;
            };
    
            /**
             * Encodes the specified Mail message, length delimited. Does not implicitly {@link S2C.Mail.verify|verify} messages.
             * @function encodeDelimited
             * @memberof S2C.Mail
             * @static
             * @param {S2C.IMail} message Mail message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Mail.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Mail message from the specified reader or buffer.
             * @function decode
             * @memberof S2C.Mail
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {S2C.Mail} Mail
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Mail.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.Mail();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.uid = reader.uint32();
                        break;
                    case 2:
                        message.title = reader.string();
                        break;
                    case 3:
                        message.content = reader.string();
                        break;
                    case 4:
                        if (!(message.rwds && message.rwds.length))
                            message.rwds = [];
                        message.rwds.push($root.S2C.Reward.decode(reader, reader.uint32()));
                        break;
                    case 5:
                        message.senderName = reader.string();
                        break;
                    case 6:
                        message.senderId = reader.uint32();
                        break;
                    case 7:
                        message.createTme = reader.uint32();
                        break;
                    case 8:
                        message.isNew = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Mail message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof S2C.Mail
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {S2C.Mail} Mail
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Mail.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Mail message.
             * @function verify
             * @memberof S2C.Mail
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Mail.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uid != null && message.hasOwnProperty("uid"))
                    if (!$util.isInteger(message.uid))
                        return "uid: integer expected";
                if (message.title != null && message.hasOwnProperty("title"))
                    if (!$util.isString(message.title))
                        return "title: string expected";
                if (message.content != null && message.hasOwnProperty("content"))
                    if (!$util.isString(message.content))
                        return "content: string expected";
                if (message.rwds != null && message.hasOwnProperty("rwds")) {
                    if (!Array.isArray(message.rwds))
                        return "rwds: array expected";
                    for (var i = 0; i < message.rwds.length; ++i) {
                        var error = $root.S2C.Reward.verify(message.rwds[i]);
                        if (error)
                            return "rwds." + error;
                    }
                }
                if (message.senderName != null && message.hasOwnProperty("senderName"))
                    if (!$util.isString(message.senderName))
                        return "senderName: string expected";
                if (message.senderId != null && message.hasOwnProperty("senderId"))
                    if (!$util.isInteger(message.senderId))
                        return "senderId: integer expected";
                if (message.createTme != null && message.hasOwnProperty("createTme"))
                    if (!$util.isInteger(message.createTme))
                        return "createTme: integer expected";
                if (message.isNew != null && message.hasOwnProperty("isNew"))
                    if (!$util.isInteger(message.isNew))
                        return "isNew: integer expected";
                return null;
            };
    
            /**
             * Creates a Mail message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof S2C.Mail
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {S2C.Mail} Mail
             */
            Mail.fromObject = function fromObject(object) {
                if (object instanceof $root.S2C.Mail)
                    return object;
                var message = new $root.S2C.Mail();
                if (object.uid != null)
                    message.uid = object.uid >>> 0;
                if (object.title != null)
                    message.title = String(object.title);
                if (object.content != null)
                    message.content = String(object.content);
                if (object.rwds) {
                    if (!Array.isArray(object.rwds))
                        throw TypeError(".S2C.Mail.rwds: array expected");
                    message.rwds = [];
                    for (var i = 0; i < object.rwds.length; ++i) {
                        if (typeof object.rwds[i] !== "object")
                            throw TypeError(".S2C.Mail.rwds: object expected");
                        message.rwds[i] = $root.S2C.Reward.fromObject(object.rwds[i]);
                    }
                }
                if (object.senderName != null)
                    message.senderName = String(object.senderName);
                if (object.senderId != null)
                    message.senderId = object.senderId >>> 0;
                if (object.createTme != null)
                    message.createTme = object.createTme >>> 0;
                if (object.isNew != null)
                    message.isNew = object.isNew >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a Mail message. Also converts values to other types if specified.
             * @function toObject
             * @memberof S2C.Mail
             * @static
             * @param {S2C.Mail} message Mail
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Mail.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.rwds = [];
                if (options.defaults) {
                    object.uid = 0;
                    object.title = "";
                    object.content = "";
                    object.senderName = "";
                    object.senderId = 0;
                    object.createTme = 0;
                    object.isNew = 0;
                }
                if (message.uid != null && message.hasOwnProperty("uid"))
                    object.uid = message.uid;
                if (message.title != null && message.hasOwnProperty("title"))
                    object.title = message.title;
                if (message.content != null && message.hasOwnProperty("content"))
                    object.content = message.content;
                if (message.rwds && message.rwds.length) {
                    object.rwds = [];
                    for (var j = 0; j < message.rwds.length; ++j)
                        object.rwds[j] = $root.S2C.Reward.toObject(message.rwds[j], options);
                }
                if (message.senderName != null && message.hasOwnProperty("senderName"))
                    object.senderName = message.senderName;
                if (message.senderId != null && message.hasOwnProperty("senderId"))
                    object.senderId = message.senderId;
                if (message.createTme != null && message.hasOwnProperty("createTme"))
                    object.createTme = message.createTme;
                if (message.isNew != null && message.hasOwnProperty("isNew"))
                    object.isNew = message.isNew;
                return object;
            };
    
            /**
             * Converts this Mail to JSON.
             * @function toJSON
             * @memberof S2C.Mail
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Mail.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Mail;
        })();
    
        S2C.SC_UPDATE_MAIL = (function() {
    
            /**
             * Properties of a SC_UPDATE_MAIL.
             * @memberof S2C
             * @interface ISC_UPDATE_MAIL
             * @property {Object.<string,S2C.IMail>|null} [mails] SC_UPDATE_MAIL mails
             */
    
            /**
             * Constructs a new SC_UPDATE_MAIL.
             * @memberof S2C
             * @classdesc Represents a SC_UPDATE_MAIL.
             * @implements ISC_UPDATE_MAIL
             * @constructor
             * @param {S2C.ISC_UPDATE_MAIL=} [properties] Properties to set
             */
            function SC_UPDATE_MAIL(properties) {
                this.mails = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SC_UPDATE_MAIL mails.
             * @member {Object.<string,S2C.IMail>} mails
             * @memberof S2C.SC_UPDATE_MAIL
             * @instance
             */
            SC_UPDATE_MAIL.prototype.mails = $util.emptyObject;
    
            /**
             * Creates a new SC_UPDATE_MAIL instance using the specified properties.
             * @function create
             * @memberof S2C.SC_UPDATE_MAIL
             * @static
             * @param {S2C.ISC_UPDATE_MAIL=} [properties] Properties to set
             * @returns {S2C.SC_UPDATE_MAIL} SC_UPDATE_MAIL instance
             */
            SC_UPDATE_MAIL.create = function create(properties) {
                return new SC_UPDATE_MAIL(properties);
            };
    
            /**
             * Encodes the specified SC_UPDATE_MAIL message. Does not implicitly {@link S2C.SC_UPDATE_MAIL.verify|verify} messages.
             * @function encode
             * @memberof S2C.SC_UPDATE_MAIL
             * @static
             * @param {S2C.ISC_UPDATE_MAIL} message SC_UPDATE_MAIL message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SC_UPDATE_MAIL.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.mails != null && message.hasOwnProperty("mails"))
                    for (var keys = Object.keys(message.mails), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                        $root.S2C.Mail.encode(message.mails[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                return writer;
            };
    
            /**
             * Encodes the specified SC_UPDATE_MAIL message, length delimited. Does not implicitly {@link S2C.SC_UPDATE_MAIL.verify|verify} messages.
             * @function encodeDelimited
             * @memberof S2C.SC_UPDATE_MAIL
             * @static
             * @param {S2C.ISC_UPDATE_MAIL} message SC_UPDATE_MAIL message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SC_UPDATE_MAIL.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SC_UPDATE_MAIL message from the specified reader or buffer.
             * @function decode
             * @memberof S2C.SC_UPDATE_MAIL
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {S2C.SC_UPDATE_MAIL} SC_UPDATE_MAIL
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SC_UPDATE_MAIL.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.SC_UPDATE_MAIL(), key;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        reader.skip().pos++;
                        if (message.mails === $util.emptyObject)
                            message.mails = {};
                        key = reader.int32();
                        reader.pos++;
                        message.mails[key] = $root.S2C.Mail.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a SC_UPDATE_MAIL message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof S2C.SC_UPDATE_MAIL
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {S2C.SC_UPDATE_MAIL} SC_UPDATE_MAIL
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SC_UPDATE_MAIL.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SC_UPDATE_MAIL message.
             * @function verify
             * @memberof S2C.SC_UPDATE_MAIL
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SC_UPDATE_MAIL.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.mails != null && message.hasOwnProperty("mails")) {
                    if (!$util.isObject(message.mails))
                        return "mails: object expected";
                    var key = Object.keys(message.mails);
                    for (var i = 0; i < key.length; ++i) {
                        if (!$util.key32Re.test(key[i]))
                            return "mails: integer key{k:int32} expected";
                        {
                            var error = $root.S2C.Mail.verify(message.mails[key[i]]);
                            if (error)
                                return "mails." + error;
                        }
                    }
                }
                return null;
            };
    
            /**
             * Creates a SC_UPDATE_MAIL message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof S2C.SC_UPDATE_MAIL
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {S2C.SC_UPDATE_MAIL} SC_UPDATE_MAIL
             */
            SC_UPDATE_MAIL.fromObject = function fromObject(object) {
                if (object instanceof $root.S2C.SC_UPDATE_MAIL)
                    return object;
                var message = new $root.S2C.SC_UPDATE_MAIL();
                if (object.mails) {
                    if (typeof object.mails !== "object")
                        throw TypeError(".S2C.SC_UPDATE_MAIL.mails: object expected");
                    message.mails = {};
                    for (var keys = Object.keys(object.mails), i = 0; i < keys.length; ++i) {
                        if (typeof object.mails[keys[i]] !== "object")
                            throw TypeError(".S2C.SC_UPDATE_MAIL.mails: object expected");
                        message.mails[keys[i]] = $root.S2C.Mail.fromObject(object.mails[keys[i]]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a SC_UPDATE_MAIL message. Also converts values to other types if specified.
             * @function toObject
             * @memberof S2C.SC_UPDATE_MAIL
             * @static
             * @param {S2C.SC_UPDATE_MAIL} message SC_UPDATE_MAIL
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SC_UPDATE_MAIL.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.mails = {};
                var keys2;
                if (message.mails && (keys2 = Object.keys(message.mails)).length) {
                    object.mails = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.mails[keys2[j]] = $root.S2C.Mail.toObject(message.mails[keys2[j]], options);
                }
                return object;
            };
    
            /**
             * Converts this SC_UPDATE_MAIL to JSON.
             * @function toJSON
             * @memberof S2C.SC_UPDATE_MAIL
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SC_UPDATE_MAIL.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return SC_UPDATE_MAIL;
        })();
    
        S2C.Task = (function() {
    
            /**
             * Properties of a Task.
             * @memberof S2C
             * @interface ITask
             * @property {number|null} [uid] Task uid
             * @property {number|null} [id] Task id
             * @property {number|null} [state] Task state
             */
    
            /**
             * Constructs a new Task.
             * @memberof S2C
             * @classdesc Represents a Task.
             * @implements ITask
             * @constructor
             * @param {S2C.ITask=} [properties] Properties to set
             */
            function Task(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Task uid.
             * @member {number} uid
             * @memberof S2C.Task
             * @instance
             */
            Task.prototype.uid = 0;
    
            /**
             * Task id.
             * @member {number} id
             * @memberof S2C.Task
             * @instance
             */
            Task.prototype.id = 0;
    
            /**
             * Task state.
             * @member {number} state
             * @memberof S2C.Task
             * @instance
             */
            Task.prototype.state = 0;
    
            /**
             * Creates a new Task instance using the specified properties.
             * @function create
             * @memberof S2C.Task
             * @static
             * @param {S2C.ITask=} [properties] Properties to set
             * @returns {S2C.Task} Task instance
             */
            Task.create = function create(properties) {
                return new Task(properties);
            };
    
            /**
             * Encodes the specified Task message. Does not implicitly {@link S2C.Task.verify|verify} messages.
             * @function encode
             * @memberof S2C.Task
             * @static
             * @param {S2C.ITask} message Task message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Task.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uid != null && message.hasOwnProperty("uid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.id);
                if (message.state != null && message.hasOwnProperty("state"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.state);
                return writer;
            };
    
            /**
             * Encodes the specified Task message, length delimited. Does not implicitly {@link S2C.Task.verify|verify} messages.
             * @function encodeDelimited
             * @memberof S2C.Task
             * @static
             * @param {S2C.ITask} message Task message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Task.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Task message from the specified reader or buffer.
             * @function decode
             * @memberof S2C.Task
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {S2C.Task} Task
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Task.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.Task();
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
                        message.state = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Task message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof S2C.Task
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {S2C.Task} Task
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Task.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Task message.
             * @function verify
             * @memberof S2C.Task
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Task.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uid != null && message.hasOwnProperty("uid"))
                    if (!$util.isInteger(message.uid))
                        return "uid: integer expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.state != null && message.hasOwnProperty("state"))
                    if (!$util.isInteger(message.state))
                        return "state: integer expected";
                return null;
            };
    
            /**
             * Creates a Task message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof S2C.Task
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {S2C.Task} Task
             */
            Task.fromObject = function fromObject(object) {
                if (object instanceof $root.S2C.Task)
                    return object;
                var message = new $root.S2C.Task();
                if (object.uid != null)
                    message.uid = object.uid >>> 0;
                if (object.id != null)
                    message.id = object.id >>> 0;
                if (object.state != null)
                    message.state = object.state >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a Task message. Also converts values to other types if specified.
             * @function toObject
             * @memberof S2C.Task
             * @static
             * @param {S2C.Task} message Task
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Task.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.uid = 0;
                    object.id = 0;
                    object.state = 0;
                }
                if (message.uid != null && message.hasOwnProperty("uid"))
                    object.uid = message.uid;
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.state != null && message.hasOwnProperty("state"))
                    object.state = message.state;
                return object;
            };
    
            /**
             * Converts this Task to JSON.
             * @function toJSON
             * @memberof S2C.Task
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Task.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Task;
        })();
    
        S2C.SC_UPDATE_TASK = (function() {
    
            /**
             * Properties of a SC_UPDATE_TASK.
             * @memberof S2C
             * @interface ISC_UPDATE_TASK
             * @property {Object.<string,S2C.ITask>|null} [tasks] SC_UPDATE_TASK tasks
             */
    
            /**
             * Constructs a new SC_UPDATE_TASK.
             * @memberof S2C
             * @classdesc Represents a SC_UPDATE_TASK.
             * @implements ISC_UPDATE_TASK
             * @constructor
             * @param {S2C.ISC_UPDATE_TASK=} [properties] Properties to set
             */
            function SC_UPDATE_TASK(properties) {
                this.tasks = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SC_UPDATE_TASK tasks.
             * @member {Object.<string,S2C.ITask>} tasks
             * @memberof S2C.SC_UPDATE_TASK
             * @instance
             */
            SC_UPDATE_TASK.prototype.tasks = $util.emptyObject;
    
            /**
             * Creates a new SC_UPDATE_TASK instance using the specified properties.
             * @function create
             * @memberof S2C.SC_UPDATE_TASK
             * @static
             * @param {S2C.ISC_UPDATE_TASK=} [properties] Properties to set
             * @returns {S2C.SC_UPDATE_TASK} SC_UPDATE_TASK instance
             */
            SC_UPDATE_TASK.create = function create(properties) {
                return new SC_UPDATE_TASK(properties);
            };
    
            /**
             * Encodes the specified SC_UPDATE_TASK message. Does not implicitly {@link S2C.SC_UPDATE_TASK.verify|verify} messages.
             * @function encode
             * @memberof S2C.SC_UPDATE_TASK
             * @static
             * @param {S2C.ISC_UPDATE_TASK} message SC_UPDATE_TASK message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SC_UPDATE_TASK.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.tasks != null && message.hasOwnProperty("tasks"))
                    for (var keys = Object.keys(message.tasks), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                        $root.S2C.Task.encode(message.tasks[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                return writer;
            };
    
            /**
             * Encodes the specified SC_UPDATE_TASK message, length delimited. Does not implicitly {@link S2C.SC_UPDATE_TASK.verify|verify} messages.
             * @function encodeDelimited
             * @memberof S2C.SC_UPDATE_TASK
             * @static
             * @param {S2C.ISC_UPDATE_TASK} message SC_UPDATE_TASK message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SC_UPDATE_TASK.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SC_UPDATE_TASK message from the specified reader or buffer.
             * @function decode
             * @memberof S2C.SC_UPDATE_TASK
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {S2C.SC_UPDATE_TASK} SC_UPDATE_TASK
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SC_UPDATE_TASK.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.SC_UPDATE_TASK(), key;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        reader.skip().pos++;
                        if (message.tasks === $util.emptyObject)
                            message.tasks = {};
                        key = reader.int32();
                        reader.pos++;
                        message.tasks[key] = $root.S2C.Task.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a SC_UPDATE_TASK message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof S2C.SC_UPDATE_TASK
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {S2C.SC_UPDATE_TASK} SC_UPDATE_TASK
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SC_UPDATE_TASK.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SC_UPDATE_TASK message.
             * @function verify
             * @memberof S2C.SC_UPDATE_TASK
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SC_UPDATE_TASK.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.tasks != null && message.hasOwnProperty("tasks")) {
                    if (!$util.isObject(message.tasks))
                        return "tasks: object expected";
                    var key = Object.keys(message.tasks);
                    for (var i = 0; i < key.length; ++i) {
                        if (!$util.key32Re.test(key[i]))
                            return "tasks: integer key{k:int32} expected";
                        {
                            var error = $root.S2C.Task.verify(message.tasks[key[i]]);
                            if (error)
                                return "tasks." + error;
                        }
                    }
                }
                return null;
            };
    
            /**
             * Creates a SC_UPDATE_TASK message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof S2C.SC_UPDATE_TASK
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {S2C.SC_UPDATE_TASK} SC_UPDATE_TASK
             */
            SC_UPDATE_TASK.fromObject = function fromObject(object) {
                if (object instanceof $root.S2C.SC_UPDATE_TASK)
                    return object;
                var message = new $root.S2C.SC_UPDATE_TASK();
                if (object.tasks) {
                    if (typeof object.tasks !== "object")
                        throw TypeError(".S2C.SC_UPDATE_TASK.tasks: object expected");
                    message.tasks = {};
                    for (var keys = Object.keys(object.tasks), i = 0; i < keys.length; ++i) {
                        if (typeof object.tasks[keys[i]] !== "object")
                            throw TypeError(".S2C.SC_UPDATE_TASK.tasks: object expected");
                        message.tasks[keys[i]] = $root.S2C.Task.fromObject(object.tasks[keys[i]]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a SC_UPDATE_TASK message. Also converts values to other types if specified.
             * @function toObject
             * @memberof S2C.SC_UPDATE_TASK
             * @static
             * @param {S2C.SC_UPDATE_TASK} message SC_UPDATE_TASK
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SC_UPDATE_TASK.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.tasks = {};
                var keys2;
                if (message.tasks && (keys2 = Object.keys(message.tasks)).length) {
                    object.tasks = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.tasks[keys2[j]] = $root.S2C.Task.toObject(message.tasks[keys2[j]], options);
                }
                return object;
            };
    
            /**
             * Converts this SC_UPDATE_TASK to JSON.
             * @function toJSON
             * @memberof S2C.SC_UPDATE_TASK
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SC_UPDATE_TASK.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return SC_UPDATE_TASK;
        })();
    
        S2C.Reward = (function() {
    
            /**
             * Properties of a Reward.
             * @memberof S2C
             * @interface IReward
             * @property {number|Long|null} [gold] Reward gold
             * @property {number|null} [diamond] Reward diamond
             * @property {number|Long|null} [exp] Reward exp
             * @property {number|null} [vipExp] Reward vipExp
             * @property {Array.<number>|null} [heroes] Reward heroes
             * @property {Array.<number>|null} [equips] Reward equips
             * @property {Object.<string,number>|null} [items] Reward items
             */
    
            /**
             * Constructs a new Reward.
             * @memberof S2C
             * @classdesc Represents a Reward.
             * @implements IReward
             * @constructor
             * @param {S2C.IReward=} [properties] Properties to set
             */
            function Reward(properties) {
                this.heroes = [];
                this.equips = [];
                this.items = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Reward gold.
             * @member {number|Long} gold
             * @memberof S2C.Reward
             * @instance
             */
            Reward.prototype.gold = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Reward diamond.
             * @member {number} diamond
             * @memberof S2C.Reward
             * @instance
             */
            Reward.prototype.diamond = 0;
    
            /**
             * Reward exp.
             * @member {number|Long} exp
             * @memberof S2C.Reward
             * @instance
             */
            Reward.prototype.exp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Reward vipExp.
             * @member {number} vipExp
             * @memberof S2C.Reward
             * @instance
             */
            Reward.prototype.vipExp = 0;
    
            /**
             * Reward heroes.
             * @member {Array.<number>} heroes
             * @memberof S2C.Reward
             * @instance
             */
            Reward.prototype.heroes = $util.emptyArray;
    
            /**
             * Reward equips.
             * @member {Array.<number>} equips
             * @memberof S2C.Reward
             * @instance
             */
            Reward.prototype.equips = $util.emptyArray;
    
            /**
             * Reward items.
             * @member {Object.<string,number>} items
             * @memberof S2C.Reward
             * @instance
             */
            Reward.prototype.items = $util.emptyObject;
    
            /**
             * Creates a new Reward instance using the specified properties.
             * @function create
             * @memberof S2C.Reward
             * @static
             * @param {S2C.IReward=} [properties] Properties to set
             * @returns {S2C.Reward} Reward instance
             */
            Reward.create = function create(properties) {
                return new Reward(properties);
            };
    
            /**
             * Encodes the specified Reward message. Does not implicitly {@link S2C.Reward.verify|verify} messages.
             * @function encode
             * @memberof S2C.Reward
             * @static
             * @param {S2C.IReward} message Reward message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Reward.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.gold != null && message.hasOwnProperty("gold"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.gold);
                if (message.diamond != null && message.hasOwnProperty("diamond"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.diamond);
                if (message.exp != null && message.hasOwnProperty("exp"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.exp);
                if (message.vipExp != null && message.hasOwnProperty("vipExp"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.vipExp);
                if (message.heroes != null && message.heroes.length) {
                    writer.uint32(/* id 5, wireType 2 =*/42).fork();
                    for (var i = 0; i < message.heroes.length; ++i)
                        writer.uint32(message.heroes[i]);
                    writer.ldelim();
                }
                if (message.equips != null && message.equips.length) {
                    writer.uint32(/* id 6, wireType 2 =*/50).fork();
                    for (var i = 0; i < message.equips.length; ++i)
                        writer.uint32(message.equips[i]);
                    writer.ldelim();
                }
                if (message.items != null && message.hasOwnProperty("items"))
                    for (var keys = Object.keys(message.items), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 7, wireType 2 =*/58).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]).uint32(/* id 2, wireType 0 =*/16).uint32(message.items[keys[i]]).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified Reward message, length delimited. Does not implicitly {@link S2C.Reward.verify|verify} messages.
             * @function encodeDelimited
             * @memberof S2C.Reward
             * @static
             * @param {S2C.IReward} message Reward message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Reward.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Reward message from the specified reader or buffer.
             * @function decode
             * @memberof S2C.Reward
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {S2C.Reward} Reward
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Reward.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.Reward(), key;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.gold = reader.uint64();
                        break;
                    case 2:
                        message.diamond = reader.uint32();
                        break;
                    case 3:
                        message.exp = reader.uint64();
                        break;
                    case 4:
                        message.vipExp = reader.uint32();
                        break;
                    case 5:
                        if (!(message.heroes && message.heroes.length))
                            message.heroes = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.heroes.push(reader.uint32());
                        } else
                            message.heroes.push(reader.uint32());
                        break;
                    case 6:
                        if (!(message.equips && message.equips.length))
                            message.equips = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.equips.push(reader.uint32());
                        } else
                            message.equips.push(reader.uint32());
                        break;
                    case 7:
                        reader.skip().pos++;
                        if (message.items === $util.emptyObject)
                            message.items = {};
                        key = reader.uint32();
                        reader.pos++;
                        message.items[key] = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Reward message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof S2C.Reward
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {S2C.Reward} Reward
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Reward.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Reward message.
             * @function verify
             * @memberof S2C.Reward
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Reward.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.gold != null && message.hasOwnProperty("gold"))
                    if (!$util.isInteger(message.gold) && !(message.gold && $util.isInteger(message.gold.low) && $util.isInteger(message.gold.high)))
                        return "gold: integer|Long expected";
                if (message.diamond != null && message.hasOwnProperty("diamond"))
                    if (!$util.isInteger(message.diamond))
                        return "diamond: integer expected";
                if (message.exp != null && message.hasOwnProperty("exp"))
                    if (!$util.isInteger(message.exp) && !(message.exp && $util.isInteger(message.exp.low) && $util.isInteger(message.exp.high)))
                        return "exp: integer|Long expected";
                if (message.vipExp != null && message.hasOwnProperty("vipExp"))
                    if (!$util.isInteger(message.vipExp))
                        return "vipExp: integer expected";
                if (message.heroes != null && message.hasOwnProperty("heroes")) {
                    if (!Array.isArray(message.heroes))
                        return "heroes: array expected";
                    for (var i = 0; i < message.heroes.length; ++i)
                        if (!$util.isInteger(message.heroes[i]))
                            return "heroes: integer[] expected";
                }
                if (message.equips != null && message.hasOwnProperty("equips")) {
                    if (!Array.isArray(message.equips))
                        return "equips: array expected";
                    for (var i = 0; i < message.equips.length; ++i)
                        if (!$util.isInteger(message.equips[i]))
                            return "equips: integer[] expected";
                }
                if (message.items != null && message.hasOwnProperty("items")) {
                    if (!$util.isObject(message.items))
                        return "items: object expected";
                    var key = Object.keys(message.items);
                    for (var i = 0; i < key.length; ++i) {
                        if (!$util.key32Re.test(key[i]))
                            return "items: integer key{k:uint32} expected";
                        if (!$util.isInteger(message.items[key[i]]))
                            return "items: integer{k:uint32} expected";
                    }
                }
                return null;
            };
    
            /**
             * Creates a Reward message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof S2C.Reward
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {S2C.Reward} Reward
             */
            Reward.fromObject = function fromObject(object) {
                if (object instanceof $root.S2C.Reward)
                    return object;
                var message = new $root.S2C.Reward();
                if (object.gold != null)
                    if ($util.Long)
                        (message.gold = $util.Long.fromValue(object.gold)).unsigned = true;
                    else if (typeof object.gold === "string")
                        message.gold = parseInt(object.gold, 10);
                    else if (typeof object.gold === "number")
                        message.gold = object.gold;
                    else if (typeof object.gold === "object")
                        message.gold = new $util.LongBits(object.gold.low >>> 0, object.gold.high >>> 0).toNumber(true);
                if (object.diamond != null)
                    message.diamond = object.diamond >>> 0;
                if (object.exp != null)
                    if ($util.Long)
                        (message.exp = $util.Long.fromValue(object.exp)).unsigned = true;
                    else if (typeof object.exp === "string")
                        message.exp = parseInt(object.exp, 10);
                    else if (typeof object.exp === "number")
                        message.exp = object.exp;
                    else if (typeof object.exp === "object")
                        message.exp = new $util.LongBits(object.exp.low >>> 0, object.exp.high >>> 0).toNumber(true);
                if (object.vipExp != null)
                    message.vipExp = object.vipExp >>> 0;
                if (object.heroes) {
                    if (!Array.isArray(object.heroes))
                        throw TypeError(".S2C.Reward.heroes: array expected");
                    message.heroes = [];
                    for (var i = 0; i < object.heroes.length; ++i)
                        message.heroes[i] = object.heroes[i] >>> 0;
                }
                if (object.equips) {
                    if (!Array.isArray(object.equips))
                        throw TypeError(".S2C.Reward.equips: array expected");
                    message.equips = [];
                    for (var i = 0; i < object.equips.length; ++i)
                        message.equips[i] = object.equips[i] >>> 0;
                }
                if (object.items) {
                    if (typeof object.items !== "object")
                        throw TypeError(".S2C.Reward.items: object expected");
                    message.items = {};
                    for (var keys = Object.keys(object.items), i = 0; i < keys.length; ++i)
                        message.items[keys[i]] = object.items[keys[i]] >>> 0;
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Reward message. Also converts values to other types if specified.
             * @function toObject
             * @memberof S2C.Reward
             * @static
             * @param {S2C.Reward} message Reward
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Reward.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.heroes = [];
                    object.equips = [];
                }
                if (options.objects || options.defaults)
                    object.items = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.gold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.gold = options.longs === String ? "0" : 0;
                    object.diamond = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.exp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.exp = options.longs === String ? "0" : 0;
                    object.vipExp = 0;
                }
                if (message.gold != null && message.hasOwnProperty("gold"))
                    if (typeof message.gold === "number")
                        object.gold = options.longs === String ? String(message.gold) : message.gold;
                    else
                        object.gold = options.longs === String ? $util.Long.prototype.toString.call(message.gold) : options.longs === Number ? new $util.LongBits(message.gold.low >>> 0, message.gold.high >>> 0).toNumber(true) : message.gold;
                if (message.diamond != null && message.hasOwnProperty("diamond"))
                    object.diamond = message.diamond;
                if (message.exp != null && message.hasOwnProperty("exp"))
                    if (typeof message.exp === "number")
                        object.exp = options.longs === String ? String(message.exp) : message.exp;
                    else
                        object.exp = options.longs === String ? $util.Long.prototype.toString.call(message.exp) : options.longs === Number ? new $util.LongBits(message.exp.low >>> 0, message.exp.high >>> 0).toNumber(true) : message.exp;
                if (message.vipExp != null && message.hasOwnProperty("vipExp"))
                    object.vipExp = message.vipExp;
                if (message.heroes && message.heroes.length) {
                    object.heroes = [];
                    for (var j = 0; j < message.heroes.length; ++j)
                        object.heroes[j] = message.heroes[j];
                }
                if (message.equips && message.equips.length) {
                    object.equips = [];
                    for (var j = 0; j < message.equips.length; ++j)
                        object.equips[j] = message.equips[j];
                }
                var keys2;
                if (message.items && (keys2 = Object.keys(message.items)).length) {
                    object.items = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.items[keys2[j]] = message.items[keys2[j]];
                }
                return object;
            };
    
            /**
             * Converts this Reward to JSON.
             * @function toJSON
             * @memberof S2C.Reward
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Reward.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Reward;
        })();
    
        S2C.SC_GET_REWARD = (function() {
    
            /**
             * Properties of a SC_GET_REWARD.
             * @memberof S2C
             * @interface ISC_GET_REWARD
             * @property {S2C.IReward|null} [reward] SC_GET_REWARD reward
             */
    
            /**
             * Constructs a new SC_GET_REWARD.
             * @memberof S2C
             * @classdesc Represents a SC_GET_REWARD.
             * @implements ISC_GET_REWARD
             * @constructor
             * @param {S2C.ISC_GET_REWARD=} [properties] Properties to set
             */
            function SC_GET_REWARD(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SC_GET_REWARD reward.
             * @member {S2C.IReward|null|undefined} reward
             * @memberof S2C.SC_GET_REWARD
             * @instance
             */
            SC_GET_REWARD.prototype.reward = null;
    
            /**
             * Creates a new SC_GET_REWARD instance using the specified properties.
             * @function create
             * @memberof S2C.SC_GET_REWARD
             * @static
             * @param {S2C.ISC_GET_REWARD=} [properties] Properties to set
             * @returns {S2C.SC_GET_REWARD} SC_GET_REWARD instance
             */
            SC_GET_REWARD.create = function create(properties) {
                return new SC_GET_REWARD(properties);
            };
    
            /**
             * Encodes the specified SC_GET_REWARD message. Does not implicitly {@link S2C.SC_GET_REWARD.verify|verify} messages.
             * @function encode
             * @memberof S2C.SC_GET_REWARD
             * @static
             * @param {S2C.ISC_GET_REWARD} message SC_GET_REWARD message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SC_GET_REWARD.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.reward != null && message.hasOwnProperty("reward"))
                    $root.S2C.Reward.encode(message.reward, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified SC_GET_REWARD message, length delimited. Does not implicitly {@link S2C.SC_GET_REWARD.verify|verify} messages.
             * @function encodeDelimited
             * @memberof S2C.SC_GET_REWARD
             * @static
             * @param {S2C.ISC_GET_REWARD} message SC_GET_REWARD message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SC_GET_REWARD.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SC_GET_REWARD message from the specified reader or buffer.
             * @function decode
             * @memberof S2C.SC_GET_REWARD
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {S2C.SC_GET_REWARD} SC_GET_REWARD
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SC_GET_REWARD.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.SC_GET_REWARD();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.reward = $root.S2C.Reward.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a SC_GET_REWARD message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof S2C.SC_GET_REWARD
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {S2C.SC_GET_REWARD} SC_GET_REWARD
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SC_GET_REWARD.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SC_GET_REWARD message.
             * @function verify
             * @memberof S2C.SC_GET_REWARD
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SC_GET_REWARD.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.reward != null && message.hasOwnProperty("reward")) {
                    var error = $root.S2C.Reward.verify(message.reward);
                    if (error)
                        return "reward." + error;
                }
                return null;
            };
    
            /**
             * Creates a SC_GET_REWARD message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof S2C.SC_GET_REWARD
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {S2C.SC_GET_REWARD} SC_GET_REWARD
             */
            SC_GET_REWARD.fromObject = function fromObject(object) {
                if (object instanceof $root.S2C.SC_GET_REWARD)
                    return object;
                var message = new $root.S2C.SC_GET_REWARD();
                if (object.reward != null) {
                    if (typeof object.reward !== "object")
                        throw TypeError(".S2C.SC_GET_REWARD.reward: object expected");
                    message.reward = $root.S2C.Reward.fromObject(object.reward);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a SC_GET_REWARD message. Also converts values to other types if specified.
             * @function toObject
             * @memberof S2C.SC_GET_REWARD
             * @static
             * @param {S2C.SC_GET_REWARD} message SC_GET_REWARD
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SC_GET_REWARD.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.reward = null;
                if (message.reward != null && message.hasOwnProperty("reward"))
                    object.reward = $root.S2C.Reward.toObject(message.reward, options);
                return object;
            };
    
            /**
             * Converts this SC_GET_REWARD to JSON.
             * @function toJSON
             * @memberof S2C.SC_GET_REWARD
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SC_GET_REWARD.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return SC_GET_REWARD;
        })();
    
        S2C.Hero = (function() {
    
            /**
             * Properties of a Hero.
             * @memberof S2C
             * @interface IHero
             * @property {number|null} [uid] Hero uid
             * @property {number|null} [id] Hero id
             * @property {number|null} [combat] Hero combat
             * @property {number|null} [lvl] Hero lvl
             */
    
            /**
             * Constructs a new Hero.
             * @memberof S2C
             * @classdesc Represents a Hero.
             * @implements IHero
             * @constructor
             * @param {S2C.IHero=} [properties] Properties to set
             */
            function Hero(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Hero uid.
             * @member {number} uid
             * @memberof S2C.Hero
             * @instance
             */
            Hero.prototype.uid = 0;
    
            /**
             * Hero id.
             * @member {number} id
             * @memberof S2C.Hero
             * @instance
             */
            Hero.prototype.id = 0;
    
            /**
             * Hero combat.
             * @member {number} combat
             * @memberof S2C.Hero
             * @instance
             */
            Hero.prototype.combat = 0;
    
            /**
             * Hero lvl.
             * @member {number} lvl
             * @memberof S2C.Hero
             * @instance
             */
            Hero.prototype.lvl = 0;
    
            /**
             * Creates a new Hero instance using the specified properties.
             * @function create
             * @memberof S2C.Hero
             * @static
             * @param {S2C.IHero=} [properties] Properties to set
             * @returns {S2C.Hero} Hero instance
             */
            Hero.create = function create(properties) {
                return new Hero(properties);
            };
    
            /**
             * Encodes the specified Hero message. Does not implicitly {@link S2C.Hero.verify|verify} messages.
             * @function encode
             * @memberof S2C.Hero
             * @static
             * @param {S2C.IHero} message Hero message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Hero.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uid != null && message.hasOwnProperty("uid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.id);
                if (message.combat != null && message.hasOwnProperty("combat"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.combat);
                if (message.lvl != null && message.hasOwnProperty("lvl"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.lvl);
                return writer;
            };
    
            /**
             * Encodes the specified Hero message, length delimited. Does not implicitly {@link S2C.Hero.verify|verify} messages.
             * @function encodeDelimited
             * @memberof S2C.Hero
             * @static
             * @param {S2C.IHero} message Hero message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Hero.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Hero message from the specified reader or buffer.
             * @function decode
             * @memberof S2C.Hero
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {S2C.Hero} Hero
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Hero.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.Hero();
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
                        message.combat = reader.uint32();
                        break;
                    case 4:
                        message.lvl = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Hero message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof S2C.Hero
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {S2C.Hero} Hero
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Hero.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Hero message.
             * @function verify
             * @memberof S2C.Hero
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Hero.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uid != null && message.hasOwnProperty("uid"))
                    if (!$util.isInteger(message.uid))
                        return "uid: integer expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.combat != null && message.hasOwnProperty("combat"))
                    if (!$util.isInteger(message.combat))
                        return "combat: integer expected";
                if (message.lvl != null && message.hasOwnProperty("lvl"))
                    if (!$util.isInteger(message.lvl))
                        return "lvl: integer expected";
                return null;
            };
    
            /**
             * Creates a Hero message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof S2C.Hero
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {S2C.Hero} Hero
             */
            Hero.fromObject = function fromObject(object) {
                if (object instanceof $root.S2C.Hero)
                    return object;
                var message = new $root.S2C.Hero();
                if (object.uid != null)
                    message.uid = object.uid >>> 0;
                if (object.id != null)
                    message.id = object.id >>> 0;
                if (object.combat != null)
                    message.combat = object.combat >>> 0;
                if (object.lvl != null)
                    message.lvl = object.lvl >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a Hero message. Also converts values to other types if specified.
             * @function toObject
             * @memberof S2C.Hero
             * @static
             * @param {S2C.Hero} message Hero
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Hero.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.uid = 0;
                    object.id = 0;
                    object.combat = 0;
                    object.lvl = 0;
                }
                if (message.uid != null && message.hasOwnProperty("uid"))
                    object.uid = message.uid;
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.combat != null && message.hasOwnProperty("combat"))
                    object.combat = message.combat;
                if (message.lvl != null && message.hasOwnProperty("lvl"))
                    object.lvl = message.lvl;
                return object;
            };
    
            /**
             * Converts this Hero to JSON.
             * @function toJSON
             * @memberof S2C.Hero
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Hero.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Hero;
        })();
    
        S2C.SC_UPDATE_HERO = (function() {
    
            /**
             * Properties of a SC_UPDATE_HERO.
             * @memberof S2C
             * @interface ISC_UPDATE_HERO
             * @property {Object.<string,S2C.IHero>|null} [heroes] SC_UPDATE_HERO heroes
             */
    
            /**
             * Constructs a new SC_UPDATE_HERO.
             * @memberof S2C
             * @classdesc Represents a SC_UPDATE_HERO.
             * @implements ISC_UPDATE_HERO
             * @constructor
             * @param {S2C.ISC_UPDATE_HERO=} [properties] Properties to set
             */
            function SC_UPDATE_HERO(properties) {
                this.heroes = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SC_UPDATE_HERO heroes.
             * @member {Object.<string,S2C.IHero>} heroes
             * @memberof S2C.SC_UPDATE_HERO
             * @instance
             */
            SC_UPDATE_HERO.prototype.heroes = $util.emptyObject;
    
            /**
             * Creates a new SC_UPDATE_HERO instance using the specified properties.
             * @function create
             * @memberof S2C.SC_UPDATE_HERO
             * @static
             * @param {S2C.ISC_UPDATE_HERO=} [properties] Properties to set
             * @returns {S2C.SC_UPDATE_HERO} SC_UPDATE_HERO instance
             */
            SC_UPDATE_HERO.create = function create(properties) {
                return new SC_UPDATE_HERO(properties);
            };
    
            /**
             * Encodes the specified SC_UPDATE_HERO message. Does not implicitly {@link S2C.SC_UPDATE_HERO.verify|verify} messages.
             * @function encode
             * @memberof S2C.SC_UPDATE_HERO
             * @static
             * @param {S2C.ISC_UPDATE_HERO} message SC_UPDATE_HERO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SC_UPDATE_HERO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.heroes != null && message.hasOwnProperty("heroes"))
                    for (var keys = Object.keys(message.heroes), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                        $root.S2C.Hero.encode(message.heroes[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                return writer;
            };
    
            /**
             * Encodes the specified SC_UPDATE_HERO message, length delimited. Does not implicitly {@link S2C.SC_UPDATE_HERO.verify|verify} messages.
             * @function encodeDelimited
             * @memberof S2C.SC_UPDATE_HERO
             * @static
             * @param {S2C.ISC_UPDATE_HERO} message SC_UPDATE_HERO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SC_UPDATE_HERO.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SC_UPDATE_HERO message from the specified reader or buffer.
             * @function decode
             * @memberof S2C.SC_UPDATE_HERO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {S2C.SC_UPDATE_HERO} SC_UPDATE_HERO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SC_UPDATE_HERO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.SC_UPDATE_HERO(), key;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        reader.skip().pos++;
                        if (message.heroes === $util.emptyObject)
                            message.heroes = {};
                        key = reader.int32();
                        reader.pos++;
                        message.heroes[key] = $root.S2C.Hero.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a SC_UPDATE_HERO message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof S2C.SC_UPDATE_HERO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {S2C.SC_UPDATE_HERO} SC_UPDATE_HERO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SC_UPDATE_HERO.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SC_UPDATE_HERO message.
             * @function verify
             * @memberof S2C.SC_UPDATE_HERO
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SC_UPDATE_HERO.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.heroes != null && message.hasOwnProperty("heroes")) {
                    if (!$util.isObject(message.heroes))
                        return "heroes: object expected";
                    var key = Object.keys(message.heroes);
                    for (var i = 0; i < key.length; ++i) {
                        if (!$util.key32Re.test(key[i]))
                            return "heroes: integer key{k:int32} expected";
                        {
                            var error = $root.S2C.Hero.verify(message.heroes[key[i]]);
                            if (error)
                                return "heroes." + error;
                        }
                    }
                }
                return null;
            };
    
            /**
             * Creates a SC_UPDATE_HERO message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof S2C.SC_UPDATE_HERO
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {S2C.SC_UPDATE_HERO} SC_UPDATE_HERO
             */
            SC_UPDATE_HERO.fromObject = function fromObject(object) {
                if (object instanceof $root.S2C.SC_UPDATE_HERO)
                    return object;
                var message = new $root.S2C.SC_UPDATE_HERO();
                if (object.heroes) {
                    if (typeof object.heroes !== "object")
                        throw TypeError(".S2C.SC_UPDATE_HERO.heroes: object expected");
                    message.heroes = {};
                    for (var keys = Object.keys(object.heroes), i = 0; i < keys.length; ++i) {
                        if (typeof object.heroes[keys[i]] !== "object")
                            throw TypeError(".S2C.SC_UPDATE_HERO.heroes: object expected");
                        message.heroes[keys[i]] = $root.S2C.Hero.fromObject(object.heroes[keys[i]]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a SC_UPDATE_HERO message. Also converts values to other types if specified.
             * @function toObject
             * @memberof S2C.SC_UPDATE_HERO
             * @static
             * @param {S2C.SC_UPDATE_HERO} message SC_UPDATE_HERO
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SC_UPDATE_HERO.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.heroes = {};
                var keys2;
                if (message.heroes && (keys2 = Object.keys(message.heroes)).length) {
                    object.heroes = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.heroes[keys2[j]] = $root.S2C.Hero.toObject(message.heroes[keys2[j]], options);
                }
                return object;
            };
    
            /**
             * Converts this SC_UPDATE_HERO to JSON.
             * @function toJSON
             * @memberof S2C.SC_UPDATE_HERO
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SC_UPDATE_HERO.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return SC_UPDATE_HERO;
        })();
    
        S2C.Equip = (function() {
    
            /**
             * Properties of an Equip.
             * @memberof S2C
             * @interface IEquip
             * @property {number|null} [uid] Equip uid
             * @property {number|null} [id] Equip id
             * @property {number|null} [lvl] Equip lvl
             * @property {number|null} [rank] Equip rank
             * @property {number|null} [star] Equip star
             */
    
            /**
             * Constructs a new Equip.
             * @memberof S2C
             * @classdesc Represents an Equip.
             * @implements IEquip
             * @constructor
             * @param {S2C.IEquip=} [properties] Properties to set
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
             * @memberof S2C.Equip
             * @instance
             */
            Equip.prototype.uid = 0;
    
            /**
             * Equip id.
             * @member {number} id
             * @memberof S2C.Equip
             * @instance
             */
            Equip.prototype.id = 0;
    
            /**
             * Equip lvl.
             * @member {number} lvl
             * @memberof S2C.Equip
             * @instance
             */
            Equip.prototype.lvl = 0;
    
            /**
             * Equip rank.
             * @member {number} rank
             * @memberof S2C.Equip
             * @instance
             */
            Equip.prototype.rank = 0;
    
            /**
             * Equip star.
             * @member {number} star
             * @memberof S2C.Equip
             * @instance
             */
            Equip.prototype.star = 0;
    
            /**
             * Creates a new Equip instance using the specified properties.
             * @function create
             * @memberof S2C.Equip
             * @static
             * @param {S2C.IEquip=} [properties] Properties to set
             * @returns {S2C.Equip} Equip instance
             */
            Equip.create = function create(properties) {
                return new Equip(properties);
            };
    
            /**
             * Encodes the specified Equip message. Does not implicitly {@link S2C.Equip.verify|verify} messages.
             * @function encode
             * @memberof S2C.Equip
             * @static
             * @param {S2C.IEquip} message Equip message or plain object to encode
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
                if (message.lvl != null && message.hasOwnProperty("lvl"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.lvl);
                if (message.rank != null && message.hasOwnProperty("rank"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.rank);
                if (message.star != null && message.hasOwnProperty("star"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.star);
                return writer;
            };
    
            /**
             * Encodes the specified Equip message, length delimited. Does not implicitly {@link S2C.Equip.verify|verify} messages.
             * @function encodeDelimited
             * @memberof S2C.Equip
             * @static
             * @param {S2C.IEquip} message Equip message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Equip.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an Equip message from the specified reader or buffer.
             * @function decode
             * @memberof S2C.Equip
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {S2C.Equip} Equip
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Equip.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.Equip();
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
                        message.lvl = reader.uint32();
                        break;
                    case 4:
                        message.rank = reader.uint32();
                        break;
                    case 5:
                        message.star = reader.uint32();
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
             * @memberof S2C.Equip
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {S2C.Equip} Equip
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
             * @memberof S2C.Equip
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
                if (message.lvl != null && message.hasOwnProperty("lvl"))
                    if (!$util.isInteger(message.lvl))
                        return "lvl: integer expected";
                if (message.rank != null && message.hasOwnProperty("rank"))
                    if (!$util.isInteger(message.rank))
                        return "rank: integer expected";
                if (message.star != null && message.hasOwnProperty("star"))
                    if (!$util.isInteger(message.star))
                        return "star: integer expected";
                return null;
            };
    
            /**
             * Creates an Equip message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof S2C.Equip
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {S2C.Equip} Equip
             */
            Equip.fromObject = function fromObject(object) {
                if (object instanceof $root.S2C.Equip)
                    return object;
                var message = new $root.S2C.Equip();
                if (object.uid != null)
                    message.uid = object.uid >>> 0;
                if (object.id != null)
                    message.id = object.id >>> 0;
                if (object.lvl != null)
                    message.lvl = object.lvl >>> 0;
                if (object.rank != null)
                    message.rank = object.rank >>> 0;
                if (object.star != null)
                    message.star = object.star >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from an Equip message. Also converts values to other types if specified.
             * @function toObject
             * @memberof S2C.Equip
             * @static
             * @param {S2C.Equip} message Equip
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
                    object.lvl = 0;
                    object.rank = 0;
                    object.star = 0;
                }
                if (message.uid != null && message.hasOwnProperty("uid"))
                    object.uid = message.uid;
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.lvl != null && message.hasOwnProperty("lvl"))
                    object.lvl = message.lvl;
                if (message.rank != null && message.hasOwnProperty("rank"))
                    object.rank = message.rank;
                if (message.star != null && message.hasOwnProperty("star"))
                    object.star = message.star;
                return object;
            };
    
            /**
             * Converts this Equip to JSON.
             * @function toJSON
             * @memberof S2C.Equip
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Equip.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Equip;
        })();
    
        S2C.SC_UPDATE_EQUIP = (function() {
    
            /**
             * Properties of a SC_UPDATE_EQUIP.
             * @memberof S2C
             * @interface ISC_UPDATE_EQUIP
             * @property {Object.<string,S2C.IEquip>|null} [equips] SC_UPDATE_EQUIP equips
             */
    
            /**
             * Constructs a new SC_UPDATE_EQUIP.
             * @memberof S2C
             * @classdesc Represents a SC_UPDATE_EQUIP.
             * @implements ISC_UPDATE_EQUIP
             * @constructor
             * @param {S2C.ISC_UPDATE_EQUIP=} [properties] Properties to set
             */
            function SC_UPDATE_EQUIP(properties) {
                this.equips = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SC_UPDATE_EQUIP equips.
             * @member {Object.<string,S2C.IEquip>} equips
             * @memberof S2C.SC_UPDATE_EQUIP
             * @instance
             */
            SC_UPDATE_EQUIP.prototype.equips = $util.emptyObject;
    
            /**
             * Creates a new SC_UPDATE_EQUIP instance using the specified properties.
             * @function create
             * @memberof S2C.SC_UPDATE_EQUIP
             * @static
             * @param {S2C.ISC_UPDATE_EQUIP=} [properties] Properties to set
             * @returns {S2C.SC_UPDATE_EQUIP} SC_UPDATE_EQUIP instance
             */
            SC_UPDATE_EQUIP.create = function create(properties) {
                return new SC_UPDATE_EQUIP(properties);
            };
    
            /**
             * Encodes the specified SC_UPDATE_EQUIP message. Does not implicitly {@link S2C.SC_UPDATE_EQUIP.verify|verify} messages.
             * @function encode
             * @memberof S2C.SC_UPDATE_EQUIP
             * @static
             * @param {S2C.ISC_UPDATE_EQUIP} message SC_UPDATE_EQUIP message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SC_UPDATE_EQUIP.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.equips != null && message.hasOwnProperty("equips"))
                    for (var keys = Object.keys(message.equips), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                        $root.S2C.Equip.encode(message.equips[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                return writer;
            };
    
            /**
             * Encodes the specified SC_UPDATE_EQUIP message, length delimited. Does not implicitly {@link S2C.SC_UPDATE_EQUIP.verify|verify} messages.
             * @function encodeDelimited
             * @memberof S2C.SC_UPDATE_EQUIP
             * @static
             * @param {S2C.ISC_UPDATE_EQUIP} message SC_UPDATE_EQUIP message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SC_UPDATE_EQUIP.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SC_UPDATE_EQUIP message from the specified reader or buffer.
             * @function decode
             * @memberof S2C.SC_UPDATE_EQUIP
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {S2C.SC_UPDATE_EQUIP} SC_UPDATE_EQUIP
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SC_UPDATE_EQUIP.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.SC_UPDATE_EQUIP(), key;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        reader.skip().pos++;
                        if (message.equips === $util.emptyObject)
                            message.equips = {};
                        key = reader.int32();
                        reader.pos++;
                        message.equips[key] = $root.S2C.Equip.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a SC_UPDATE_EQUIP message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof S2C.SC_UPDATE_EQUIP
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {S2C.SC_UPDATE_EQUIP} SC_UPDATE_EQUIP
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SC_UPDATE_EQUIP.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SC_UPDATE_EQUIP message.
             * @function verify
             * @memberof S2C.SC_UPDATE_EQUIP
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SC_UPDATE_EQUIP.verify = function verify(message) {
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
                            var error = $root.S2C.Equip.verify(message.equips[key[i]]);
                            if (error)
                                return "equips." + error;
                        }
                    }
                }
                return null;
            };
    
            /**
             * Creates a SC_UPDATE_EQUIP message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof S2C.SC_UPDATE_EQUIP
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {S2C.SC_UPDATE_EQUIP} SC_UPDATE_EQUIP
             */
            SC_UPDATE_EQUIP.fromObject = function fromObject(object) {
                if (object instanceof $root.S2C.SC_UPDATE_EQUIP)
                    return object;
                var message = new $root.S2C.SC_UPDATE_EQUIP();
                if (object.equips) {
                    if (typeof object.equips !== "object")
                        throw TypeError(".S2C.SC_UPDATE_EQUIP.equips: object expected");
                    message.equips = {};
                    for (var keys = Object.keys(object.equips), i = 0; i < keys.length; ++i) {
                        if (typeof object.equips[keys[i]] !== "object")
                            throw TypeError(".S2C.SC_UPDATE_EQUIP.equips: object expected");
                        message.equips[keys[i]] = $root.S2C.Equip.fromObject(object.equips[keys[i]]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a SC_UPDATE_EQUIP message. Also converts values to other types if specified.
             * @function toObject
             * @memberof S2C.SC_UPDATE_EQUIP
             * @static
             * @param {S2C.SC_UPDATE_EQUIP} message SC_UPDATE_EQUIP
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SC_UPDATE_EQUIP.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.equips = {};
                var keys2;
                if (message.equips && (keys2 = Object.keys(message.equips)).length) {
                    object.equips = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.equips[keys2[j]] = $root.S2C.Equip.toObject(message.equips[keys2[j]], options);
                }
                return object;
            };
    
            /**
             * Converts this SC_UPDATE_EQUIP to JSON.
             * @function toJSON
             * @memberof S2C.SC_UPDATE_EQUIP
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SC_UPDATE_EQUIP.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return SC_UPDATE_EQUIP;
        })();
    
        S2C.Item = (function() {
    
            /**
             * Properties of an Item.
             * @memberof S2C
             * @interface IItem
             * @property {number|null} [id] Item id
             * @property {number|null} [cnt] Item cnt
             */
    
            /**
             * Constructs a new Item.
             * @memberof S2C
             * @classdesc Represents an Item.
             * @implements IItem
             * @constructor
             * @param {S2C.IItem=} [properties] Properties to set
             */
            function Item(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Item id.
             * @member {number} id
             * @memberof S2C.Item
             * @instance
             */
            Item.prototype.id = 0;
    
            /**
             * Item cnt.
             * @member {number} cnt
             * @memberof S2C.Item
             * @instance
             */
            Item.prototype.cnt = 0;
    
            /**
             * Creates a new Item instance using the specified properties.
             * @function create
             * @memberof S2C.Item
             * @static
             * @param {S2C.IItem=} [properties] Properties to set
             * @returns {S2C.Item} Item instance
             */
            Item.create = function create(properties) {
                return new Item(properties);
            };
    
            /**
             * Encodes the specified Item message. Does not implicitly {@link S2C.Item.verify|verify} messages.
             * @function encode
             * @memberof S2C.Item
             * @static
             * @param {S2C.IItem} message Item message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Item.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
                if (message.cnt != null && message.hasOwnProperty("cnt"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.cnt);
                return writer;
            };
    
            /**
             * Encodes the specified Item message, length delimited. Does not implicitly {@link S2C.Item.verify|verify} messages.
             * @function encodeDelimited
             * @memberof S2C.Item
             * @static
             * @param {S2C.IItem} message Item message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Item.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an Item message from the specified reader or buffer.
             * @function decode
             * @memberof S2C.Item
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {S2C.Item} Item
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Item.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.Item();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.uint32();
                        break;
                    case 2:
                        message.cnt = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an Item message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof S2C.Item
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {S2C.Item} Item
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Item.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an Item message.
             * @function verify
             * @memberof S2C.Item
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Item.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.cnt != null && message.hasOwnProperty("cnt"))
                    if (!$util.isInteger(message.cnt))
                        return "cnt: integer expected";
                return null;
            };
    
            /**
             * Creates an Item message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof S2C.Item
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {S2C.Item} Item
             */
            Item.fromObject = function fromObject(object) {
                if (object instanceof $root.S2C.Item)
                    return object;
                var message = new $root.S2C.Item();
                if (object.id != null)
                    message.id = object.id >>> 0;
                if (object.cnt != null)
                    message.cnt = object.cnt >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from an Item message. Also converts values to other types if specified.
             * @function toObject
             * @memberof S2C.Item
             * @static
             * @param {S2C.Item} message Item
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Item.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = 0;
                    object.cnt = 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.cnt != null && message.hasOwnProperty("cnt"))
                    object.cnt = message.cnt;
                return object;
            };
    
            /**
             * Converts this Item to JSON.
             * @function toJSON
             * @memberof S2C.Item
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Item.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Item;
        })();
    
        S2C.SC_UPDATE_ITEM = (function() {
    
            /**
             * Properties of a SC_UPDATE_ITEM.
             * @memberof S2C
             * @interface ISC_UPDATE_ITEM
             * @property {Object.<string,S2C.IItem>|null} [items] SC_UPDATE_ITEM items
             */
    
            /**
             * Constructs a new SC_UPDATE_ITEM.
             * @memberof S2C
             * @classdesc Represents a SC_UPDATE_ITEM.
             * @implements ISC_UPDATE_ITEM
             * @constructor
             * @param {S2C.ISC_UPDATE_ITEM=} [properties] Properties to set
             */
            function SC_UPDATE_ITEM(properties) {
                this.items = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SC_UPDATE_ITEM items.
             * @member {Object.<string,S2C.IItem>} items
             * @memberof S2C.SC_UPDATE_ITEM
             * @instance
             */
            SC_UPDATE_ITEM.prototype.items = $util.emptyObject;
    
            /**
             * Creates a new SC_UPDATE_ITEM instance using the specified properties.
             * @function create
             * @memberof S2C.SC_UPDATE_ITEM
             * @static
             * @param {S2C.ISC_UPDATE_ITEM=} [properties] Properties to set
             * @returns {S2C.SC_UPDATE_ITEM} SC_UPDATE_ITEM instance
             */
            SC_UPDATE_ITEM.create = function create(properties) {
                return new SC_UPDATE_ITEM(properties);
            };
    
            /**
             * Encodes the specified SC_UPDATE_ITEM message. Does not implicitly {@link S2C.SC_UPDATE_ITEM.verify|verify} messages.
             * @function encode
             * @memberof S2C.SC_UPDATE_ITEM
             * @static
             * @param {S2C.ISC_UPDATE_ITEM} message SC_UPDATE_ITEM message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SC_UPDATE_ITEM.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.items != null && message.hasOwnProperty("items"))
                    for (var keys = Object.keys(message.items), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                        $root.S2C.Item.encode(message.items[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                return writer;
            };
    
            /**
             * Encodes the specified SC_UPDATE_ITEM message, length delimited. Does not implicitly {@link S2C.SC_UPDATE_ITEM.verify|verify} messages.
             * @function encodeDelimited
             * @memberof S2C.SC_UPDATE_ITEM
             * @static
             * @param {S2C.ISC_UPDATE_ITEM} message SC_UPDATE_ITEM message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SC_UPDATE_ITEM.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SC_UPDATE_ITEM message from the specified reader or buffer.
             * @function decode
             * @memberof S2C.SC_UPDATE_ITEM
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {S2C.SC_UPDATE_ITEM} SC_UPDATE_ITEM
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SC_UPDATE_ITEM.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.SC_UPDATE_ITEM(), key;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        reader.skip().pos++;
                        if (message.items === $util.emptyObject)
                            message.items = {};
                        key = reader.int32();
                        reader.pos++;
                        message.items[key] = $root.S2C.Item.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a SC_UPDATE_ITEM message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof S2C.SC_UPDATE_ITEM
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {S2C.SC_UPDATE_ITEM} SC_UPDATE_ITEM
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SC_UPDATE_ITEM.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SC_UPDATE_ITEM message.
             * @function verify
             * @memberof S2C.SC_UPDATE_ITEM
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SC_UPDATE_ITEM.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.items != null && message.hasOwnProperty("items")) {
                    if (!$util.isObject(message.items))
                        return "items: object expected";
                    var key = Object.keys(message.items);
                    for (var i = 0; i < key.length; ++i) {
                        if (!$util.key32Re.test(key[i]))
                            return "items: integer key{k:int32} expected";
                        {
                            var error = $root.S2C.Item.verify(message.items[key[i]]);
                            if (error)
                                return "items." + error;
                        }
                    }
                }
                return null;
            };
    
            /**
             * Creates a SC_UPDATE_ITEM message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof S2C.SC_UPDATE_ITEM
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {S2C.SC_UPDATE_ITEM} SC_UPDATE_ITEM
             */
            SC_UPDATE_ITEM.fromObject = function fromObject(object) {
                if (object instanceof $root.S2C.SC_UPDATE_ITEM)
                    return object;
                var message = new $root.S2C.SC_UPDATE_ITEM();
                if (object.items) {
                    if (typeof object.items !== "object")
                        throw TypeError(".S2C.SC_UPDATE_ITEM.items: object expected");
                    message.items = {};
                    for (var keys = Object.keys(object.items), i = 0; i < keys.length; ++i) {
                        if (typeof object.items[keys[i]] !== "object")
                            throw TypeError(".S2C.SC_UPDATE_ITEM.items: object expected");
                        message.items[keys[i]] = $root.S2C.Item.fromObject(object.items[keys[i]]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a SC_UPDATE_ITEM message. Also converts values to other types if specified.
             * @function toObject
             * @memberof S2C.SC_UPDATE_ITEM
             * @static
             * @param {S2C.SC_UPDATE_ITEM} message SC_UPDATE_ITEM
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SC_UPDATE_ITEM.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.items = {};
                var keys2;
                if (message.items && (keys2 = Object.keys(message.items)).length) {
                    object.items = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.items[keys2[j]] = $root.S2C.Item.toObject(message.items[keys2[j]], options);
                }
                return object;
            };
    
            /**
             * Converts this SC_UPDATE_ITEM to JSON.
             * @function toJSON
             * @memberof S2C.SC_UPDATE_ITEM
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SC_UPDATE_ITEM.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return SC_UPDATE_ITEM;
        })();
    
        S2C.SC_ROLE_SUMMARY = (function() {
    
            /**
             * Properties of a SC_ROLE_SUMMARY.
             * @memberof S2C
             * @interface ISC_ROLE_SUMMARY
             * @property {number|null} [uid] SC_ROLE_SUMMARY uid
             * @property {string|null} [nickname] SC_ROLE_SUMMARY nickname
             * @property {string|null} [headimgurl] SC_ROLE_SUMMARY headimgurl
             * @property {number|null} [level] SC_ROLE_SUMMARY level
             * @property {number|null} [vipLevel] SC_ROLE_SUMMARY vipLevel
             * @property {number|Long|null} [combat] SC_ROLE_SUMMARY combat
             */
    
            /**
             * Constructs a new SC_ROLE_SUMMARY.
             * @memberof S2C
             * @classdesc Represents a SC_ROLE_SUMMARY.
             * @implements ISC_ROLE_SUMMARY
             * @constructor
             * @param {S2C.ISC_ROLE_SUMMARY=} [properties] Properties to set
             */
            function SC_ROLE_SUMMARY(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SC_ROLE_SUMMARY uid.
             * @member {number} uid
             * @memberof S2C.SC_ROLE_SUMMARY
             * @instance
             */
            SC_ROLE_SUMMARY.prototype.uid = 0;
    
            /**
             * SC_ROLE_SUMMARY nickname.
             * @member {string} nickname
             * @memberof S2C.SC_ROLE_SUMMARY
             * @instance
             */
            SC_ROLE_SUMMARY.prototype.nickname = "";
    
            /**
             * SC_ROLE_SUMMARY headimgurl.
             * @member {string} headimgurl
             * @memberof S2C.SC_ROLE_SUMMARY
             * @instance
             */
            SC_ROLE_SUMMARY.prototype.headimgurl = "";
    
            /**
             * SC_ROLE_SUMMARY level.
             * @member {number} level
             * @memberof S2C.SC_ROLE_SUMMARY
             * @instance
             */
            SC_ROLE_SUMMARY.prototype.level = 0;
    
            /**
             * SC_ROLE_SUMMARY vipLevel.
             * @member {number} vipLevel
             * @memberof S2C.SC_ROLE_SUMMARY
             * @instance
             */
            SC_ROLE_SUMMARY.prototype.vipLevel = 0;
    
            /**
             * SC_ROLE_SUMMARY combat.
             * @member {number|Long} combat
             * @memberof S2C.SC_ROLE_SUMMARY
             * @instance
             */
            SC_ROLE_SUMMARY.prototype.combat = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Creates a new SC_ROLE_SUMMARY instance using the specified properties.
             * @function create
             * @memberof S2C.SC_ROLE_SUMMARY
             * @static
             * @param {S2C.ISC_ROLE_SUMMARY=} [properties] Properties to set
             * @returns {S2C.SC_ROLE_SUMMARY} SC_ROLE_SUMMARY instance
             */
            SC_ROLE_SUMMARY.create = function create(properties) {
                return new SC_ROLE_SUMMARY(properties);
            };
    
            /**
             * Encodes the specified SC_ROLE_SUMMARY message. Does not implicitly {@link S2C.SC_ROLE_SUMMARY.verify|verify} messages.
             * @function encode
             * @memberof S2C.SC_ROLE_SUMMARY
             * @static
             * @param {S2C.ISC_ROLE_SUMMARY} message SC_ROLE_SUMMARY message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SC_ROLE_SUMMARY.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uid != null && message.hasOwnProperty("uid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
                if (message.headimgurl != null && message.hasOwnProperty("headimgurl"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.headimgurl);
                if (message.level != null && message.hasOwnProperty("level"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.level);
                if (message.vipLevel != null && message.hasOwnProperty("vipLevel"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.vipLevel);
                if (message.combat != null && message.hasOwnProperty("combat"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.combat);
                return writer;
            };
    
            /**
             * Encodes the specified SC_ROLE_SUMMARY message, length delimited. Does not implicitly {@link S2C.SC_ROLE_SUMMARY.verify|verify} messages.
             * @function encodeDelimited
             * @memberof S2C.SC_ROLE_SUMMARY
             * @static
             * @param {S2C.ISC_ROLE_SUMMARY} message SC_ROLE_SUMMARY message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SC_ROLE_SUMMARY.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SC_ROLE_SUMMARY message from the specified reader or buffer.
             * @function decode
             * @memberof S2C.SC_ROLE_SUMMARY
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {S2C.SC_ROLE_SUMMARY} SC_ROLE_SUMMARY
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SC_ROLE_SUMMARY.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.SC_ROLE_SUMMARY();
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
                        message.level = reader.uint32();
                        break;
                    case 5:
                        message.vipLevel = reader.uint32();
                        break;
                    case 6:
                        message.combat = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a SC_ROLE_SUMMARY message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof S2C.SC_ROLE_SUMMARY
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {S2C.SC_ROLE_SUMMARY} SC_ROLE_SUMMARY
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SC_ROLE_SUMMARY.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SC_ROLE_SUMMARY message.
             * @function verify
             * @memberof S2C.SC_ROLE_SUMMARY
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SC_ROLE_SUMMARY.verify = function verify(message) {
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
                if (message.level != null && message.hasOwnProperty("level"))
                    if (!$util.isInteger(message.level))
                        return "level: integer expected";
                if (message.vipLevel != null && message.hasOwnProperty("vipLevel"))
                    if (!$util.isInteger(message.vipLevel))
                        return "vipLevel: integer expected";
                if (message.combat != null && message.hasOwnProperty("combat"))
                    if (!$util.isInteger(message.combat) && !(message.combat && $util.isInteger(message.combat.low) && $util.isInteger(message.combat.high)))
                        return "combat: integer|Long expected";
                return null;
            };
    
            /**
             * Creates a SC_ROLE_SUMMARY message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof S2C.SC_ROLE_SUMMARY
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {S2C.SC_ROLE_SUMMARY} SC_ROLE_SUMMARY
             */
            SC_ROLE_SUMMARY.fromObject = function fromObject(object) {
                if (object instanceof $root.S2C.SC_ROLE_SUMMARY)
                    return object;
                var message = new $root.S2C.SC_ROLE_SUMMARY();
                if (object.uid != null)
                    message.uid = object.uid >>> 0;
                if (object.nickname != null)
                    message.nickname = String(object.nickname);
                if (object.headimgurl != null)
                    message.headimgurl = String(object.headimgurl);
                if (object.level != null)
                    message.level = object.level >>> 0;
                if (object.vipLevel != null)
                    message.vipLevel = object.vipLevel >>> 0;
                if (object.combat != null)
                    if ($util.Long)
                        (message.combat = $util.Long.fromValue(object.combat)).unsigned = true;
                    else if (typeof object.combat === "string")
                        message.combat = parseInt(object.combat, 10);
                    else if (typeof object.combat === "number")
                        message.combat = object.combat;
                    else if (typeof object.combat === "object")
                        message.combat = new $util.LongBits(object.combat.low >>> 0, object.combat.high >>> 0).toNumber(true);
                return message;
            };
    
            /**
             * Creates a plain object from a SC_ROLE_SUMMARY message. Also converts values to other types if specified.
             * @function toObject
             * @memberof S2C.SC_ROLE_SUMMARY
             * @static
             * @param {S2C.SC_ROLE_SUMMARY} message SC_ROLE_SUMMARY
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SC_ROLE_SUMMARY.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.uid = 0;
                    object.nickname = "";
                    object.headimgurl = "";
                    object.level = 0;
                    object.vipLevel = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.combat = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.combat = options.longs === String ? "0" : 0;
                }
                if (message.uid != null && message.hasOwnProperty("uid"))
                    object.uid = message.uid;
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    object.nickname = message.nickname;
                if (message.headimgurl != null && message.hasOwnProperty("headimgurl"))
                    object.headimgurl = message.headimgurl;
                if (message.level != null && message.hasOwnProperty("level"))
                    object.level = message.level;
                if (message.vipLevel != null && message.hasOwnProperty("vipLevel"))
                    object.vipLevel = message.vipLevel;
                if (message.combat != null && message.hasOwnProperty("combat"))
                    if (typeof message.combat === "number")
                        object.combat = options.longs === String ? String(message.combat) : message.combat;
                    else
                        object.combat = options.longs === String ? $util.Long.prototype.toString.call(message.combat) : options.longs === Number ? new $util.LongBits(message.combat.low >>> 0, message.combat.high >>> 0).toNumber(true) : message.combat;
                return object;
            };
    
            /**
             * Converts this SC_ROLE_SUMMARY to JSON.
             * @function toJSON
             * @memberof S2C.SC_ROLE_SUMMARY
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SC_ROLE_SUMMARY.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return SC_ROLE_SUMMARY;
        })();
    
        S2C.SC_ROLE_PRO_UPDATE = (function() {
    
            /**
             * Properties of a SC_ROLE_PRO_UPDATE.
             * @memberof S2C
             * @interface ISC_ROLE_PRO_UPDATE
             * @property {number|null} [uid] SC_ROLE_PRO_UPDATE uid
             * @property {string|null} [nickname] SC_ROLE_PRO_UPDATE nickname
             * @property {string|null} [headimgurl] SC_ROLE_PRO_UPDATE headimgurl
             * @property {number|null} [diamond] SC_ROLE_PRO_UPDATE diamond
             * @property {number|Long|null} [gold] SC_ROLE_PRO_UPDATE gold
             * @property {number|null} [level] SC_ROLE_PRO_UPDATE level
             * @property {number|null} [vipLevel] SC_ROLE_PRO_UPDATE vipLevel
             * @property {number|Long|null} [exp] SC_ROLE_PRO_UPDATE exp
             * @property {number|null} [vipExp] SC_ROLE_PRO_UPDATE vipExp
             */
    
            /**
             * Constructs a new SC_ROLE_PRO_UPDATE.
             * @memberof S2C
             * @classdesc Represents a SC_ROLE_PRO_UPDATE.
             * @implements ISC_ROLE_PRO_UPDATE
             * @constructor
             * @param {S2C.ISC_ROLE_PRO_UPDATE=} [properties] Properties to set
             */
            function SC_ROLE_PRO_UPDATE(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SC_ROLE_PRO_UPDATE uid.
             * @member {number} uid
             * @memberof S2C.SC_ROLE_PRO_UPDATE
             * @instance
             */
            SC_ROLE_PRO_UPDATE.prototype.uid = 0;
    
            /**
             * SC_ROLE_PRO_UPDATE nickname.
             * @member {string} nickname
             * @memberof S2C.SC_ROLE_PRO_UPDATE
             * @instance
             */
            SC_ROLE_PRO_UPDATE.prototype.nickname = "";
    
            /**
             * SC_ROLE_PRO_UPDATE headimgurl.
             * @member {string} headimgurl
             * @memberof S2C.SC_ROLE_PRO_UPDATE
             * @instance
             */
            SC_ROLE_PRO_UPDATE.prototype.headimgurl = "";
    
            /**
             * SC_ROLE_PRO_UPDATE diamond.
             * @member {number} diamond
             * @memberof S2C.SC_ROLE_PRO_UPDATE
             * @instance
             */
            SC_ROLE_PRO_UPDATE.prototype.diamond = 0;
    
            /**
             * SC_ROLE_PRO_UPDATE gold.
             * @member {number|Long} gold
             * @memberof S2C.SC_ROLE_PRO_UPDATE
             * @instance
             */
            SC_ROLE_PRO_UPDATE.prototype.gold = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * SC_ROLE_PRO_UPDATE level.
             * @member {number} level
             * @memberof S2C.SC_ROLE_PRO_UPDATE
             * @instance
             */
            SC_ROLE_PRO_UPDATE.prototype.level = 0;
    
            /**
             * SC_ROLE_PRO_UPDATE vipLevel.
             * @member {number} vipLevel
             * @memberof S2C.SC_ROLE_PRO_UPDATE
             * @instance
             */
            SC_ROLE_PRO_UPDATE.prototype.vipLevel = 0;
    
            /**
             * SC_ROLE_PRO_UPDATE exp.
             * @member {number|Long} exp
             * @memberof S2C.SC_ROLE_PRO_UPDATE
             * @instance
             */
            SC_ROLE_PRO_UPDATE.prototype.exp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * SC_ROLE_PRO_UPDATE vipExp.
             * @member {number} vipExp
             * @memberof S2C.SC_ROLE_PRO_UPDATE
             * @instance
             */
            SC_ROLE_PRO_UPDATE.prototype.vipExp = 0;
    
            /**
             * Creates a new SC_ROLE_PRO_UPDATE instance using the specified properties.
             * @function create
             * @memberof S2C.SC_ROLE_PRO_UPDATE
             * @static
             * @param {S2C.ISC_ROLE_PRO_UPDATE=} [properties] Properties to set
             * @returns {S2C.SC_ROLE_PRO_UPDATE} SC_ROLE_PRO_UPDATE instance
             */
            SC_ROLE_PRO_UPDATE.create = function create(properties) {
                return new SC_ROLE_PRO_UPDATE(properties);
            };
    
            /**
             * Encodes the specified SC_ROLE_PRO_UPDATE message. Does not implicitly {@link S2C.SC_ROLE_PRO_UPDATE.verify|verify} messages.
             * @function encode
             * @memberof S2C.SC_ROLE_PRO_UPDATE
             * @static
             * @param {S2C.ISC_ROLE_PRO_UPDATE} message SC_ROLE_PRO_UPDATE message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SC_ROLE_PRO_UPDATE.encode = function encode(message, writer) {
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
                if (message.vipLevel != null && message.hasOwnProperty("vipLevel"))
                    writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.vipLevel);
                if (message.exp != null && message.hasOwnProperty("exp"))
                    writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.exp);
                if (message.vipExp != null && message.hasOwnProperty("vipExp"))
                    writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.vipExp);
                return writer;
            };
    
            /**
             * Encodes the specified SC_ROLE_PRO_UPDATE message, length delimited. Does not implicitly {@link S2C.SC_ROLE_PRO_UPDATE.verify|verify} messages.
             * @function encodeDelimited
             * @memberof S2C.SC_ROLE_PRO_UPDATE
             * @static
             * @param {S2C.ISC_ROLE_PRO_UPDATE} message SC_ROLE_PRO_UPDATE message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SC_ROLE_PRO_UPDATE.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SC_ROLE_PRO_UPDATE message from the specified reader or buffer.
             * @function decode
             * @memberof S2C.SC_ROLE_PRO_UPDATE
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {S2C.SC_ROLE_PRO_UPDATE} SC_ROLE_PRO_UPDATE
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SC_ROLE_PRO_UPDATE.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C.SC_ROLE_PRO_UPDATE();
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
                        message.vipLevel = reader.uint32();
                        break;
                    case 8:
                        message.exp = reader.uint64();
                        break;
                    case 9:
                        message.vipExp = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a SC_ROLE_PRO_UPDATE message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof S2C.SC_ROLE_PRO_UPDATE
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {S2C.SC_ROLE_PRO_UPDATE} SC_ROLE_PRO_UPDATE
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SC_ROLE_PRO_UPDATE.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SC_ROLE_PRO_UPDATE message.
             * @function verify
             * @memberof S2C.SC_ROLE_PRO_UPDATE
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SC_ROLE_PRO_UPDATE.verify = function verify(message) {
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
                if (message.vipLevel != null && message.hasOwnProperty("vipLevel"))
                    if (!$util.isInteger(message.vipLevel))
                        return "vipLevel: integer expected";
                if (message.exp != null && message.hasOwnProperty("exp"))
                    if (!$util.isInteger(message.exp) && !(message.exp && $util.isInteger(message.exp.low) && $util.isInteger(message.exp.high)))
                        return "exp: integer|Long expected";
                if (message.vipExp != null && message.hasOwnProperty("vipExp"))
                    if (!$util.isInteger(message.vipExp))
                        return "vipExp: integer expected";
                return null;
            };
    
            /**
             * Creates a SC_ROLE_PRO_UPDATE message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof S2C.SC_ROLE_PRO_UPDATE
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {S2C.SC_ROLE_PRO_UPDATE} SC_ROLE_PRO_UPDATE
             */
            SC_ROLE_PRO_UPDATE.fromObject = function fromObject(object) {
                if (object instanceof $root.S2C.SC_ROLE_PRO_UPDATE)
                    return object;
                var message = new $root.S2C.SC_ROLE_PRO_UPDATE();
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
                if (object.vipLevel != null)
                    message.vipLevel = object.vipLevel >>> 0;
                if (object.exp != null)
                    if ($util.Long)
                        (message.exp = $util.Long.fromValue(object.exp)).unsigned = true;
                    else if (typeof object.exp === "string")
                        message.exp = parseInt(object.exp, 10);
                    else if (typeof object.exp === "number")
                        message.exp = object.exp;
                    else if (typeof object.exp === "object")
                        message.exp = new $util.LongBits(object.exp.low >>> 0, object.exp.high >>> 0).toNumber(true);
                if (object.vipExp != null)
                    message.vipExp = object.vipExp >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a SC_ROLE_PRO_UPDATE message. Also converts values to other types if specified.
             * @function toObject
             * @memberof S2C.SC_ROLE_PRO_UPDATE
             * @static
             * @param {S2C.SC_ROLE_PRO_UPDATE} message SC_ROLE_PRO_UPDATE
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SC_ROLE_PRO_UPDATE.toObject = function toObject(message, options) {
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
                    object.vipLevel = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.exp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.exp = options.longs === String ? "0" : 0;
                    object.vipExp = 0;
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
                if (message.vipLevel != null && message.hasOwnProperty("vipLevel"))
                    object.vipLevel = message.vipLevel;
                if (message.exp != null && message.hasOwnProperty("exp"))
                    if (typeof message.exp === "number")
                        object.exp = options.longs === String ? String(message.exp) : message.exp;
                    else
                        object.exp = options.longs === String ? $util.Long.prototype.toString.call(message.exp) : options.longs === Number ? new $util.LongBits(message.exp.low >>> 0, message.exp.high >>> 0).toNumber(true) : message.exp;
                if (message.vipExp != null && message.hasOwnProperty("vipExp"))
                    object.vipExp = message.vipExp;
                return object;
            };
    
            /**
             * Converts this SC_ROLE_PRO_UPDATE to JSON.
             * @function toJSON
             * @memberof S2C.SC_ROLE_PRO_UPDATE
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SC_ROLE_PRO_UPDATE.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return SC_ROLE_PRO_UPDATE;
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
             * @property {string|null} [msg] SC_ROLE_HEART_BEAT msg
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
             * SC_ROLE_HEART_BEAT msg.
             * @member {string} msg
             * @memberof S2C.SC_ROLE_HEART_BEAT
             * @instance
             */
            SC_ROLE_HEART_BEAT.prototype.msg = "";
    
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
                if (message.msg != null && message.hasOwnProperty("msg"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.msg);
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
                    case 1:
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
                if (message.msg != null && message.hasOwnProperty("msg"))
                    if (!$util.isString(message.msg))
                        return "msg: string expected";
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
                var message = new $root.S2C.SC_ROLE_HEART_BEAT();
                if (object.msg != null)
                    message.msg = String(object.msg);
                return message;
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
            SC_ROLE_HEART_BEAT.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.msg = "";
                if (message.msg != null && message.hasOwnProperty("msg"))
                    object.msg = message.msg;
                return object;
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
             * @property {number|null} [uid] LOGIN_SC_CHOOSE_SERVER uid
             * @property {string|null} [token] LOGIN_SC_CHOOSE_SERVER token
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
             * LOGIN_SC_CHOOSE_SERVER uid.
             * @member {number} uid
             * @memberof S2C.LOGIN_SC_CHOOSE_SERVER
             * @instance
             */
            LOGIN_SC_CHOOSE_SERVER.prototype.uid = 0;
    
            /**
             * LOGIN_SC_CHOOSE_SERVER token.
             * @member {string} token
             * @memberof S2C.LOGIN_SC_CHOOSE_SERVER
             * @instance
             */
            LOGIN_SC_CHOOSE_SERVER.prototype.token = "";
    
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
                if (message.uid != null && message.hasOwnProperty("uid"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.uid);
                if (message.token != null && message.hasOwnProperty("token"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.token);
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
                    case 6:
                        message.uid = reader.uint32();
                        break;
                    case 7:
                        message.token = reader.string();
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
                if (message.uid != null && message.hasOwnProperty("uid"))
                    if (!$util.isInteger(message.uid))
                        return "uid: integer expected";
                if (message.token != null && message.hasOwnProperty("token"))
                    if (!$util.isString(message.token))
                        return "token: string expected";
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
                if (object.uid != null)
                    message.uid = object.uid >>> 0;
                if (object.token != null)
                    message.token = String(object.token);
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
                    object.uid = 0;
                    object.token = "";
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
                if (message.uid != null && message.hasOwnProperty("uid"))
                    object.uid = message.uid;
                if (message.token != null && message.hasOwnProperty("token"))
                    object.token = message.token;
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
