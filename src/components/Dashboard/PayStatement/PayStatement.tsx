import { useState } from 'react';
import Box from '@/components/Global/Box/Box';
import { TitleSecondary, Text } from '@/styles/globals';

import { InnerBox, Div1, Money, Eye, InvisibleEye } from './PayStatementStyles';

// {
// 	payStatements: {
// 		latest: {}
// 		prior: {}
// 		average: {}
// 	}
// }

const PayStatement = () => {
	const [isVisible, setIsVisible] = useState([false, false, false]);

	return (
		<>
			<Box
				width='23vw'
				height='17vw'
				sm_width='75vw'
				sm_height='50vw'
				md_height='25vw'
				md_width='32.5vw'>
				<InnerBox>
					<TitleSecondary>Latest Pay Statement</TitleSecondary>
					<Div1>
						<Money>{isVisible[0] === true ? '$2500.00' : '$XXXX.XX'}</Money>

						{isVisible[0] === true ? (
							<InvisibleEye
								onClick={() => {
									setIsVisible([false, false, false]);
								}}
							/>
						) : (
							<Eye
								onClick={() => {
									setIsVisible([true, false, false]);
								}}
							/>
						)}
					</Div1>
					<Text>Jan 27th, 2023</Text>
					<Text>80 Hours Worked</Text>
				</InnerBox>
			</Box>
			<Box
				width='23vw'
				height='17vw'
				sm_width='75vw'
				sm_height='50vw'
				md_height='25vw'
				md_width='32.5vw'>
				<InnerBox>
					<TitleSecondary>Latest Pay Statement</TitleSecondary>
					<Div1>
						<Money>{isVisible[1] === true ? '$2500.00' : '$XXXX.XX'}</Money>

						{isVisible[1] === true ? (
							<InvisibleEye
								onClick={() => {
									setIsVisible([false, false, false]);
								}}
							/>
						) : (
							<Eye
								onClick={() => {
									setIsVisible([false, true, false]);
								}}
							/>
						)}
					</Div1>
					<Text>Jan 13th, 2023</Text>
					<Text>80 Hours Worked</Text>
				</InnerBox>
			</Box>
			<Box
				width='23vw'
				height='17vw'
				sm_width='75vw'
				sm_height='50vw'
				md_height='25vw'
				md_width='32.5vw'>
				<InnerBox>
					<TitleSecondary>Average Pay Statement</TitleSecondary>
					<Div1>
						<Money>{isVisible[2] === true ? '$2500.00' : '$XXXX.XX'}</Money>

						{isVisible[2] === true ? (
							<InvisibleEye
								onClick={() => {
									setIsVisible([false, false, false]);
								}}
							/>
						) : (
							<Eye
								onClick={() => {
									setIsVisible([false, false, true]);
								}}
							/>
						)}
					</Div1>
					<Text>2023</Text>
					<Text>80 Hours Worked</Text>
				</InnerBox>
			</Box>
		</>
	);
};

export default PayStatement;
