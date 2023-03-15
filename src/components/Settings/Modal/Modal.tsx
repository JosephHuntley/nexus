import React, { useState } from 'react';
import {
	Section,
	Center,
	ModalBox,
	ModalHeader,
	ModalContent,
	Password,
	FieldTitle,
} from './ModalStyles';
import Button from '@/components/Global/Button/Button';

type props = {
	setIsOpen: any;
	isOpen?: boolean;
	onClose?: () => {};
};

function Modal({ setIsOpen, isOpen, onClose }: props) {
	const [password1, setPassword1] = useState('');
	const [password2, setPassword2] = useState('');

	const handleSubmit = (e: Event) => {
		e.preventDefault();
		if (password1 === '') {
			alert('Please type a password');
		} else if (password1 != password2) {
			alert('Passwords do not match');
		}
		// TODO:Change Password in db
		else {
			console.log(password1);
			setPassword1('');
			setPassword2('');
			setIsOpen(false);
		}
	};
	return (
		<>
			<Section onClick={() => setIsOpen(false)} />
			<Center>
				<ModalBox>
					<ModalHeader>Change Password</ModalHeader>
					<ModalContent>
						<FieldTitle>Password:</FieldTitle>
						<Password
							type='password'
							value={password1}
							onChange={(e) => setPassword1(e.target.value)}
						/>
						<FieldTitle>Confirm Password:</FieldTitle>
						<Password
							type='password'
							value={password2}
							onChange={(e) => setPassword2(e.target.value)}
						/>
						<Button
							alt
							click={(e: Event) => handleSubmit(e)}>
							Submit
						</Button>
					</ModalContent>
				</ModalBox>
			</Center>
		</>
	);
}

export default Modal;
