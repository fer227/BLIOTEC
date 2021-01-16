var gulp = require('gulp');

var run = require('gulp-run');
const mocha = require('gulp-mocha');

// gulp.task('test', function(){
//    return run('npm test').exec();
// });

// npm install --save-dev gulp-mocha
gulp.task('test', function(){
   return gulp.src(['./test/*.js'])
            .pipe(mocha({reporter: 'list', exit: true}))
            .on('error', console.error)
});

gulp.task('install', function(){
    return run('npm install --also=dev').exec();
});

gulp.task('build', function(){
    return run('echo build success').exec;
});

gulp.task('run', function(){
    return run('npm run start').exec();
})

gulp.task('syntax', function(){
    return run('for i in ./src/**/*.js; do node -c \"$i\"; done').exec()
});

gulp.task('test2', function(){
	return run('mocha ./test/*.js').exec()
});

gulp.task('default', gulp.parallel('syntax', 'test'));
