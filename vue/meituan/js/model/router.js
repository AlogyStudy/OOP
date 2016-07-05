
define(function ( require, exports, moduel ) {
	
	moduel.exports.router = function ( MeituanVm ) {
		
		var router = function () {
		
			// 获取 hsah
//			var hash = window.location.hash.slice(1);

			// 获取hash 值
			var hash = window.location.hash;
			
			// 处理hash
			hash = hash.slice(1).replace(/^\//, '').split('/');
			
			// 保存query
			MeituanVm.query.push(hash.slice(1));
			
			MeituanVm.view = hash[0] || 'home';
			
		}
		
		// hashchange 事件更改路由
		window.addEventListener('hashchange', router);
		
		// 网页 load 加载 router
		window.addEventListener('load', router);
		
	}
	
});
