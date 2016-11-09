import React from 'react';
import { Route, Router } from 'plasmajs';

import IndexLayout from '../layouts/IndexLayout.jsx';

// 
// Router(history=History API instantiation, wrapper= The content wrapper(or the body tag))
//   - Route(
//            path= The route path, 
//            component= Layout component, 
//            controller= The route controller(Function executed before rendering the component),
//            errorHandler= True for error handlers
//          )
//
export default (history, wrapper=null)=> (

	<Router history={history} wrapper={wrapper}>

		<Route path='/' component={IndexLayout} />
		<Route path='/' method='POST' component={() => (<div>Post request made to the thingy</div>)} />

		<Route errorHandler={true} component={() => <div>Error</div>} />
	</Router>
);
