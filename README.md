# bingo

It is designed to build a stateless game server for most cases(RPG, MMO, etc.). For sure, it's well designed for H5 server for full-stack develop.
The project is pretty simple and easy to handle or expand, 
using **Node.js**, **typescript**, **web socket** as server, **nginx** as gate, **redis** as cache and MQ, **mysql** as database, **pm2** as cluster management, **protobuf** for message exchange.

## Contents

* [`How to install`](#how-to-install)
* [`How to run`](#how-to-run)
* [`How to develop my own game`](#how-to-develop-my-own-game)
* [`Redis`](#redis)
* [`Mysql`](#mysql)
* [`Nginx`](#nginx)
* [`Others`](#others)

## How to install

It's suggested to use Linux/Unix OS for the server. Run the following command in terminal.
```
# install the environment
npm install

# compile typescript to javascript
gulp compile
```
## How to run

The project contains several applications to support a game server. Please first make sure you have config the `config/config.json`.
It contains several **key** you must be aware of.
* **log**: specify the log params, such as the dir name and the log level.
* **redis**: start your own redis-server, and change the config, check [`Redis`](#redis).
* **mysql**: start your own mysql-server, and change the config, check [`Mysql`](#mysql).
    * **game_db**: game database to save normal player data, guild data etc.
        * **tableSplitCount**: all the player info is save to the database, so proper table split is necessary.
    * **login_db**: login data for passport auth.
* **apps**: apps supports in the project.
    * **cache_app**: 
        * saveInterval: ms for the cache_app to check to flush data in redis to mysql.
    * **game_app**:
        * sessionPacketMaxLength: length of packet client sent for per session. Normally set to 50 for Attack issues.

### cache_app

The app will flush the dirty data in redis to mysql. The entrance file is `src/cache_app/cache_app.ts`. 

### game_app

Stateless web socket server for the game logic. The entrance file is `src/game_app/cache_app.ts`.

How to Run? 

Lets' take **cache_app** as an example.

* Single Instance mode

    `node dist/cache_app/app.js`, the log will be located in `dist/cache_app/log/`.
* Cluster mode
 
    `pm2 start config/cache_app.json`, the log will be merged in `dist/cache_app/log/` withs is own instance id as its prefix of each line.
    
    ```
    # show the all process started by pm2
    pm2 ls
    
    # stop all
    pm2 stop all
    
    # start all
    pm2 start all
    
    ....(check the pm2 manual)
    ```

## How to develop my own game

* **Specify ur data structure**
    * `src/game_app/role.ts`: player data management.
    * `src/game_app/defines.ts`: player meta data management.
* **Client & Server Message Exchange:** 
    * Name your own .proto for game logic.
        * `src/proto/c2s.proto`: message client send to server, check the comment of the proto.
        * `src/proto/s2c.proto`: message server send to client, check the comment of the proto.
    * Write the controller u named in `src/proto/c2s.proto` to handle the client message.
        * put your controller here `src/game_app/controllers/`.
        * write the method to handle client message in ur controller.
* **Global Timer:**
* **P2P & Broad/Group cast:**


## Redis

Use [redis-4.0.9](https://redis.io/download), for desktop client software, we use [redis-desktop-manager](https://redisdesktop.com/).

```bash
# install
wget http://download.redis.io/releases/redis-4.0.9.tar.gz
tar xzf redis-4.0.9.tar.gz
cd redis-4.0.9
make
sudo make install
sudo mkdir /data/redis -p && chown redis:redis -R /data/redis/

# start server
sudo redis-server config/redis/redis.conf
```

## Mysql 

Use [mysql](https://www.mysql.com/downloads/) 5.5, check website to install. 

```
# create ur own database...
create database game_db;
create database login_db;
```

## Nginx

Use Nginx as the web gate, please choose version > 1.3 and mod the config in [http]
```$xslt
upstream io_nodes {
 ip_hash;
 server 127.0.0.1:5555;## PM2

No need for pm2 log: `"error_file": "/dev/null","out_file": "/dev/null",`
 server 127.0.0.1:5556;
 server 127.0.0.1:5557;
 }
```
server config in [location]：
```
location / {
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header X-Forwarded-For  $proxy_add_x_forwarded_for;
    proxy_set_header Host $host;
    proxy_http_version 1.1;
    proxy_pass http://io_nodes;
    proxy_redirect off;
}
```

## Others

Here are some tips for the project you might need.

### C++ AddOns

write c++ addons within addons folder

```bash
sudo npm install node-gyp -g  
cd [your_path]  
node-gyp configure  
node-gyp build  
```

### 关于网络链接会话管理

* 粘性会话（目前使用）
    * 说明：直接设置Nginx允许ip_hash使得每次链接都定向至指定服务器。
    * 优点：简单无需复制会话，性能较高。
    * 缺点：单个节点挂了，用户会话数据丢失，对于游戏而言需要重新登录，走重连逻辑，如果服务器稳定性较高，建议粘性会话。
* 共享会话
    * 说明：通过redis来存储更新会话数据。
    * 优点：任意节点挂对于用户而言没有任何影响，会话数据不丢失。
    * 缺点：实现管理复杂，单个请求需要额外存储会话状态，无疑增大了不必要的通信频率以及次数，且请求频繁的时候会出现部分网络拥塞（主要是读取以及存储新的会话状态），另外，游戏是强调单链接下的处理包序的，分进程包序的管理会是一个问题。
* 粘性会话+共享会话备份（推荐）
    * 说明：两者的混杂模式，即纯粹使用共享备份做备份，应用本身还是粘性会话，节点宕机后新入的链接按照sessionId去redis需找之前的会话信息，并设置。
    * 优点：能够解决上述两者的缺点。
    * 缺点：实现较为复杂，可以后续有时间再深入优化。

### 性能注意

* 尽量不使用Map，速度太慢
* 能使用Date.now()的地方少用new Date()，前者性能好一些
* 循环尽量for做，而不是forEach

### node command

* `node --trace_gc --trace_gc_verbose app.js` will log gc info when starts
* `node --max-old-space-size=4096 app.js` change the memory limit, but not recommended
* `node --inspect=0.0.0.0:5556 app.js` debug mode, [Reference](http://morning.work/page/maintainable-nodejs/debuging-nodejs-with-chrome-devtools.html)
* `kill -s SIGUSR1 pid` dynamic open debug mode

### PM2

* No need for pm2 log: `"error_file": "/dev/null","out_file": "/dev/null",`
* pm2进程出问题的话直接kill -9即可

### redis

* 批量删除`redis-cli -a redis@ime keys "*" | xargs redis-cli -a redis@ime del`

### 性能调优 Easy-Monitor
`export NODE_ENV=development&& nodemon --harmony --use_strict XXX.js  -w`
then visit [127.0.0.1:12333](http://127.0.0.1:12333)

### git
`git remote set-url origin http://172.16.0.84/sunwenteng/bingo.git`
`git remote set-url origin http://github.com/sunwenteng/bingo.git`
`
