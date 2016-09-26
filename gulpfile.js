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
		features = {
			customSelectors: false,
			colorFunction: false,
			colorHwb: false,
			colorGray: false,
			colorHexAlpha: false,
			colorRebeccapurple: false,
			pseudoClassAnyLink: false,
			attributeCaseInsensitive: false,
		},
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
	let paths = [
			'./staticcontent/js/modernizr/modernizr.js',
			'./staticcontent/js/source/*.js'
		];

	return gulp.src(paths)
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: ['es2015', 'es2016']
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
