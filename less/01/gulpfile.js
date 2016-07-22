
var gulp =  require('gulp'),
	less = require('gulp-less');


// 编译less
gulp.task('less1', function () {
	
	gulp.src('*.less')
		.pipe(less())
		.pipe(gulp.dest('test'));
	
});

// 启动任务
gulp.task('default', ['less1']);
