import React from 'react';
import Layout from '../layout/Layout';
import LatestPay from '@/components/Pay/LatestPay/LatestPay';
import PayStatements from '@/components/Pay/PayStatements/PayStatements';
import { Container, TitleContainer } from '@/styles/pages/PayStyles';
import { Title } from '@/styles/globals';
import Head from 'next/head';

function Pay() {
	return (
		<>
			<Head>
				<title>Pay Statements</title>
				<meta
					name='description'
					content='HRIS Nexus Pay Statements'
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
					<Title>Pay Statements</Title>
				</TitleContainer>
				<Container>
					<LatestPay />
					<PayStatements />
				</Container>
			</Layout>
		</>
	);
}

export default Pay;
