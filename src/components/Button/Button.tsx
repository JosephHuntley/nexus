import React from 'react';
import { MainButton } from './ButtonStyles';

type ButtonType = {
	click?: any; // Should be function
	children: React.ReactNode;
};

function Button({ click = () => {}, children }: ButtonType) {
	return <MainButton onClick={click}>{children}</MainButton>;
}

export default Button;
