

fis.match('**.less', {
	
	parser: fis.plugin('less'),
	
	rExt: '.css'
	
});


fis.match('**.jsx', {
	
	parser: fis.plugin('babel2'),
	
	rExt: '.js'
	
});
