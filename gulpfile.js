var gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./src/**/*.scss')
.pipe(sass().on('error', sass.logError)).pipe(autoprefixer()).pipe(cleanCSS())
.pipe(gulp.dest('./public/css'))
})

gulp.task('watch', function () {
    gulp.watch('./**/*.scss', gulp.series('sass'))
});
