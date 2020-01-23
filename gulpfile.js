"use strict";

const gulp    = require('gulp');
const pug     = require('gulp-pug');
const sass    = require('gulp-dart-sass');
const del     = require('del');
const browserSync = require('browser-sync').create();

const devPath   = 'src/';
const buildPath = 'dist/';
const data      = require('./' + devPath + 'data/data.json');

function pages () {
  return gulp
    .src(devPath + 'pug/3-pages/*.pug')
    .pipe(pug({
      data: data
    }))
    .pipe(gulp.dest(buildPath))
    .pipe(browserSync.stream());
  }
  
function styles () {
  return gulp
    .src(devPath + 'styles/main.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest(buildPath + 'css'))
    .pipe(browserSync.stream());
}

function statics () {
  return gulp
    .src(devPath + 'images/**/*')
    .pipe(gulp.dest(buildPath + 'images'))
}

function deleteDist() {
  return del(['dist/**/*', 'dist'], { force: true });
}

function watch () {
  browserSync.init({
    server: {
        baseDir: "./" + buildPath
    }
  });
  gulp.watch(devPath + 'pug/**/*', pages);
  gulp.watch(devPath + 'styles/**/*', styles);
}

const build = gulp.parallel(styles, statics, pages);
const dev = gulp.series(styles, statics, pages, watch);
const clean = gulp.series(deleteDist);

exports.build = build;
exports.dev = dev;
exports.clean = clean;
