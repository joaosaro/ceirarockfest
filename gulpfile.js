"use strict";

const gulp  = require('gulp');
const pug   = require('gulp-pug');

const devPath   = 'src/';
const buildPath = 'dist/';
const data      = require('./' + devPath + 'data/data.json');

// gulp.task('pages', function buildHTML() {
//   return gulp.src(devPath + 'pug/pages/*.pug')
//   .pipe(pug({
//     // data: data
//   }))
//   .pipe(gulp.dest(buildPath))
// });

function pages() {
  return gulp
    .src(devPath + 'pug/3-pages/*.pug')
    .pipe(pug({
      data: data
    }))
    .pipe(gulp.dest(buildPath))
}

const build = gulp.series(pages)

exports.build = build

// //Watch task
// gulp.task('watch', function() {
//   gulp.watch(src + 'pug/**/*', ['pages']);
// })

// //Gulp main task
// gulp.task('dev', function() {
//   gulp.series([
//       'pages',
//       'watch'
//   ]);
// });

// gulp.task('default', function() {
//   gulp.series(
//     'pages'
//   )
// });
