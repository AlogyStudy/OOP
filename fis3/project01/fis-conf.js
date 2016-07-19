
// 为静态文件加上指纹识别 , 放入static目录下
// 压缩js
// 处理css文件 ： 压缩 和 精灵图处理
// png优化
// 开启精灵图

var fis = require('fis3');

// 压缩js
fis.match('**.js', {
	optimizer: fis.plugin('uglify-js')
});

// 压缩css
fis.match('**.css', {
	optimizer: fis.plugin('clean-css'),
	uerSprite: true
});

// 加戳
fis.match('**.{js,png,css}', {
	useHash: true,
	// 发布到static 的目录下
	release: 'static/$0'
});


// png 优化
fis.match('**.png', {
	optimizer: fis.plugin('png-compressor')
});



// 第三步
fis.match('::package', {
	'spriter': fis.plugin('csssprites')
});
