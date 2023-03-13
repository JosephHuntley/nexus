import { ReactNode } from 'react';
import styled from 'styled-components';

export const MainButton = styled.button<{
	bg_white?: string;
}>`
	width: 8.6vw;
	height: 3.6vh;
	background-color: ${(props) => props.theme.colors.bg_primary};
	color: #fff;
	box-shadow: ${(props) =>
		props.theme.colors.bg_white === '#fff'
			? '0px 4px 4px rgba(0, 0, 0, 0.25)'
			: 'none'};
	border-radius: 3px;
	font-size: 1.6rem;
	border: none;
	cursor: pointer;
	@media ${(props) => props.theme.breakpoints.tablet} {
		width: 25rem;
		height: 6rem;
		font-size: 3rem;
	}
`;
