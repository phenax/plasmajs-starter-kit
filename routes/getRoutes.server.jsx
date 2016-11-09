
import { NodeHistoryAPI } from 'plasmajs';

import getRoutes from './routes.jsx';
import { BodyLayout } from '../layouts/WrapperLayouts.jsx';

export default (req, res) => getRoutes(new NodeHistoryAPI(req, res), BodyLayout);
