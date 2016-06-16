
MVC.addModel('slider',{
	data: [
		{
			"icon": "01.png",
			"iconTitle": "萌主页",
			"title": "当女孩遇到熊",
			"content": "深山里有萝莉出没",
			"img": "01.png"
		},
		{
			"icon": "02.jpg",
			"iconTitle": "动漫",
			"title": "会说话的汤姆猫",
			"content": "汤姆猫给你讲故事",
			"img": "02.png"
		},
		{
			"icon": "03.png",
			"iconTitle": "LOL直播",
			"title": "中单蚂蚱输出爆炸",
			"content": "JY解说",
			"img": "03.jpg"
		},
		{
			"icon": "04.png",
			"iconTitle": "景点门票",
			"title": "厦门方特梦幻王国",
			"content": "跟着跑男一起狂欢",
			"img": "04.jpg"
		},
		{
			"icon": "05.png",
			"iconTitle": "hao到家",
			"title": "美食送到家",
			"content": "吃货福音私人订制",
			"img": "05.png"
		}
	]
}).addView('slider',function ( model,tplatce ) {
	
		/**
	 * 1: 创建容器
	 * 2: 获取模块数据
	 * 3: 书写视图模板
	 * 4: 定义模板字符串
	 * 5: 格式化模板字符串
	 * 6: 完成视图的创建
	 * 7: 将dom reutrn出来
	 */
			
	var dom = $('<div id="slider" class="slider"></div>');
	
	var data = model.get('slider');
	
	var tpl = [
		'<div class="container"><ul>{#list#}</ul></div>',
		'<div class="arrow"></div>'
	].join('');
	
	var liTpl = [
		'li',
		'<img src="img/"'
	];
	
});
