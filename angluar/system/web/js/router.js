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
	.when('/userList/:pageNum', {
		
		templateUrl: 'js/views/userList.html',
		
		controller: 'userListCtrl'
		
	})
	
	// 创建用户
	.when('/createUser', {
		
		templateUrl: 'js/views/createUser.html',
		
		controller: 'createUserCtrl'
		
	})
	
	// 用户详情
	.when('/userDetail/:pageNum', {
		
		templateUrl: 'js/views/userDetail.html',
		
		controller: 'userDetailCtrl'
		
	})
	
	// 创建新闻
	.when('/createNews', {
		
		templateUrl: 'js/views/createNews.html',
		
		controller: 'createNewsCtrl'
		
	})
	
	// 新闻列表页
	.when('/newsList/:pageNum', {
		
		templateUrl: 'js/views/newsList.html',
		
		controller: 'newsListCtrl'
		
	})
	
	// 新闻详情页
	.when('/newsDetail/:pageNum', {
		
		templateUrl: 'js/views/newsDetail.html',
		
		controller: 'newsDetailCtrl'
		
	})
	
	// 配置默认路由
	.otherwise({
		redirectTo: '/'
	});
	
});


