/* Gulpfile.js
================================ */
var config = require('./config.json').gulp;

// Modules
var gulp = require('gulp'),
  path = require('path'),
  mamp = require('gulp-mamp'),
  watch = require('gulp-watch'),
  rename = require('gulp-rename'),
  less = require('gulp-less')
  cssmin = require('gulp-cssmin'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  chalk = require('chalk'),
  jshint = require('gulp-jshint'),
  stylish = require('jshint-stylish');

// Gulp MAMP
gulp.task('config', function(cb){
  mamp(config.mamp, 'config', cb);
});

gulp.task('start', function(cb){
  mamp(config.mamp, 'start', cb);
});

gulp.task('stop', function(cb){
  mamp(config.mamp, 'stop', cb);
});

// Compile and Minify LESS -> CSS
gulp.task('less-cssmin', function () {
  
  return gulp.src(
    config['less-cssmin'])
    .pipe(less())
    .pipe(gulp.dest('./src/css/'))
    .pipe(concat('combined.css'))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/css/')
    .on('end', function(){
      console.log(chalk.magenta('LESS process done.'));
    })
  );
  
});

// Uglify JS HEAD
gulp.task('uglify:head', function(cb) {
  return gulp.src(
    config.uglify.head)
  	.pipe(concat('combined-head.js'))
    .pipe(gulp.dest('./src/js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/js/')
    .on('end', function(){
      console.log(chalk.green('JS Head uglify done.'));
    })
  );
});

gulp.task('lint', function () {
	return gulp.src(
		config.lint)
  	.pipe(jshint())
  	.pipe(jshint.reporter(stylish))
  	.on('end', function(){
      console.log(chalk.green('JS lint done.'));
    })
});

// Uglify JS FOOT
gulp.task('uglify:foot', function(cb) {
  return gulp.src(
    config.uglify.foot)
  	.pipe(concat('combined-foot.js'))
    .pipe(gulp.dest('./src/js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/js/')
    .on('end', function(){
      console.log(chalk.green('JS Foot uglify done.'));
    })
  );
});

// UGLIFY
gulp.task('uglify', ['uglify:head', 'uglify:foot'], function(){
  // return console.log(chalk.green('All JS uglified'));

});

// Gulp default task 
gulp.task('default', ['uglify','less-cssmin','lint'], function(cb) {
  // return console.log(chalk.green('Donsies'));
});

// Watch
gulp.task('watch', function() {

  // Watch less files
  gulp.watch(config.watch.css, ['less-cssmin']);

  // Watch .js files
  gulp.watch(config.watch.js_foot, ['uglify:foot','lint']);
  gulp.watch(config.watch.js_head, ['uglify:head','lint']);

  // Watch  gulpfile.js
  gulp.watch(['gulpfile.js','config.json'], ['default']);

});