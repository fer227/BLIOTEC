var gulp = require('gulp');

var run = require('gulp-run');


gulp.task('test', function(){
   return run('npm test').exec();
});

gulp.task('install', function(){
    return run('npm install').exec();
 });

gulp.task('syntax', function(){
    return run('for i in ./src/**/*.js; do node -c \"$i\"; done').exec()
});

gulp.task('test2', function(){
	return run('mocha ./test/*.js').exec()
});

gulp.task('default', gulp.parallel('syntax', 'test'));
