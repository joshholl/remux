const path = require('path');
const html_plugin = require('html-webpack-plugin')

const SOURCE_ROOT = '../src';
const DIST_ROOT = '../dist';


const html = new html_plugin({
	template: path.join(__dirname,SOURCE_ROOT, 'index.html'),
	path: path.join(__dirname, DIST_ROOT),
	filename: 'index.html'
});

module.exports = {
	entry: path.join(__dirname, SOURCE_ROOT, 'index.js'),
	output: {
		path: path.join(__dirname, DIST_ROOT, 'js'),
		filename : 'remux.js',
		publicPath: 'js'
	},
	resolve: {
		extensions: ['.js','.jsx'],
		modules: [
			path.join(__dirname, '../node_modules'),
			path.join(__dirname, SOURCE_ROOT)
		]
	},
	plugins: [html],
	module: {
		rules: [	
			{ 
				test: /\.(js|jsx)?$/,
				exclude: /node_modules/,
				include: path.join(__dirname, SOURCE_ROOT),
				use: [{
					loader: 'babel-loader',
					options: {
						babelrc: false,
						presets: [['es2015', {modules: false}], 'react']
					}

				}]
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, DIST_ROOT),
		compress: false,
		port: 8080,
		host: '0.0.0.0',
		historyApiFallback: true
	}
}
