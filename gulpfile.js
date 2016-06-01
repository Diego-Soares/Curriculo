var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
 
gulp.task('sass', function () {
  return sass('scss/style.scss')
    .pipe(gulp.dest('css/style.css'));
});	