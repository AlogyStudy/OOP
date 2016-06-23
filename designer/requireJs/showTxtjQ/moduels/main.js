
//主程序

define(['jquery'],function ( $ ) {
	
	
	
	//初始化，渲染元素
	function create () {
		
		//创建模板
		var tpl = '<textarea name="" id="inp" cols="30" rows="10"></textarea><br><button id="btn">提交</button><div id="opt"></div>';
		
		//创建元素
		var ele = $('<div></div>');
		
		ele.html(tpl);
		
		//添加到 页面
		$(document.body).append(ele);
		
	}
	
	//添加监听
	function oEvent () {
		
		$('#btn').on('click',function () {
			
			var val = $('#inp').val();
			
			if ( !val ) {
				
				alert('未输入');
				
			}
			
			//插入元素
			$('#opt').html(val);
			
		});
		
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
