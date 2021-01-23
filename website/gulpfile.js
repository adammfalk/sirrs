var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');
var browserSync = require('browser-sync');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('tsc', function () {
    return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest('src/js'));
});

gulp.task('clean', function () {
    return del(['src/js/*', 'dist/css/*', 'dist/js/*']);
});

gulp.task('sass', function () {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css'));
});

gulp.task('watch', function () {
    gulp.watch('src/scss/*.css', gulp.series(['sass']));
});
