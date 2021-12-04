// function defaultTask(cb) {
//     console.log('fggg');
//     cb();
// }

// exports.default = defaultTask

const gulp = require('gulp');
const { series, parallel, watch } = require('gulp');
const pug = require('gulp-pug');

const html = () => {
    return gulp.src('src/pug/*.pug')
        .pipe(pug( {pretty: true} ))
        .pipe(gulp.dest('build'))
}

const server = () => {
    browserSync.init({
        server: {
            baseDir: './build'
        },
        notify: false
    });
    browserSync.watch('build', browserSync.reload)
}


exports.default = series(
    parallel(html)
)