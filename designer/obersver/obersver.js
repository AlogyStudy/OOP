/**
 * 订阅模式
 */
			
var Observer = (function () {
	
	var __msg = {};
	
	return {
		
		/**
	 * 添加订阅者 
	 * @param {String} type  订阅者名字
	 * @param {Function} fn  执行函数  
	 */
	add: function ( type,fn ) {
		
		if ( __msg[type] ) {
			
			__msg[type].push(fn);
			
		}	else {
			
			__msg[type] = [fn];
			
		}
		
		return this;
		
	},
	
	/**
	 * 执行回调函数
	 * @param {String} type
	 */
	fire: function ( type,data ) {
		
		console.log( __msg );
		
		if ( __msg[type] ) {
			
			var e = data
			
			for ( var i=0; i<__msg[type].length; ++i ) {
				
				__msg[type][i](e);
				
			}
			
		}
		
		return this;
		
	},
	
	/**
	 * 移除回调函数
	 * @param {String} type
	 * @param {String} fnName
	 */
		remove: function ( type,fnName ) {
			
			if ( __msg[type] ) {
				
				for ( var i = __msg[type].length-1; i>=0; --i ) {
					
					if ( __msg[type][i] === fnName ) {
						
						__msg[type].splice(i,1);
						
					}
					
				}
				
			}
			
			return this;
		}
		
	}
	
})()