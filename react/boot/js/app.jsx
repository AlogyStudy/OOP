
(function ( React, ReactDOM ) {
	
	'use strict';
	
	// Header Component
	const Header = React.createClass({
		
		getInitialState: function () {
			
			return {
				cls: {
					def: 'choose',
					css: '',
					start: '',
					component: '',
					javascript: ''
				}
			}
			
		},
		
		render: function () {
			
			return (
				<header className="header navbar navbar-static-top">
					<div className="container">
					
						<div className="navbar-header">
							<a className="navbar-brand" data-id="def" onClick={this.changeNav}>Bootstrap</a>
						</div>
						
						<ul className="nav nav-pills navbar-nav curpors">
							<li className={this.state.cls.start}>
								<a data-id="start" onClick={this.changeNav}>起步</a>
							</li>
							<li className={this.state.cls.css}>
								<a data-id="css" onClick={this.changeNav}>全局样式</a>
							</li>
							<li className={this.state.cls.component}>
								<a data-id="component" onClick={this.changeNav}>组件</a>
							</li>
							<li className={this.state.cls.javascript}>
								<a data-id="javascript" onClick={this.changeNav}>JavaScript插件</a>
							</li>
						</ul>
						
					</div>
				</header>
			);
		},
		
		changeNav: function ( ev ) {
			
			let _cls = {};

			// 获取 子组件 标识
			let dataId = ev.target.getAttribute('data-id');
			
			// 父组件  利用函数 传递给父组件 info
			this.props.changePage(dataId);
			
			// 更新state 表示状态 
			for ( let i in this.state.cls ) {
				_cls[i] = '';
			}
			
			_cls[dataId] = 'choose';
			
			this.setState({
				cls: _cls
			});

		}
	});
	
	// 子组件
	
	// 默认页面
	const DefaultMain = React.createClass({
		
		getDefaultProps: function () {
			
			return {
				
				// 第一个模块的列表数据
				fisrtList: [{
						img: 'img/sass-less.png',
						h3: '预处理脚本',
						p: '虽然可以直接使用 Bootstrap 提供的 CSS 样式表，不要忘记 Bootstrap 的源码是基于最流行的 CSS 预处理脚本 - Less 和 Sass 开发的。你可以采用预编译的 CSS 文件快速开发，也可以从源码定制自己需要的样式。'
					},{
						img: 'img/devices.png',
						h3: '一个框架、多种设备',
						p: '你的网站和应用能在 Bootstrap 的帮助下通过同一份代码快速、有效适配手机、平板、PC 设备，这一切都是 CSS 媒体查询（Media Query）的功劳。'
					},{
						img: 'img/components.png',
						h3: '特性齐全',
						p: 'Bootstrap 提供了全面、美观的文档。你能在这里找到关于 HTML 元素、HTML 和 CSS 组件、jQuery 插件方面的所有详细文档。'
					}],
					
				secondList: [{
						img: 'img/01.png'
					},{
						img: 'img/02.jpg'
					},{
						img: 'img/03.png'
					},{
						img: 'img/04.png'
					}]
			}
			
		},
		
		render: function () {
			return (
				<div style={{ display: this.props.show ? 'block' : 'none'  }}>
					
					{/* banner */}
					<div className="contanier">
					
						<div className="app-banner">
						
							<div className="app-b-logo">B</div>
							
							<p className="app-logo-txt">Bootstrap 是最受欢迎的 HTML、CSS 和 JS 框架，用于开发响应式布局、移动设备优先的 WEB 项目。</p>
							<div>
								<span className="btn btn-lg btn-outline">下载Bootstrap</span>
							</div>
							<p className="vers">当前版本： v3.3.5 | 文档更新于：2015-06-22</p>
							
						</div>

					</div>
					{/* end - banner */}
					
					<div className="container">
					
						<div className="first-list">
							<div className="container">
								<h2>为所有开发者、所有应用场景而设计。</h2>
								<p className="title">Bootstrap 让前端开发更快速、简单。所有开发者都能快速上手、所有设备都可以适配、所有项目都适用。</p>
							</div>
							
							<div className="row">
								{this.createList(this.props.fisrtList)}
							</div>
							
							<div className="row lock">
								<p>Bootstrap 是完全开源的。它的代码托管、开发、维护都依赖 GitHub 平台。</p>
								<button>查看GitHub项目主页</button>
							</div>
							
						</div>
						{/* end - first-list */}
						
						<div className="second-list">
							<div className="container">
								<h2>基于 Bootstrap 构建的网站</h2>
								<p className="intro">全球数以百万计的网站都是基于 Bootstrap 构建的。你可以先参观一下我们提供的实例精选或者看一看我们粉丝的网站吧。</p>
							</div>
							
							<div className="row">
								{this.createList(this.props.secondList)}
							</div>
							
						</div>
					
					</div>
					
				</div>
			);
			
		},
		
		// 创建列表
		createList: function ( data ) {
			
			let col = 12 / data.length;
			
			return data.map(function ( val, key ) {
				
				let listTag = [];
				
				for ( let i in val ) {
					
					if ( i == 'img' ) {
						
						listTag.push(
							(<img src={val[i]} alt="" />)
						);
						
					} else if ( i == 'h3' ) {
						
						listTag.push(
							(<h3>{val[i]}</h3>)
						);
						
					} else if ( i == 'p' ) {
						
						listTag.push(
							(<p className="textleft">{val[i]}</p>)
						);
						
					}
					
				}
				
				return (
					<div className={'col-sm-' + col } key={key}>
						{listTag}
					</div>
				);
				
			});
						
		}

	});
	
	// 起始页面
	const StatMain = React.createClass({
		render: function () {
			return (
				<div style={{ display: this.props.show ? 'block' : 'none' }}>StatMain</div>
			);
		}
	});
	
	// CSS页面
	const CssMain = React.createClass({
		render: function () {
			return (
				<div style={{ display: this.props.show ? 'block' : 'none' }}>CssMain</div>
			);
		}
	});
	
	// Component页面
	const ComponentMain = React.createClass({
		render: function () {
			return (
				<div style={{ display: this.props.show ? 'block' : 'none' }}>ComponentMain</div>
			);
		}
	});
	
	// JavaScript页面
	const JsMain = React.createClass({
		render: function () {
			return (
				<div style={{ display: this.props.show ? 'block' : 'none' }}>JsMain</div>
			);
		}
	});
	
	
	// APP Component
	const App = React.createClass({
		
		getInitialState: function () {
		
			return {
				// 存储是否显示页面消息
				main: {
					def: true,
					start: false,
					css: false,
					component: false,
					javascript: false
				}
			}
		
		},
		
		render: function () {
			return (
				<div>
					<Header changePage={this.changePage} />
					<DefaultMain show={this.state.main.def} />
					<StatMain show={this.state.main.start} />
					<CssMain show={this.state.main.css} />
					<ComponentMain show={this.state.main.component} />
					<JsMain show={this.state.main.javascript} />
				</div>
			);
		},
		
		// 更换 子组件
		changePage: function ( pageId ) {
			
			let _main = {};
			
			for ( let i in this.state.main ) {
				_main[i] = false;
			}
			
			_main[pageId] = true; 
				
			// 更新组件	
			this.setState({
				main: _main
			});
			
		}
		
	});
	
	// render
	ReactDOM.render(<App />, document.querySelector('.app'));
	
})( React, ReactDOM );
