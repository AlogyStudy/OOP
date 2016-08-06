
(function ( React, ReactDOM ) {
	
	'use strict';
	
	// Header Component
	const Header = React.createClass({
		render: () => {
			return (
				<header className="header navbar navbar-static-top">
					<div className="container">
						<div className="navbar-header">
							<a className="navbar-brand">Bootstrap</a>
						</div>
						<ul className="nav nav-pills navbar-nav curpors">
							<li>
								<a onClick={this.changeNav}>起步</a>
							</li>
							<li>
								<a onClick={this.changeNav}>全局样式</a>
							</li>
							<li>
								<a onClick={this.changeNav}>组件</a>
							</li>
							<li>
								<a onClick={this.changeNav}>JavaScript插件</a>
							</li>
						</ul>
					</div>
				</header>
			);
		},
		
		changeNav: () => {
					
		}
	});
	
	// 子组件
	
	// 默认页面
	const DefaultMain = React.createClass({
		render: () => {
			return (
				<div>DefaultMain</div>
			);
		}
	});
	
	// 起始页面
	const StatMain = React.createClass({
		render: () => {
			return (
				<div>StatMain</div>
			);
		}
	});
	
	// CSS页面
	const CssMain = React.createClass({
		render: () => {
			return (
				<div>CssMain</div>
			);
		}
	});
	
	// Component页面
	const ComponentMain = React.createClass({
		render: () => {
			return (
				<div>ComponentMain</div>
			);
		}
	});
	
	// JavaScript页面
	const JsMain = React.createClass({
		render: () => {
			return (
				<div>JsMain</div>
			);
		}
	});
	
	
	// APP Component
	const App = React.createClass({
		render: () => {
			return (
				<div>
					<Header />
					<DefaultMain />
					<StatMain />
					<CssMain />
					<ComponentMain />
					<JsMain />
				</div>
			);
		}
	});
	
	// render
	ReactDOM.render(<App />, document.querySelector('.app'));
	
})( React, ReactDOM );

