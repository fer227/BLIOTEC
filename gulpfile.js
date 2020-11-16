var gulp = require('gulp');

var run = require('gulp-run');


gulp.task('syntax', function(){
    return run('for i in ./src/**/*.js; do node -c \"$i\"; done').exec()
});

gulp.task('test', function(){
	return run('mocha ./test/*.js').exec()
});

gulp.task('default', gulp.parallel('syntax', 'test'));