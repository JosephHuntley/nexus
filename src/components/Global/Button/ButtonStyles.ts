import { ReactNode } from 'react';
import styled from 'styled-components';

export const MainButton = styled.button<{
	alt?: boolean;
}>`
	min-width: 8.6vw;
	height: 3.6vh;
	background-color: ${(props) =>
		props.alt
			? props.theme.colors.bg_secondary
			: props.theme.colors.bg_primary};
	color: ${(props) => (props.alt ? props.theme.colors.text_secondary : '#fff')};
	box-shadow: ${(props) =>
		props.theme.colors.bg_white === '#fff'
			? '0px 4px 4px rgba(0, 0, 0, 0.25)'
			: 'none'};
	border-radius: 3px;
	font-size: 1.6rem;
	border: ${(props) =>
		props.alt ? '.1rem solid ' + props.theme.colors.side_links : 'none'};
	cursor: pointer;
	padding: 0 2rem;

	@media ${(props) => props.theme.breakpoints.tablet} {
		min-width: 25rem;
		height: 6rem;
		font-size: 3rem;
	}
`;
