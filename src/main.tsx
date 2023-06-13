import 'simplebar-react/dist/simplebar.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { CssBaseline, CssVarsProvider, extendTheme } from '@mui/joy';

const theme = extendTheme({ cssVarPrefix: 'tv20' });

/**
 * Main for out app, wrapping our router/pages in all necessary providers
 */
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<CssVarsProvider
			defaultMode="system"
			theme={theme}
			modeStorageKey="tv20_identify-system-mode"
			disableNestedContext
		>
			<CssBaseline />
			<App />
		</CssVarsProvider>
	</React.StrictMode>
);
