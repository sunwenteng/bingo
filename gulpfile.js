const gulp = require('gulp');
const ts = require('gulp-typescript');
const sourceMaps = require('gulp-sourcemaps');
const rm = require('gulp-rm');
const shell = require('gulp-shell');

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
    return gulp.src(['src/**/*.js', '!src/addons/stringchecker/StringChecker.js', 'src/**/*.json', 'src/**/*.node'])
        .pipe(gulp.dest('dist/'));
});

// proto文件解析
let protoFiles = ['./src/proto/c2s.proto', './src/proto/s2c.proto'];
// 这个文件小一点 速度比后者稍微慢一点
gulp.task('proto2json', shell.task('./node_modules/protobufjs/bin/pbjs -t json-module -w commonjs -o ./src/proto/cmd.js ' + protoFiles.join(' ') + ' && ' +
    './node_modules/protobufjs/bin/pbjs -t static-module ' + protoFiles.join(' ') + ' | ./node_modules/protobufjs/bin/pbts --no-comments -o ./src/proto/cmd.d.ts -'));
// 生成的文件较大
gulp.task('proto2js', shell.task('./node_modules/protobufjs/bin/pbjs -t static-module -w commonjs -o ./src/proto/cmd.js ' + protoFiles.join(' ') + ' && ' +
    './node_modules/protobufjs/bin/pbts --no-comments -o ./src/proto/cmd.d.ts ./src/proto/cmd.js'));

gulp.task('proto2client', shell.task('./node_modules/protobufjs/bin/pbjs -t static-module -w amd -o ./src/proto/cmd.js ' + protoFiles.join(' ') + ' && ' +
    './node_modules/protobufjs/bin/pbts --no-comments -o ./src/proto/cmd.d.ts ./src/proto/cmd.js'));