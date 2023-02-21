import React from 'react';
import Head from 'next/head';
import Layout from '@/layout/Layout';
import Box from '@/components/Box/Box';
import { HiOutlineSun } from 'react-icons/hi';
import { MdOutlineHolidayVillage } from 'react-icons/md';
import {
	TitleContainer,
	Container,
	VacationContainer,
	BoxContainer,
	VacationTitle,
	VacationIcon,
	VacationText,
	VacationSubtitle,
} from '@/styles/pages/TimesheetStyles';
import { Separator, Title } from '@/styles/globals';
import RequestForm from '@/components/TimeSheet/RequestForm/RequestForm';
import TimeCard from '@/components/TimeSheet/TimeCard/TimeCard';

function Timesheet() {
	return (
		<>
			<Head>
				<title>Timesheet</title>
				<meta
					name='description'
					content='HRIS Nexus Timesheet'
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
					<Title>Time Sheet</Title>
				</TitleContainer>
				<Container>
					<TimeCard />
					<VacationContainer>
						<Box
							height='188px'
							width='188px'
							radius='20px'>
							<VacationTitle>Vacation Leave</VacationTitle>
							<Separator />
							<VacationIcon className=''>
								<HiOutlineSun />
							</VacationIcon>
							{/* TODO: Change Static number to dynamic value */}
							<BoxContainer>
								<Box
									width='76px'
									height='38px'
									radius='3px'>
									<VacationSubtitle>107HR 43MIN</VacationSubtitle>
									<VacationText>Available</VacationText>
								</Box>
								<Box
									width='76px'
									height='38px'
									radius='3px'>
									<VacationSubtitle>0HR 0MIN</VacationSubtitle>
									<VacationText>Avail</VacationText>
								</Box>
							</BoxContainer>
						</Box>
						<Box
							height='188px'
							width='188px'
							radius='20px'>
							<VacationTitle>Floating Holiday</VacationTitle>
							<Separator />
							<VacationIcon className=''>
								<MdOutlineHolidayVillage />
							</VacationIcon>
							<BoxContainer>
								<Box
									width='76px'
									height='38px'
									radius='3px'>
									<VacationSubtitle>16HR 0MIN</VacationSubtitle>
									<VacationText>Available</VacationText>
								</Box>
								<Box
									width='76px'
									height='38px'
									radius='3px'>
									<VacationSubtitle>17HR 0MIN</VacationSubtitle>
									<VacationText>Avail</VacationText>
								</Box>
							</BoxContainer>
						</Box>
					</VacationContainer>
					<RequestForm />
				</Container>
			</Layout>
		</>
	);
}

export default Timesheet;
