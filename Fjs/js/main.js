F.module('js/main', ['js/dom', 'js/event', 'js/string'], function (Dom, Evt, Str) {
	var msg = 'i don\'t know'
	Evt.on('btn', 'click', function () {
		// var Dom = '';
		Dom.html('out', Str.upper(msg));
	})
	return {
		color: 'red'
	}
})