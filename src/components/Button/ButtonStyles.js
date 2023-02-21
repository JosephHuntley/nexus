import styled from 'styled-components';

export const MainButton = styled.button`
	width: 125px;
	height: 29px;
	background-color: ${(props) => props.theme.colors.bg_primary};
	color: #fff;
	box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
	border-radius: 3px;
	border: none;
	cursor: pointer;
`;
