
//创建 event 模块

define(['moduels/dom'],function ( dom ) {
	
	var event = {
		
		on: function ( id,type,fn ) {
			
			dom.dg(id)['on' + type] = fn;
			
		}
		
	}
	
	return event;
	
});
