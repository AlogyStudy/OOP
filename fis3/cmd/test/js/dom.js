define('js/dom', [], function(require, exports, module) {

  var Dom = {
  	// 通过id获取元素的
  	$: function (id) {
  		return document.getElementById(id)
  	},
  	html: function (id, msg) {
  		this.$(id).innerHTML = msg;
  	}
  }
  
  return Dom;

});