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
    
            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;
    
            /**
             * Message kind.
             * @member {"CS_TEST_ECHO"|"CS_ROLE_ONLINE"|"CS_ROLE_HEART_BEAT"|"CS_ABC_DEF"|undefined} kind
             * @memberof C2S.Message
             * @instance
             */
            Object.defineProperty(Message.prototype, "kind", {
                get: $util.oneOfGetter($oneOfFields = ["CS_TEST_ECHO", "CS_ROLE_ONLINE", "CS_ROLE_HEART_BEAT", "CS_ABC_DEF"]),
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
    
            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;
    
            /**
             * Message kind.
             * @member {"Error"|"SC_TEST_ECHO"|"SC_ROLE_ONLINE"|"SC_ROLE_HEART_BEAT"|undefined} kind
             * @memberof S2C.Message
             * @instance
             */
            Object.defineProperty(Message.prototype, "kind", {
                get: $util.oneOfGetter($oneOfFields = ["Error", "SC_TEST_ECHO", "SC_ROLE_ONLINE", "SC_ROLE_HEART_BEAT"]),
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
             * @classdesc you must name the message in the following format: [PACKAGE_NAME]_[CONTROLLER_NAME]_[METHOD_NAME]*
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
    
        return S2C;
    })();

    return $root;
})(protobuf);
