
// 创建组件
let Uls = React.createClass({
	render: function () {
		return (
			<ul className="listNone">
				<li>a</li>
				<li>b</li>
				<li>c</li>
			</ul>
		);
	}
});


// 渲染组件成 虚拟DOM
let ul = (<Uls></Uls>);

// 渲染页面中
ReactDOM.render(ul, document.querySelector('.app'));


