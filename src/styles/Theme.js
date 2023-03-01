import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '@/customHooks/useDarkMode';

import lightTheme from '../themes/default';
import darkTheme from '../themes/darkMode';
import GlobalStyles from './globals';

const Theme = ({ children }) => {
	const [theme, themeToggler] = useDarkMode();

	const themeMode = theme === 'light' ? lightTheme : darkTheme;
	return (
		<ThemeProvider theme={themeMode}>
			<GlobalStyles />
			{children}
		</ThemeProvider>
	);
};

export default Theme;
