define(function(t){t("view/list/list.css");var e=t("tools/throttle.js"),i=Backbone.View.extend({tpl:_.template($("#moban").html()),leftHeight:0,rightHeight:0,events:{"click .search-btn":"showSearch","tap .nav-wrap":"showType"},initialize:function(){var t=this;this.getDate(),this.getDom(),this.collection.on("add",function(e){t.render(e)}),$(window).on("scroll",function(){e(t.loadModeData,{context:t})}),$(".go-top").on("tap",this.goTop)},loadModeData:function(){var t=$("body").height()-$(window).height()-$(window).scrollTop()-200<=0;t&&this.getDate(),this.dealGoTop()},dealGoTop:function(){$(window).scrollTop()>=20?$(".go-top").show():$(".go-top").hide()},getDate:function(){this.collection.feachData()},getDom:function(){this.leftContainer=this.$(".left-list"),this.rightContainer=this.$(".right-list")},render:function(t){var e={id:t.get("id"),style:"width:  "+t.get("showWidth")+"px; height: "+t.get("showHeight")+"px",url:t.get("url")},i=this.tpl(e);this.leftHeight>this.rightHeight?this.rederRight(i,t.get("showHeight")):this.renderLeft(i,t.get("showHeight"))},renderLeft:function(t,e){this.leftHeight+=e+6,this.leftContainer.append($(t))},rederRight:function(t,e){this.rightHeight+=e+6,this.rightContainer.append($(t))},showType:function(t){var e=this.getTypeId(t),i=this.getModelFormCollection(e,"type");this.renderSearchView(i)},showSearch:function(){var t=this.getSearchVal();if(t){var e=this.searchCollectionsVal(t);e.length>0?(this.renderSearchView(e),$(".tips")&&$(".tips").remove()):($(".left-list").html(""),$(".right-list").html(""),$("#listItem").append('<div class="tips">未搜索到图片</div>'))}},getSearchVal:function(){var t=$(".search-txt").val();return this.serachVal(t)},serachVal:function(t){return/^\s*$/.test(t)?void alert("请输入搜索条件"):$.trim(t)},searchCollectionsVal:function(t,e){return e=e||"title",this.collection.filter(function(i){return i.get(e).indexOf(t)>=0})},renderSearchView:function(t){var e=this;this.clearMain(),$.each(t,function(t,i){e.render(i)})},clearMain:function(){this.leftContainer.html(""),this.rightContainer.html(""),this.leftHeight=0,this.rightHeight=0},getTypeId:function(t){return $(t.target).attr("data-id")},getModelFormCollection:function(t,e){return this.collection.filter(function(i){return i.get(e)==t})},goTop:function(){window.scrollTo(0,0)}});return i});