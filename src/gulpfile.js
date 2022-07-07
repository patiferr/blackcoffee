const gulp = require('gulp');
const image = require('gulp-image');

const imagesDir = './src/images/*'

gulp.task('images',() =>
gulp.src(imagesDir)
.pipe(image())
.pipe(gulp.dist('.dist/images'))
);