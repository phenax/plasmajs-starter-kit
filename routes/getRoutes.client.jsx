
import { HistoryAPI } from 'plasmajs/router';

import getRoutes from './routes.jsx';

export default props => getRoutes(new HistoryAPI());
