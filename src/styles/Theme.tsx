import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '@/customHooks/useDarkMode';

import lightTheme from '../themes/default';
import darkTheme from '../themes/darkMode';
import GlobalStyles from './globals';
import { ReactNode } from 'react';

export type theme = {
	theme: {
		fonts: {
			title: string;
			main: string;
		};
		colors: {
			bg_primary: string;
			bg_secondary: string;
			bg_white: string;
			text_primary: string;
			text_secondary: string;
			side_links: string;
		};
		breakpoints: {
			sm: string;
			md: string;
			lg: string;
			xl: string;
		};
	};
};

const Theme = ({ children }: { children: ReactNode }) => {
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
