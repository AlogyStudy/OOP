
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	perfixer = require('gulp-autoprefixer'),
	minifyCss = require('gulp-minify-css'); 
	
	
	
// 编译Sass 并添加CSS前缀	，压缩
gulp.task('sass', function () {
	
	gulp.src('*.sass')
		.pipe(sass())  // 编译
		.pipe(perfixer()) // 自动改名
		.pipe(minifyCss()) // 压缩
		.pipe(gulp.dest('dist')); 
	
});	

gulp.task('default', ['sass']);
