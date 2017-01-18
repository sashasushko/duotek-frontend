'use strict';


let gulp = require('gulp');
let sourcemaps = require('gulp-sourcemaps');
let postcss = require('gulp-postcss');
let rename = require("gulp-rename");


gulp.task('css', () => {
	let sass = require('gulp-sass');
	let autoprefixer = require('autoprefixer');
	let discardComments = require('postcss-discard-comments');
	let browsers = [
		'last 2 versions',
		'Explorer >= 10',
		'Android >= 4.4',
		'last 2 ChromeAndroid versions',
		'last 2 FirefoxAndroid versions',
		'last 2 OperaMobile versions',
		'last 2 Samsung versions',
		'last 2 UCAndroid version'
	];
	let processors = [
		autoprefixer({
			browsers: browsers
		}),
		discardComments
	];

	return gulp.src( './staticcontent/source/scss/styles.scss' )
		.pipe( sourcemaps.init() )
		.pipe( sass({ outputStyle: 'expanded' }).on( 'error', sass.logError) )
		.pipe( postcss(processors) )
		.pipe( sourcemaps.write() )
		.pipe( rename({ basename: 'all' }) )
		.pipe( gulp.dest('./staticcontent/css') );
});


gulp.task('deploy-css', () => {
	let cssnano = require('cssnano');
	let processors = [
		cssnano({
			autoprefixer: false,
			discardComments: {
				removeAll: true
			},
			reduceIdents: false,
			svgo: false,
			zindex: false
		})
	];

	return gulp.src( './staticcontent/css/all.css' )
		.pipe( postcss(processors) )
		.pipe( gulp.dest('./staticcontent/css') );
});


gulp.task('js', () => {
	let scripts = require('./staticcontent/source/js/scripts.js');
	let babel = require('gulp-babel');
	let concat = require('gulp-concat');

	return gulp.src(scripts.path)
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(concat('all.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./staticcontent/js'));
});


gulp.task('deploy-js', () => {
	let uglify = require('gulp-uglify');

	return gulp.src( './staticcontent/js/all.js' )
		.pipe( uglify() )
		.pipe( gulp.dest('./staticcontent/js') );
});


gulp.task('sprite-png', () => {
	let spritesmith = require('gulp.spritesmith');
	let merge = require('merge-stream');
	let spriteData = gulp.src( './staticcontent/source/img/sprite/png/*.png' )
		.pipe(spritesmith({
			cssName: '_sprite.scss',
			imgName: 'sprite.png',
			imgPath: '/staticcontent/img/sprite.png',
			retinaSrcFilter: './staticcontent/source/img/sprite/png/*@2x.png',
			retinaImgName: 'sprite@2x.png',
			retinaImgPath:'/staticcontent/img/sprite@2x.png'
		}));

	let imgStream = spriteData.img.pipe( gulp.dest('./staticcontent/img') );
	let cssStream = spriteData.css.pipe( gulp.dest('./staticcontent/source/scss/helpers') );

	return merge( imgStream, cssStream );
});


gulp.task('watch', () => {
	gulp.watch('staticcontent/source/scss/**/*.scss', ['css']);
	gulp.watch('staticcontent/source/js/**/*.js', ['js']);
});


gulp.task('default', ['sprite-png', 'css', 'js', 'watch']);


gulp.task('deploy', ['deploy-css', 'deploy-js']);
