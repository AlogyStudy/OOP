// 配置路由
app.config(function ( $routeProvider ) {
	
	// 登陆模块
	$routeProvider.when('/login', {
		
		templateUrl: 'js/views/login.html',
		
		controller: 'loginCtrl'
		
	})
	
	// 主页
	.when('/', {
		
		templateUrl: 'js/views/main.html',
			
		controller: 'mainCtrl'
			
	})
	
	// 用户列表 
	.when('/userList/1', {
		
		templateUrl: 'js/views/userList.html',
		
		controller: 'userListCtrl'
		
	});
	
});


