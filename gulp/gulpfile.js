
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




// 开启程序
gulp.task('zf', function () {
	
	// 创建流
	var liu = gulp.src('js/index.js');
	
	// 写入位置
	var dests = gulp.dest('test');
	
	// 管理状态
	liu.pipe(dests);
	
});

// 启动程序
gulp.task('default', ['zf']);



