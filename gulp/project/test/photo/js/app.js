define(function(e, o, n) {
	
	var t = (_.extend({}, Backbone.Events),
	
		e("modules/view/layer/layer.view.js"));
		
		console.log( t );
		
		i = e("modules/view/list/list.view.js"),
		
		r = e("modules/collections/img.collection");
		
		var l = new r(),
		
		w = new t({
			collection: l,
			el: $("#layer")
		}),
		s = (new i({
			collection: l,
			el: $("#photo-wrap")
		}), Backbone.Router.extend({
			routes: {
				"layer/:id": "showLayer",
				"*other": "showList"
			},
			showLayer: function(e) {
				w.render(e), $("#photo-wrap").hide(), $("#layer").show()
			},
			showList: function() {
				$("#photo-wrap").show(), $("#layer").hide()
			}
		}));
	return {
		showApp: function() {
			new s;
			Backbone.history.start()
		}
	}
});