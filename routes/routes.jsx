import React from 'react';
import { Route, Router } from 'plasmajs';

import IndexLayout from '../layouts/IndexLayout.jsx';
import AboutLayout from '../layouts/AboutLayout.jsx';

export default (history, wrapper=null)=> (

	<Router history={history} wrapper={wrapper}>

		<Route path='/' component={IndexLayout} />
		<Route path='/about' component={AboutLayout} />

		<Route errorHandler={true} component={() => <div>Error</div>} />

	</Router>
);
