const gulp = require('gulp');

gulp.task('TS', ['copy']);
// gulp.task('build:ts', ['watch:ts']);


gulp.task('copy',() => {
    return gulp.src('A/*.ts')
        .pipe(gulp.dest('B'))
});

gulp.task('watch:ts', () => {
    return gulp.watch('A/*.ts', ['copy']);
});
console.log('ararar');

