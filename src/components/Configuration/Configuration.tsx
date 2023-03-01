import React from 'react';
import { useDarkMode } from '@/customHooks/useDarkMode';

function Configuration() {
	const [theme, themeToggler] = useDarkMode();

	return (
		<section>
			<button onClick={themeToggler}>Test</button>
		</section>
	);
}

export default Configuration;
