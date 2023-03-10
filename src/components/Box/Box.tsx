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
	sm_height?: string;
	sm_width?: string;
};

function Box({
	children,
	width = '328px',
	height = '237px',
	isShadow = true,
	radius = '40px',
	md_height = 'inherit',
	md_width = 'inherit',
	sm_height = 'inherit',
	sm_width = 'inherit',
}: BoxProps) {
	return (
		<Container
			width={width}
			height={height}
			isShadow={isShadow}
			radius={radius}
			md_height={md_height}
			md_width={md_width}
			sm_height={sm_height}
			sm_width={sm_width}>
			{children}
		</Container>
	);
}

export default Box;
