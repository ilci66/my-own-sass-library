const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));
// pretty obvious what's going on here
function buildStyles() {
  return src('*.scss')
    .pipe(sass())
    .pipe(dest('css'))
}

// watching for changes and calling buildStyles
function watchTask() {
  watch(['*.scss'], buildStyles)
}

// these will be ran in turn, first buildStyles then watchTask
exports.default = series(buildStyles, watchTask)