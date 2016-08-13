
// 保存变量
const { Component } = React; // const Componet = React.Component();

const { render } = ReactDOM;  //  const render =  ReactDOM.render(); 


// 定义  list 组件
class List extends Component {
	
	render () {
		
		return (<div>list part</div>);
		
	}
	
}


// Detail组件
class Detail extends Component {
	
	render () {
		
		return (<div>Detail part</div>);
		
	}
	
}

// Comment 组件
class Comment extends Component {
	
	render () {
		
		return (<div>comment part</div>);
		
	}
	
}



// App Comment 

class App extends Component {
	
	constructor ( props ) {
		
		super(props); // 父类实现 
		
		this.state = {
			section: 'detail'
		}
		
	}
	
	render () {
		
		return (
			<div>
			
				<header>
					<div className="go-back">
						<span className="arrow"><span className="arrow blue"></span></span>
					</div>
					<h1>爱创课堂新闻平台</h1>
					<div className="logo">登录</div>
				</header>
				
				{/* list 列表 */}
				<section style={{ dispay: this.state.section == 'list' ? 'block' : 'none' }}>
					{/* 渲染 组件 */}
					<List />
				</section>
				
				{/* Detail 列表 */}
				<section style={{ dispay: this.state.section == 'detail' ? 'block' : 'none' }}>
					{/* 渲染 组件 */}
					<Detail />
				</section>
				
				{/* Comment 列表 */}
				<section style={{ dispay: this.state.section == 'comment' ? 'block' : 'none' }}>
					{/* 渲染 组件 */}
					<Comment />
				</section>
				
			</div>
		);
		
	}
}

// 渲染
render(<App />, document.querySelector('.app'));
