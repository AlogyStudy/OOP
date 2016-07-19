
var fis = require('fis3');

// 加戳
fis.match('**.{js,png,css}', {
	// 加戳
	'useHash': true
});


// 精灵图
fis.match('**.css', {
	'useSprite': true
});

fis.match('::package', {
	'spriter': fis.plugin('csssprites')
});

