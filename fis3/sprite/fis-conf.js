
var fis = require('fis3');

// 第二步
fis.match('**.{js,css,png}', {
	'useSprite': true
});

// 第三步
fis.match('::package', {
	'spriter': fis.plugin('csssprites') 
});
