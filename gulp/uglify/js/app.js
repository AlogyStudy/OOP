
// run 配置
app.run(function ( $rootScope, $http, $location ) {
	
	$http({
		
		url: '../admin/action/checkLogin.php',
		
		method: 'GET'
		
	})
	.success(function ( res ) {
		
		// 是否登陆判断
		if ( res && res.data ) {
			// 主页面
			
			// 设置登录名
			$rootScope.userName = res.data.username;
			
			// 进入主页面
			$location.path('/');
			
		} else {
			
			// 登陆页面
			$location.path('/login');
			
		}
		
	});
	
});