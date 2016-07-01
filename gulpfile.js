'use strict';

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
		browsers: ['last 2 version', 'IE >= 9']
	})
];

gulp.task('css', function () {
  return gulp.src( './staticcontent/css/src/*.scss' )
    .pipe( sourcemaps.init() )
	.pipe( sass({ outputStyle: 'expanded'} ).on( 'error', sass.logError) )
    .pipe( postcss(processors) )
    .pipe( sourcemaps.write('.') )
    .pipe( gulp.dest('./staticcontent/css') );
});


// Build JS
var jsPath = [
	'./staticcontent/js/src/blc/checkJS.js',
	'./staticcontent/js/src/blc/checkTouch.js',
	'./staticcontent/js/src/blc/site.js'
];

gulp.task('js', function () {
	return gulp.src( jsPath )
		.pipe( sourcemaps.init() )
		.pipe( concat('scripts.js') )
		.pipe( sourcemaps.write() )
		.pipe( gulp.dest('./staticcontent/js') );
});

// Build sprites
gulp.task('sprites', function () {
	var spriteData = gulp.src( './staticcontent/img/sprite/*.png' )
		.pipe(
			spritesmith({
				retinaSrcFilter: './staticcontent/img/sprite/*@2x.png',
				imgName: 'sprite.png',
				retinaImgName: 'sprite@2x.png',
				cssName: '_sprites.scss',
				imgPath: '/staticcontent/img/sprite.png',
				retinaImgPath:'/staticcontent/img/sprite@2x.png'
			})
		);
	var imgStream = spriteData.img.pipe( gulp.dest('./staticcontent/img') );
	var cssStream = spriteData.css.pipe( gulp.dest('./staticcontent/css/src/lib') );
	return merge( imgStream, cssStream );
});

// Watcher
gulp.task('watch', function() {
    gulp.watch( './js/**/*.js', ['js'] );
    gulp.watch( './staticcontent/css/src/**/*.scss', ['styles'] );
});
