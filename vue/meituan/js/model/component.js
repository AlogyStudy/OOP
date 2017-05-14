define(function ( require ) {
	
	// 引入工具库
	var util = require('tools/util');
	
	// 定义组件
	
	// Home 组件
	var Home = Vue.extend({
		template: util.tpl('tpl_home'),
		data: function () {
			return {
				types: [
					{id: 1, title: '美食', url: '01.png'},
					{id: 2, title: '电影', url: '02.png'},
					{id: 3, title: '酒店', url: '03.png'},
					{id: 4, title: '休闲娱乐', url: '04.png'},
					{id: 5, title: '外卖', url: '05.png'},
					{id: 6, title: 'KTV', url: '06.png'},
					{id: 7, title: '周边游', url: '07.png'},
					{id: 8, title: '丽人', url: '08.png'},
					{id: 9, title: '小吃快餐', url: '09.png'},
					{id: 10, title: '火车票', url: '10.png'}
				],
				ad: [],
				list: []
			}
		},
		
		// 组件创建完成自动调用
		created: function () {
			
			// 搜索框显示隐藏
			this.$parent.hideSerch = true;
			
			var _this = this;
			
			// 异步读取数据
			util.ajax('data/home.json', function ( res ) {
				
				var reslut = JSON.parse(res);
				
				if ( reslut.errno === 0 ) {
					
					// 广告数据
					_this.$set('ad', reslut.data.ad);
					
					// 添加list 数据
					_this.$set('list', reslut.data.list);
					
				}
				
			});
			
		}
	});
	
	// List 组件
	var List = Vue.extend({
		// list 模板
		template: util.tpl('list_tpl'),
		
		// list 数据
		data: function () {
			
			return {
				types: [
					{value: '价格排序', key: 'price'},
					{value: '销量排序', key: 'sales'},
					{value: '好评排序', key: 'evaluate'},
					{value: '优惠排序', key: 'discount'}
				],
				data: [],
				otherData: [],
				srot: true
			}
			
		},
		
		// 组件生成 执行 
		created: function () {
			
			// 请求数据
			this.init();
			
		},
		
		// 订阅消息
		events: {
			
			'reload-list': function () {
					
				// 请求数据
				this.init();
				
			}
			
		},
		
		// 事件驱动
		methods: {
			
			// init 请求数据 逻辑
			init: function () {
				
				// 搜索框显示隐藏
				this.$parent.hideSerch = true;
				
				var _this = this;
				
				util.ajax('data/list.json', function ( res ) {
					
					var reslut = JSON.parse(res);
					
					// 返回数据成功
					if ( reslut.errno === 0 ) {
						
						// 打乱返回数据的顺序
						reslut.data.sort(function () {
							return Math.random() > .5 ? 1 : -1;
						});
						
						// 将数据加入组件
						// 显示3条数据
						_this.$set('data', reslut.data.slice(0,3));
						
						// 后续数据添加到
						_this.$set('otherData', reslut.data.slice(3));
						
					}
					
				});
				
			},
			
			// 加载更多
			loadMore: function () {
			
				// 把剩余输入添加到 执行数组中
				this.data = this.data.concat(this.otherData);
				
				// 清空占用数组
				this.otherData = [];
				
			},
			
			// 排序
			sortNum: function ( key ) {
				
				this.data.sort(function ( a, b ) {
					
					// 优惠排序
					if ( key === 'discount' ) {
						
						// 用原价减去售价排序
						return (b.orignPrice - b.price) - (a.orignPrice - a.price);
						
					}
					
					// 由大到小排序
					return  b[key] - a[key];
					
				});
				
			}
			
		}
		
	});
	
	
	// Product 组件
	var Product = Vue.extend({
		// 模板
		template: util.tpl('product_tpl'),
		
		// 数据
		data: function () {
			return {
				product: {
					src: '01.jpg'
				}
			}
		},
		
		created: function () {
			
			// 搜索框显示隐藏
			this.$parent.hideSerch = false;
			
			var _this = this;
			
			util.ajax('data/product.json', function ( res ) {
				
				var reslut = JSON.parse(res);
				
				// 数据请求成功
				if ( reslut.errno === 0 ) {
					
					// 加入数据
					_this.$set('product', reslut.data);
					
					console.log( _this.product );
					
				}
				
				
			});
			
		}
		
	});
	
	
	// 返回组件	
	return {
		Home: Home,
		List: List,
		Product: Product
	}
	
});
