'use strict';

let gulp = require('gulp'),
	sourcemaps = require('gulp-sourcemaps'),
	postcss = require('gulp-postcss'),
	cssimport = require('postcss-import'),
	cssnext = require('postcss-cssnext');

gulp.task('css', () => {
	let browsers = [
			'last 2 versions',
			'Explorer >= 10',
			'Android >= 4.4',
			'last 2 ChromeAndroid versions',
			'last 2 FirefoxAndroid versions',
			'last 2 OperaMobile versions',
			'last 2 OperaMini versions',
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

gulp.task('watch', () => {
	gulp.watch('./staticcontent/css/source/**/*.css', ['css']);
});

gulp.task('default', ['css', 'watch']);
