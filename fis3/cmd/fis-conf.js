
var fis = require('fis3');

// 配置cmd规范
fis.hook('cmd');

fis.match('js/**.js', {
	// 配置应用模块
	isMod: true
});
