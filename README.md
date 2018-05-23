# bingo
这个项目准备作为node的游戏服务器，使用node8.0相关的库以及技术支持，并且后续会尽可能的对语言新特性进行升。

## Contents
后续生成目录

##DefinitelyTyped
例如：`npm install --save-dev @types/node`，可以根据个人需要安装指定ts声明文件。

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

## protobufjs usage
* node_modules/protobufjs/bin/pbjs src/share/cmd.proto -target=commonjs > src/share/cmd.js
> will generate server used file
* node_modules/protobufjs/bin/pbjs src/share/cmd.proto -target=json > src/share/cmd.json
> will generate client used file

## tools
* parse_cmd.js
> will parse src/share/cmd.proto for client and svn ci
* parse_db.js
> will parse src/share/db.proto for server

## grunt
* npm install grunt-cli -g
> is dependence
* grunt-ts
> is a npm, help to compile ts to js
* gruntfile.js
> all grunt job config here
* grunt ts
> 1. is command line exec within three/, and will auto compile ts to js. If missing the param 'ts', will default compile ts to js
>
> 2. doesn't help to clear the folder, which means if you delete some *.ts, it will auto remove the *.js or *.js.map in /bin

## uglify reserved vars and props
write your reserved vars and props to uglify-reserved.json file.

## tsd
* npm install tsd -g
> is dependence
* tsd init
> is command line to init tsd support
* tsd install async -s
> is command line exec within three/, will install async.d.ts and save to typing.d.ts and tsd.json which will help to code
* tsd update -s -o
> update tsd file and overwrite

## pm2
npm install pm2 -g

Listing all running processes:

```bash
$ pm2 list
```

Managing your processes is straightforward:

```bash
$ pm2 stop     <app_name|id|all>
$ pm2 restart  <app_name|id|all>
$ pm2 delete   <app_name|id|all>
```

To have more details on a specific process:

```bash
$ pm2 describe 0
```

### Monitoring

Monitoring all processes launched:

```bash
$ pm2 monit
```

### Log facilities

Displaying logs of a specified process or all processes, in real time:

```bash
$ pm2 logs
$ pm2 logs --raw
$ pm2 logs big-api
$ pm2 flush          # Clear all the logs
```

### C++ AddOns

write c++ addons within addons folder

```bash
$ sudo npm install node-gyp -g  
$ cd [your_path]  
$ node-gyp configure  
$ node-gyp build  
```

*********
