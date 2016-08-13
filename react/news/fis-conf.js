
// Less 编译
fis.match('**.less', {
	parser: fis.plugin('less'),
	rExt: '.css'
});


// ES6编译
fis.match('**.tsx', {
	parser: fis.plugin('typescript'),
	rExt: '.js'
});
