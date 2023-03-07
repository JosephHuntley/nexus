import styled from 'styled-components';
export const RequestContainer = styled.form`
	display: flex;
	flex-direction: column;
	gap: 24px;
	align-items: center;
`;

export const RequestTitle = styled.div`
	color: ${(props) => props.theme.colors.text_primary};
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 60px;
`;

export const RequestSubtitle = styled.div`
	color: ${(props) => props.theme.colors.text_primary};
	height: 100%;
	width: 50%;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

export const RequestDate = styled.input`
	width: 100px;
	height: 32px;
	padding: 5px;
	justify-content: center;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 11px;
	line-height: 16px;
	background: transparent;
	color: ${(props) => props.theme.colors.text_primary};
	border: 1px solid ${(props) => props.theme.colors.text_secondary};
	border-radius: 3px;
`;

export const RequestType = styled.select`
	appearance: none;
	outline: none;
	background-color: transparent;
	text-align-last: center;
	width: 100%;
	height: 100%;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 11px;
	line-height: 16px;
	color: ${(props) => props.theme.colors.text_primary};
	border: 1px solid ${(props) => props.theme.colors.text_secondary};
	border-radius: 3px;
	padding: 5px;
	width: 100px;
	height: 32px;
`;
