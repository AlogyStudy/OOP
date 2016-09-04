
# 脏值检查

Angular检查模型的值是否发生了变化，而程序还没有对该变化进行同步的机制。Angular将会通过脏值检查比那里整个$watch列表，只要当中的某个值发生了变化，应用就会退回到$digest循环中，直到检测到这个值不再发生任何变化，然后再启用新值并且继续稳定了，这时候才在view渲染该有的数据。

$rootScopeProvider.digestTtl(15);


http.createServer(function ( req, res ) {

	var passowrld = '';
	var salt = crypto.randomBytes(128).toString('base64');

	res.writeHead(200);
	res.end('Hello world!');

}).listen(8088);

# 分离
1. 前后端分离，后端只提供数据接口(HTTP协议提供), 路由(路由的跳转), 模板渲染等都在前端完成.
2. HTML和JS分离， `展示`和`逻辑`
3. `减少JS`代码，减少DOM元素查找，事件绑定等代码
4. 适合API的方式进行开发


# MVC
* Model 数据`模型`层
* View `视图`层，负责展示
* Controller 业务逻辑和`控制`逻辑


# MVC 需求
1. 代码规模越来越大，`切分职责`.
2. 相同代码的`复用`.
3. 需求变更需要`重构`.
4. 职责清晰，代码`模块化`.
5. MVC只是手段，目标是`模块化`和`复用`


# angular 使用流程

通过指定`ng-app`定义angular应用的 `控制范围`
一切从模块开始，先`定义模块`
angular.module('mod'); // 获取模块
angular.module('mod', []); // 定义模块


AngularJS 应用引导过程有3个重要点：
1. 注入器(injector)将用于创建此应用程序的依赖注入 (dependency injector);
2. 注入器将会创建根作用域作为应用模型的范围
3. Angular将会链接根作用域中的DOM，从用ngApp标记的HTML标签开始，逐步处理DOM中指令和绑定.

injector --> scope --> ngApp(DOM)

# factory、service、provider是什么关系

factory
把service的方法和数据放在一个对象里，并返回这个对象

```javascript
app.factory('FooService', function () {
	return {
		target: 'factory',
		sayHello: function () {
			return 'hello' + this.target;
		}
	}
});
```

service
通过构造函数方式创建service，返回一个实例化对象

```javascript
app.service('FooService', function () {
	var self = this;
	this.target = 'service';
	this.sayHello = function () {
		return 'hello' + self.target;
	}
});
```


provider
创建一个可通过config配置service,$get中返回的，就是用factory创建service的内容
```javascript
app.provider('FooService', function () {
	
	this.configData = 'init data';
	this.setConfigData = function ( data ) {
		if ( data ) {
			this.configData = data;
		}
	}
	
	this.
	
});
```