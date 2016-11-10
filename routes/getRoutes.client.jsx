
import { HistoryAPI } from 'plasmajs/router/Router.jsx';

import getRoutes from './routes.jsx';

export default props => getRoutes(new HistoryAPI());
