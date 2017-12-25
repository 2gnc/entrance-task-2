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
	sync = require( 'browser-sync' );

gulp.task( 'css', function() {
	return gulp.src( 'src/styles/main.sass' )
		.pipe( sass().on('error', sass.logError) )
		.pipe(autopref({
			browsers: ['last 2 versions'],
			cascade: false
			}))
		.pipe( csso() )
		.pipe( rename( 'style.min.css' ) )
		.pipe( gulp.dest( 'public/styles/' ) )
		.pipe(sync.reload({ stream: true }));
} );

gulp.task( 'html', function() {
	return  gulp.src( 'src/pages/*.pug' )
		.pipe( pug() )
		.pipe( gulp.dest( 'public/' ) )
		.pipe(sync.reload({ stream: true }));
} );

gulp.task( 'js', function() {
	return gulp.src( 'src/blocks/**/**.js' )
		.pipe( concat('scripts.js') )
		.pipe( babel({
			presets: ['env']
		}) )
		.pipe( ugly() )
		.pipe(gulp.dest( 'public/scripts/' ))
		.pipe(sync.reload({ stream: true }));
} );

gulp.task( 'cleanup', function() {
	return del( ['temp/**.*'] );
} );

gulp.task( 'sync', function() {
	sync({
		server: { baseDir: 'public' },
		notify: false
		});
	});

gulp.task( 'dev', ['sync', 'css', 'html', 'js'], function() {
	gulp.watch( 'src/**/**/**/**.**', ['css', 'html', 'js'] );
});

gulp.task( 'production', ['css', 'html', 'js'], function() {
	return
});

