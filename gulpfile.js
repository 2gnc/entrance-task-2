'use strict';

let gulp = require( 'gulp' ),
	sass = require( 'gulp-sass' ),
	csso = require( 'gulp-csso' ),
	rename = require( 'gulp-rename' ),
	del = require( 'del' );

gulp.task( 'sass', function() {
	return gulp.src( 'src/styles/main.sass' )
		.pipe( sass().on('error', sass.logError) )
		.pipe( gulp.dest( 'temp' ) )
		.pipe( csso() )
		.pipe( rename( 'style.min.css' ) )
		.pipe( gulp.dest( 'public/styles/' ) );
} );

gulp.task( 'cleanup', function() {
	return del( ['temp/**.*'] );
} );

gulp.task( 'default', console.log( 'it works' ) );

gulp.task( 'dev', console.log( 'тут таски для разработки' ) );

gulp.task( 'production', console.log( 'тут будет большой таск для продакшн' ) );