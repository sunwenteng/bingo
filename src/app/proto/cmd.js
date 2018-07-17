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
              "LOGIN_CS_GET_INFO",
              "CS_RANK_GET_RANK",
              "CS_GUILD_CREATE"
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
          },
          CS_RANK_GET_RANK: {
            type: "CS_RANK_GET_RANK",
            id: 1801
          },
          CS_GUILD_CREATE: {
            type: "CS_GUILD_CREATE",
            id: 1901
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
          token: {
            type: "string",
            id: 1
          },
          uid: {
            type: "uint32",
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
      },
      CS_RANK_GET_RANK: {
        fields: {
          types: {
            rule: "repeated",
            type: "ERankType",
            id: 1
          }
        },
        nested: {
          ERankType: {
            values: {
              level: 0,
              combat: 1
            }
          }
        }
      },
      CS_GUILD_CREATE: {
        fields: {
          iconId: {
            type: "uint32",
            id: 1
          },
          guildName: {
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
              "SC_ROLE_SUMMARY",
              "SC_UPDATE_HERO",
              "SC_UPDATE_EQUIP",
              "SC_UPDATE_ITEM",
              "SC_UPDATE_TASK",
              "SC_UPDATE_MAIL",
              "SC_UPDATE_FRIEND",
              "SC_UPDATE_BATTLE",
              "SC_RANK_GET_RANK",
              "SC_GUILD_CREATE"
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
          SC_ROLE_SUMMARY: {
            type: "SC_ROLE_SUMMARY",
            id: 1005
          },
          SC_UPDATE_HERO: {
            type: "SC_UPDATE_HERO",
            id: 1006
          },
          SC_UPDATE_EQUIP: {
            type: "SC_UPDATE_EQUIP",
            id: 1007
          },
          SC_UPDATE_ITEM: {
            type: "SC_UPDATE_ITEM",
            id: 1008
          },
          SC_UPDATE_TASK: {
            type: "SC_UPDATE_TASK",
            id: 1009
          },
          SC_UPDATE_MAIL: {
            type: "SC_UPDATE_MAIL",
            id: 1010
          },
          SC_UPDATE_FRIEND: {
            type: "SC_UPDATE_FRIEND",
            id: 1011
          },
          SC_UPDATE_BATTLE: {
            type: "SC_UPDATE_BATTLE",
            id: 1012
          },
          SC_RANK_GET_RANK: {
            type: "SC_RANK_GET_RANK",
            id: 1801
          },
          SC_GUILD_CREATE: {
            type: "SC_GUILD_CREATE",
            id: 1901
          }
        }
      },
      SC_UPDATE_BATTLE: {
        fields: {
          slotInfo: {
            keyType: "int32",
            type: "uint32",
            id: 1
          }
        }
      },
      GuildSummary: {
        fields: {
          uid: {
            type: "uint32",
            id: 1
          },
          guildName: {
            type: "string",
            id: 2
          },
          iconId: {
            type: "uint32",
            id: 3
          },
          level: {
            type: "uint32",
            id: 4
          },
          combat: {
            type: "uint64",
            id: 5
          },
          notice: {
            type: "string",
            id: 6
          }
        }
      },
      Guild: {
        fields: {
          uid: {
            type: "uint32",
            id: 1
          },
          guildName: {
            type: "string",
            id: 2
          },
          iconId: {
            type: "uint32",
            id: 3
          },
          level: {
            type: "uint32",
            id: 4
          },
          combat: {
            type: "uint64",
            id: 5
          },
          notice: {
            type: "string",
            id: 6
          },
          gold: {
            type: "uint32",
            id: 7
          },
          exp: {
            type: "uint64",
            id: 8
          }
        }
      },
      SC_GUILD_INIT: {
        fields: {}
      },
      SC_GUILD_CREATE: {
        fields: {}
      },
      RankInfo: {
        fields: {
          roles: {
            rule: "repeated",
            type: "SC_ROLE_SUMMARY",
            id: 1
          },
          values: {
            rule: "repeated",
            type: "uint32",
            id: 2
          },
          rank: {
            type: "uint32",
            id: 3
          },
          value: {
            type: "uint32",
            id: 4
          },
          rankType: {
            type: "uint32",
            id: 5
          }
        }
      },
      SC_RANK_GET_RANK: {
        fields: {
          ranks: {
            keyType: "uint32",
            type: "RankInfo",
            id: 1
          }
        }
      },
      Friend: {
        fields: {
          uid: {
            type: "uint32",
            id: 1
          },
          state: {
            type: "uint32",
            id: 2
          }
        }
      },
      SC_UPDATE_FRIEND: {
        fields: {
          friends: {
            keyType: "int32",
            type: "Friend",
            id: 1
          }
        }
      },
      Mail: {
        fields: {
          uid: {
            type: "uint32",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          content: {
            type: "string",
            id: 3
          },
          rwds: {
            rule: "repeated",
            type: "Reward",
            id: 4
          },
          senderName: {
            type: "string",
            id: 5
          },
          senderId: {
            type: "uint32",
            id: 6
          },
          createTme: {
            type: "uint32",
            id: 7
          },
          isNew: {
            type: "uint32",
            id: 8
          }
        }
      },
      SC_UPDATE_MAIL: {
        fields: {
          mails: {
            keyType: "int32",
            type: "Mail",
            id: 1
          }
        }
      },
      Task: {
        fields: {
          uid: {
            type: "uint32",
            id: 1
          },
          id: {
            type: "uint32",
            id: 2
          },
          state: {
            type: "uint32",
            id: 3
          }
        }
      },
      SC_UPDATE_TASK: {
        fields: {
          tasks: {
            keyType: "int32",
            type: "Task",
            id: 1
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
      SC_UPDATE_ITEM: {
        fields: {
          items: {
            keyType: "int32",
            type: "Item",
            id: 1
          }
        }
      },
      SC_ROLE_SUMMARY: {
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
          level: {
            type: "uint32",
            id: 4
          },
          vipLevel: {
            type: "uint32",
            id: 5
          },
          combat: {
            type: "uint64",
            id: 6
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
          },
          uid: {
            type: "uint32",
            id: 6
          },
          token: {
            type: "string",
            id: 7
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
