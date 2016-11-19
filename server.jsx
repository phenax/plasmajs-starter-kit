import React from 'react';
import { Server } from 'plasmajs';
import {
	Logger,
	ServiceWorker,
	StaticContentRouter
} from 'plasmajs/middlewares';

import AllApiRoutes from './routes/apiRoutes.jsx';
import AllPageRoutes from './routes/getRoutes.server.jsx';
import { HeadLayout } from './layouts/WrapperLayouts.jsx';

export default class App extends React.Component {

	static get port() { return 8080 }

	render() {
		return (
			<Server>
				<StaticContentRouter {...this.props} dir='public' hasPrefix={true} compress={true} />

				{AllApiRoutes(this.props)}

				<HeadLayout title='First PlasmaJS App'>
					{/*<ServiceWorker {...this.props} path='/sw.js'>

					</ServiceWorker>*/}
				</HeadLayout>

				{AllPageRoutes(this.props)}

				<Logger {...this.props} color />
			</Server>
		);
	}

	// Cluster configuration
	// static get cluster() {
	// 	return {
	// 		count: require('os').cpus().length,
	// 		master() { console.log('Master running') },
	// 		notMaster() { console.log('Slave running') }
	// 	}
	// }
}
