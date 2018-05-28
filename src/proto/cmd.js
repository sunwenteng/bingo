/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  C2S: {
    nested: {
      CS_ECHO: {
        options: {
          code: 1001
        },
        fields: {
          name: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          },
          b: {
            type: "int64",
            id: 3
          },
          data: {
            rule: "repeated",
            type: "int32",
            id: 4
          },
          color: {
            type: "Color",
            id: 5
          },
          map: {
            keyType: "uint64",
            type: "string",
            id: 6
          }
        },
        nested: {
          Color: {
            options: {
              allow_alias: true
            },
            values: {
              RED: 0,
              BLUE: 1,
              YELLOW: 1
            }
          }
        }
      }
    }
  },
  S2C: {
    nested: {
      SC_ECHO_REPLY: {
        fields: {
          cmdId: {
            type: "int32",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          }
        }
      }
    }
  }
});

module.exports = $root;
