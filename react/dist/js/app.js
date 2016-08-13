'use strict';

(function (React, ReactDOM) {

	'use strict';

	// Header Component
	var Header = React.createClass({
		displayName: 'Header',

		getInitialState: function getInitialState() {

			return {
				cls: {
					def: 'choose',
					css: '',
					start: '',
					component: '',
					javascript: ''
				}
			};
		},

		render: function render() {

			return React.createElement(
				'header',
				{ className: 'header navbar navbar-static-top' },
				React.createElement(
					'div',
					{ className: 'container' },
					React.createElement(
						'div',
						{ className: 'navbar-header' },
						React.createElement(
							'a',
							{ className: 'navbar-brand', 'data-id': 'def', onClick: this.changeNav },
							'Bootstrap'
						)
					),
					React.createElement(
						'ul',
						{ className: 'nav nav-pills navbar-nav curpors' },
						React.createElement(
							'li',
							{ className: this.state.cls.start },
							React.createElement(
								'a',
								{ 'data-id': 'start', onClick: this.changeNav },
								'起步'
							)
						),
						React.createElement(
							'li',
							{ className: this.state.cls.css },
							React.createElement(
								'a',
								{ 'data-id': 'css', onClick: this.changeNav },
								'全局样式'
							)
						),
						React.createElement(
							'li',
							{ className: this.state.cls.component },
							React.createElement(
								'a',
								{ 'data-id': 'component', onClick: this.changeNav },
								'组件'
							)
						),
						React.createElement(
							'li',
							{ className: this.state.cls.javascript },
							React.createElement(
								'a',
								{ 'data-id': 'javascript', onClick: this.changeNav },
								'JavaScript插件'
							)
						)
					)
				)
			);
		},

		changeNav: function changeNav(ev) {

			var _cls = {};

			// 获取 子组件 标识
			var dataId = ev.target.getAttribute('data-id');

			// 父组件  利用函数 传递给父组件 info
			this.props.changePage(dataId);

			// 更新state 表示状态
			for (var i in this.state.cls) {
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
	var DefaultMain = React.createClass({
		displayName: 'DefaultMain',

		getDefaultProps: function getDefaultProps() {

			return {

				// 第一个模块的列表数据
				fisrtList: [{
					img: 'img/sass-less.png',
					h3: '预处理脚本',
					p: '虽然可以直接使用 Bootstrap 提供的 CSS 样式表，不要忘记 Bootstrap 的源码是基于最流行的 CSS 预处理脚本 - Less 和 Sass 开发的。你可以采用预编译的 CSS 文件快速开发，也可以从源码定制自己需要的样式。'
				}, {
					img: 'img/devices.png',
					h3: '一个框架、多种设备',
					p: '你的网站和应用能在 Bootstrap 的帮助下通过同一份代码快速、有效适配手机、平板、PC 设备，这一切都是 CSS 媒体查询（Media Query）的功劳。'
				}, {
					img: 'img/components.png',
					h3: '特性齐全',
					p: 'Bootstrap 提供了全面、美观的文档。你能在这里找到关于 HTML 元素、HTML 和 CSS 组件、jQuery 插件方面的所有详细文档。'
				}],

				secondList: [{
					img: 'img/01.png'
				}, {
					img: 'img/02.jpg'
				}, {
					img: 'img/03.png'
				}, {
					img: 'img/04.png'
				}]
			};
		},

		render: function render() {
			return React.createElement(
				'div',
				{ style: { display: this.props.show ? 'block' : 'none' } },
				React.createElement(
					'div',
					{ className: 'contanier' },
					React.createElement(
						'div',
						{ className: 'app-banner' },
						React.createElement(
							'div',
							{ className: 'app-b-logo' },
							'B'
						),
						React.createElement(
							'p',
							{ className: 'app-logo-txt' },
							'Bootstrap 是最受欢迎的 HTML、CSS 和 JS 框架，用于开发响应式布局、移动设备优先的 WEB 项目。'
						),
						React.createElement(
							'div',
							null,
							React.createElement(
								'span',
								{ className: 'btn btn-lg btn-outline' },
								'下载Bootstrap'
							)
						),
						React.createElement(
							'p',
							{ className: 'vers' },
							'当前版本： v3.3.5 | 文档更新于：2015-06-22'
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'container' },
					React.createElement(
						'div',
						{ className: 'first-list' },
						React.createElement(
							'div',
							{ className: 'container' },
							React.createElement(
								'h2',
								null,
								'为所有开发者、所有应用场景而设计。'
							),
							React.createElement(
								'p',
								{ className: 'title' },
								'Bootstrap 让前端开发更快速、简单。所有开发者都能快速上手、所有设备都可以适配、所有项目都适用。'
							)
						),
						React.createElement(
							'div',
							{ className: 'row' },
							this.createList(this.props.fisrtList)
						),
						React.createElement(
							'div',
							{ className: 'row lock' },
							React.createElement(
								'p',
								null,
								'Bootstrap 是完全开源的。它的代码托管、开发、维护都依赖 GitHub 平台。'
							),
							React.createElement(
								'button',
								null,
								'查看GitHub项目主页'
							)
						)
					),
					React.createElement(
						'div',
						{ className: 'second-list' },
						React.createElement(
							'div',
							{ className: 'container' },
							React.createElement(
								'h2',
								null,
								'基于 Bootstrap 构建的网站'
							),
							React.createElement(
								'p',
								{ className: 'intro' },
								'全球数以百万计的网站都是基于 Bootstrap 构建的。你可以先参观一下我们提供的实例精选或者看一看我们粉丝的网站吧。'
							)
						),
						React.createElement(
							'div',
							{ className: 'row' },
							this.createList(this.props.secondList)
						),
						React.createElement(
							'div',
							{ className: 'small-intro' },
							React.createElement(
								'p',
								null,
								'我们在“优站精选”里展示了许多精美的 Bootstrap 网站。'
							),
							React.createElement(
								'span',
								null,
								'逛一逛,优站精选'
							)
						)
					)
				)
			);
		},

		// 创建列表
		createList: function createList(data) {

			var col = 12 / data.length;

			return data.map(function (val, key) {

				var listTag = [];

				for (var i in val) {

					if (i == 'img') {

						listTag.push(React.createElement('img', { src: val[i], alt: '' }));
					} else if (i == 'h3') {

						listTag.push(React.createElement(
							'h3',
							null,
							val[i]
						));
					} else if (i == 'p') {

						listTag.push(React.createElement(
							'p',
							{ className: 'textleft' },
							val[i]
						));
					}
				}

				return React.createElement(
					'div',
					{ className: 'col-sm-' + col, key: key },
					listTag
				);
			});
		}

	});

	// 起始页面
	var StatMain = React.createClass({
		displayName: 'StatMain',

		render: function render() {
			return React.createElement(
				'div',
				{ style: { display: this.props.show ? 'block' : 'none' } },
				React.createElement(
					'div',
					{ className: '' },
					React.createElement(
						'div',
						{ className: 'app-banner contanier' },
						React.createElement(
							'h2',
							null,
							'起步'
						),
						React.createElement(
							'p',
							null,
							'简要介绍 Bootstrap，以及如何下载、使用，还有基本模版和案例，等等。'
						)
					)
				)
			);
		}
	});

	// CSS页面
	var CssMain = React.createClass({
		displayName: 'CssMain',

		render: function render() {
			return React.createElement(
				'div',
				{ style: { display: this.props.show ? 'block' : 'none' } },
				'CssMain'
			);
		}
	});

	// Component页面
	var ComponentMain = React.createClass({
		displayName: 'ComponentMain',

		render: function render() {
			return React.createElement(
				'div',
				{ style: { display: this.props.show ? 'block' : 'none' } },
				'ComponentMain'
			);
		}
	});

	// JavaScript页面
	var JsMain = React.createClass({
		displayName: 'JsMain',

		render: function render() {
			return React.createElement(
				'div',
				{ style: { display: this.props.show ? 'block' : 'none' } },
				'JsMain'
			);
		}
	});

	// APP Component
	var App = React.createClass({
		displayName: 'App',

		getInitialState: function getInitialState() {

			return {
				// 存储是否显示页面消息
				main: {
					def: true,
					start: false,
					css: false,
					component: false,
					javascript: false
				}
			};
		},

		render: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(Header, { changePage: this.changePage }),
				React.createElement(DefaultMain, { show: this.state.main.def }),
				React.createElement(StatMain, { show: this.state.main.start }),
				React.createElement(CssMain, { show: this.state.main.css }),
				React.createElement(ComponentMain, { show: this.state.main.component }),
				React.createElement(JsMain, { show: this.state.main.javascript })
			);
		},

		// 更换 子组件
		changePage: function changePage(pageId) {

			var _main = {};

			for (var i in this.state.main) {
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
	ReactDOM.render(React.createElement(App, null), document.querySelector('.app'));
})(React, ReactDOM);
/* banner */ /* end - banner */ /* end - first-list */