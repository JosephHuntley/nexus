import React, { useEffect, ReactNode, useState } from 'react';
import { useRouter } from 'next/router';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import { Main } from './LayoutStyles';
import useWindowSize from '@/customHooks/useWindowSize';
import MobileMenu from './MobileMenu/MobileMenu';
import Footer from './Footer/Footer';

type props = {
	children: ReactNode;
};

function Layout({ children }: props) {
	const [isMenu, setIsMenu] = useState(false);
	const router = useRouter();
	const windowSize = useWindowSize();

	useEffect(() => {
		setIsMenu(windowSize.width <= 1124);
	}, [windowSize]);

	let isLoggedIn = true;
	// TODO: Handle redirect if user not logged in.
	useEffect(() => {
		if (!isLoggedIn) {
			router.push('/');
		}
	}, [isLoggedIn]);

	return (
		<>
			{/* If the device is below the width it display a hamburger menu instead of  header and sidebar*/}
			{isMenu ? (
				<MobileMenu />
			) : (
				<>
					<Header />
					<Sidebar />
				</>
			)}

			<Main>{children}</Main>
			<Footer />
		</>
	);
}

export default Layout;
