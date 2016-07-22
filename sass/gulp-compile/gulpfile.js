
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var prefixer = require('gulp-autoprefixer');

// sass({ style: 'expanded' })

// 编译sass任务
gulp.task('sass', function () {
	
	gulp.src('*.sass')
		.pipe(sass({ style: 'expanded' }))
		.pipe(prefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(gulp.dest('test/css'));
	
});


gulp.task('default', ['sass']);
