import styled from 'styled-components';

export const TimeCardContainer = styled.article`
	display: flex;
	flex-direction: column;
	gap: 27px;
	align-items: center;
`;

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 27px;
`;

export const FieldTitle = styled.h3`
	color: ${(props) => props.theme.colors.text_secondary};
	width: 145px;
	height: 32px;
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
`;

export const DOTW = styled.p`
	width: 140px;
	display: flex;
	justify-content: center;
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	text-align: center;
`;

export const Field = styled.input`
	width: 140px;
	outline: none;
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	text-align: center;
`;

export const Table = styled.div`
	display: flex;
	flex-direction: row;
	height: 270px;
	margin-top: 10px;
`;

export const Col = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 145px;
	height: 100%;
`;

export const VerticalSeparator = styled.div`
	height: 100%;
	width: 1px;
	margin: 10px 0;
	border: 0.5px solid ${(props) => props.theme.colors.text_secondary};
`;

export const Date = styled.select`
	appearance: none;
	outline: none;
	text-align-last: center;
	padding: 5px;
	justify-content: center;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 16px;
	color: ${(props) => props.theme.colors.text_primary};
	border: 1px solid ${(props) => props.theme.colors.text_secondary};
	border-radius: 3px;
	&:active {
		border-color: none;
	}
`;
