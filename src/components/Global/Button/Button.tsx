import React from 'react';
import { MainButton } from './ButtonStyles';

type ButtonType = {
	click?: any; // Should be function
	children: React.ReactNode;
	alt?: boolean;
};

function Button({ click = () => {}, alt = false, children }: ButtonType) {
	return (
		<MainButton
			onClick={click}
			alt={alt}>
			{children}
		</MainButton>
	);
}

export default Button;
