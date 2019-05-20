var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var styles = require('gulp-less');
//var sass = require('gulp-sass');

gulp.task('server', ['styles'], function() {
    browserSync.init({
    	server: { baseDir: './app/'}
    });
    gulp.watch('./app/**/*.html').on('change', browserSync.reload);
    // gulp.watch('./app/less/**/*.less', ['less']);
    gulp.watch('./app/less/**/*.less', ['sass']);
});

gulp.task('less', function() {
    return gulp.src('./app/less/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('./app/css'))
    .pipe(browserSync.stream());
});


gulp.task('default', ['server']);
