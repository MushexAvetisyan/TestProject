const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();


gulp.task('build', function() {
  return gulp.src('src/scss/*.scss') // source of SCSS files
    .pipe(sass()) // use gulp-sass to compile SCSS to CSS
    .pipe(gulp.dest('dist')) // destination for the CSS files
    .pipe(gulp.src('src/*.html')) // source of HTML file
    .pipe(gulp.dest('dist')) // destination for the HTML file
    .pipe(gulp.src('src/js/*.js')) // source of JS files
    .pipe(gulp.dest('dist')) // destination for the JS files
});



gulp.task('dev', gulp.series('build', function() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  });

  gulp.watch('src/scss/*.scss', gulp.series('build'));
  gulp.watch('src/*.html', gulp.series('build'));
  gulp.watch('src/js/*.js', gulp.series('build'));
  gulp.watch('dist/*.html').on('change', browserSync.reload);
  gulp.watch('dist/*.js').on('change', browserSync.reload);
  gulp.watch('dist/main.css', browserSync.reload);
}));
