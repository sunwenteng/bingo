/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  C2S: {
    nested: {
      Message: {
        oneofs: {
          kind: {
            oneof: [
              "CS_TEST_ECHO",
              "CS_ROLE_ONLINE",
              "CS_TEST_GET_PROPERTY"
            ]
          }
        },
        fields: {
          CS_TEST_ECHO: {
            type: "CS_TEST_ECHO",
            id: 1
          },
          CS_ROLE_ONLINE: {
            type: "CS_ROLE_ONLINE",
            id: 2
          },
          CS_TEST_GET_PROPERTY: {
            type: "CS_TEST_GET_PROPERTY",
            id: 3
          }
        }
      },
      CS_TEST_ECHO: {
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
      },
      CS_ROLE_ONLINE: {
        fields: {
          passport: {
            type: "string",
            id: 1
          },
          pwd: {
            type: "string",
            id: 2
          }
        }
      },
      CS_TEST_GET_PROPERTY: {
        fields: {
          type: {
            type: "string",
            id: 1
          }
        }
      }
    }
  },
  S2C: {
    nested: {
      Message: {
        oneofs: {
          kind: {
            oneof: [
              "Error",
              "SC_TEST_ECHO",
              "SC_ROLE_ONLINE"
            ]
          }
        },
        fields: {
          Error: {
            type: "Error",
            id: 1
          },
          SC_TEST_ECHO: {
            type: "SC_TEST_ECHO",
            id: 2
          },
          SC_ROLE_ONLINE: {
            type: "SC_ROLE_ONLINE",
            id: 3
          }
        }
      },
      Error: {
        fields: {
          code: {
            type: "int32",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          }
        }
      },
      SC_TEST_ECHO: {
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
      },
      SC_ROLE_ONLINE: {
        fields: {}
      }
    }
  }
});

module.exports = $root;
