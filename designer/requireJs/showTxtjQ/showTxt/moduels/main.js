
//主程序

define(['moduels/dom','moduels/event'],function ( dom,event ) {
	
	//初始化，渲染元素
	function create () {
		
		//创建模板
		var tpl = '<textarea name="" id="inp" cols="30" rows="10"></textarea><br><button id="btn">提交</button><div id="opt"></div>';
		
		//创建元素
		var ele = dom.create(tpl,'div');
		
		//添加到 页面
		dom.append( document.body,ele );	

	}
	
	//添加监听
	function oEvent () {
		
		event.on('btn','click',function () {
			
			var val = dom.val('inp');
			
			if ( !val ) {
				
				alert('您还未输入！');
				
			}
			
			//插入元素
			dom.html('opt',val);
			
		})
	
	}
	
	return {
		init: function () {
			
			//创建视图
			create();
			
			//绑定事件
			oEvent();
			
		}
	}
	
});
