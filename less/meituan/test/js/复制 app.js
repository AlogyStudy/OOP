
// 定义组件
var Home = Vue.extend({
	template: '<h1>home</h1>'
});

var List = Vue.extend({
	template: '<h1>List</h1>'
});

var Product = Vue.extend({
	template: '<h1>product</h1>'
});


// 实现组件绑定
Vue.component('home',Home);
Vue.component('list',List);
Vue.component('product',Product);

// 数据
var data = {
	view: 'home'
}

// Meittuan实例化
var MeituanVm = new Vue({
	el: '#app',
	data: data
});









// Router --------------------------

var router = function () {
	
	var hash = window.location.hash.slice(1);
	
	MeituanVm.view = hash || 'home';
	
}

// hashchange 事件更改路由
window.addEventListener('hashchange', router);

// 网页 load 加载 router
window.addEventListener('load', router);




