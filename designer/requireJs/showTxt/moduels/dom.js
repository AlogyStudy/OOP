
//创建dom 模块

define([],function () {
	
	var dom = {
		
		/**
		 * 获取 元素
		 * @param {String} id 需要的id
		 * @return {Object}  dom 元素
		 */
		dg: function ( id ) {
			
			return document.getElementById(id);
			
		},
		
		/**
		 * 创建DOM元素
		 * @param {String} tpl  添加的模板 
		 * @param {String} type 事件类型
		 * @return {Object} 创建的 dom 元素 ，便于后续使用
		 */
		create: function ( tpl,type ) {
			
			var elems = document.createElement(type);
			
			elems.innerHTML = tpl;
			
			// 返回dom
			
			return elems;
			
		}
		
	}
	
	return dom;
	
});

