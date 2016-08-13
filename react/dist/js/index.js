"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// 保存变量
var Component = React.Component; // const Componet = React.Component();
var render = ReactDOM.render; //  const render =  ReactDOM.render(); 
// 定义  list 组件
var List = (function (_super) {
    __extends(List, _super);
    function List() {
        _super.apply(this, arguments);
    }
    List.prototype.render = function () {
        return (React.createElement("div", null, "list part"));
    };
    return List;
}(Component));
// Detail组件
var Detail = (function (_super) {
    __extends(Detail, _super);
    function Detail() {
        _super.apply(this, arguments);
    }
    Detail.prototype.render = function () {
        return (React.createElement("div", null, "Detail part"));
    };
    return Detail;
}(Component));
// Comment 组件
var Comment = (function (_super) {
    __extends(Comment, _super);
    function Comment() {
        _super.apply(this, arguments);
    }
    Comment.prototype.render = function () {
        return (React.createElement("div", null, "comment part"));
    };
    return Comment;
}(Component));
// App Comment 
var App = (function (_super) {
    __extends(App, _super);
    function App(props) {
        _super.call(this, props); // 父类实现 
        this.state = {
            section: 'detail'
        };
    }
    App.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("header", null, React.createElement("div", {className: "go-back"}, React.createElement("span", {className: "arrow"}, React.createElement("span", {className: "arrow blue"}))), React.createElement("h1", null, "爱创课堂新闻平台"), React.createElement("div", {className: "logo"}, "登录")), React.createElement("section", {style: { dispay: this.state.section == 'list' ? 'block' : 'none' }}, React.createElement(List, null)), React.createElement("section", {style: { dispay: this.state.section == 'detail' ? 'block' : 'none' }}, React.createElement(Detail, null)), React.createElement("section", {style: { dispay: this.state.section == 'comment' ? 'block' : 'none' }}, React.createElement(Comment, null))));
    };
    return App;
}(Component));
// 渲染
render(React.createElement(App, null), document.querySelector('.app'));
