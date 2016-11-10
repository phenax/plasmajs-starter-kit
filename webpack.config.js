const webpack = require('webpack');
const {resolve} = require('path');


const BUILD_DIR= resolve(__dirname, 'public/js');         // Build directory
const APP_DIR= __dirname;                                 // Source directory


/**
 * Function for excluding files from the loader
 * 
 * @param  {string}   fileName      The name of the file to check
 * @param  {string}   exceptionDir  The exception in node_modules
 * 
 * @return {boolean}                Is excluded if true
 */
const plasmaJSExclude= (fileName, exceptionDir=null)=> {

	if((exceptionDir || exceptionDir === '') && fileName.includes(`node_modules/${exceptionDir}`))
		return false;

	if(fileName.includes('node_modules'))
		return true;

	return false;
};


const webpackConfig = {

	node: {
		fs: "empty"
	},

	entry: {

		script: resolve(APP_DIR, 'client/client.jsx'),
	},

	output: {
		path: BUILD_DIR,
		filename: '[name].js'
	},

	module: {

		loaders: [
			{
				test: /\.jsx?/,
				exclude: (f) => plasmaJSExclude(f, 'plasmajs'),
				include: APP_DIR,
				loader: 'babel'
			},
			{
				test: /\.json?/,
				exclude: (f) => plasmaJSExclude(f, 'mime'),
				include: APP_DIR,
				loader: 'json'
			}
		]
	},

	devtool: "source-map"
};


// Stuff for production
if(process.argv.includes('-p')) {
	
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
