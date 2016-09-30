const gulp = require('gulp');
const less = require('gulp-less');
const gutil = require('gulp-util');
const bro = require('gulp-bro');
const babelify = require('babelify');
const browserSync = require('browser-sync').create();

const app = `./public/app`;
const build = `./public/build`;

const config = {
  dev: {
    js: {
      all: `${app}/js/**/*.js`,
      main: `${app}/js/app.js`
    },
    styles: `${app}/styles`
  },
  build: {
    js: `${build}/js`,
    styles: `${build}/css`
  }
};

// TODO: add less tasks here!))
gulp.task('js', () => {
  return gulp.src(config.dev.js.main, { read: false })
          .pipe(bro({
            transform: [babelify.configure({ presets: ['es2015'] })]
          }))
          .pipe(gulp.dest(config.build.js));
});
gulp.task('watch-js', ['js'], () => {
  gulp.watch(config.dev.js.all, ['js']);
});

gulp.task('sync', ['watch-js'], () => {
  browserSync.init({
    server: './public'
  });

  gulp.watch('public/index.html').on('change', browserSync.reload);
  gulp.watch(`${config.build.js}/app.js`).on('change', browserSync.reload);
});

gulp.task('default', ['sync']);