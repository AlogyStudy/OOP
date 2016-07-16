
var gulp = require('gulp');


// test

//gulp.task('zf', function () {
//	
//	console.log('嘻嘻哈哈');
//	
//});


//gulp.run('zf');

//gulp.task('default', ['zf'], function () {
//	
//	console.log('执行成功');
//	
//});




// 开启任务
gulp.task('zf', function () {
	
	// 创建流
	var stream = gulp.src('js/index.js');
	
	// 写入位置
	var pos = gulp.dest('test');
	
	// 管理状态
	stream.pipe(pos);
	
});

// 启动任务
gulp.task('default', ['zf']);



