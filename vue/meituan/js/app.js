
define(function ( require, exports, moduel ) {
	
	// 路由配置
	var router = require('model/router');
	
	// 引入组件 
	var component = require('model/component');
	
	// 引入自定义 过滤器 filter
	var filter = require('model/filter');
	
	
	// 实现组件绑定
	Vue.component('home',component.Home);
	Vue.component('list',component.List);
	Vue.component('product',component.Product);
	
	
	// 执行
	moduel.exports.showApp = function () {
		
		// model
		var data = {
			
			// 动态 组件
			view: '',
			
			// 存储 uri query 
			query: [],
			
			// 控制 search
			
		}
		
		// meituan VM 
		var MeituanVm = new Vue({
			el: '#app',
			data: data
		});
		
		// 路由配置
		router.router(MeituanVm); 
		
	}
	
});
