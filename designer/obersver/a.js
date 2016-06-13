
/**
 * 消息模块
 */

(function () {
	
	var dom = $('msg_num');
	
	//添加信息的时候，dom加1
	Observer.add('addMsg',function () {
		
		dom.innerHTML = ++dom.innerHTML;
		
	});
	
	//删除信息的时候，dom减1
	Observer.add('deleteMsg',function () {
		dom.innerHTML = --dom.innerHTML < 0 ? 0 : dom.innerHTML;
	});
	
})();
