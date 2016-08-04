
fis.match('**.jsx', {
	parser: fis.plugin('babel2'),
	rExt: '.js'
});


// 渲染HTML内部的JSX语法

fis.match('**.html:jsx', {
	parser: fis.plugin('babel2')
});
