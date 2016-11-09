import React from 'react';
import {render} from 'react-dom';

import getRoutes from '../routes/getRoutes.client.jsx';

render(
	getRoutes(),
	document.getElementById('mainApp')
);
