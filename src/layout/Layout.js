import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Sidebar from './sidebar/Sidebar';
import Header from './header/Header';
import { Main } from './LayoutStyles';

function Layout({ children, isLoggedIn = true }) {
	const router = useRouter();
	// TODO: Handle redirect if user not logged in.
	useEffect(() => {
		if (!isLoggedIn) {
			router.push('/');
		}
	}, [isLoggedIn]);

	return (
		<>
			<Header />
			<Sidebar />
			<Main>{children}</Main>
		</>
	);
}

export default Layout;
