
import { HistoryAPI } from 'plasmajs';

import getRoutes from './routes.jsx';

export default () => getRoutes(new HistoryAPI());
