
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
			
			// 控制 search 显示隐藏
			hideSerch: true
			
		}
		
		// meituan VM 
		var MeituanVm = new Vue({
			
			// app
			el: '#app',
			
			// 数据
			data: data,
			
			// 事件驱动 
			methods: {
				
				// 搜索 事件
				search: function ( ev ) {
					
					var val = ev.target.value;
					
					// 改变路由 '#list/search/val'
					window.location.hash = '#list/search/' + val; 
					
				}
				
			}
			
		});
		
		// 路由配置
		router.router(MeituanVm); 
		
	}
	
});
