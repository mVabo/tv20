import { Switch, Typography, useColorScheme } from '@mui/joy';

/**
 * A simple switch for toggling between light and dark mode
 */
const ThemeSwitch = () => {
	const { mode, setMode } = useColorScheme();

	const handleChange = (dark: boolean) => {
		setMode(dark ? 'dark' : 'light');
	};

	return (
		<Switch
			slotProps={{
				input: { 'aria-label': 'Dark mode' },
				thumb: {
					children:
						mode === 'light' ? (
							<Typography>⛅</Typography>
						) : (
							<Typography>🌑</Typography>
						),
				},
			}}
			checked={mode === 'dark'}
			onChange={(event) => handleChange(event.target.checked)}
			sx={{
				'--Switch-thumbSize': '28px',
			}}
		/>
	);
};

export default ThemeSwitch;
