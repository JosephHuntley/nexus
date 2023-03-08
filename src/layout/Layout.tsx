import React, { useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';
import Sidebar from './sidebar/Sidebar';
import Header from './header/Header';
import { Main } from './LayoutStyles';

type props = {
	children: ReactNode;
};

function Layout({ children }: props) {
	const router = useRouter();
	let isLoggedIn = true;
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
