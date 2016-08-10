

// 编译Less
fis.match('**.less', {
	
	parser: fis.plugin('less'),
	
	rExt: '.css'
	
});


// 编译JSX
fis.match('**.jsx', {
	
	parser: fis.plugin('babel2'),
	
	rExt: '.js'
	
});


// 编译HTML中的JSX
fis.match('**.html:jsx', {
	
	parser: fis.plugin('babel2'),
	
	rExt: '.js'
	
});
