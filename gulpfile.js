'use strict';

let gulp = require('gulp'),
	sourcemaps = require('gulp-sourcemaps'),
	postcss = require('gulp-postcss'),
	cssimport = require('postcss-import'),
	cssnext = require('postcss-cssnext'),
	babel = require('gulp-babel'),
	concat = require('gulp-concat');

gulp.task('css', () => {
	let browsers = [
			'last 2 versions',
			'Explorer >= 10',
			'Android >= 4.4',
			'last 2 ChromeAndroid versions',
			'last 2 FirefoxAndroid versions',
			'last 2 OperaMobile versions',
			'last 2 Samsung versions',
			'last 2 UCAndroid version'
		],
		features = [],
		processors = [
			cssimport,
			cssnext({
				browsers: browsers,
				features: features
			})
		];

	return gulp.src('./staticcontent/css/source/styles.css')
		.pipe(sourcemaps.init())
		.pipe(postcss(processors))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./staticcontent/css'));
});

gulp.task('js', () => {
	return gulp.src('./staticcontent/js/source/*.js')
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(concat('scripts.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./staticcontent/js'));
});

gulp.task('watch', () => {
	gulp.watch('./staticcontent/css/source/**/*.css', ['css']);
	gulp.watch('./staticcontent/js/source/**/*.js', ['js']);
});

gulp.task('default', ['css', 'js', 'watch']);
