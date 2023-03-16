import React, { useState } from 'react';
import {
	Section,
	Menu,
	StyledLink,
	Div1,
	LogoutButton,
	Background,
} from './MobileMenuStyles';
import { Divide as Hamburger } from 'hamburger-react';
import { useRouter } from 'next/router';

// Avatar Image
import Image from 'next/image';
import TempImage from '../../../public/profile_pic.png';
import { Avatar } from '../Header/HeaderStyles';

function MobileMenu() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const router = useRouter();
	return (
		<Section>
			{/* <Avatar href='/settings'>
				<Image
					src={TempImage}
					alt='Avatar'
				/>
			</Avatar> */}
			<Div1>
				{isMenuOpen ? (
					<>
						<Background
							// role='button'
							// id='menu'
							onClick={() => {
								setIsMenuOpen(false);
							}}
						/>
						<Hamburger
							label='menu'
							toggled={isMenuOpen}
							toggle={() => setIsMenuOpen((prevState) => !prevState)}
						/>

						<Menu>
							<StyledLink
								href='/dashboard'
								route={router.asPath === '/dashboard'}>
								Dashboard
							</StyledLink>
							{/* <StyledLink
								href='/pay'
								route={router.asPath === '/pay'}>
								Pay
							</StyledLink>
							<StyledLink
								href='/benefits'
								route={router.asPath === '/benefits'}>
								Benefits
							</StyledLink> */}
							<StyledLink
								href='/timesheet'
								route={router.asPath === '/timesheet'}>
								Timesheet
							</StyledLink>
							<StyledLink
								href='/settings'
								route={router.asPath === '/settings'}>
								Settings
							</StyledLink>
							{/* TODO: Logout the functionality */}
							<LogoutButton onChange={() => {}}>Sign Out</LogoutButton>
						</Menu>
					</>
				) : (
					<Hamburger
						label='menu'
						toggled={isMenuOpen}
						toggle={() => setIsMenuOpen((prevState) => !prevState)}
					/>
				)}
			</Div1>
		</Section>
	);
}

export default MobileMenu;
