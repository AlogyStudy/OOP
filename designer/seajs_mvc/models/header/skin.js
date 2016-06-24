
define(function ( require,expotrs,module ) {
	
	var MVC = require('MVC');
	
	/**
	 * skin 换肤模块
	 */
	
	MVC
	.addModel('skin',{
		
	//	chooseSkinId: 'noSkin'  //当前选中的图片
		chooseSkinId: '05'  //当前选中的图片
		
	})
	.addView('skin',function ( model,template ) {
	
		var dom = $('<div id="skin" class="skin"></div>');
	
		//得到数据
		var data = model.get('skin');
		
		//模板
		var tpl = [
			'<div class="skin-header"><div class="container">',
				'<span class="tabs">最新推荐</span>',
				'<span class="no-use-btn">不使用皮肤</span>',
				'<span class="save-btn">保存</span>',
				'<span class="cancel-btn">取消</span>',
			'</div></div>',
			'<div class="skin-content">',
				'<ul class="container">{#skinList#}</ul>',
			'</div>'
		].join('');
		
		var skinTtem = '<li data-id="{#id#}"><img src="img/skin/{#src#}" alt="" /><p>{#title#}</p><i></i></li>';
		
		
		//字典修正
		var skinItemsHtml = html = '';
		
		$.each(data.list,function ( i,val ) {
			
			skinItemsHtml += template(skinTtem,val);
			
		});
		
		html += template(tpl,{skinList: skinItemsHtml});
	
		dom.html(html);
		
		dom.prependTo('body');
		
		return dom;
	
	})
	.addCtrl('skin',function ( model,view,observer ) {
		
		var dom = null;
		
		var skinId = model.get('skin.chooseSkinId')
		
		observer.regist('openSkinLayer',function () {
	
			if ( !dom ) {
				
				//初始化 --> 加载数据 ， 创建视图
				init();
				
			} else {
				
				// 显示
				showSkinLayer();
				
			}
			
		})
		//关闭浮层消息
		.regist('closeSkinLayer',function ( d ) {
			
			//保存
			//往 model , 中skin.chooseSkinId中保存
			
			if ( !(d && d.data && d.data.notSaveSkin) ) {
				
				//保存
				model.add('skin.chooseSkinId',skinId);
				
			} 
			
			var bgId = model.get('skin.chooseSkinId');
			
			//设置背景
			setBodyBg( bgId );
			
			//关闭浮层
			hideSkinLayer();
			
		});
		
		//初始化 --> 加载数据 ， 创建视图
		function init () {
			
			$.get('data/imagelist.json',function ( res ) {
				
				if ( res.errno === 0 ) {
					
					//加载数据
					model.add('skin.list',res.data);
					
					dom = view.create('skin');
					
					//显示视图
					showSkinLayer();
					
					//事件监听
					bindEvent();
					
				}
				
			});
			
		}
		
		function bindEvent () {
				
			//更改body 背景	
			dom.delegate('.container li','click',function () {
				
				var val = $(this).attr('data-id');
				
				//缓存id
				skinId = val;
				
				//设置背景
				setBodyBg(val);
				
			})
			//取消  按钮  
			.delegate('.cancel-btn','click',function () {
				
				//隐藏
	//			hideSkinLayer();
				observer.fire('closeSkinLayer',{
					notSaveSkin:　true
				});
				
			})
			//保存
			.delegate('.save-btn','click',function () {
				
				observer.fire('closeSkinLayer');
				
			})
			//不使用皮肤
			.delegate('.no-use-btn','click',function () {
				
				skinId = 'noSkin';
				
				setBodyBg(skinId);
				
			})
			
		}
		
		
		//设置页面背景
		function setBodyBg ( val ) {
			
			if ( val === 'noSkin' ) {
				
				$('body').css('background','#fff');
				
			} else {
				
				$('body').css('background','url(img/skin/big_'+ val +'.jpg) center top no-repeat');
				
			}
			
		}
		
		//显示
		function showSkinLayer () {
			
			dom.slideDown();
			
		}
		
		//隐藏
		function hideSkinLayer () {
			
			dom.slideUp();
			
		}
		
		//默认渲染背景图片
		skinId = model.get('skin.chooseSkinId');
		setBodyBg(skinId);
		
	})

	
});
