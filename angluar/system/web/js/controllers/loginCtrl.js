
// loginCtrl
app.controller('loginCtrl', function ( $scope, $http, $location, $rootScope ) {
	
	$scope.submit = function () {
		
		console.log( $scope, $rootScope );
		
		$http({
			method: 'POST',
			url: '../admin/action/login.php',
			data: $scope.user
		})
		.success(function ( res ) {
			
			// 验证登录名成功
			if ( res && res.errno === 0 ) {
				
				$location.path('/');
				
				$rootScope.userName = res.data.username; 
				
			}
			
		})
		
	}
	
});
