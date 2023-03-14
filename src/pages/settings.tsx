import Head from 'next/head';
import Layout from '@/layout/Layout';
import React, { useState } from 'react';
import {
	MenuItem,
	SideMenu,
	Separator,
	Main,
	HorizontalSeparator,
} from '../styles/pages/SettingsStyles';

// Components
import Configuration from '@/components/Settings/Configuration/Configuration';
import Profile from '../components/Settings/Profile/Profile';

function Settings() {
	const [isProfile, setIsProfile] = useState(true);
	const [isSettings, setIsSettings] = useState(false);
	const [isPolicy, setIsPolicy] = useState(false);
	return (
		<>
			<Head>
				<title>Settings</title>
				<meta
					name='description'
					content='HRIS Nexus Settings Page'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>
			<Layout>
				<Main>
					{/* Side Menu */}
					<SideMenu>
						<Separator />
						<MenuItem
							isWhite={isProfile}
							onClick={() => {
								setIsProfile(true);
								setIsSettings(false);
								setIsPolicy(false);
							}}>
							Profile
						</MenuItem>
						<Separator />
						<MenuItem
							isWhite={isSettings}
							onClick={() => {
								setIsProfile(false);
								setIsSettings(true);
								setIsPolicy(false);
							}}>
							Settings
						</MenuItem>
						<Separator />
						<MenuItem
							isWhite={isPolicy}
							onClick={() => {
								setIsProfile(false);
								setIsSettings(false);
								setIsPolicy(true);
							}}>
							Policy
						</MenuItem>
					</SideMenu>
					<HorizontalSeparator />
					{/* Settings page depended on the selected menu item */}
					{isProfile ? <Profile /> : null}
					{isSettings ? <Configuration /> : null}
					{isPolicy ? <div>Policy</div> : null}
				</Main>
			</Layout>
		</>
	);
}

export default Settings;
