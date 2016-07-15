
var gulp = require('gulp');

var uglify = require('gulp-uglify');

gulp.task('unlifyJs', function () {
	
	// 流
	var liu = gulp.src('js/**/*.js');
	
	// 位置
	var pos = gulp.dest('test/js');
	
	// 压缩
	liu.pipe(uglify());
	
	liu.pipe(pos);	
	
});

gulp.task('default', ['unlifyJs']);

