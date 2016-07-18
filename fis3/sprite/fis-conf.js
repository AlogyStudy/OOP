
var fis = require('fis3');


fis.match('**.css', {
	'useSprite': true
});

fis.match('::package', {
	'spriter': fis.plugin('csssprites') 
});
