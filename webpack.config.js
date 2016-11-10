const webpack = require('webpack');
const {resolve} = require('path');

const BUILD_DIR= resolve(__dirname, 'public/js');         // Build directory
const APP_DIR= __dirname;                                 // Source directory


const webpackConfig = {

	entry: {
		script: resolve(APP_DIR, 'client/jsx/client.jsx'),
	},

	output: {
		path: BUILD_DIR,
		filename: '[name].js'
	},

	module: {

		loaders: [

			{
				test: /\.jsx?/,
				exclude: /node_modules\/(?!plasmajs)/,
				include: APP_DIR,
				loader: 'babel'
			}
		],
	},

	devtool: "source-map"
};


// Stuff for production
if(process.argv.includes('-p')) {
	
	webpackConfig.devtool= false;

	webpackConfig.plugins= [

		new webpack.optimize.DedupePlugin(),
		
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
