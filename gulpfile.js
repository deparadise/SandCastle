/// DEPENDENCIES
	var gulp = require('gulp'),
		compass = require('gulp-compass'),
		//concat = require('gulp-concat'),
		//gulpIf = require('gulp-if'),
		//jsHint = require('gulp-jshint'),
		livereload = require('gulp-livereload'),
		//uglify = require('gulp-uglify');
		gutil = require('gulp-util');

/// ASSET SOURCE LIST
	var sassSources = ['-assets/sass/**/*.scss'];

// compass >>> Styles pipe
	gulp.task('compass', function(){
		gulp.src('-assets/sass/style.scss')
		.pipe(compass({
			// COMPASS CONFIGURATION
			sass: '-assets/sass',
			css: '-assets/css',
			comments: true,
			style: 'expanded',  // expanded for dev / compressed for prod
			image: '-assets/imgs'
		})
		.on('error', gutil.log))
		//.pipe(gulp.dest('/style.css'))
		.pipe(livereload());
	});

/// GULP RUNNING FUNCTIONS
// watch >>> Watches files for changes and runs workflow pipes
	gulp.task('watch', function(){
		livereload.listen();
		//gulp.watch(staticSources, ['static']);
		gulp.watch(sassSources, ['compass']);
		//gulp.watch(jsSources, ['js']);
	});

/// DEFAULT >>> Run all dev tasks and init 'watch'
	gulp.task('default', [
		//'static', 
		'compass',
		//'js', 
		'watch'
	]);