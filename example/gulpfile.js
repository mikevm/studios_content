const gulp = require('gulp');
const webpack = require('webpack-stream');
const exec = require('child_process').exec;

/*** Build Tasks ***/
gulp.task('bundle', (done) => {
  gulp.src(__dirname + 'app.js')
      .pipe( webpack( require(__dirname + '/webpack.config.js') ) )
      .pipe(gulp.dest(__dirname + '/bundle/'))
      .on('end', done);
});

gulp.task('build', ['bundle'], () => {
  exec('node ./bundle/app.bundle.js > ./index.html')
});

/*** Watcher Task ***/
gulp.task('watch', () => {
  gulp.watch(__dirname + '/*.js', ['build']);
  gulp.watch(__dirname + '/data.json', ['build']);
  gulp.watch(__dirname + '/*.hbs', ['build']);
  gulp.watch(__dirname + '/templates/*', ['build']);
  gulp.watch(__dirname + '/helpers/*', ['build']);
  gulp.watch(__dirname + '/scripts/*', ['build']);
});

/*** Run Tasks ***/
gulp.task('webserver', () => {
  exec('http-server .');
});

gulp.task('run', ['build', 'webserver', 'watch']);
