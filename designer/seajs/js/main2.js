define(function ( require,exports,module ) {
	
	require('../css/css.css');
	
	console.log( $ );
	
	$(document).on('click',function () {
		
		console.log(123);
		
	});
	
	return {
		c: 'tan'
	}
	
});
