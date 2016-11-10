
import { NodeHistoryAPI } from 'plasmajs/router/Router.jsx';

import getRoutes from './routes.jsx';
import { BodyLayout } from '../layouts/WrapperLayouts.jsx';

export default 
	props => 
		getRoutes(
			new NodeHistoryAPI(
				props.request, 
				props.response
			), 
			BodyLayout
		);
