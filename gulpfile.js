const gulp = require('gulp');
const ts = require('gulp-typescript');
const sourceMaps = require('gulp-sourcemaps');
const rm = require('gulp-rm');

// 编译ts
gulp.task('compile', /*['rm'], */function () {
    return gulp.src('src/**/*.ts')
        .pipe(sourceMaps.init())
        .pipe(ts({
            noImplicitAny: false,   // 使用any的时候编译出警告
            removeComments: true,   // 不输出注释
            noEmitOnError: true,    // 错误不生成js
            target: "es2017",
            module: "commonjs",
        })).js
        .pipe(sourceMaps.write())
        .pipe(gulp.dest('dist/'));
});

// 清除dist
gulp.task('rm', function () {
    return gulp.src('dist/**/*', {read: false})
        .pipe(rm({async: false}))
});
