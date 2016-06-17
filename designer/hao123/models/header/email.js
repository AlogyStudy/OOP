MVC
.addModel('email',{
	
})
.addView('email',function ( model,template ) {
	
	var dom = $('<div class="email-layer" id="email-layer"></div>');
	
	var data = model.get('email');
	
	//模板字符串
	var tpl = [
		'<div class="maillogin" id="maillogin">',
			'<div class="">',
				'<input type="text" placeholder="邮箱账号" />',
				'<span>{#chooseEmail#}</span>',
				'<ul>{#list#}</ul>',
			'</div>',
			'<div>',
				'<input type="password" placeholder="账号密码"/>',
				'<span class="login">登录</span>',
				'<span class="cancel">取消</span>',
			'</div>',
			'<div>',
				'<input type="checkbox" id="email-checkbox"/>',
				'<label for="email-checkbox">我阅读并同意使用协议</label>',
			'</div>',
		'</div>'
	].join('');
	
	//格式化模板
	var html = htmlList = '';
	
	var tplHtml = '<li>{#key#}</li>';
	
	for ( var i=0; i<data.normalEmail.length; i++ ) {
		
		htmlList += template(tplHtml,{
			key: data.normalEmail[i]
		});
		
	}
	
	htmlList += '<li>以下为弹出登录</li>';
	
	for ( var i=0; i<data.specialEmail.length; i++ ) {
		
		htmlList += template(tplHtml,{
			key: data.specialEmail[i]
		});
		
	}
	
	html = template(tpl,{
		list: htmlList,
		chooseEmail: data.specialEmail[0]
	});
	
	dom.html(html).appendTo('#header .email');
	
	return dom;
	
})
.addCtrl('email',function ( model,view,observer ) {
	
	var dom = null;
	
	observer.regist('openEmailLayer',function () {
		
		// 重复  添加   //显示完全， 就不需要载入
		if ( dom ) {
			
			showEmailLayer();		
			
		} else {
			
			//初始化，载入email 浮层	
			init();	
			
		}
		
				
	})
	.regist('closeEmailLayer',function () {
		
		hideEmailLayer();
		
	});
	
	//初始化，载入email 浮层	
	function init () {
			
		//获取异步数据
		$.get('data/email.json',function ( res ) {
			
			if ( res.errno === 0 ) {
				
				//添加数据
				model.add('email',res.data);
				
				dom = view.create('email');
				
				//显示图层
				showEmailLayer();
				
				//添加事件
				bindEvent();
				
			}
			
		});	
			
	}
	
	function bindEvent () {
		
		dom.delegate('.cancel','click',function () {
			
			//打开关闭 浮层 标识
			observer.fire('closeEmailLayer');
			
		});
		
	}
	
	//显示  EmailLayer
	function showEmailLayer () {
		
		dom.addClass('open');
		
		dom.parent('.email').addClass('open');
		
	}
	
	function hideEmailLayer () {
		
		console.log(123);
		
		dom.removeClass('open');
		
	}
	
})
