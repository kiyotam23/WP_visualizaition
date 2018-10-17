var gulp          = require('gulp'),watch = require('gulp-watch');;
var sass          = require('gulp-sass');
var autoprefixer  = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
  return gulp.src('./sass/**/style.scss')
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(autoprefixer())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./'))
});




gulp.task('watch', function() {
	gulp.watch('./sass/**/*.scss', ['sass']);
});


gulp.task('default', ['sass','watch']);





