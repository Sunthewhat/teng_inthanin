import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Router } from './router.tsx';
import { ChakraProvider } from '@chakra-ui/react';

import '@fontsource-variable/noto-sans-thai';
import './main.css';

ReactDOM.createRoot(
	document.getElementById('root')!
).render(
	<React.StrictMode>
		<ChakraProvider>
			<RouterProvider router={Router} />
		</ChakraProvider>
	</React.StrictMode>
);
