const gulp = require('gulp');
const ts = require('gulp-typescript');
const sourceMaps = require('gulp-sourcemaps');
const rm = require('gulp-rm');

// 编译ts
gulp.task('compile_src', () => {
    return gulp.src('src/**/*.ts')
        .pipe(sourceMaps.init())
        .pipe(ts({
            noImplicitUseStrict: true,  // 增加这个是因为Log4js读取代码堆栈要用到arguments.callee这个strict mode下禁用了，后续如果有更好的方案可以替换
            noImplicitAny: false,       // 使用any的时候编译出警告
            removeComments: true,       // 不输出注释
            noEmitOnError: true,        // 错误不生成js
            target: "es2017",
            module: "commonjs",
        })).js
        .pipe(sourceMaps.write())
        .pipe(gulp.dest('dist/'));
});

// 清除dist
gulp.task('rm', () => {
    return gulp.src('dist/**/*', {read: false})
        .pipe(rm({async: false}))
});
