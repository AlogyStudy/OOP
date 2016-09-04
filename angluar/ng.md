
# AngualrJs在做路由控制的时候如何不让链接里面带有符号“#”呢？

$locationProvider.html5Mode(true);

另外还可以用这个api让路径的前面加个叹号，跟Twitter一样。
$locationProvider.hashPrefix('!');



