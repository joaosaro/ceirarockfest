"use strict";

const gulp  = require('gulp');
const pug   = require('gulp-pug');
const sass  = require('gulp-dart-sass');

const devPath   = 'src/';
const buildPath = 'dist/';
const data      = require('./' + devPath + 'data/data.json');

function pages() {
  return gulp
    .src(devPath + 'pug/3-pages/*.pug')
    .pipe(pug({
      data: data
    }))
    .pipe(gulp.dest(buildPath))
}

function styles() {
  return gulp
    .src(devPath + 'styles/main.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest(buildPath + 'css'));
}

const build = gulp.series(styles, pages)

exports.build = build
