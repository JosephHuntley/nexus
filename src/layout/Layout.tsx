import React, { useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';
import Sidebar from './sidebar/Sidebar';
import Header from './header/Header';
import { Main } from './LayoutStyles';

type props = {
	children: ReactNode;
	isLoggedIn: boolean;
};

function Layout({ children, isLoggedIn = true }: props) {
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
