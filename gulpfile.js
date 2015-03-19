var browserify = require('browserify')
var fs = require('fs')
var gulp = require('gulp')

gulp.task('build', function(){
  browserify({
    entries: ['./app.jsx'],
    debug: true
  })
  .transform('reactify')
  .bundle()
  .on('error', function(err){ console.log(err) })
  .pipe(fs.createWriteStream('application.js'))
})

gulp.task('watch', function(){
  gulp.watch('/**/*.jsx', ['build'])
})