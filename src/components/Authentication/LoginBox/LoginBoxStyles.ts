import styled from 'styled-components';

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

	@media ${(props) => props.theme.breakpoints.tablet} {
		flex-direction: column;
		gap: 10px;
	}
`;

export const Label = styled.label`
	color: ${(props) => props.theme.colors.text_primary};
	font-weight: 600;
	font-size: 26px;
	line-height: 39px;
	@media ${(props) => props.theme.breakpoints.tablet} {
		text-align: center;
	}
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

	@media ${(props) => props.theme.breakpoints.phone} {
		width: 225px;
	}
`;
