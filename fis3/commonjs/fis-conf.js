
var fis = require('fis3');

fis.match('::package', {
	postpackager: fis.plugin('loader')
});

fis.hook('commonjs');

fis.match('js/**.js', {
	isMod: true,
	packTo: 'js/all.js'
});
