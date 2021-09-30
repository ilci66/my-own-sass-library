const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')

function buildStyles() {
  return src('shinobi/**/*.scss')   
    // .pipe(sass()) // wanted to compress
    .pipe(sass({ outputStyle: 'compressed' }))
    // to show what css values it should render, it can be an array of paths relative
    // to this file, the way I did it it will look for all the root level html files 
    .pipe(purgecss({ content: ['*.html'] }))
    .pipe(dest('css'))
}

function watchTask() {
  // wanna watch for changes in the html pages too
  watch(['shinobi/**/*.scss', '*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)