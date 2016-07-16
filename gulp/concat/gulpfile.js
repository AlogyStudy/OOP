
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


// 合并文件 
gulp.task('concatFs', function () {
	
	// 流
	var stream = gulp.src('js/**/*.js');
	
	// 合并文件
	stream.pipe(concat('main.js'))
	// 压缩文件
	.pipe(uglify())
	// 监听流
	.pipe(gulp.dest('test/js'));
	
});

gulp.task('default', ['concatFs']);
