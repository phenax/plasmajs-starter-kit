// require('./node_react/start.jsx')();

/*

    "babel-core": "^6.18.2",
    "babel-plugin-transform-object-rest-spread": "^6.16.0",
    "babel-preset-es2015": "^6.18.0",
    "babel-preset-react": "^6.16.0",

 */

import React from 'react';

import {
	Server,
	APIRoute,
	Logger,
	StaticContentRouter
} from 'plasmajs';


import getRoutes from './routes/getRoutes.server.jsx';
import { HeadLayout } from './layouts/WrapperLayouts.jsx';


// The app component
export default class App extends React.Component {


	// To specify the port name to run the program on
	static get port() { return 8080; }

	// API request handler for api routes
	_apiRequestHandler() {

		// Some expensive promise that takes 400ms to resolve
		return new Promise((resolve, reject) => {

			setTimeout(() => {
			
				resolve({
					wow: "cool cool"
				});
			}, 400);
		});
	}

	render() {

		// Server wrapper
		//   - Middleware for static files
		//   - API routes(its a middleware)
		//   - Head layout(<head> tag and its contents)
		//   - The router component and the routes
		//   - Logger middleware
		return (
			<Server>

				<StaticContentRouter {...this.props} dir='public' hasPrefix={true} />

				<APIRoute {...this.props} method='POST' path='/api/new' controller={this._apiRequestHandler} />

				<HeadLayout title='Hello Awesomeness' />
				{getRoutes(this.props.request, this.props.response)}

				<Logger {...this.props} color={true} />

			</Server>
		);
	}
};
