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
              "CS_ROLE_HEART_BEAT",
              "CS_ABC_DEF"
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
          CS_ROLE_HEART_BEAT: {
            type: "CS_ROLE_HEART_BEAT",
            id: 3
          },
          CS_ABC_DEF: {
            type: "CS_ABC_DEF",
            id: 4
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
      CS_ROLE_HEART_BEAT: {
        fields: {}
      },
      CS_ABC_DEF: {
        fields: {}
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
              "SC_ROLE_ONLINE",
              "SC_ROLE_HEART_BEAT",
              "SC_ROLE_UPDATE"
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
          },
          SC_ROLE_HEART_BEAT: {
            type: "SC_ROLE_HEART_BEAT",
            id: 4
          },
          SC_ROLE_UPDATE: {
            type: "SC_ROLE_UPDATE",
            id: 5
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
      SC_ROLE_ONLINE: {
        fields: {
          roleId: {
            type: "int32",
            id: 1
          }
        }
      },
      SC_ROLE_HEART_BEAT: {
        fields: {}
      },
      SC_ROLE_UPDATE: {
        fields: {
          nickname: {
            type: "string",
            id: 1
          },
          level: {
            type: "uint32",
            id: 2
          },
          exp: {
            type: "uint64",
            id: 3
          },
          vipLevel: {
            type: "uint32",
            id: 4
          },
          vipExp: {
            type: "uint32",
            id: 5
          },
          diamond: {
            type: "uint32",
            id: 6
          },
          gold: {
            type: "uint64",
            id: 7
          }
        }
      }
    }
  }
});

module.exports = $root;
