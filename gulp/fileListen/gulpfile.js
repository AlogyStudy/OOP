
var gulp = require('gulp');


// watch 
//gulp.watch('js/*.js', function ( ev ) {
//	
//	// 流
//	var stream = gulp.src('js/*.js');
//	
//	// 写入位置
//	var pos = gulp.dest('test');
//	
//	// 管理流 状态
//	stream.pipe(pos);
//	
//});
//
//
//gulp.task('default');




// 多个状态
gulp.task('zf', function () {
	
	// 流 -- 读文件
	var stream = gulp.src('js/*.js');
	
	// 写入位置
	var pos = gulp.dest('test');
	
	// 管理流
	stream.pipe(pos);
	
});

gulp.task('default'); 

gulp.watch('js/*.js', ['zf']);
