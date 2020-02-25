"use strict";

const gulp        = require('gulp');
const pug         = require('gulp-pug');
const sass        = require('gulp-dart-sass');
const babel       = require('gulp-babel');
const plumber     = require("gulp-plumber");
const del         = require('del');
const browserSync = require('browser-sync').create();
const devPath     = 'src/';
const buildPath   = 'dist/';

function pages () {
  delete require.cache[require.resolve('./' + devPath + 'data/data.json')]
  const data = require('./' + devPath + 'data/data.json');

  return gulp
    .src(devPath + 'pug/3-pages/*.pug')
    .pipe(plumber())
    .pipe(pug({
      data: {
        "data": data
      }
    }))
    .pipe(gulp.dest(buildPath))
    .pipe(browserSync.stream());
  }
  
function styles () {
  return gulp
    .src(devPath + 'styles/main.scss')
    .pipe(plumber())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest(buildPath + 'css'))
    .pipe(browserSync.stream());
}

function statics () {
  return gulp
    .src(devPath + 'images/**/*')
    .pipe(gulp.dest(buildPath + 'images'))
}
  
function scripts () {
  return gulp
    .src(devPath + 'js/**/*')
    .pipe(plumber())
    .pipe(babel({
			presets: ['@babel/env']
		}))
    .pipe(gulp.dest(buildPath + 'js'))
    .pipe(browserSync.stream());
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
  gulp.watch(devPath + 'data/**/*', pages);
  gulp.watch(devPath + 'styles/**/*', styles);
  gulp.watch(devPath + 'js/**/*', scripts);
}

const build = gulp.parallel(styles, scripts, statics, pages);
const dev = gulp.series(gulp.parallel(styles, scripts, statics), pages, watch);
const clean = gulp.series(deleteDist);

exports.build = build;
exports.dev = dev;
exports.clean = clean;
