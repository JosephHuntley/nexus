import React, { ReactNode, useState } from 'react';
import { AlertBox, CloseButton } from './AlertStyles';

type props = {
	open: boolean;
	children: ReactNode;
};

function Alert({ open, children }: props) {
	const [isOpen, setIsOpen] = useState(open);

	return isOpen ? (
		<AlertBox>
			{children}
			<CloseButton onClick={() => setIsOpen(false)}>&times;</CloseButton>
		</AlertBox>
	) : null;
}

export default Alert;
