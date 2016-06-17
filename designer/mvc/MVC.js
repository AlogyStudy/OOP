
var MVC = {}

//模型模块
// get 得到模型
// add 添加模型
MVC.Model = (function () { 
	
	//用来存储数据层面的数据
	var M = {};
	
	return {
		
		/**
		 * 读取数据的方法
		 * @param {String} strName 读取数据的名称
		 *
		 * eg: get('a.b.c') => M.a.b.c
		 */
		'get': function ( strName ) {
			
			var path = strName.split('.');
			
			var reslut = M;
			
			for ( var i=0; i<path.length; i++ ) {
				
				reslut = reslut[path[i]];
				
				//后置判定   undefined || 属性值不存在  
				if ( undefined === reslut ) {
					
					return null;
					
				}
				
			}
			
			return reslut;	
				
		},
		
		/**
		 * 为模型添加数据
		 * @param {String} strName  属性层级的字符串
		 * @param {mixed} val 添加的数据值
		 * 
		 * eg:  add('a.b.c',111);
		 * 			add('a.b',{c: 222})
		 */
		'add': function ( strName,val ) {
			
			var path = strName.split('.');
			
			var reslut = M;
			
			for ( var i=0; i<path.length-1; i++ ) {
				
				if ( reslut[path[i]] !== undefined && typeof reslut[path[i]] !== 'object' ) {
					
					throw new Error('非对象类不可以添加属性');
					
				}
				
//							reslut 没有属性, 就添加属性
				if ( reslut[path[i]] === undefined ) {
					
					reslut[path[i]] = {};
					
				}
				
				//缓存
				reslut = reslut[path[i]];
				
			}
			
			//最后一步单独处理. 作为赋值。 是已知的值，所以要特殊处理。 前面for循环 遍历 length-1 项
			reslut[path[i]] = val;
			
			return this;
			
		}
		
	}
	
})()


//视图模块
//create 创建模型
//add 添加模型

MVC.View = (function () {
	
	var V = {}
	
	return {
		
		/**
		 * 创建视图
		 * @param {String} id 表示视图的模块
		 */
		create: function ( id ) {
			
			var view = V[id];
			
			return view.call(MVC,MVC.Model,MVC.template);
			
		},
		
		/**
		 * 添加视图创建方法的
		 * @param {String} id 创建方法的名称
		 * @param {Function} method 创建方法的实现
		 */
		add: function ( id,method ) {
			
			V[id] = method;
			
			return this;
			
		}
		
	}
	
})()



//控制器模块
//init : 初始化所有控制器
//add : 添加控制器
MVC.Controller = (function () {
	
	var C = {};
	
	return {
		
		//初始化所有控制器
		init: function () {
			
			for ( var i in C ) {
				
				C[i].call(MVC,MVC.Model,MVC.View);
				
			}
			
		},
		
		/**
		 * 添加控制器操作 
		 * @param {string} id
		 * @param {Function} method
		 */
		add: function ( id,method ) {
			
			C[id] = method;
			
			return this;
			
		}
		
	}
	
})()


//入口 函数
MVC.install = function () {
	
	window.onload = function () {
		
		MVC.Controller.init();
		
	}
	
}


/**
 * 模板字符串
 * @param {Object} tpl 
 * @param {Object} data
 */
MVC.template = function (tpl, data) {
	// 现在集合已经不是简单\w集合了，其中还包含., 新的集合是[\w\.]
	return tpl.replace(/\{#([\w\.]+)#\}/g, function (match, key) {
		// 现在匹配到的key已经不是简单的属性了，它是一个层级属性
		// 切分遍历层级属性
		var path = key.split('.');
		// 缓存参数中的data
		var result = data;
		for (var i = 0; i < path.length; i++) {
			// 缓存每一层级的数据
			result = result[path[i]];
			// 如果该数据不存在
			if (result === undefined) {
				// 因为是在格式在字符串，所以我们要返回字符串
				return '';
			}
		}
		return result;
	})
}


// 简化MVC.Model.add方法
MVC.addModel = function (key, value) {
	
	MVC.Model.add(key, value);
	
	return this;
}

// 简化MVC.View.add方法
MVC.addView = function (id, method) {
	
	MVC.View.add(id, method);
	
	return this;
	
}

// 简化MVC.Contorller.add方法
MVC.addCtrl = function (id, method) {
	
	MVC.Controller.add(id, method);
	
	return this;
	
}



