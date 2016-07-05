define(function ( require, exports, module ) {
	
	module.exports = {
		
		// 获取
		_id: function ( id ) {
			
			return document.querySelector('#'+id);
			
		},
		
		// 获取模板内容
		tpl: function ( id ) {
			
			return this._id(id).innerHTML;
			
		},
		
		ajax: function ( url, cb ) {
			
			var xhr = new XMLHttpRequest();
			
			xhr.onreadystatechange = function () {
				
				// readyState
				if ( xhr.readyState === 4 ) {
					
					if ( xhr.status === 200 || xhr.status === 304 ) {
						
						cb && cb(xhr.responseText);
						
					}
					
				}
				
			}
			
			xhr.open('GET', url, true);
			
			xhr.send();
			
		}
		
	}
	
});
