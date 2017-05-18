var path = require('path');

module.exports = {
	entry: './src/index.jsx',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module:{
		rules:[
			{
				test:/\.css$/,
				use:[
					{
						loader:"style-loader"
					},
					{
						loader:"css-loader"
					}
				]
			},
			{
				test:/\.jsx$/,
				loader:"babel-loader"
			}
		],
	},
	resolve:{
		modules:[
			path.join(__dirname),
			"node_modules"
		]
	}
};