import { ReactNode } from 'react';
import styled from 'styled-components';

export const MainButton = styled.button<{
	bg_white?: string;
}>`
	width: 125px;
	height: 29px;
	background-color: ${(props) => props.theme.colors.bg_primary};
	color: #fff;
	box-shadow: ${(props) =>
		props.theme.colors.bg_white === '#fff'
			? '0px 4px 4px rgba(0, 0, 0, 0.25)'
			: 'none'};
	border-radius: 3px;
	border: none;
	cursor: pointer;
`;
