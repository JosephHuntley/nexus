import React, { useEffect, ReactNode, useState } from 'react';
import { useRouter } from 'next/router';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import { Main, LoaderContainer } from './LayoutStyles';
import useWindowSize from '@/customHooks/useWindowSize';
import MobileMenu from './MobileMenu/MobileMenu';
import Footer from './Footer/Footer';
import { RingLoader as Loader } from 'react-spinners';

type props = {
	children: ReactNode;
};

function Layout({ children }: props) {
	const [isMenu, setIsMenu] = useState(true);
	const [isLoadMain, setIsLoadMain] = useState(false);

	const router = useRouter();
	const windowSize = useWindowSize();

	useEffect(() => {
		setTimeout(async () => setIsLoadMain(true), 300);
	}, []);

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
			<Main>
				{isLoadMain ? (
					children
				) : (
					<LoaderContainer>
						<Loader color='#5a57FF' />
					</LoaderContainer>
				)}
			</Main>
			<Footer />
		</>
	);
}

export default Layout;
