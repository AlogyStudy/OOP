
// app
var app = angular.module('app', ['ngRoute']);




// 配置路由
app.config(function ( $routeProvider ) {
	
	// 登陆页面
	$routeProvider.when('/login', {
		templateUrl: 'js/views/login.html',
		controller: 'loginCtrl'
	});
	
});

// config controller
app.controller('loginCtrl', function ( $scope, $http, $location ) {
	
	
	
});


// run 
app.run(function ( $rootScope, $http, $location ) {
	
	$http({
		url: '../admin/action/checkLogin.php',
		method: 'GET'
	})
	.success(function ( res ) {
		
		if ( res && res.data ) {
			
			// 跳转到主页
			
			
		} else {
			
			// 登陆页面
			$location.path('/login');
			
		}
		
	})
	
});


