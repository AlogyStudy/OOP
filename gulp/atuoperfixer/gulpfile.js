
var gulp = require('gulp'),
	prefixer = require('gulp-autoprefixer');


// html
gulp.task('html', function () {
	gulp.src('*.html')
		.pipe(gulp.dest('dist'));
});
//		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))

// 加CSS前缀
gulp.task('atuo', function () {
	
	gulp.src('css/css.css')
//		.pipe(autoprefixer('last 2 version'))
//		.pipe(autoprefixer({
//    browsers: ['last 2 versions'],
//    cascade: false
//  }))
		.pipe(prefixer())
		.pipe(gulp.dest('dist'));
	
});

//gulp.task('styles', function () {
//  gulp.src('**/*.css')
////      .pipe(plumber())
////      .pipe(less())
//      .pipe(autoprefixer('last 2 versions'))
//      .pipe(gulp.dest('test'))
////      .pipe(livereload());
//});

gulp.task('default', ['html', 'atuo']);

