
var fis = require('fis3');

// 寻找js 文件， 放在js文件底下
fis.match('**.js', {
	release: 'js/$0'
});

// 寻找css 文件， 放在css文件底下
fis.match('**.css', {
	release: 'css/$0'
});




fis.match('**.{js,css}', {
	release: 'public/$0'
});