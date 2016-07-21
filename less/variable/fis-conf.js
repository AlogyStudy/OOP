
var fis = require('fis3');

// 编译less
fis.match('**.less', {
	parser: fis.plugin('less'),
	rExt: '.css'
});
