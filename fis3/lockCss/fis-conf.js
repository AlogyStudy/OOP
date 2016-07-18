
var fis = require('fis3');


fis.match('project/**.css', {
	
	optimizer: fis.plugin('clean-css')
	
});
