F.module('js/event', ['js/dom'], function (Dom) {
	var Evt = {
		on : function(id, type, fn){
			Dom.g(id)['on' + type] = fn;
		}
	}
	return Evt;
})