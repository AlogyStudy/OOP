let DEBUG = true;
let ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
	entry: [
		'./app/main.js'
	],
	output: {
		path: __dirname + '/dist/',
		publicPath: DEBUG ? '/dist/' : '//aliyun.com', // html 引用到的地址 也可以是 cdn 的地址
		filename: 'bundle.js'
	},
	plugin: [
		new ExtractTextPlugin('styles.css')
	],
	module: {
		loaders: [{
			test: /\.css/,
			loader: 'style!css'
		}, {
			test: /\.(png!jpe?g)$/,
			loader: 'url-loader?limit=10240&name=build/[name].[ext]'
		}, {
			test: /\.jsx?$/,
			loader: 'babel-loader'
		}]
	}
}



// {
//			test: /\.css$/,
//			loader: 'style!css'
//		}, {
//			test: '!.less$',
//			loader: 'style!css!less'
//		}, {
//			test: '\.woff$',
//			loader: 'url?limit=10000'
//		}
