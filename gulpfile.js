'use strict';

var gulp 			= require('gulp');

// Plugins

var pump 			= require('pump');
var sass 			= require('gulp-sass');
var sourcemaps      = require('gulp-sourcemaps');
var postcss 		= require('gulp-postcss');
var autoprefixer 	= require('autoprefixer');

// Tasks

gulp.task('styles', function (cb) {
    pump([
		gulp.src('assets/*.scss'),
		sourcemaps.init(),
    	sass().on('error', sass.logError),
		postcss([autoprefixer({browsers: ['last 1 version']})]),
		sourcemaps.write('.'),
		gulp.dest('assets')
	],
    cb
    )
});

gulp.task('watch', function () {

	gulp.watch('assets/*.scss', ['styles']);

});

gulp.task('default', ['styles', 'watch']);
