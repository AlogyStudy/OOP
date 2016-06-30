
//显示大图的  layer 

define(function ( require ) {
	
//	require('modules/view/layer/layer.css');

	var ImgEvent = _.extend({},Backbone.Events);

	//大图视图
	var Layer = Backbone.View.extend({
		
		tpl: _.template( $('#moban').html() ),
		
		Cid: 0,
		
		initialize: function () {
			
			// 获取数据
			this.getUrl();
			
			// 获取容器
			this.getDom();
			
			// 渲染视图
			this.render();
			
		},
		
		getUrl: function () {
			
			var hash = window.location.hash;
			this.Cid = hash.slice(7);
			
		},
		
		getDom: function () {
			
			this.layerMain = this.el;
			
		},
		
		render: function () {
			
			
			
			
			
		} 
		
	});
	
	
	return Layer;
	
});
