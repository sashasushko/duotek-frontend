'use strict';

// ToDo:
// - Migrate to PostCSS with CSSnext
// - Deploy

// Plugins
var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var spritesmith = require('gulp.spritesmith');
var merge = require('merge-stream');


// Build Styles
var processors = [
	autoprefixer({
		browsers: ['last 3 version', 'IE >= 9']
	})
];

gulp.task('styles', function () {
  return gulp.src( './staticcontent/css/src/*.scss' )
    .pipe( sourcemaps.init() )
	.pipe( sass({outputStyle: 'expanded'} )
		.on( 'error', sass.logError) )
    .pipe( postcss(processors) )
    .pipe( sourcemaps.write('.') )
    .pipe( gulp.dest('./staticcontent/css') );
});


// Build JS
var jsPath = [
	'./js/lib/jquery-2.2.3.js',
	'./js/src/checkJS.js',
	'./js/src/checkTouch.js',
	'./js/src/site.js'
];

gulp.task('js', function () {
	return gulp.src( jsPath )
		.pipe( sourcemaps.init() )
		.pipe( concat('scripts.js') )
		.pipe( sourcemaps.write() )
		.pipe( gulp.dest('./js') );
});

// Build sprites
var sprites = [
	spritesmith({
		retinaSrcFilter: './staticcontent/img/sprite/*@2x.png',
		imgName: 'sprite.png',
		retinaImgName: 'sprite@2x.png',
		cssName: '_sprites.scss',
		imgPath: '/staticcontent/img/sprite.png',
		retinaImgPath:'/staticcontent/img/sprite@2x.png'
	})
]

gulp.task('sprites', function () {
	var spriteData = gulp.src( './staticcontent/img/sprite/*.png' )
		.pipe( sprites );
	var imgStream = spriteData.img.pipe( gulp.dest('./staticcontent/img') );
	var cssStream = spriteData.css.pipe( gulp.dest('./staticcontent/css/src/lib') );
	return merge( imgStream, cssStream );
});

// Watcher
gulp.task('watch', function() {
    gulp.watch( './js/**/*.js', ['js'] );
    gulp.watch( './staticcontent/css/src/**/*.scss', ['styles'] );
});
