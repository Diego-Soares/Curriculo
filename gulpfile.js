var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    rename = require('gulp-rename'),
    uglifycss = require('gulp-uglifycss');

//Processa main.css
gulp.task('sass:main', function () {
    sass('scss/main.scss').on('error', sass.logError)
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(rename("main.min.css"))
    .pipe(gulp.dest('./'));

});

gulp.task('default', function () {
    gulp.watch([
        'scss/*/*.scss',
        'scss/*.scss'
    ], [
        'sass:main'
    ]);
});
