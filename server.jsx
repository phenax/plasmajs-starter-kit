import React from 'react';

import {
	Server,
	APIRoute,
	Logger,
	StaticContentRouter
} from 'plasmajs';


import AllRoutes from './routes/getRoutes.server.jsx';
import { HeadLayout } from './layouts/WrapperLayouts.jsx';


// The app component
export default class App extends React.Component {

	// To specify the port name to run the program on
	// (NOTE: You can also do an App.port= 8080)
	static get port() { return 8080; }


	constructor(p) {
		super(p);

		this._apiRequestHandler= this._apiRequestHandler.bind(this);
	}

	// API request handler for api routes
	_apiRequestHandler() {

		// Some expensive promise that takes 400ms to resolve
		return new Promise((resolve, reject) => {

			setTimeout(() => {

				const { method, url }= this.props.request;

				resolve({ method, url });
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

				<StaticContentRouter {...this.props} dir='public' hasPrefix={true} compress={true} />

				<APIRoute {...this.props} method='GET' path='/api/new' controller={this._apiRequestHandler} />
				<APIRoute {...this.props} method='POST' path='/api/new' controller={this._apiRequestHandler} />

				<HeadLayout title='Hello Awesomeness' />
				
				<AllRoutes {...this.props} />

				<Logger {...this.props} color={true} />

			</Server>
		);
	}
};
