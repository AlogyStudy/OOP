
/**
 * 发布消息
 */

(function () {
	
	var dom = $('msg_list');
	
	Observer.add('addMsg',function ( data ) {
		
		var oLi = document.createElement('li');
		var oSpan = document.createElement('span');
		var oTxt = document.createTextNode(data.msg);
		
		oLi.appendChild(oTxt);
		oLi.appendChild(oSpan);
		
		dom.appendChild(oLi);
		
		//span 添加监听 
		oSpan.onclick = function () {
			
			dom.removeChild(oLi);
			
			//删除消息， 执行 消息函数
			Observer.fire('deleteMsg');
			
			oSpan.onclick = null;
			
		}
		
	});
	
})();
