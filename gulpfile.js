'use strict';

let gulp = require('gulp');
let postcss = require('gulp-postcss');
let sourcemaps = require('gulp-sourcemaps');

gulp.task('css', () => {
  let autoprefixer = require('autoprefixer');
  let processors = [
    autoprefixer({
      browsers: [
        'last 2 versions',
        'Explorer >= 10',
        'Android >= 4.4',
        'last 2 ChromeAndroid versions',
        'last 2 FirefoxAndroid versions',
        'last 2 OperaMobile versions',
        'last 2 OperaMini versions',
        'last 2 Samsung versions',
        'last 2 UCAndroid versions'
      ]
    })
  ];
  return gulp.src('./staticcontent/css/source/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./staticcontent/css'));
});
