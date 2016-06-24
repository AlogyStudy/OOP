
define(function ( require,exports,module ) {

	var MVC = require('MVC');
	
	require('./models/header/header.js');	
	require('./models/slider/slider.js');
	
	return {
		
		init: function () {
			
			MVC.install();
			
		}
		
	}
	
});
