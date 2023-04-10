import styled from 'styled-components';
import { BoxProps } from './Box';

export const Container = styled.div<BoxProps>`
	background: ${(props) => props.theme.colors.bg_white};
	border-radius: ${(props) => props.radius || '16px'};
	overflow: auto;
	white-space: nowrap;
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	/* First checks if there should be a box shadow. Then checks if dark mode is enabled */
	
	box-shadow: ${(props) =>
		props.isShadow
			? props.theme.colors.bg_white === '#fff'
				? '0px 8px 8px rgba(0, 0, 0, .2)'
				: 'none'
			: 'none'};
			

	@media ${(props) => props.theme.breakpoints.tablet} {
		width: ${(props) => props.md_width};
		height: ${(props) => props.md_height};
	}

	@media ${(props) => props.theme.breakpoints.phone} {
		width: ${(props) => props.sm_width};
		height: ${(props) => props.sm_height};
	}
	@media ${props => props.theme.breakpoints.xl} {
		width: ${(props) => props.xl_width};
		height: ${(props) => props.xl_height};
	}
`;
