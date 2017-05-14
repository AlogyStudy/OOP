
# AngualrJs在做路由控制的时候如何不让链接里面带有符号“#”呢？

$locationProvider.html5Mode(true);

另外还可以用这个api让路径的前面加个叹号，跟Twitter一样。
$locationProvider.hashPrefix('!');


# ng-init 指令

作用：初始化应用程序数据，也就是AngularJS应用程序定义初始值

通常情况下，会使用一个控制器或模块来代替它。


应用程序变量name赋值定初始值
```html
<div ng-app="" ng-init="name=px"></div>
```

赋值数字、数组、对象，可以为多个变量赋初始值
```html
<div ng-app="" ng-init="width=3; length=5"></div>
```




