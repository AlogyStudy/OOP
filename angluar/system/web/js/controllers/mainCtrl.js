
// main controller

// mainCtrl 控制器
app.controller('mainCtrl', function ( $scope, $interval ) {
	
	$scope.date = new Date();
	
	// 定时器
	$interval(function () {
		
		$scope.date = new Date();
		
	}, 1000);
	
});


// navCtrl 控制器
app.controller('navCtrl', function ( $scope, navModel ) {
	
	$scope.list = navModel.list;
	
});



// userListCtrl userLiast
app.controller('userListCtrl', function ( $scope, $http ) {
	
	$http({
		url: ''
	});
	
});
