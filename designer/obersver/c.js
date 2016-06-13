
(function () {
	
	var oBtn = $('msg_submit');
	var oTxt = $('msg_text');
	
	oBtn.onclick = function () {
		
		var val = oTxt.value;
		
		//判断是否为空
		if ( /^\s*$/g.test(val) ) {
			
			alert('不能为空 ');
			
			return false;
			
		}
		
		Observer.fire('addMsg',{
			'msg': val
		});
		
		oTxt.value = '';
		
	}
	
})()

