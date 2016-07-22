;/*!js/dom.js*/
define('js/dom', function(require, exports, module) {

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

;/*!js/event.js*/
define('js/event', function(require, exports, module) {

  // 封装添加事件的方法
  
  // 将dom模块引入进来
  var dom = require('js/dom');
  
  var Evt = {
  	/**
  	 * 为元素添加事件
  	 * @id 		表示元素的id
  	 * @type 	表示事件的类型
  	 * @fn 		表示事件回调函数
  	 */
  	on: function (id, type, fn) {
  		dom.$(id)['on' + type] = fn;
  	}
  }
  
  // 将接口返回出来
  return Evt

});

;/*!js/main.js*/
define('js/main', function(require, exports, module) {

  // 我们在main为页面btn添加事件
  
  // 在fis中，文件的引用时相对于该文件的相对路径
  var dom = require('js/dom');
  var evt = require('js/event');
  
  // 要为button添加事件
  evt.on('btn', 'click', function () {
  	dom.html('text', '今天下了好大的雨呀')
  })
  

});
