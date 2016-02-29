/// DEPENDENCIES
	var gulp = require('gulp'),
		compass = require('gulp-compass'),
		//concat = require('gulp-concat'),
		//gulpIf = require('gulp-if'),
		//jsHint = require('gulp-jshint'),
		//livereload = require('gulp-livereload'),
		//uglify = require('gulp-uglify');
		gutil = require('gulp-util');

// compass >>> Styles pipe
	gulp.task('compass', function(){
		gulp.src('assets/sass/style.scss')
		.pipe(compass({
			// COMPASS CONFIGURATION
			sass: 'assets/sass',
			css: 'assets/css',
			comments: true,
			style: 'expanded',  // expanded for dev / compressed for prod
			image: 'assets/imgs'
		})
		.on('error', gutil.log));
		//.pipe(gulp.dest('/style.css'))
		//.pipe(livereload())
	});

/// DEFAULT >>> Run all dev tasks and init 'watch'
	gulp.task('default', [
		//'static', 
		'compass'
		//'js', 
		//'watch'
	]);