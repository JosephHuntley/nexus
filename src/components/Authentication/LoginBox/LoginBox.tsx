import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Title, Label, Field, Input } from './LoginBoxStyles';
import Box from '@/components/Global/Box/Box';
import { InnerBox } from '@/styles/globals';
import Button from '@/components/Global/Button/Button';

const LoginBox = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const router = useRouter();

	return (
		<>
			<Title>Login</Title>
			<Box
				radius='10px'
				width='40vw'
				height='335px'
				md_height='335px'
				md_width='80vw'>
				<InnerBox
					direction='column'
					height='100%'
					gap='50px'
					md_gap='25px'>
					<Field>
						<Label htmlFor='username'>Username:</Label>
						<Input
							type='email'
							name='username'
							value={username}
							onChange={(e) => setUsername(e.target.value)}></Input>
					</Field>
					<Field>
						<Label htmlFor='password'>Password:</Label>
						<Input
							type='password'
							name='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}></Input>
					</Field>
					<Button
						click={() => {
							// TODO: Validate username and password
							// TODO: set cookie isLoggedIn
							router.push('/dashboard');
						}}>
						Submit
					</Button>
				</InnerBox>
			</Box>
		</>
	);
};

export default LoginBox;
