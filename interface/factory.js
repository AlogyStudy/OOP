(function ( root,factory ) {

	if ( typeof define === 'function' && define.amd ) {
		
		define(['exports'],factory);
		
	} else if ( typeof exports === 'object' && typeof exports.nameName !== 'string' ) {
		
		factory(exports);
		
	} else {
		
		factory({},root);
		
	}

}(this,function(){
	
	
	
}));

//  ********************

(function ( factory ) {
	
	factory();
	
//	console.log( a,'--' );
	
}( function(){
	
	var a = 10;
	
} ));


console.log( a );