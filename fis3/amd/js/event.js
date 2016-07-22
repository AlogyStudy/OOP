// 封装添加事件的方法

// 将dom模块引入进来
var dom = require('dom');

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