import React, { useState } from 'react';
import Image from 'next/image';
import { Section } from '@/styles/pages/SettingsStyles';
import Button from '@/components/Global/Button/Button';
import Modal from './Modal/Modal';
import TempImage from '../../../../public/profile_pic.png';
import {
	Img,
	Name,
	Div1,
	Div2,
	Div3,
	Icon,
	Separator,
	Line,
	Title,
	Text,
	Field,
	TextField,
} from './ProfileStyles';
import { RiPencilLine } from 'react-icons/ri';

function Profile() {
	const [isOpen, setIsOpen] = useState(false);
	const [isEditable, setIsEditable] = useState(false);
	// TODO: Set initial state as user data from db
	const [address, setAddress] = useState('526 Greystone Ave. Bangor, ME 04401');
	const [email, setEmail] = useState('Tanishq.Kumar@example.com');
	const [phone, setPhone] = useState('(810) 555-1101');

	const handleSubmit = () => {
		setIsEditable(false);
		// TODO: Submit data change to DB
	};

	return (
		<Section>
			{isOpen ? <Modal setIsOpen={setIsOpen} /> : null}
			{/* Avatar & Name */}
			<Div1>
				<Img
					src={TempImage}
					alt='Avatar'
				/>

				{/* TODO: Change name dynamically */}
				<Div2>
					<Name>Tanishq Kumar</Name>
					<Icon onClick={() => setIsEditable(true)}>
						<RiPencilLine />
					</Icon>
				</Div2>
			</Div1>
			{/* Horizontal Line */}
			<Separator />
			{/* Profile Info */}
			<Div3>
				{/* TODO: Change data dynamically  */}
				{isEditable ? (
					<>
						<Line>
							<Title>Address:</Title>
							<TextField
								value={address}
								onChange={(e) => {
									setAddress(e.target.value);
								}}
							/>
						</Line>
						<Line>
							<Title>Email:</Title>
							<Field
								type='email'
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
								}}
							/>
						</Line>
						<Line>
							<Title>Phone:</Title>
							<Field
								type='phone'
								value={phone}
								onChange={(e) => {
									setPhone(e.target.value);
								}}
							/>
						</Line>
						<Button
							alt
							click={() => handleSubmit()}>
							Submit
						</Button>
					</>
				) : (
					<>
						<Line>
							<Title>Address:</Title>
							<Text>{address}</Text>
						</Line>
						<Line>
							<Title>Email:</Title>
							<Text>{email}</Text>
						</Line>
						<Line>
							<Title>Phone:</Title>
							<Text>{phone}</Text>
						</Line>
					</>
				)}
				<Line>
					<Title>Pay Rate</Title>
					<Text>53.03/HR</Text>
				</Line>
				<Line>
					<Title>Title:</Title>
					<Text>UI Designer </Text>
				</Line>
			</Div3>
			{/* Button */}
			<Button
				alt={true}
				click={() => {
					setIsOpen(true);
				}}>
				Update Password
			</Button>
		</Section>
	);
}

export default Profile;
