
var fis = require('fis3');


fis.match('project/**.css', {
	
	optimizer: fis.plugin('clean-css')
	
});


fis.match('index.js', {
	optimizer: fis.plugin('uglify-js')
});
