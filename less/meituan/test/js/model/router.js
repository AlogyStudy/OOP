
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
			
			// 列表页面路由失效
			// 当前页面的view组件是list， 搜索后得到的组件还是list， 同样的组件， created 不会再次执行
			
			if ( hash[0] === 'list' && MeituanVm.view === hash[0] ) {
				
				// 设置query
				MeituanVm.query = hash.slice(1);
				
				// 子组件向父组件发送消息 
				MeituanVm.$broadcast('reload-list'); // 路由改变，向List 子组件中发送消息
				
				return ;
				
			}
			
		}
		
		// hashchange 事件更改路由
		window.addEventListener('hashchange', router);
		
		// 网页 load 加载 router
		window.addEventListener('load', router);
		
	}
	
});
