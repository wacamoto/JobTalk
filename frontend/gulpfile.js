var gulp = require('gulp');
var browserify = require('gulp-browserify');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var webserver = require('gulp-webserver');
var gutil = require('gulp-util');
var minify = require('gulp-minify');

gulp.task('scripts', function() {
    gulp.src('js/*.js')
        .pipe(browserify())
        .on('error', gutil.log)
        .pipe(minify())
        .pipe(gulp.dest('dist/'));
});

gulp.task('scss', function() {
  gulp.src('./scss/*.scss')
    .pipe(sass())
    .on('error', gutil.log)
    .pipe(gulp.dest('dist/'));
});

gulp.task('templates', function() {
  gulp.src('./jade/*.jade')
    .pipe(jade())
    .on('error', gutil.log)
    .pipe(gulp.dest('dist/'));
});

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('watch', function () {
  gulp.watch(['jade/*.jade'],['templates']);
  gulp.watch('js/*.js',['scripts']);
  gulp.watch('scss/*.scss',['scss']);
});

gulp.task('default', ['scripts','scss','templates','webserver','watch']);