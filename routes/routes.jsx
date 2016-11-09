import React from 'react';
import { Route, Router } from 'plasmajs';

import IndexLayout from '../layouts/IndexLayout.jsx';


export default (history, wrapper=null)=> (

	<Router history={history} wrapper={wrapper}>

		<Route path='/' component={IndexLayout} />
		<Route path='/' method='POST' component={() => (<div>Post request made to the thingy</div>)} />

		<Route errorHandler={true} component={() => <div>Error</div>} />
	</Router>
);
