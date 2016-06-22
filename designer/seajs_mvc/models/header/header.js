
MVC
.addModel('header',{
	weather: {
		city: '北京',
		text: '晴',
		icon: 'a53',
		temperature: '29 ~ 15℃'
	},
	date: {
		month: '5月19日',
		day: '星期四'
	},
	adList: [
		{
			id: '1',
			url: 'ad_1.jpg'
		},
		{
			id: '2',
			url: 'ad_2.jpg'
		},
		{
			id: '3',
			url: 'ad_3.jpg'
		}
	]
})
.addView('header',function ( model,template ) { 
	
	var dom = $('<div class="header" id="header"></div>');
	
	var d = model.get('header');

	//建立模板
	var tpl = [
		'<div class="container">',
			'<div class="header-left">',
				'<img src="img/logo.png" alt="" />',
				'<span class="weather">',
					'<strong class="city">{#weather.city#}</strong>',
					'<strong><img src="img/{#weather.icon#}.png" alt="" /> {#weather.text#} {#weather.temperature#}</strong>',
				'</span>',
				'<span class="date"><b>{#date.month#} {#date.day#}</b></span>',
				'<span class="star"><b>星座运势</b></span>',
			'</div>',
			'<div class="header-right">',
				'<ul class="ad">{#list#}</ul>',
				'<span class="user"><b>登录</b></span>',
				'<span class="email"><b>邮箱</b></span>',
				'<span class="browser"><b>浏览器</b></span>',
				'<span class="skin"><b>换肤</b></span>',
			'</div>',
		'</div>'
	].join('');
	var listTpl = '<li><img src="img/{#url#}" alt="" /></li>';
	
	//格式化模板
	var html = listHtml = '';
	
	//字典修正
	for ( var i=0; i<d.adList.length; i++ ) {
		
		listHtml += template(listTpl,d.adList[i]);
		
	}
	
	d.list = listHtml;
	
	html = template(tpl,d); 	
	
	dom.html(html);
	
	dom.appendTo('#header');
	
	return dom;
	
})
.addCtrl('header',function ( model,view,observer ) {
	
	var dom = view.create('header');
	
	//增加交互效果
	dom.delegate('.user','click',function () {

		observer.fire('openLoginLayer');
		
	})
	.delegate('.email','click',function ( ev ) {
		
		if ( ev.target.tagName.toLowerCase() === 'b' ) {
			
			if ( !$(this).hasClass('open') ) {
				
				//打开浮层
				observer.fire('openEmailLayer');
				
				$(this).addClass('open');
				
			} else {
				
				//关闭浮层
				observer.fire('closeEmailLayer');
				
			}
			
		}
		
	})
	.delegate('.skin','click',function () {
		
		//skin
		if ( $(this).hasClass('open') ) {
			
			observer.fire('closeSkinLayer');
			
		} else {
			
			$(this).addClass('open');
			
			observer.fire('openSkinLayer');
			
		}
		
	})
	
	// emial
	observer.regist('closeEmailLayer',function () {
		
		dom.find('.email').removeClass('open');
		
	})
	//关闭skin 
	.regist('closeSkinLayer',function () {
		
		dom.find('.skin').removeClass('open');
		
	});
	
})
