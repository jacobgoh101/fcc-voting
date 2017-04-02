var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

gulp.task('styles', function () {
    var plugins = [
        autoprefixer({
            browsers: ['last 10000000000000000 version']
        }),
        cssnano()
    ];
    gulp.src('./public/stylesheets/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./public/stylesheets/'));
});

gulp.task('default', function () {
    gulp.watch('./public/stylesheets/style.scss', ['styles']);
});