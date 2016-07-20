
var fis = require('fis3');

// 静态文件 加 戳
fis.match('**.{js,png,css}', {
	useHash: true,
	release: 'static/$0'
});


// 压缩css
fis.match('**.css', {
	optimizer: fis.plugin('clean-css'),
	packTo: 'css/app.css'
});


// 压缩js
fis.match('**.js', {
	optimizer: fis.plugin('uglify-js'),
	packTo: 'js/app.js'
});
