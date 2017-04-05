'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var importer = require('node-sass-globbing');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();

// Default compile task with browser sync
gulp.task('browser-sync', function () {
  browserSync.init({
    injectChanges: true,
    // Update proxy URL
    proxy: "http://localhost:8888/racc-drupal-school/"
  });
  gulp.watch("./sass/**/*.scss", ['sass:dev']).on('change', browserSync.reload);
});

// PROD compile task
gulp.task('sass:prod', function () {
  gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 version']
    }))
    .pipe(gulp.dest('./css'));
});

// DEV compile task
gulp.task('sass:dev', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({
      importer: importer,
      includePaths: [
        './node_modules/breakpoint-sass/stylesheets/',
        './node_modules/susy/sass/',
        './node_modules/compass-mixins/lib/'
      ]
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 version']
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./css'));
});

// Panels layout compile task
gulp.task('sass:panels', function () {
  gulp.src('./panels/layouts/**/*.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({
      importer: importer,
      includePaths: [
        './node_modules/breakpoint-sass/stylesheets/',
        './node_modules/susy/sass/',
        './node_modules/compass-mixins/lib/'
      ]
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 version']
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./panels/layouts/'));
});

// Default task definition
gulp.task('default', ['browser-sync']);
