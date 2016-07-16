
var gulp = require('gulp');

var uglify = require('gulp-uglify');

gulp.task('unlifyJs', function () {
	
	// 流
	var stream = gulp.src('js/**/app.js');
	
	// 位置
	var pos = gulp.dest('test/aa');
	
	// 压缩
	stream.pipe(uglify());
	
	// 监听流
	stream.pipe(pos);	
	
});

gulp.task('default', ['unlifyJs']);

