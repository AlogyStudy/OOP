
var gulp = require('gulp');

var ts = require('gulp-typescript');

gulp.task('compileTs', function () {
	
	gulp.src('**.ts')
		.pipe(ts())
		.pipe(gulp.dest('dist'));
	
});

gulp.task('default', ['compileTs']);


