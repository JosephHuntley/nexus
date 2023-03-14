import styled from 'styled-components';

export const TimeCardContainer = styled.article`
	display: flex;
	flex-direction: column;
	gap: 2.7rem;
	align-items: center;
`;

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 2.7rem;

	@media ${(props) => props.theme.breakpoints.phone} {
		flex-direction: column;
	}
`;

export const FieldTitle = styled.h3`
	color: ${(props) => props.theme.colors.text_secondary};
	width: 50%;
	height: 3.2rem;
	font-weight: 400;
	font-size: 1.6rem;
	display: inline-flex;
	align-items: center;
	justify-content: center;

	@media ${(props) => props.theme.breakpoints.tablet} {
		font-size: 3rem;
	}
	@media ${(props) => props.theme.breakpoints.tablet} {
		font-size: 2.3rem;
	}
`;

export const DOTW = styled.p`
	display: flex;
	justify-content: center;
	font-size: 1.6rem;
	text-align: center;
	@media ${(props) => props.theme.breakpoints.tablet} {
		font-size: 3rem;
	}
`;

export const Field = styled.input`
	background: transparent;
	color: ${(props) => props.theme.colors.text_primary};
	outline: none;
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.6rem;
	text-align: center;

	@media ${(props) => props.theme.breakpoints.tablet} {
		font-size: 3rem;
	}
`;

export const Table = styled.div`
	display: flex;
	flex-direction: row;
	height: 80%;
	margin-top: 10px;
	@media ${(props) => props.theme.breakpoints.tablet} {
		height: 90%;
	}
`;

export const Col = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 50%;
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
	font-weight: 400;
	font-size: 1.6rem;
	color: ${(props) => props.theme.colors.text_primary};
	background: transparent;
	border: 1px solid ${(props) => props.theme.colors.text_secondary};
	border-radius: 3px;
	&:active {
		border-color: none;
	}

	@media ${(props) => props.theme.breakpoints.tablet} {
		font-size: 2.8rem;
	}
`;
