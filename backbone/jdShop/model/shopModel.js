
(function(){
	
	var ShopModel = Backbone.Model.extend({
		
		initialize: function () {
			
			this.setData();
			
		},
		
		setData: function ( data ) {
			
			this.set(data);
			
		}
		
	});
	
	var shopModel = new ShopModel();
	
	//请求数据
	$.get('data/shopList.json',function ( req ) {
		
		//请求数据成功
		if ( req ) {
			
			$.each(req,function ( i,val ) {
				
				shopModel.setData(val);
				
			});
			
		}
		
	});
	
	console.log( shopModel );
	
	
	this.shopModel = shopModel;
	
}.call(this));
