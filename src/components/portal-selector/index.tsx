import { usePortal } from '../../contexts/portal-context';
import SimpleBar from 'simplebar-react';
import { Box, Button, Stack, Typography, useColorScheme } from '@mui/joy';
import 'simplebar-react/dist/simplebar.min.css';
import './portal-scroll.css';
import { useNavigate } from 'react-router-dom';

/**
 * A portal selected for selecting portals in single view, currently only horizontal
 */
const PortalSelector = () => {
	const { portals } = usePortal();
	const { mode } = useColorScheme();
	const navigate = useNavigate();

	return (
		<Stack direction="column" gap={1}>
			<Typography level="h5">Tilgjengelige portaler</Typography>
			<SimpleBar>
				<Stack direction="row" alignItems="center" gap={1}>
					{portals?.map((portal) => (
						<Button
							key={portal.id}
							sx={{
								backgroundImage: `url(${
									portal.cover?.url || portal.background?.url || ''
								})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								backgroundRepeat: 'no-repeat',
								justifyContent: 'center',
								alignItems: 'center',
								p: '5rem',
								height: '5rem',
								aspectRatio: '3/2',
								':hover': {
									opacity: 0.7,
								},
							}}
							onClick={() => navigate(`/${portal.id}`)}
						>
							<Box
								sx={{
									backgroundColor:
										mode === 'dark'
											? 'rgba(0, 0, 0, .4)'
											: 'rgba(255, 255, 255, .6)',
									height: '100%',
									width: '100%',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									position: 'absolute',
									borderRadius: 8,
								}}
							>
								<Typography level="h4">{portal.name}</Typography>
							</Box>
						</Button>
					))}
				</Stack>
			</SimpleBar>
		</Stack>
	);
};

export default PortalSelector;
