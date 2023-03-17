import React from 'react';
import Box from '@/components/Global/Box/Box';
import {
	Div1,
	Field,
	InnerBox,
	Primary,
	Secondary,
	Separator,
	Statements,
	Title,
} from './PayStatementsStyles';
import Button from '@/components/Global/Button/Button';

type payProps = {
	id: number;
	date: string;
	net: number;
	gross: number;
	hours: number;
	taxes: number;
	deductions: number;
};

const PayStatements = () => {
	// TODO: Replace with data from db
	const pays: payProps[] = [
		{
			id: 0,
			date: 'Jan 28th, 2023',
			net: 1385.37,
			gross: 1720.0,
			hours: 80,
			taxes: 317.53,
			deductions: 17.2,
		},
		{
			id: 1,
			date: 'Jan 28th, 2023',
			net: 1385.37,
			gross: 1720.0,
			hours: 80,
			taxes: 317.53,
			deductions: 17.2,
		},
		{
			id: 2,
			date: 'Jan 28th, 2023',
			net: 1385.37,
			gross: 1720.0,
			hours: 80,
			taxes: 317.53,
			deductions: 17.2,
		},
		{
			id: 3,
			date: 'Jan 28th, 2023',
			net: 1385.37,
			gross: 1720.0,
			hours: 80,
			taxes: 317.53,
			deductions: 17.2,
		},
		{
			id: 4,
			date: 'Jan 28th, 2023',
			net: 1385.37,
			gross: 1720.0,
			hours: 80,
			taxes: 317.53,
			deductions: 17.2,
		},
		{
			id: 5,
			date: 'Jan 28th, 2023',
			net: 1385.37,
			gross: 1720.0,
			hours: 80,
			taxes: 317.53,
			deductions: 17.2,
		},
		{
			id: 6,
			date: 'Jan 28th, 2023',
			net: 1385.37,
			gross: 1720.0,
			hours: 80,
			taxes: 317.53,
			deductions: 17.2,
		},
		{
			id: 7,
			date: 'Jan 28th, 2023',
			net: 1385.37,
			gross: 1720.0,
			hours: 80,
			taxes: 317.53,
			deductions: 17.2,
		},
	];

	return (
		<Box
			height='55rem'
			width='65.6rem'
			md_height='60vh'
			md_width='95vw'
			sm_height='85vh'>
			<InnerBox>
				<Title>Previous Statements</Title>
				{pays.map((pay) => (
					<div key={pay.id}>
						<Separator />
						<Statements>
							<Div1>
								<div>
									<Primary>{pay.date}</Primary>
									<Field>
										<Secondary>Take Home</Secondary>
										<Primary>${pay.net}</Primary>
									</Field>
								</div>
								<Field>
									<Secondary>Hours</Secondary>
									<Primary>{pay.hours}</Primary>
								</Field>
								<Field>
									<Secondary>Gross</Secondary>
									<Primary>${pay.gross}</Primary>
								</Field>
							</Div1>
							<Button
								alt
								click={() => {
									alert(
										'This is just a demo site. In production a pdf copy of the pay stub would be downloaded.'
									);
								}}>
								View Statement
							</Button>
						</Statements>
					</div>
				))}
			</InnerBox>
		</Box>
	);
};

export default PayStatements;
