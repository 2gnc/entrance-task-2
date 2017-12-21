'use strict';

const gulp = require( 'gulp' ),
	sass = require( 'gulp-sass' ),
	csso = require( 'gulp-csso' ),
	pug = require( 'gulp-pug' ),
	autopref = require( 'gulp-autoprefixer' ),
	concat = require( 'gulp-concat' ),
	babel = require('gulp-babel'),
	ugly = require( 'gulp-uglify' ),
	rename = require( 'gulp-rename' ),
	del = require( 'del' );

gulp.task( 'css', function() {
	return gulp.src( 'src/styles/main.sass' )
		.pipe( sass().on('error', sass.logError) )
		.pipe(autopref({
			browsers: ['last 2 versions'],
			cascade: false
			}))
		.pipe( gulp.dest( 'temp' ) )
		.pipe( csso() )
		.pipe( rename( 'style.min.css' ) )
		.pipe( gulp.dest( 'public/styles/' ) );
} );

gulp.task( 'html', function() {
	return  gulp.src( 'src/pages/**.pug' )
		.pipe( pug() )
		.pipe( gulp.dest( 'public/' ) );
} );

gulp.task( 'js', function() {
	return gulp.src( 'src/blocks/**/**.js' )
		.pipe( concat('scripts.js') )
		.pipe( babel({
			presets: ['env']
		}) )
		.pipe( ugly() )
		.pipe(gulp.dest( 'public/scripts/' ))
} )

gulp.task( 'cleanup', function() {
	return del( ['temp/**.*'] );
} );

gulp.task( 'dev', console.log( 'тут таски для разработки' ) );

gulp.task( 'production', console.log( 'тут будет большой таск для продакшн' ) );

gulp.task( 'default', console.log( 'it works' ) );

