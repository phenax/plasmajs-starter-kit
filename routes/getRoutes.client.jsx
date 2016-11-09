
import { HistoryAPI } from 'plasmajs';

import getRoutes from './routes.jsx';

export default props => getRoutes(new HistoryAPI());
