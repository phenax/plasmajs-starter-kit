import React from 'react';
import {
	APIRoute
} from 'plasmajs';

export default (props) => {

	// API request handler for api routes
	function _apiCallHandler() {

		// Some expensive promise that takes 400ms to resolve
		return new Promise((resolve, reject) => {

			setTimeout(() => {

				const { method, url }= props.request;

				resolve({ method, url });
			}, 400);
		});
	}

	return [
		<APIRoute {...props} key={0} method='GET'  path='/api/get'  controller={_apiCallHandler} />,
		<APIRoute {...props} key={1} method='POST' path='/api/post' controller={_apiCallHandler} />
	]
};
