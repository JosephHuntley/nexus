import React, { useState } from 'react';
import Box from '@/components/Global/Box/Box';

import PayChart from './Chart/PayChart';
import {
	Chart,
	InnerBox,
	MiddleDiv,
	Date,
	Section,
	GreenCircle,
	Top,
	Row,
	BottomDiv,
	UpArrow,
	RedCircle,
	YellowCircle,
	DownArrow,
	Bottom,
	Secondary,
	Primary,
} from './LatestPayStyles';
import Button from '@/components/Global/Button/Button';

function LatestPay() {
	const [isOpen, setIsOpen] = useState([false, false, false]);

	return (
		<Box
			height='50rem'
			width='35rem'
			md_height='60vh'
			md_width='65vw'
			sm_width='85vw'
			sm_height='70vh'>
			<InnerBox>
				<Chart>
					<PayChart />
				</Chart>
				<MiddleDiv>
					<Date>January 28th, 2023</Date>
					<Button
						alt
						click={() => {
							alert(
								'This is just a demo site. In production a pdf copy of the pay stub would be downloaded.'
							);
						}}>
						View Statement
					</Button>
				</MiddleDiv>
				<BottomDiv>
					<Section>
						<Top>
							<Row>
								<GreenCircle />
								Take Home
							</Row>
							$1399.40
							{isOpen[0] === true ? (
								<DownArrow
									onClick={() => {
										setIsOpen([false, false, false]);
									}}
								/>
							) : (
								<UpArrow
									onClick={() => {
										setIsOpen([true, false, false]);
									}}
								/>
							)}
						</Top>
						{isOpen[0] === true ? (
							<Bottom>
								<div>
									<Secondary>Gross</Secondary>
									<Primary>1720.00</Primary>
								</div>
								<div>
									<Secondary>Take Home</Secondary>
									<Primary>$1385.27</Primary>
								</div>
								<div>
									<Secondary>Hours</Secondary>
									<Primary>80</Primary>
								</div>
							</Bottom>
						) : null}
					</Section>
					<Section>
						<Top>
							<Row>
								<RedCircle />
								Taxes
							</Row>
							$320.60
							{isOpen[1] === true ? (
								<DownArrow
									onClick={() => {
										setIsOpen([false, false, false]);
									}}
								/>
							) : (
								<UpArrow
									onClick={() => {
										setIsOpen([false, true, false]);
									}}
								/>
							)}
						</Top>
						{isOpen[1] === true ? (
							<Bottom>
								<div>
									<Secondary>Federal</Secondary>
									<Primary>$134.02</Primary>
								</div>
								<div>
									<Secondary>FICA</Secondary>
									<Primary>$106.64</Primary>
								</div>
								<div>
									<Secondary>Medicare</Secondary>
									<Primary>$24.94</Primary>
								</div>
								<div>
									<Secondary>State</Secondary>
									<Primary>$55.00</Primary>
								</div>
							</Bottom>
						) : null}
					</Section>
					<Section>
						<Top>
							<Row>
								<YellowCircle />
								Deductions
							</Row>
							$17.20
							{isOpen[2] === true ? (
								<DownArrow
									onClick={() => {
										setIsOpen([false, false, false]);
									}}
								/>
							) : (
								<UpArrow
									onClick={() => {
										setIsOpen([false, false, true]);
									}}
								/>
							)}
						</Top>
						{isOpen[2] === true ? (
							<Bottom>
								{/* Empty Divs are used to center the text */}
								<div></div>
								<div>
									<Secondary>401K</Secondary>
									<Primary>$17.20</Primary>
								</div>
								<div></div>
							</Bottom>
						) : null}
					</Section>
				</BottomDiv>
			</InnerBox>
		</Box>
	);
}

export default LatestPay;
