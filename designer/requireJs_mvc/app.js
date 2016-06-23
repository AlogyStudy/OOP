
require.config({
	
	//配置 lib 路径
	paths: {
		jquery: 'lib/jquery-1.12.2',
		MVC: 'lib/MVC'
	},
	
	//css 插件
	map: {
		'*': {
			css: 'lib/css'
		}
	}
	
});

require(['models/main'],function ( main ) {
	
	//执行 
	main();
	
});
