

define(function ( require,exports,module ) {
	
	var MVC = require('MVC');
		
	/**
	 * 邮箱模块
	 */
	
	
	MVC
	.addModel('email',{
		
	})
	.addView('email',function ( model,template ) {
		
		var dom = $('<div class="email-layer" id="email-layer"></div>');
		
		var data = model.get('email');
		
		//模板字符串
		var tpl = [
			'<div class="container">',
				'<div>',
					'<input type="text" placeholder="邮箱账号"/>',
					'<span class="choose-email">{#chooseEmail#}</span>',
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
		
		var tplHtml = '<li class="{#cls#}">{#key#}</li>';
		
		for ( var i=0; i<data.normalEmail.length; i++ ) {
			
			htmlList += template(tplHtml,{
				key: data.normalEmail[i],
				cls: 'choose'
			});
			
		}
		
		htmlList += '<li class="not-email">以下为弹出登录</li>';
		
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
		
		//事件绑定
		function bindEvent () {
			
			// 取消按钮
			dom.delegate('.cancel','click',function () {
				
				//打开关闭 浮层 标识
				observer.fire('closeEmailLayer');
				
			})
			// 下拉
			.delegate('.choose-email','click',function () {
				
				if ( !dom.find('ul').hasClass('open') ) {
					
					$(this).siblings('ul').addClass('open');
					
				} else {
					
					$(this).siblings('ul').removeClass('open');
					
				}
				
			})
			// 下拉列表
			.delegate('ul li','click',function () {
				
				if ( $(this).hasClass('choose') ) {
					 
					var val = $(this).html();
					
					$('.choose-email').html(val);
					
				}
				
				$(this).parent('ul').removeClass('open');
				
			})
			
			//docuemnt
			$(document).on('click',function ( ev ) {
				
				//过滤元素
				if ( $.contains( $('#header .email')[0], ev.target ) || ev.target === $('#header .email')[0] ) {
						
					return ;
						
				}
				
				//打开关闭 浮层 标识
				observer.fire('closeEmailLayer');
				
			});
			
		}
		
		//显示  EmailLayer
		function showEmailLayer () {
			
			dom.addClass('open');
			
		}
		
		//关闭 EmailLayer
		function hideEmailLayer () {
			
			dom.removeClass('open');
			
		}
		
	})

	
});
