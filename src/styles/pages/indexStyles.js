import styled from 'styled-components';

export const Main = styled.main`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: row;
`;

export const LeftSide = styled.section`
	background-color: ${(props) => props.theme.colors.bg_primary};
	height: 100vh;
	width: 50vw;
	display: flex;
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
export const RightSide = styled.section`
	background-color: ${(props) => props.theme.colors.bg_secondary};
	height: 100vh;
	width: 50vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 129px;
	gap: 84px;
`;

export const Title = styled.h1`
	color: ${(props) => props.theme.colors.text_primary};
	font-weight: 600;
	font-size: 32px;
	line-height: 48px;
	display: flex;
	align-items: center;
	text-align: center;
`;

export const Field = styled.div`
	display: flex;
	flex-direction: row;
	gap: 30px;
`;

export const Label = styled.label`
	color: ${(props) => props.theme.colors.text_primary};
	font-weight: 600;
	font-size: 26px;
	line-height: 39px;
`;

export const Input = styled.input`
	width: 284px;
	height: 50px;
	font-size: 24px;
	padding: 0 10px;
	background: #ffffff;
	border: 1px solid ${(props) => props.theme.colors.text_secondary};
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 3px;
`;
