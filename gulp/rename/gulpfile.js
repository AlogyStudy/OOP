
var gulp = require('gulp');

var rename = require('gulp-rename');


gulp.task('renameJs', function () {
	
	var liu = gulp.src('js/*.js');
	
	// 位置
	var desc = gulp.dest('test');
	
	// 修改名字
	var name = rename('app.js');
	liu.pipe(name);
	
	// 监听流
	liu.pipe(desc);
	
});

gulp.task('default', ['renameJs']);
