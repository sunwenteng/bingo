const gulp = require('gulp');
const ts = require('gulp-typescript');
const sourceMaps = require('gulp-sourcemaps');
const rm = require('gulp-rm');
const exec = require('child_process').exec;
const fs = require('fs');
const {S2C} = require("./src/app/proto/cmd");

gulp.task('scripts_src'/*, ['clear']*/, () => {
    return gulp.src('src/**/*.ts')
        .pipe(sourceMaps.init())
        .pipe(ts({
            noImplicitUseStrict: true,  // 增加这个是因为Log4js读取代码堆栈要用到arguments.callee这个strict mode下禁用了，后续如果有更好的方案可以替换
            noImplicitAny: false,       // 使用any的时候编译出警告
            removeComments: true,       // 不输出注释
            noEmitOnError: true,        // 错误不生成js
            target: "es2017",
            module: "commonjs",
            experimentalDecorators: true
        })).js
        .pipe(sourceMaps.write())
        .pipe(gulp.dest('dist/'));
});

gulp.task('clear', () => {
    return gulp.src('dist/*', {read: false})
        .pipe(rm({async: false}))
});

gulp.task('compile', ['scripts_src'], () => {
    return gulp.src(['src/**/*.js', '!src/addons/stringchecker/StringChecker.js',
        '!src/app/proto/cmd.client.js',
        'src/**/*.json', 'src/**/*.node'])
        .pipe(gulp.dest('dist/'));
});

// proto文件解析
let protoFiles = ['./src/app/proto/c2s.proto', './src/app/proto/s2c.proto'];
// 这个文件小一点 速度比后者稍微慢一点
gulp.task('proto2json', (cb) => {
    exec('./node_modules/protobufjs/bin/pbjs -t json-module -w commonjs -o ./src/app/proto/cmd.js ' + protoFiles.join(' '), () => {
        cb();
    })
});

// 生成closure
gulp.task('proto2closure', (cb) => {
    exec('./node_modules/protobufjs/bin/pbjs -t static-module -w closure -o ./src/app/proto/cmd.client.js ' + protoFiles.join(' ') + ' && ' +
        './node_modules/protobufjs/bin/pbts --no-comments -o ./src/app/proto/cmd.d.ts ./src/app/proto/cmd.client.js', () => {
        cb();
    })
});

// 客户端用
gulp.task('proto2client', ['proto2closure'], () => {
    let _class_txt = "";

    function write(str) {
        _class_txt += str + "\n";
    }

    write("module Game{");
    write("\texport class Protocol{");

    for (let cmd  in S2C.Message['fields']) {
        if (cmd.indexOf("SC_") !== -1) {
            write("\t\t public static " + cmd + "_ID = \"" + cmd + "\";")
        }
    }
    write("\t}\n}");

    fs.writeFileSync("./src/app/proto/Protocol.ts", _class_txt)
});

gulp.task('proto2all', ['proto2json', 'proto2client']);


// proto文件解析
let win_protoFiles = ['.\\src\\app\\proto\\c2s.proto', '.\\src\\app\\proto\\s2c.proto'];
// 这个文件小一点 速度比后者稍微慢一点
gulp.task('win_proto2json', (cb) => {
    exec('.\\node_modules\\.bin\\pbjs.cmd -t json-module -w commonjs -o .\\src\\app\\proto\\cmd.js ' + win_protoFiles.join(' '), () => {
        cb();
    })
});

// 生成closure
gulp.task('win_proto2closure', (cb) => {
    exec('.\\node_modules\\.bin\\pbjs.cmd -t static-module -w closure -o .\\src\\app\\proto\\cmd.client.js ' + win_protoFiles.join(' ') + ' && ' +
        '.\\node_modules\\.bin\\pbts.cmd --no-comments -o .\\src\\app\\proto\\cmd.d.ts .\\src\\app\\proto\\cmd.client.js', () => {
        cb();
    })
});

// 客户端用
gulp.task('win_proto2client', ['win_proto2closure'], () => {
    let _class_txt = "";
    function write(str) {
        _class_txt += str + "\n";
    }

    write("module Game{");
    write("\texport class Protocol{");

    for (let cmd  in S2C.Message['fields']) {
        if (cmd.indexOf("SC_") !== -1) {
            write("\t\t public static " + cmd + "_ID = \"" + cmd + "\";")
        }
    }
    write("\t}\n}");

    fs.writeFileSync("./src/app/proto/Protocol.ts", _class_txt)
});

gulp.task('win_proto2all', ['win_proto2json', 'win_proto2client']);