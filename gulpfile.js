let gulp = require('gulp');
let ts = require('gulp-typescript');
let sourcemaps = require('gulp-sourcemaps');
let mocha = require('gulp-mocha');

let tsProject = ts.createProject('tsconfig.json');

gulp.task('default', ['ts', 'test'], () => {
  console.log('default');
});

gulp.task('ts', () => {
  let tsResult = tsProject.src().
    pipe(sourcemaps.init()).
    pipe(tsProject());

  return tsResult.js.
    pipe(sourcemaps.write()).
    pipe(gulp.dest('bin'));
})

gulp.task('test', () => {
  gulp.src('bin/**/*.spec.js', {read: false}).pipe(mocha({reporter: 'nyan'}));
});

gulp.task('watch', ['ts', 'test'], () => {
  gulp.watch('src/**/*.ts', ['ts', 'test']);
});