define(function ( require ) {
	
	// 引入工具库
	var util = require('tools/util');
	
	// 定义组件
	
	// Home 组件
	var Home = Vue.extend({
		template: util.tpl('tpl_home'),
		data: function () {
			return {
				types: [
					{id: 1, title: '美食', url: '01.png'},
					{id: 2, title: '电影', url: '02.png'},
					{id: 3, title: '酒店', url: '03.png'},
					{id: 4, title: '休闲娱乐', url: '04.png'},
					{id: 5, title: '外卖', url: '05.png'},
					{id: 6, title: 'KTV', url: '06.png'},
					{id: 7, title: '周边游', url: '07.png'},
					{id: 8, title: '丽人', url: '08.png'},
					{id: 9, title: '小吃快餐', url: '09.png'},
					{id: 10, title: '火车票', url: '10.png'}
				],
				ad: [],
				list: []
			}
		},
		// 组件创建完成自动调用
		created: function () {
			
			var _this = this;
			
			// 异步读取数据
			util.ajax('data/home.json', function ( res ) {
				
				var reslut = JSON.parse(res);
				
				if ( reslut.errno === 0 ) {
					
					// 广告数据
					_this.$set('ad', reslut.data.ad);
					
					// 添加list 数据
					_this.$set('list', reslut.data.list);
					
				}
				
			});
			
		}
	});
	
	// List 组件
	var List = Vue.extend({
//		template: util.tpl('');
	});
	
	// Product 组件
	var Product = Vue.extend({
		template: '<h1>product</h1>'
	});
	
	
	// 返回组件	
	return {
		Home: Home,
		List: List,
		Product: Product
	}
	
});
