'use strict';

// Plugins
var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

// Build SASS
gulp.task('sass', function () {
	return gulp.src('staticcontent/css/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: 'nested'})
			.on('error', sass.logError))
		.pipe(autoprefixer({browsers: ['last 3 version', 'IE >= 9']}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('staticcontent/css'));
});

// Build JS
gulp.task('js', function () {
	return gulp.src([
			'staticcontent/js/site.js'
		])
		.pipe(sourcemaps.init())
		.pipe(concat('common.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('staticcontent/js'));
});

// ToDo: Сборка спрайтов
// ToDo: Оптимизация для развертывания на сервере

// Watch
gulp.task('watch', function() {
    gulp.watch('staticcontent/js/**/*.js', ['js']);
    gulp.watch('staticcontent/css/**/*.scss', ['sass']);
});
