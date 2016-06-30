
define(function ( require, exports, moduel ) {

	var ImgEvent = _.extend({},Backbone.Events);

	//view 模块
	var Layer = require('view/layer/layer.view');
	var List = require('view/list/list.view');
	
	var ListCollection = require('modules/collections/img.collection');
	
	//路由
	var Router = Backbone.Router.extend({
		
		//配置路由
		routes: {
			
			'layer/:id': 'showLayer', // 显示大图的路由
			
			'*other': 'showList'
			
		},
		
		//大图 页
		showLayer: function () {
		
			var layer = new Layer({
				el: $('#layer')
			});
			
			//点击事件
//			this.events();
			
			//渲染文本
//			layer.render();	
			
		},
		
		//列表页
		showList: function () {
			
			//实例化 列表页  添加 collections
			var list = new List({
				collection: new ListCollection(),
				el: $('#photo-wrap')
			});
			
			//渲染文本
//			list.render();
				
		},
		
		// 事件添加
		events: function () {
			
//			var hash = window.location.hash;
//			
//			var cId = hash.slice(7);
//			
//			ImgEvent.on('clickPic', function () {
//				
//				console.log( this );
//				
//			});
			
			
		}
		
	});
	
	
	return {
	
		showApp: function () {
			
			//实例化 路由
			var router = new Router();
			
			//开启路由
			Backbone.history.start();
			
		}
	
	}
	
});
