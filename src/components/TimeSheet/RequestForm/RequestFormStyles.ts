import styled from 'styled-components';
export const RequestContainer = styled.form`
	display: flex;
	flex-direction: column;
	gap: 24px;
	align-items: center;
`;

export const RequestTitle = styled.div`
	color: ${(props) => props.theme.colors.text_primary};

	font-size: 1.6rem;

	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 6rem;

	@media ${(props) => props.theme.breakpoints.tablet} {
		font-size: 3rem;
	}
	@media ${(props) => props.theme.breakpoints.tablet} {
		font-size: 2.4rem;
		height: 5rem;
	}
`;

export const RequestSubtitle = styled.div`
	color: ${(props) => props.theme.colors.text_primary};
	height: 100%;
	width: 50%;

	font-size: 1.6rem;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;

	@media ${(props) => props.theme.breakpoints.tablet} {
		font-size: 3rem;
	}
	@media ${(props) => props.theme.breakpoints.tablet} {
		font-size: 2.4rem;
	}
`;

export const RequestDate = styled.input`
	width: 13rem;
	height: 3.2rem;
	padding: 0.5rem;
	justify-content: center;

	font-size: 1.6rem;
	background: transparent;
	color: ${(props) => props.theme.colors.text_primary};
	border: 1px solid ${(props) => props.theme.colors.text_secondary};
	border-radius: 3px;
	text-align: center;

	@media ${(props) => props.theme.breakpoints.tablet} {
		width: 25rem;
		height: 6rem;
		font-size: 3rem;
	}
	@media ${(props) => props.theme.breakpoints.tablet} {
		font-size: 2.4rem;
		width: 15rem;
		height: 4.5rem;
	}
`;

export const RequestType = styled.select`
	appearance: none;
	outline: none;
	background-color: transparent;
	text-align-last: center;
	width: 100%;
	height: 100%;

	font-size: 1.1rem;
	color: ${(props) => props.theme.colors.text_primary};
	border: 1px solid ${(props) => props.theme.colors.text_secondary};
	border-radius: 3px;
	padding: 0.5rem;
	width: 10rem;
	height: 3.2rem;

	@media ${(props) => props.theme.breakpoints.tablet} {
		width: 25rem;
		height: 6rem;
		font-size: 3rem;
	}
	@media ${(props) => props.theme.breakpoints.tablet} {
		font-size: 2rem;
		width: 15rem;
		height: 4.5rem;
	}
`;
