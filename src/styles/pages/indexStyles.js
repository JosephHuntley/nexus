import styled from 'styled-components';

export const Main = styled.main`
	height: 100%;
	width: 100%;
`;

export const LeftSide = styled.section`
	background-color: ${(props) => props.theme.colors.bg_primary};
	height: 100vh;
	width: 50vw;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	padding: 0 77px;
`;
export const Text = styled.h1`
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 800;
	font-size: 40px;
	line-height: 60px;
	display: flex;
	align-items: center;
	text-align: center;
	color: #ffffff;
	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
