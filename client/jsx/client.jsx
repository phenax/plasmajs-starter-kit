import React from 'react';
import {render} from 'react-dom';

import AllRoutes from '../../routes/getRoutes.client.jsx';

render(
	<AllRoutes />,
	document.getElementById('mainApp')
);

