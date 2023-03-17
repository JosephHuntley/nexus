/* eslint-disable react-hooks/rules-of-hooks */
import Head from 'next/head';
import { Main, LeftSide, RightSide } from '../styles/pages/indexStyles';

// Right Side
import LoginBox from '../components/Authentication/LoginBox/LoginBox';
// Left Side
import TextMessage from '@/components/Authentication/TextMessage/TextMessage';
import Alert from '@/components/Global/Alert/Alert';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
	const route = useRouter();

	useEffect(() => {
		if (window.localStorage.getItem('isLoggedIn') === 'true') {
			route.push('/dashboard');
		}
	}, []);

	return (
		<>
			{/* Adds things to the head tag of the page */}
			<Head>
				<title>Login</title>
				<meta
					name='description'
					content='HRIS Nexus Authentication Page'
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
			<Main>
				<Alert open={true}>
					This site is still under development. To login, hit the login button
					without credentials.
				</Alert>
				<LeftSide>
					<TextMessage />
				</LeftSide>
				<RightSide>
					<LoginBox />
				</RightSide>
			</Main>
		</>
	);
}
