import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import ThemeSwitch from '../../components/theme-switch';
import { Box, Container, Option, Select, Stack, Typography } from '@mui/joy';

/**
 * Root layout which contains a navbar and a container for content with a synchronized max view
 */
const RootLayout = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const handleModeChange = (_event: any, newValue: string | null) => {
		navigate(newValue === 'single' ? '/' : '/multi-view');
	};

	return (
		<Box>
			<Box
				component="header"
				sx={(theme) => ({
					backdropFilter: 'blur(6px)',
					backgroundColor: theme.palette.background.backdrop,
					position: 'sticky',
					top: 0,
					width: {
						lg: `calc(100%)`,
					},
					zIndex: 100,
				})}
			>
				<Container maxWidth="lg">
					<Stack
						direction="row"
						justifyContent="space-between"
						alignItems="center"
						py={1}
					>
						<Typography level="h2">TV 20</Typography>
						<Stack
							direction="row"
							justifyContent="flex-end"
							alignItems="center"
							gap={1}
						>
							<Select
								value={
									location.pathname.includes('multi-view') ? 'multi' : 'single'
								}
								onChange={handleModeChange}
								sx={{ width: '140px' }}
							>
								<Option value="single">Single view</Option>
								<Option value="multi">Multi view</Option>
							</Select>
							<ThemeSwitch />
						</Stack>
					</Stack>
				</Container>
			</Box>
			<Container maxWidth="lg">
				<Box py={2}>
					<Outlet />
				</Box>
			</Container>
		</Box>
	);
};

export default RootLayout;
