import React from 'react';
import Sidebar from './sidebar/Sidebar';
import Header from './header/Header';
import { Main } from './LayoutStyles';

function Layout({ children }) {
	return (
		<>
			<Header />
			<Sidebar />
			<Main>{children}</Main>
		</>
	);
}

export default Layout;
