
var gulp = require('gulp');
//var minfiyCss = require('gulp-minify-css');

var miniyHtml = require('gulp-minify-html');


// 开启任务
//gulp.task('lockCss', function () {
//	
//	// 流
//	var stream = gulp.src('css/*.css');
//
//	
//	// 位置
//	var pos = gulp.dest('test/css');
//	
//	// 压缩
//	stream.pipe(minfiyCss());
//	
//	// 管理流
//	stream.pipe(pos);
//	
//});


gulp.task('default', ['lockCss']);




gulp.task('lockHtml', function () {
	
		var stream = gulp.src('*.html');
		
		var pos = gulp.dest('test');
		
		stream.pipe(miniyHtml())
		.pipe(pos);
	
});
gulp.task('default', ['lockHtml']);

