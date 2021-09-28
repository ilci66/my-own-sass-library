const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  // ** means any subfolders too, so it's gonna check the subfolders for scss files
  return src('shinobi/**/*.scss')
    .pipe(sass())
    .pipe(dest('css'))
}

function watchTask() {
  watch(['shinobi/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)