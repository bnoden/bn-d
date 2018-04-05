const gulp = require('gulp');
const minify = require('gulp-minify');
const browserify = require('browserify');
const fs = require('fs');

// gulp bundle  -bundle main source files
// gulp min   -minify resulting js file

gulp.task('bundle', () => {
  browserify({
    entries: 'index.js',
    debug: false
  })
    .bundle()
    .pipe(fs.createWriteStream('dist/bn.d.00.js'));
});

gulp.task('min', () => {
  gulp
    .src('dist/bn.d.00.js')
    .pipe(
      minify({
        ext: {
          min: '.min.js'
        },
        ignoreFiles: ['.min.js'],
        noSource: true
      })
    )
    .pipe(gulp.dest('dist'));
});
