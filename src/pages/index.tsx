/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import Head from 'next/head';
import {
	Main,
	LeftSide,
	Text,
	RightSide,
	Title,
	Label,
	Field,
	Input,
} from '../styles/pages/indexStyles';
import Box from '@/components/Global/Box/Box';
import { InnerBox } from '@/styles/globals';
import Button from '@/components/Global/Button/Button';
import { useRouter } from 'next/router';

export default function Login() {
	const [text1, setText1] = useState('');
	const [text2, setText2] = useState('');
	const [text3, setText3] = useState('');
	const [text4, setText4] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const router = useRouter();

	const text = [
		'Welcome to',
		'Nexus    ',
		'The Innovative',
		'Human Resource Management System',
	];

	useEffect(() => {
		if (text[0] != text1) {
			setTimeout(() => setText1(text[0].slice(0, text1.length + 1)), 200);
		} else if (text[1] !== text2) {
			setTimeout(() => setText2(text[1].slice(0, text2.length + 1)), 200);
		} else if (text[2] !== text3) {
			setTimeout(() => setText3(text[2].slice(0, text3.length + 1)), 200);
		} else if (text[3] !== text4) {
			setTimeout(() => setText4(text[3].slice(0, text4.length + 1)), 200);
		}
	}, [text1, text2, text3, text4]);

	return (
		<>
			{/* Adds things to the head tag of the page */}
			<Head>
				<title>Login</title>
				<meta
					name='description'
					content='HRIS Nexus Authentication Page'
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
			<Main>
				<LeftSide>
					<Text>
						{text1}
						<br />
						{text2}
						<br />
						<br />
						{text3}
						<br />
						{text4}
					</Text>
				</LeftSide>
				<RightSide>
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
				</RightSide>
			</Main>
		</>
	);
}
