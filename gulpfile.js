'use strict';

let gulp = require('gulp'),
	sourcemaps = require('gulp-sourcemaps'),
	sass = require('gulp-sass'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	babel = require('gulp-babel'),
	concat = require('gulp-concat'),
	spritesmith = require('gulp.spritesmith'),
	merge = require('merge-stream');

gulp.task('css', () => {
	let processors = [
			autoprefixer({
				browsers: [
					'last 2 versions',
					'Explorer >= 10',
					'Android >= 4.4',
					'last 2 ChromeAndroid versions',
					'last 2 FirefoxAndroid versions',
					'last 2 OperaMobile versions',
					'last 2 Samsung versions',
					'last 2 UCAndroid version'
				]
			})
		];

	return gulp.src(['./staticcontent/css/source/styles.scss', './staticcontent/css/source/ie.scss'])
		.pipe( sourcemaps.init() )
		.pipe( sass({outputStyle:'expanded'}).on('error', sass.logError) )
		.pipe( postcss(processors) )
		.pipe( sourcemaps.write() )
		.pipe( gulp.dest('./staticcontent/css') );
});

gulp.task('js', () => {
	let paths = [
			'./staticcontent/js/vendor/modernizr/modernizr.js',
			'./staticcontent/js/source/*.js'
		];

	return gulp.src(paths)
		.pipe(sourcemaps.init())
		.pipe(concat('scripts.js'))
		.pipe(babel({
			presets: ['es2015', 'es2016', 'es2017']
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./staticcontent/js'));
});

gulp.task('sprite-png', () => {
	let spriteData = gulp.src( './staticcontent/img/sprite/*.png' )
		.pipe(
			spritesmith({
				// retina
				retinaSrcFilter: './staticcontent/img/sprite/*@2x.png',
				retinaImgName: 'sprite@2x.png',
				retinaImgPath:'/staticcontent/img/sprite@2x.png',
				// default
				imgName: 'sprite.png',
				imgPath: '/staticcontent/img/sprite.png',
				// styles
				cssName: '_sprites.scss'
			})
		);
	let imgStream = spriteData.img.pipe( gulp.dest('./staticcontent/img') );
	let cssStream = spriteData.css.pipe( gulp.dest('./staticcontent/css/source/mixins') );

	return merge( imgStream, cssStream );
});


gulp.task('watch', () => {
	gulp.watch('./staticcontent/css/source/**/*.css', ['css']);
	gulp.watch('./staticcontent/js/source/**/*.js', ['js']);
});

gulp.task('default', ['sprite-png', 'css', 'js', 'watch']);
