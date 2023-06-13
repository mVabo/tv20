import { createBrowserRouter } from 'react-router-dom';
import LatestNews from './pages/latest-news';
import RootLayout from './layouts/root';
import { PortalProvider } from './contexts/portal-context';
import MultiView from './pages/multi-view';

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<PortalProvider>
				<RootLayout />
			</PortalProvider>
		),
		children: [
			{
				index: true,
				element: <LatestNews />,
			},
			{
				path: 'multi-view',
				element: <MultiView />,
			},
			{
				path: ':portalId',
				element: <LatestNews />,
			},
		],
	},
]);

export default router;
