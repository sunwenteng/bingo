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
              "CS_ABC_DEF",
              "LOGIN_CS_LOGIN",
              "LOGIN_CS_CHOOSE_SERVER",
              "LOGIN_CS_GET_SERVER_LIST",
              "LOGIN_CS_GET_INFO"
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
          },
          LOGIN_CS_LOGIN: {
            type: "LOGIN_CS_LOGIN",
            id: 5
          },
          LOGIN_CS_CHOOSE_SERVER: {
            type: "LOGIN_CS_CHOOSE_SERVER",
            id: 6
          },
          LOGIN_CS_GET_SERVER_LIST: {
            type: "LOGIN_CS_GET_SERVER_LIST",
            id: 7
          },
          LOGIN_CS_GET_INFO: {
            type: "LOGIN_CS_GET_INFO",
            id: 8
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
        fields: {
          msg: {
            type: "string",
            id: 1
          }
        }
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
      },
      LOGIN_CS_LOGIN: {
        fields: {
          passport: {
            type: "string",
            id: 1
          },
          pwd: {
            type: "string",
            id: 2
          },
          device: {
            type: "string",
            id: 3
          },
          deviceUid: {
            type: "string",
            id: 4
          },
          deviceType: {
            type: "string",
            id: 5
          },
          deviceToken: {
            type: "string",
            id: 6
          },
          platform: {
            type: "uint32",
            id: 7
          }
        }
      },
      LOGIN_CS_CHOOSE_SERVER: {
        fields: {
          serverId: {
            type: "uint32",
            id: 1
          }
        }
      },
      LOGIN_CS_GET_SERVER_LIST: {
        fields: {}
      },
      LOGIN_CS_GET_INFO: {
        fields: {
          platformId: {
            type: "uint32",
            id: 1
          },
          clientVersion: {
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
              "SC_TEST_ECHO",
              "LOGIN_SC_LOGIN",
              "LOGIN_SC_CHOOSE_SERVER",
              "LOGIN_SC_GET_SERVER_LIST",
              "LOGIN_SC_GET_INFO",
              "SC_ROLE_ONLINE",
              "SC_ROLE_HEART_BEAT",
              "SC_ROLE_PRO_UPDATE",
              "SC_GET_REWARD",
              "SC_INIT_HERO",
              "SC_UPDATE_HERO",
              "SC_INIT_EQUIP",
              "SC_UPDATE_EQUIP",
              "SC_INIT_ITEM",
              "SC_UPDATE_ITEM"
            ]
          }
        },
        fields: {
          SC_TEST_ECHO: {
            type: "SC_TEST_ECHO",
            id: 1
          },
          LOGIN_SC_LOGIN: {
            type: "LOGIN_SC_LOGIN",
            id: 9001
          },
          LOGIN_SC_CHOOSE_SERVER: {
            type: "LOGIN_SC_CHOOSE_SERVER",
            id: 9002
          },
          LOGIN_SC_GET_SERVER_LIST: {
            type: "LOGIN_SC_GET_SERVER_LIST",
            id: 9003
          },
          LOGIN_SC_GET_INFO: {
            type: "LOGIN_SC_GET_INFO",
            id: 9004
          },
          SC_ROLE_ONLINE: {
            type: "SC_ROLE_ONLINE",
            id: 1001
          },
          SC_ROLE_HEART_BEAT: {
            type: "SC_ROLE_HEART_BEAT",
            id: 1002
          },
          SC_ROLE_PRO_UPDATE: {
            type: "SC_ROLE_PRO_UPDATE",
            id: 1003
          },
          SC_GET_REWARD: {
            type: "SC_GET_REWARD",
            id: 1004
          },
          SC_INIT_HERO: {
            type: "SC_INIT_HERO",
            id: 1101
          },
          SC_UPDATE_HERO: {
            type: "SC_UPDATE_HERO",
            id: 1102
          },
          SC_INIT_EQUIP: {
            type: "SC_INIT_EQUIP",
            id: 1201
          },
          SC_UPDATE_EQUIP: {
            type: "SC_UPDATE_EQUIP",
            id: 1202
          },
          SC_INIT_ITEM: {
            type: "SC_INIT_ITEM",
            id: 1301
          },
          SC_UPDATE_ITEM: {
            type: "SC_UPDATE_ITEM",
            id: 1302
          }
        }
      },
      Reward: {
        fields: {
          gold: {
            type: "uint64",
            id: 1
          },
          diamond: {
            type: "uint32",
            id: 2
          },
          exp: {
            type: "uint64",
            id: 3
          },
          vipExp: {
            type: "uint32",
            id: 4
          },
          heroes: {
            rule: "repeated",
            type: "uint32",
            id: 5
          },
          equips: {
            rule: "repeated",
            type: "uint32",
            id: 6
          },
          items: {
            keyType: "uint32",
            type: "uint32",
            id: 7
          }
        }
      },
      SC_GET_REWARD: {
        fields: {
          reward: {
            type: "Reward",
            id: 1
          }
        }
      },
      Hero: {
        fields: {
          uid: {
            type: "uint32",
            id: 1
          },
          id: {
            type: "uint32",
            id: 2
          },
          combat: {
            type: "uint32",
            id: 3
          },
          lvl: {
            type: "uint32",
            id: 4
          }
        }
      },
      SC_INIT_HERO: {
        fields: {
          heroes: {
            keyType: "uint32",
            type: "Hero",
            id: 1
          }
        }
      },
      SC_UPDATE_HERO: {
        fields: {
          heroes: {
            keyType: "int32",
            type: "Hero",
            id: 1
          }
        }
      },
      Equip: {
        fields: {
          uid: {
            type: "uint32",
            id: 1
          },
          id: {
            type: "uint32",
            id: 2
          },
          lvl: {
            type: "uint32",
            id: 3
          },
          rank: {
            type: "uint32",
            id: 4
          },
          star: {
            type: "uint32",
            id: 5
          }
        }
      },
      SC_INIT_EQUIP: {
        fields: {
          equips: {
            keyType: "uint32",
            type: "Equip",
            id: 1
          }
        }
      },
      SC_UPDATE_EQUIP: {
        fields: {
          equips: {
            keyType: "int32",
            type: "Equip",
            id: 1
          }
        }
      },
      Item: {
        fields: {
          id: {
            type: "uint32",
            id: 1
          },
          cnt: {
            type: "uint32",
            id: 2
          }
        }
      },
      SC_INIT_ITEM: {
        fields: {
          items: {
            keyType: "uint32",
            type: "Item",
            id: 1
          }
        }
      },
      SC_UPDATE_ITEM: {
        fields: {
          items: {
            keyType: "int32",
            type: "Item",
            id: 1
          }
        }
      },
      SC_ROLE_PRO_UPDATE: {
        fields: {
          uid: {
            type: "uint32",
            id: 1
          },
          nickname: {
            type: "string",
            id: 2
          },
          headimgurl: {
            type: "string",
            id: 3
          },
          diamond: {
            type: "uint32",
            id: 4
          },
          gold: {
            type: "uint64",
            id: 5
          },
          level: {
            type: "uint32",
            id: 6
          },
          vipLevel: {
            type: "uint32",
            id: 7
          },
          exp: {
            type: "uint64",
            id: 8
          },
          vipExp: {
            type: "uint32",
            id: 9
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
        fields: {
          msg: {
            type: "string",
            id: 1
          }
        }
      },
      LOGIN_SC_LOGIN: {
        fields: {
          serverId: {
            type: "uint32",
            id: 1
          },
          gmAuth: {
            type: "uint32",
            id: 2
          }
        }
      },
      LOGIN_SC_CHOOSE_SERVER: {
        fields: {
          ip: {
            type: "string",
            id: 1
          },
          port: {
            type: "uint32",
            id: 2
          },
          version: {
            type: "string",
            id: 3
          },
          resVersion: {
            type: "string",
            id: 4
          },
          resServerAddress: {
            type: "string",
            id: 5
          }
        }
      },
      LOGIN_SC_GET_SERVER_LIST: {
        fields: {
          servers: {
            rule: "repeated",
            type: "Server",
            id: 1
          }
        },
        nested: {
          Server: {
            fields: {
              serverId: {
                type: "uint32",
                id: 1
              },
              name: {
                type: "string",
                id: 2
              },
              status: {
                type: "uint32",
                id: 3
              }
            }
          }
        }
      },
      LOGIN_SC_GET_INFO: {
        fields: {
          notice: {
            type: "string",
            id: 1
          },
          version: {
            type: "string",
            id: 2
          },
          updateAddress: {
            type: "string",
            id: 3
          }
        }
      }
    }
  }
});

module.exports = $root;
