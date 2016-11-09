const webpack = require('webpack');
const path = require('path');


const BUILD_DIR= path.resolve(__dirname, 'public/js');         // Build directory
const APP_DIR= path.resolve(__dirname, 'front_end/js_es6');    // Source directory


process.env.NODE_ENV= process.env.NODE_ENV || 'development';

const isProduction= (process.env.NODE_ENV == 'production');

console.log(process.env.NODE_ENV+" mode");

const webpackConfig = {

	entry: {

		script: APP_DIR + '/app.js',
	},

	output: {
		path: BUILD_DIR,
		filename: '[name].js'
	},

	module: {

		loaders: [
			{
				test: /\.js?/,
				exclude: /node_modules/,
				include: APP_DIR,
				loader: 'babel'
			}
		]
	},

	devtool: "source-map"
};

if(isProduction) {
	
	webpackConfig.devtool= false;

	webpackConfig.plugins= [
		new webpack.optimize.DedupePlugin(),

		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false
		}),
		
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			compress: {
				screw_ie8: true,
				warnings: false
			},
			output: {
				comments: false
			},
			sourceMap: false
		}),
		
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': '"production"'
			}
		})
	];
}

module.exports = webpackConfig;
