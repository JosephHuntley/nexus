import React from 'react';
import { Container } from './BoxStyles';

type BoxProps = {
	children?: React.ReactNode;
	width?: string;
	height?: string;
	isShadow?: boolean;
	radius?: string;
	md_width?: string;
	md_height?: string;
};

function Box({
	children,
	width = '328px',
	height = '237px',
	isShadow = true,
	radius = '40px',
	md_height = 'inherit',
	md_width = '0px',
}: BoxProps) {
	return (
		<Container
			width={width}
			height={height}
			isShadow={isShadow}
			radius={radius}
			md_height={md_height}
			md_width={md_width}>
			{children}
		</Container>
	);
}

export default Box;
