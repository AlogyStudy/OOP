define(function(t){t("modules/view/layer/layer.css");var e=Backbone.View.extend({tpl:_.template($("#layerMoban").html()),modelId:0,events:{"swipeLeft .img-container img":"showNextImg","swipeRight .img-container img":"showPrveImg","tap .back":"goBack","tap .img-container img":"showTitle"},showTitle:function(){$(".title").toggleClass("hide")},goBack:function(){window.location.hash="#"},showNextImg:function(){var t=++this.modelId,e=this.collection.get(t);e?this.changeModel(e,t):(alert("已经是最后一张了"),this.modelId++)},showPrveImg:function(){var t=this.modelId--,e=this.collection.get(t);e?this.changeModel(e,t):(alert("已经是第一张了"),this.modelId--)},render:function(t){var e=this.getModelById(t);if(e){var i=e.pick("url","title"),o=this.tpl(i);this.$el.html(o),this.$el.show()}else window.location.hash="#"},getModelById:function(t){return this.collection.get(t)},changeModel:function(t,e){this.$(".img-container img").attr("src",t.get("url")),this.$(".title h1").html(t.get("title")),this.changeUrlHash(e)},changeUrlHash:function(t){}});return e});