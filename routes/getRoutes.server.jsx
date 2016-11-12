
import { NodeHistoryAPI } from 'plasmajs';

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
