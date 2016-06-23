
//define(['moduels/main'],function ( main ) {
//	
//	
//	console.log( 123 );
//	
//});
require.config({
	paths: {
		jquery: 'lib/jquery'
	},
	shim: {
		'lib/jquery': {
			deps: [],
			expots: '$'
		}
	}
});

require(['moduels/main'],function ( main ) {
	
	//程序入口
	main.init();
	
});
