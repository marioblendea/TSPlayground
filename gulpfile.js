let gulp = require('gulp');
let ts = require('gulp-typescript');
let sourcemaps = require('gulp-sourcemaps');
let mocha = require('gulp-mocha');
let tsProject = ts.createProject('tsconfig.json');
let tslint = require("gulp-tslint");

gulp.task('ts', ['tslint'], () => {
  let tsResult = tsProject.src().
    pipe(sourcemaps.init()).
    pipe(tsProject());

  return tsResult.js.
    pipe(sourcemaps.write()).
    pipe(gulp.dest('bin'));
})

gulp.task('default', ['ts'], () => {
   gulp.src('bin/**/*.spec.js', {read: false}).pipe(mocha({reporter: 'dot'}));
});

gulp.task('watch', ['test'], () => {
  gulp.watch('src/**/*.ts', ['test']);
});

 
gulp.task("tslint", () =>
    tsProject.src()
        .pipe(tslint({
            formatter: "verbose"
        }))
        .pipe(tslint.report())
);