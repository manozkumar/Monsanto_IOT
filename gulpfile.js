"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //Runs a local dev server
var open = require('gulp-open'); //Open a URL in a web browser
var browserify = require('gulp-browserify'); // Bundles JS
var source = require('vinyl-source-stream'); // Use conventional text streams with Gulp
var concat = require('gulp-concat'); //Concatenates files
var lint = require('gulp-eslint'); //Lint JS files, including JSX

var config = {
	port: 9005,
	devBaseUrl: 'http://localhost',
	paths: {
        dist: 'prod',
        fonts: 'node_modules/font-awesome/fonts/*',
		css: [
      		'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/font-awesome/css/font-awesome.min.css',
            './css/stylish-portfolio.css',
            './css/test.css'
    	   ],
        jquery : 'node_modules/jquery/dist/jquery.min.js',
		angular: 'node_modules/angular/angular.min.js',
        bootstrap: 'node_modules/bootstrap/dist/js/bootstrap.min.js',
        js:  'js/*.js'
	}
};

//Start a local development server
gulp.task('connect', ['browserify'], function() {
	connect.server({
		port: config.port,
		base: config.devBaseUrl,
		livereload: true
	});
});

gulp.task('open', ['connect'], function() {
	gulp.src('index.html')
		.pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('jquery', function() {
	gulp.src(config.paths.jquery)
		.pipe(gulp.dest(config.paths.dist + '/lib'))
});

gulp.task('bootstrap', function() {
	gulp.src(config.paths.bootstrap)
		.pipe(gulp.dest(config.paths.dist + '/lib'))
});

gulp.task('angular', function() {
	gulp.src(config.paths.angular)
		.pipe(gulp.dest(config.paths.dist + '/lib'))
});



gulp.task('fonts', function() {
	gulp.src(config.paths.fonts)
		.pipe(gulp.dest(config.paths.dist + '/fonts'))
});

gulp.task('js', function() {
	gulp.src(['js/app.js','js/baseController.js','js/charts.js','js/statController.js','js/templateCode.js'])
		.pipe(concat('bundle.js'))
		.pipe(gulp.dest(config.paths.dist + '/js'))
		.pipe(connect.reload());
});


// Basic usage 
gulp.task('browserify', ['js'], function() {
	// Single entry point to browserify 
	gulp.src('prod/js/bundle.js')
		.pipe(browserify())
		.pipe(gulp.dest('./prod/final'))
});


gulp.task('css', function() {
	gulp.src(config.paths.css)
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(config.paths.dist + '/css'))
        .pipe(connect.reload());
});

gulp.task('lint', function() {
	return gulp.src(config.paths.js)
		.pipe(lint({config: 'eslint.config.json'}))
		.pipe(lint.format());
});

gulp.task('watch', function() {
	gulp.watch(config.paths.css, ['css']);
	gulp.watch(config.paths.js, ['js', 'lint']);
});

gulp.task('default', [ 'js', 'jquery','browserify', 'fonts' ,'bootstrap', 'angular', 'css', 'lint', 'open', 'watch']);