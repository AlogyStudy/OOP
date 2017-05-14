
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


# MVVM模式的好处

* 低耦合：View可以独立于Model变化和修改，一个ViewModel可以绑定到不同的View上，当View变化的时候Model可以不变，当Model变化的时候View也可以不变. 
* 可重用性：可以把一些视图的逻辑放在ViewModel里面，让很多View重用这段视图逻辑
* 独立开发：开发人员可以专注于业务逻辑和数据的开发(ViewModel).设计人员可以专注于界面(View)的设计
* 可测试性： 可以针对ViewModel来对界面(View)进行测试.  

# angular 使用流程

通过指定`ng-app`定义angular应用的 `控制范围`
一切从模块开始，先`定义模块`
angular.module('mod'); // 获取模块
angular.module('mod', []); // 定义模块


# 模块
一切是从模块开始，module就是容器，其它的元素都挂在module里面.

* module
* config filter directive factory controller
* routes service
* provider
* value

模块是一些功能的集合，如控制器，服务，过滤器，指令等子元素组成的整体.

AngularJS 应用引导过程有3个重要点：
1. 注入器(injector)将用于创建此应用程序的依赖注入 (dependency injector);
2. 注入器将会创建根作用域作为应用模型的范围
3. Angular将会链接根作用域中的DOM，从用ngApp标记的HTML标签开始，逐步处理DOM中指令和绑定.

injector --> scope --> ngApp(DOM)



# factory、service、provider是什么关系
  
定义服务
 
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
	
	this.$get = function () {
		var self = this;
		return {
			target: 'provider',
			sayHello: function () {
				return self.configData + 'hello' + this.target;
			}
		}
	}
	
});

// 注入的是 FooService 的 provider
app.config(function ( FooServiceProvider ) {
	FooServiceProvider.setConfigData('config data');
});

```
从底层实现上来看，service调用了factory，返回其实例
factory调用了provider,返回其$get 中定义的内容.

factory和service功能类似，只不过factory是普通function，可以返回任何东西( return 的都可以被访问 )
service是构造器，可以不返回(绑定到this的都可以被访问)
provider是加强版factory，返回一个可配置的factory



# ng-include 将多个页面的公共页面提取出来.

```html
<div ng-include="'header.html'"></div>
```

注意使用点：
1. 必须用web容器打开站点才能成功，用本地文件的模式访问会报错
2. ng-include 的值是如果要写为文件名的话需要加单引号，否则会被当作一个变量来处理.


	