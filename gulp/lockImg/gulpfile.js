// 压缩三种格式的图片
var gulp = require('gulp')
var imagemin = require('gulp-imagemin')

// 创建任务压缩图片
gulp.task('dealImg', function () {
	gulp.src('img/*.*')
	// 先压缩图片
	.pipe(imagemin())
	.pipe(gulp.dest('demo'))
})

// 启动任务
gulp.task('default', ['dealImg'])