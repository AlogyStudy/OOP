define(function ( rqeuire, exports, module ) {
	
	// Vue
	
	// 处理价格 
	Vue.filter('price', function ( val ) {
		
		return val + '元';
		
	});
	
	// 处理门市价 
	Vue.filter('orignPrice', function ( val ) {
		
		return '门市价： ' + val + '元';
		
	});
	
	// 已售
	Vue.filter('sales', function ( val ) {
		
		return '已售' + val;
		
	});
	
	
});
