import React from 'react';
import { Container } from './BoxStyles';

type BoxProps = {
	children?: React.ReactNode;
	width?: string;
	height?: string;
	isShadow?: boolean;
	radius?: string;
};

function Box({
	children,
	width = '328px',
	height = '237px',
	isShadow = true,
	radius = '40px',
}: BoxProps) {
	return (
		<Container
			width={width}
			height={height}
			isShadow={isShadow}
			radius={radius}>
			{children}
		</Container>
	);
}

export default Box;
