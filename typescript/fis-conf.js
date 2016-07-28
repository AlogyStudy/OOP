

var fis = require('fis3');

var typescirpt = require('fis3-parser-typescript');

fis.match('**.ts', {
	parser: fis.plugin('typescript'),
	rExt: '.js'
});

