
(function(){
	
	var ShopCollection = Backbone.Collection.extend({
		model: shopModel
	});
	
	
	var shopCollection = new ShopCollection();
	this.shopCollection = shopCollection;
	
}.call(this));
