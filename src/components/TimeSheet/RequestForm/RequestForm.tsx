import React, { useState } from 'react';
import {
	RequestContainer,
	RequestTitle,
	RequestSubtitle,
	RequestDate,
	RequestType,
} from './RequestFormStyles';
import Box from '@/components/Global/Box/Box';
import { InnerBox, Separator } from '@/styles/globals';
import Button from '@/components/Global/Button/Button';

function RequestForm() {
	const [beginDate, setBeginDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [type, setType] = useState('Vacation Leave');

	// TODO: Handle Submission of data and value checks
	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log(beginDate);
		console.log(endDate);
		console.log(type);
		alert('Submitted Successfully');
	};

	return (
		<RequestContainer>
			<Box
				height='38.3rem'
				width='38.3rem'
				radius='20px'
				md_height='78rem'
				md_width='78rem'
				sm_height='90vw'
				sm_width='90vw'>
				<RequestTitle>Time Off Request</RequestTitle>
				<Separator />
				<InnerBox
					direction='column'
					gap='15px'
					height='83%'>
					<Box
						width='32.8rem'
						height='7.7rem'
						radius='3px'
						md_height='38rem'
						md_width='70rem'
						sm_height='24rem'
						sm_width='90%'>
						<InnerBox
							gap='none'
							direction='row'
							height='100%'>
							<RequestSubtitle>Begin Date</RequestSubtitle>
							<RequestDate
								type='date'
								id='beginDate'
								name='beginDate'
								value={beginDate}
								onChange={(e) => {
									setBeginDate(e.target.value);
								}}
							/>
						</InnerBox>
					</Box>
					<Box
						width='32.8rem'
						height='7.7rem'
						radius='3px'
						md_height='38rem'
						md_width='70rem'
						sm_height='24rem'
						sm_width='90%'>
						<InnerBox
							gap='none'
							direction='row'
							height='100%'>
							<RequestSubtitle>End Date</RequestSubtitle>
							<RequestDate
								type='date'
								id='endDate'
								name='endDate'
								value={endDate}
								onChange={(e) => {
									setEndDate(e.target.value);
								}}
							/>
						</InnerBox>
					</Box>
					<Box
						width='32.8rem'
						height='7.7rem'
						radius='3px'
						md_height='38rem'
						md_width='70rem'
						sm_height='24rem'
						sm_width='90%'>
						<InnerBox
							gap='none'
							direction='row'
							height='100%'>
							<RequestSubtitle>Type</RequestSubtitle>

							<RequestType
								id='type'
								name='type'
								value={type}
								onChange={(e) => {
									setType(e.target.value);
								}}>
								<option>Vacation Leave</option>
								<option>Floating Holiday</option>
							</RequestType>
						</InnerBox>
					</Box>
				</InnerBox>
			</Box>
			<Button click={handleSubmit}>Submit</Button>
		</RequestContainer>
	);
}

export default RequestForm;
