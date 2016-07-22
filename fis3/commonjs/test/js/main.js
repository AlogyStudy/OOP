define('js/main', function(require, exports, module) {

  // 我们在main为页面btn添加事件
  
  // 在fis中，文件的引用时相对于该文件的相对路径
  var dom = require('js/dom');
  var evt = require('js/event');
  
  // 要为button添加事件
  evt.on('btn', 'click', function () {
  	dom.html('text', '今天下了好大的雨呀')
  })
  

});
