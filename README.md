# bingo
这个项目准备作为node的游戏服务器，使用node8.0相关的库以及技术支持，并且后续会尽可能的对语言新特性进行升。

## Contents
后续生成目录

## mocha usage

1. specify file or folder:
> * mocha *.js
> * mocha test/
2. use istanbul
> * istanbul cover [file]
> * istanbul cover _mocha -- -R spec

## node command
1. `node --trace_gc --trace_gc_verbose app.js` will log gc info when starts
2. `node --max-old-space-size=4096 app.js` will log gc info when starts

## npm install options
* npm install
> will install dependencies and devDependencies
* npm install --production
> will not install modules listed in devDependencies

## 关于负载均衡解决方案
* 粘性会话
> * 说明：直接设置Nginx允许ip_hash使得每次链接都定向至指定服务器。
> * 优点：简单无需复制会话，性能较高。
> * 缺点：单个节点挂了，用户会话数据丢失，对于游戏而言需要重新登录，走重连逻辑，如果服务器稳定性较高，建议粘性会话。
* 共享会话
> * 说明：通过redis来存储会话数据，这样利用Nginx可以完美使用负载均衡策略。
> * 优点：任意节点挂对于用户而言没有任何影响，会话数据不丢失。
> * 缺点：实现管理复杂，单个请求需要额外存储会话状态，无疑增大了不必要的通信频率以及次数，且请求频繁的时候会出现部分网络拥塞（主要是读取以及存储新的会话状态）

## C++ AddOns

write c++ addons within addons folder

```bash
sudo npm install node-gyp -g  
cd [your_path]  
node-gyp configure  
node-gyp build  
```

## redis

使用redis4.0.9稳定版本，客户端工具使用redis-desktop-manager。

```bash
wget http://download.redis.io/releases/redis-4.0.9.tar.gz
tar xzf redis-4.0.9.tar.gz
cd redis-4.0.9
make
sudo make install
sudo mkdir /data/redis -p && chown redis:redis -R /data/redis/
```

## production

NODE_ENV=production

# 性能注意
* 尽量不适用Map或者Set，速度太慢
* 能使用Date.now()的地方少用new Date()，前者性能好一些
* 循环尽量for做，而不是forEach