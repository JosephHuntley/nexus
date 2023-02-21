import { useState } from 'react';
import Head from 'next/head';
import Layout from '../layout/Layout';
import { Text, Title, TitleSecondary } from '../styles/globals';
import {
	BoxContainer,
	InnerBox,
	Money,
	Div1,
	Eye,
	TitleContainer,
	NotificationContainer,
	Container,
} from '../styles/pages/DashboardStyles';
import Box from '@/components/Box/Box';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import NotificationsBox from '@/components/notificationsBox/NotificationsBox';

// {
// 	payStatements: {
// 		latest: {}
// 		prior: {}
// 		average: {}
// 	}
// }

type PayStatementsProps = {
	amount: string;
	date: string;
	hours: number;
};

const PayStatement = ({ amount, date, hours }: PayStatementsProps) => {
	const [isVisible, setIsVisible] = useState(false);
	return (
		<Box>
			<InnerBox>
				<TitleSecondary>Latest Pay Statement</TitleSecondary>
				<Div1>
					<Money>{isVisible ? amount : '$XXXX.XX'}</Money>
					<div
						onClick={() => {
							setIsVisible((prevState) => !prevState);
						}}>
						<Eye className=''>
							{isVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
						</Eye>
					</div>
				</Div1>
				<Text>{date}</Text>
				<Text>{hours} Hours Worked</Text>
			</InnerBox>
		</Box>
	);
};

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
						<PayStatement
							amount='$2500.00'
							date='Jan 27th, 2023'
							hours={80}
						/>
						<PayStatement
							amount='$1500.00'
							date='Jan 27th, 2023'
							hours={80}
						/>
						<PayStatement
							amount='$2000.00'
							date='Jan 27th, 2023'
							hours={80}
						/>
					</BoxContainer>
					<Title>Notifications</Title>
					<NotificationContainer>
						<NotificationsBox />
					</NotificationContainer>
				</Container>
			</Layout>
		</>
	);
}
