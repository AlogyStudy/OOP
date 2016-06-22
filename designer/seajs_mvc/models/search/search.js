
/**
 * 搜索模块
 */

MVC
.addModel('search',{
	'webData': [
		{
			'webDataTile': 	'网页',
			'webDataUrl': ''
		},
		{
			'webDataTile': 	'音乐',
			'webDataUrl': ''
		},
		{
			'webDataTile': 	'视频',
			'webDataUrl': ''
		},
		{
			'webDataTile': 	'图片',
			'webDataUrl': ''
		},
		{
			'webDataTile': 	'贴吧',
			'webDataUrl': ''
		},
		{
			'webDataTile': 	'知道',
			'webDataUrl': ''
		},
		{
			'webDataTile': 	'新闻',
			'webDataUrl': ''
		},
		{
			'webDataTile': 	'地图',
			'webDataUrl': ''
		},
		{
			'webDataTile': 	'更多>>',
			'webDataUrl': ''
		}
	]

//		webDataTile: ['网页', '音乐', '图片', '贴吧']
})
.addView('search',function ( model,tepmlate ) {
	
	var dom = $('<div class="search container" id="search"></div>');
	
	var data = model.get('search');
	
	//模板
	var tpl = [
		'<div class="logo-left">',
			'<a href="" title="百度首页">',
				'<img src="//www.baidu.com/img/2016_6_19logofinal_13db57e06962c9f8547aa10ad13e2415.gif"/>',
				'<span class="s-wea"></span>',
			'</a>',
		'</div>',
		
		'<div class="form-wrapper">',
			'<a href="#" class="iwebIcon">',
				'<i></i>',
				'<span>网页</span>',
			'</a>',
			'<ul class="listWeb">{#listWeb#}</ul>',
			'<div class="wrap-search">',
				'<from method="post" action="">',
					'<input type="text" maxlength="100" />',
					'<input type="button" value="百度一下" />',	
				'</from>',
			'</div>',
		'</div>',
		
		'<div class="grid">',
			'<ul>{#listInfo#}</ul>',
		'</div>'
	].join('');
	
	var listWebTpl = '<li><a href="#">{#webDataTile#}</a><li>';
	
	var listInfoTpl = '<li></li>';
	
	//字典修正
	var listWebHtml = listInfoHtml = html = '';
	
	$.each(data.webData,function ( i,val ) {
		
		listWebHtml += tepmlate(listWebTpl,val);
		
	});
	
	html += tepmlate(tpl, {listWeb: listWebHtml});
	
	//添加页面
	dom.html(html);
	
	dom.appendTo('#hao123-search');
	
	return dom;
	
})
.addCtrl('search',function ( model,view,observer ) {
	
	//创建视图	
	var dom = view.create('search');
	
	//下拉箭头
	dom.find('.iwebIcon').on('click',function () {
		
		if ( !$(this).siblings('.listWeb').hasClass('open') ) {
			
			$(this).siblings('.listWeb').addClass('open');
			
		} else {
			
			$(this).siblings('.listWeb').removeClass('open');
			
		}
		
	});
	
})
