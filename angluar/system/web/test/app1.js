
define(function ( require, exports, module ) {
	
//	require('lib/angular-1-4-1.js');

//	var app = angular.module('app1', [])
	
	return function ( app ) {
		
		console.log( app );
		
		// run 
		app.run(function ( $rootScope, $http, $location ) {
			
			console.log(123);
			
			$http({
				url: '../admin/action/checkLogin.php',
				method: 'GET'
			})
			.success(function ( res ) {
				
				console.log( res );
				
				if ( res && res.data ) {
					
					// 跳转到主页
					
					
				} else {
					
					// 登陆页面
					$location.path('/login');
					
				}
				
			})
			
		});
		
	}
	
});
