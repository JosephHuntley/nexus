import React, { useEffect } from 'react';
import {
	Section,
	Links,
	StyledLink,
	Icon,
	LogoutButton,
} from './SidebarStyles';
import Logo from '../../components/Global/Logo/Logo';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { HiOutlineChartSquareBar } from 'react-icons/hi';
import { BiSpreadsheet } from 'react-icons/bi';
import { VscSettings } from 'react-icons/vsc';
import { IoExitOutline } from 'react-icons/io5';
import { useRouter } from 'next/router';

const Sidebar = () => {
	const router = useRouter();
	return (
		<Section>
			<div>
				<Logo />
				<Links>
					<StyledLink
						href='/dashboard'
						route={router.asPath === '/dashboard'}>
						<Icon className=''>
							<HiOutlineChartSquareBar />
						</Icon>
						Dashboard
					</StyledLink>
					{/* <StyledLink
						href='/pay'
						route={router.asPath === '/pay'}>
						<Icon className=''>
							<FaRegMoneyBillAlt />
						</Icon>
						Pay
					</StyledLink>
					<StyledLink
						href='/benefits'
						route={router.asPath === '/benefits'}>
						<Icon className=''>
							<AiOutlineHeart />
						</Icon>
						Benefits
					</StyledLink> */}
					<StyledLink
						href='/timesheet'
						route={router.asPath === '/timesheet'}>
						<Icon className=''>
							<BiSpreadsheet />
						</Icon>
						Timesheet
					</StyledLink>
				</Links>
			</div>
			{/* Settings */}
			<Links>
				<StyledLink
					href='/settings'
					route={router.asPath === '/settings'}>
					<Icon className=''>
						<VscSettings />
					</Icon>
					Settings
				</StyledLink>
				{/* Sign out button */}
				{/* TODO: Logout functionality */}
				<LogoutButton onChange={() => {}}>
					<Icon className=''>
						<IoExitOutline />
					</Icon>
					Sign Out
				</LogoutButton>
			</Links>
		</Section>
	);
};

export default Sidebar;
