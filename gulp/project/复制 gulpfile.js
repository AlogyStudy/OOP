
var gulp = require('gulp');

var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var minifyHtml = require('gulp-minify-html');

/**
 * 第一件事：将html压缩
 * 第二件事：将css压缩
 * 第三件事：将js压缩
 */


// 压缩html
gulp.task('lockMinifyHtml', function () {
	
	var stream = gulp.src('photo/**/*.html');
	
	var pos = gulp.dest('test/photo');
	
	stream.pipe( minifyHtml() )
	.pipe(pos);
	
});

// 压缩Css
gulp.task('lockMinifyCss', function () {
	
	var stream = gulp.src('photo/**/*.css');
	
	var pos = gulp.dest('test/photo');
	
	stream.pipe( minifyCss() )
	.pipe(pos);
	
});

// 压缩JS
gulp.task('lockUglify', function () {
	
	var stream = gulp.src('photo/**/*.js');
	
	var pos = gulp.dest('test/photo');
	
	stream.pipe( uglify() )
	.pipe(pos);
	
});

// 图片
gulp.task('dealImg', function () {
	
	var stream = gulp.src('photo/img/*.*');
	
	var pos = gulp.dest('test/photo/img');
	
	stream.pipe(pos);
	
});

// data 数据 
gulp.task('dealData', function () {
	
	var stream = gulp.src('photo/data/*.*');
	
	var pos = gulp.dest('test/photo/data');
	
	stream.pipe(pos);
	
});

// php 文件
gulp.task('dealPhp', function () {
	
	var stream = gulp.src('photo/web/*.*');
	
	var pos = gulp.dest('test/photo/web');
	
	stream.pipe(pos);
	
});

gulp.task('default', ['lockMinifyHtml', 'lockMinifyCss', 'lockUglify', 'dealImg', 'dealData', 'dealPhp']);

