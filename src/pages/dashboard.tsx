import Head from 'next/head';
import Layout from '../layout/Layout';
import { Text, Title } from '../styles/globals';
import {
	BoxContainer,
	TitleContainer,
	NotificationContainer,
	Container,
	NotificationTitle,
} from '../styles/pages/DashboardStyles';

import PayStatement from '@/components/Dashboard/PayStatement/PayStatement';
import NotificationsBox from '@/components/Dashboard/NotificationsBox/NotificationsBox';

export default function Home() {
	return (
		<>
			{/* Adds things to the head tag of the page */}
			<Head>
				<title>Dashboard</title>
				<meta
					name='description'
					content='HRIS Nexus Dashboard'
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
				<TitleContainer>
					<Title>Dashboard</Title>
					{/* TODO: Change static name to user's name */}
					<Text>Welcome back, Joseph</Text>
				</TitleContainer>
				<Container>
					<BoxContainer>
						<PayStatement />
						{/* <PayStatement
							type='Latest'
							amount='$2500.00'
							date='Jan 27th, 2023'
							hours={80}
						/>
						<PayStatement
							type='Previous'
							amount='$1500.00'
							date='Jan 27th, 2023'
							hours={80}
						/>
						<PayStatement
							type='Average'
							amount='$2000.00'
							date='Jan 27th, 2023'
							hours={80}
						/> */}
					</BoxContainer>
					<NotificationTitle>
						<Title>Notifications</Title>
					</NotificationTitle>
					<NotificationContainer>
						<NotificationsBox />
					</NotificationContainer>
				</Container>
			</Layout>
		</>
	);
}
