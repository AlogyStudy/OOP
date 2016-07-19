fis.match('::package', {
	postpackager: fis.plugin('loader')
})

fis.match('**.{js,css,png}', {
	useHash: true,
	release: 'static/$0'
})

fis.match('view/**.html', {
	release: 'static/$0'
})

fis.match('**.js', {
	packTo: 'js/app.js'
})

fis.match("**.css", {
	packTo: 'css/app.css'
})


