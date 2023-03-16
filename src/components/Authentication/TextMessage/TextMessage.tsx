import React, { useState, useEffect } from 'react';
import { Text } from './TextMessageStyles';

const TextMessage = () => {
	const [text1, setText1] = useState('');
	const [text2, setText2] = useState('');
	const [text3, setText3] = useState('');
	const [text4, setText4] = useState('');

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
	);
};

export default TextMessage;
