'use strict';

// ToDo:
// - Migrate to PostCSS with CSSnext
// - Deploy
// - Path to var

// Plugins
var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var spritesmith = require('gulp.spritesmith');
var merge = require('merge-stream');

// Build Styles
gulp.task('styles', function () {
	return gulp.src('./staticcontent/css/src/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: 'nested'})
			.on('error', sass.logError))
		.pipe(autoprefixer({browsers: ['last 3 version', 'IE >= 9']}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./staticcontent/css'));
});

// Build JS
gulp.task('js', function () {
	return gulp.src([
			'./js/lib/jquery-2.2.3.js',
			'./js/src/checkJS.js',
			'./js/src/checkTouch.js',
			'./js/src/site.js'
		])
		.pipe(sourcemaps.init())
		.pipe(concat('scripts.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./js'));
});

// Build sprites
gulp.task('sprites', function () {
	var spriteData = gulp.src('./staticcontent/img/icons/*.png')
		.pipe(spritesmith({
			retinaSrcFilter: './staticcontent/img/icons/*@2x.png',
			imgName: 'sprite.png',
			retinaImgName: 'sprite@2x.png',
			cssName: '_sprites.scss',
			imgPath: '/staticcontent/img/sprite.png',
			retinaImgPath:'/staticcontent/img/sprite@2x.png'
		}));
	var imgStream = spriteData.img.pipe(gulp.dest('./staticcontent/img'));
	var cssStream = spriteData.css.pipe(gulp.dest('./staticcontent/css/src/lib'));
	return merge(imgStream, cssStream);
});

// Watcher
gulp.task('watch', function() {
    gulp.watch('./js/**/*.js', ['js']);
    gulp.watch('./staticcontent/css/src/**/*.scss', ['styles']);
    gulp.watch('./staticcontent/img/icons/*.png', ['sprites']);
});
