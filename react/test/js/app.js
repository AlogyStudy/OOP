"use strict";

(function (React, ReactDOM) {

	'use strict';

	// Header Component
	var Header = React.createClass({
		displayName: "Header",

		render: function render() {
			return React.createElement(
				"header",
				{ className: "header navbar navbar-static-top" },
				React.createElement(
					"div",
					{ className: "container" },
					React.createElement(
						"div",
						{ className: "navbar-header" },
						React.createElement(
							"a",
							{ className: "navbar-brand" },
							"Bootstrap"
						)
					),
					React.createElement(
						"ul",
						{ className: "nav nav-pills navbar-nav curpors" },
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								null,
								"起步"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								null,
								"全局样式"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								null,
								"组件"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								null,
								"JavaScript插件"
							)
						)
					)
				)
			);
		}
	});

	// 子组件

	// 默认页面
	var DefaultMain = React.createClass({
		displayName: "DefaultMain",

		render: function render() {
			return React.createElement(
				"div",
				null,
				"DefaultMain"
			);
		}
	});

	// 起始页面
	var StatMain = React.createClass({
		displayName: "StatMain",

		render: function render() {
			return React.createElement(
				"div",
				null,
				"StatMain"
			);
		}
	});

	// CSS页面
	var CssMain = React.createClass({
		displayName: "CssMain",

		render: function render() {
			return React.createElement(
				"div",
				null,
				"CssMain"
			);
		}
	});

	// Component页面
	var ComponentMain = React.createClass({
		displayName: "ComponentMain",

		render: function render() {
			return React.createElement(
				"div",
				null,
				"ComponentMain"
			);
		}
	});

	// JavaScript页面
	var JsMain = React.createClass({
		displayName: "JsMain",

		render: function render() {
			return React.createElement(
				"div",
				null,
				"JsMain"
			);
		}
	});

	// APP Component
	var App = React.createClass({
		displayName: "App",

		render: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(Header, null),
				React.createElement(DefaultMain, null),
				React.createElement(StatMain, null),
				React.createElement(CssMain, null),
				React.createElement(ComponentMain, null),
				React.createElement(JsMain, null)
			);
		}
	});

	// render
	ReactDOM.render(React.createElement(App, null), document.querySelector('.app'));
})(React, ReactDOM);