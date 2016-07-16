

// navModel 
app.service('navModel', function () {

	this.list = [
		{
			title: '用户模块',
			childList: [
				{
					title: '用户列表',
					url: '#/userList/1'
				},{
					title: '创建用户',
					url: '#/createUser'
				}
			]
		},{
			title: '新闻模块',
			childList: [
				{
					title: '新闻列表',
					url: '#/newList/1'
				},{
					title: '创建用户',
					url: '#/createNews'
				}
			]
		}
	];

});
