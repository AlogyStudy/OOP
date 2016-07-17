
// main controller



// navCtrl 控制器
app.controller('navCtrl', function ( $scope, navModel ) {
	
	$scope.list = navModel.list;
	
});



// mainCtrl 控制器
app.controller('mainCtrl', function ( $scope, $interval ) {
	
	$scope.date = new Date();
	
	// 定时器
	$interval(function () {
		
		$scope.date = new Date();
		
	}, 1000);
	
});



// 创建用户
app.controller('createUserCtrl', function ( $scope, $http, $location ) {
	
	$scope.submit = function () {
		
		$http({
			'url': '../admin/action/createuser.php',
			'method': 'POST',
			'data': $scope.user
		})
		.success(function ( res ) {
			
			// 返回成功
			if ( res && res.errno === 0 ) {
				
				$location.path('/userList/1');
				
			}
			
		});
		
	}
	
});




// 用户列表
app.controller('userListCtrl', function ( $scope, $http, $routeParams ) {
	
	$scope.num = $routeParams.pageNum;
	
	$http({
		url: '../admin/action/userlist.php',
		method: 'GET',
		params: {
			pageNum: $scope.num
		}
	})
	.success(function ( res ) {
		
		if ( res && res.errno === 0 ) {

			$scope.list = res.data;

		}
		
	});
	
});


// 用户详情
app.controller('userDetailCtrl', function ( $scope, $routeParams, $http ) {
	
		$http({
			'url': '../admin/action/userdetail.php',
			'method': 'POST',
			'data': $scope.pageNum
		})
		.success(function ( res ) {
			
			if ( res && res.errno === 0 ) {
				
				$scope.user = res.data;
				
			}
			
		});
	
});


// 创建新闻
app.controller('createNewsCtrl', function ( $scope, $http, $location ) {
	
	$scope.submit = function () {
		
		$http({
			'url': '../admin/action/createnews.php',
			'method': 'POST'
		})
		.success(function ( res ) {
			
			if ( res && res.errno === 0 ) {
				
				// 返回成功 显示 列表页
				$location.path('/newsList/1');
				
			}
			
		});
		
	}
	
});


// 新闻列表页
app.controller('newsListCtrl', function ( $scope, $http, $routeParams ) {
	
	$http({
		'url': '../admin/action/newslist.php',
		'method': 'POST',
		'data': $routeParams.pageNum
	})
	.success(function ( res ) {
		
		if ( res && res.errno === 0 ) {
			
			$scope.list = res.data;
			
		}
		
	})
	
});


// 新闻详情页
app.controller('newsDetailCtrl', function ( $scope, $routeParams, $http ) {
	
	$http({
		'url': '../admin/action/newsdetail.php',
		'method': 'POST',
		'data': $routeParams.pageNum
	})
	.success(function ( res ) {
		
		if ( res && res.errno === 0 ) {
			
			$scope.news = res.data;
			
		}
		
	});
	
});
