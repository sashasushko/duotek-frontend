let gulp = require('gulp');
let sourcemaps = require('gulp-sourcemaps');

gulp.task('css', () => {
    let sass = require('gulp-sass');
    let postcss = require('gulp-postcss');
    let autoprefixer = require('autoprefixer');
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
        })
    ];

    return gulp.src( './staticcontent/css/source/styles.scss' )
        .pipe( sourcemaps.init() )
        .pipe( sass({ outputStyle: 'expanded'} ).on( 'error', sass.logError) )
        .pipe( postcss(processors) )
        .pipe( sourcemaps.write() )
        .pipe( gulp.dest('./staticcontent/css') );
});

gulp.task('js', () => {
    let scripts = require('./staticcontent/js/source/scripts.js');

    return gulp.src(scripts.path)
	    .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
	    .pipe(concat('all.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./staticcontent/js'));
});

gulp.task('sprite-png', () => {
    let spriteData = gulp.src( './staticcontent/img/sprite/*.png' )
        .pipe(spritesmith({
            cssName: '_sprite.scss',
            imgName: 'sprite.png',
            imgPath: '/staticcontent/img/sprite.png',
            retinaSrcFilter: './staticcontent/img/sprite/*@2x.png',
            retinaImgName: 'sprite@2x.png',
            retinaImgPath:'/staticcontent/img/sprite@2x.png'
        }));

    let imgStream = spriteData.img.pipe( gulp.dest('./staticcontent/img') );
    let cssStream = spriteData.css.pipe( gulp.dest('./staticcontent/css/source/mixins') );

    return merge( imgStream, cssStream );
});

gulp.task('watch', () => {
	gulp.watch('./staticcontent/css/source/**/*.css', ['css']);
	gulp.watch('./staticcontent/js/source/**/*.js', ['js']);
	gulp.watch('./staticcontent/img/sprite/*.png', ['sprite-png']);
});

gulp.task('deploy', () => {});

gulp.task('default', ['css', 'js', 'sprite-png', 'watch']);