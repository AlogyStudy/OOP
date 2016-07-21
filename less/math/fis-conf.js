
var fis = require('fis3');

fis.match('**.less', {
	parser: fis.plugin('less'),
	rExt: '.css'
});
