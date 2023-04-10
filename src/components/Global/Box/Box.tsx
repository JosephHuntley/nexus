import React from 'react';
import { Container } from './BoxStyles';

export type BoxProps = {
	children?: React.ReactNode;
	width?: string;
	height?: string;
	isShadow?: boolean;
	radius?: string;
	md_width?: string;
	md_height?: string;
	sm_height?: string;
	sm_width?: string;
	xl_height?:string;
	xl_width?:string;
};

//TODO: Cleanup props

function Box({
	children,
	width = '328px',
	height = '237px',
	isShadow = true,
	radius,
	md_height = height,
	md_width = width,
	sm_height = md_height,
	sm_width = md_width,
	xl_height = height,
	xl_width = width
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
			sm_width={sm_width} xl_height={xl_height}
			xl_width={xl_width}
			>
			{children}
		</Container>
	);
}

export default Box;
