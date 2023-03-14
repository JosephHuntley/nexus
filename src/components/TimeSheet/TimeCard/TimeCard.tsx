import React, { useState } from 'react';
import {
	TimeCardContainer,
	ButtonContainer,
	FieldTitle,
	Field,
	VerticalSeparator,
	Col,
	Date,
	Table,
	DOTW,
} from './TimeCardStyles';
import Button from '@/components/Button/Button';
import Box from '@/components/Box/Box';
import { InnerBox, Separator } from '@/styles/globals';

const tempData = [
	{
		startDate: '1/1/2023',
		endDate: '1/7/2023',
	},
	{
		startDate: '1/8/2023',
		endDate: '1/14/2023',
	},
	{
		startDate: '1/15/2023',
		endDate: '1/21/2023',
	},
	{
		startDate: '1/22/2023',
		endDate: '1/29/2023',
	},
];

function TimeCard() {
	const [date, setDate] = useState(
		`${tempData[0].startDate} - ${tempData[0].endDate}`
	);
	const [hoursWorked, setHoursWorked] = useState({
		Monday: '0',
		Tuesday: '0',
		Wednesday: '0',
		Thursday: '0',
		Friday: '0',
		Saturday: '0',
		Sunday: '0',
	});
	// TODO: Update DB
	const saveEntries = () => {
		console.log('Saved Entries');
		console.log(hoursWorked);
	};
	const submitEntries = () => {
		console.log('Submit Entries');
		console.log(hoursWorked);
	};

	return (
		<TimeCardContainer>
			<Date
				value={date}
				onChange={(e) => setDate(e.target.value)}>
				{tempData.map((date) => {
					return (
						<option key={date.startDate}>
							{date.startDate} - {date.endDate}
						</option>
					);
				})}
			</Date>
			<Box
				height='32.9rem'
				width='29.2rem'
				md_height='60vh'
				md_width='60vw'
				sm_height='60vh'
				sm_width='90vw'>
				<FieldTitle>Date</FieldTitle>
				<FieldTitle>Hours Worked</FieldTitle>
				<Separator />
				<Table>
					<Col>
						<DOTW>Monday</DOTW>
						<DOTW>Tuesday</DOTW>
						<DOTW>Wednesday</DOTW>
						<DOTW>Thursday</DOTW>
						<DOTW>Friday</DOTW>
						<DOTW>Saturday</DOTW>
						<DOTW>Sunday</DOTW>
					</Col>
					<VerticalSeparator />
					<Col>
						<Field
							required
							type='text'
							value={hoursWorked.Monday}
							onChange={(e) =>
								setHoursWorked({
									...hoursWorked,
									Monday: e.target.value,
								})
							}
						/>
						<Field
							required
							type='text'
							value={hoursWorked.Tuesday}
							onChange={(e) =>
								setHoursWorked({
									...hoursWorked,
									Tuesday: e.target.value,
								})
							}
						/>
						<Field
							required
							type='text'
							value={hoursWorked.Wednesday}
							onChange={(e) =>
								setHoursWorked({
									...hoursWorked,
									Wednesday: e.target.value,
								})
							}
						/>
						<Field
							required
							type='text'
							value={hoursWorked.Thursday}
							onChange={(e) =>
								setHoursWorked({
									...hoursWorked,
									Thursday: e.target.value,
								})
							}
						/>
						<Field
							required
							type='text'
							value={hoursWorked.Friday}
							onChange={(e) =>
								setHoursWorked({
									...hoursWorked,
									Friday: e.target.value,
								})
							}
						/>
						<Field
							required
							type='text'
							value={hoursWorked.Saturday}
							onChange={(e) =>
								setHoursWorked({
									...hoursWorked,
									Saturday: e.target.value,
								})
							}
						/>
						<Field
							type='text'
							value={hoursWorked.Sunday}
							onChange={(e) =>
								setHoursWorked({
									...hoursWorked,
									Sunday: e.target.value,
								})
							}
						/>
					</Col>
				</Table>
			</Box>
			<ButtonContainer>
				<Button click={saveEntries}>Save</Button>
				<Button click={submitEntries}>Submit</Button>
			</ButtonContainer>
		</TimeCardContainer>
	);
}

export default TimeCard;
