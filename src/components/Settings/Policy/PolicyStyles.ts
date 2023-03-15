import styled from 'styled-components';

export const PolicyText = styled.p`
	font-size: 1.6rem;
	color: ${(props) => props.theme.colors.text_primary};
	width: 30vw;
	text-align: center;

	@media ${(props) => props.theme.breakpoints.tablet} {
		width: 55vw;
		font-size: 3rem;
	}

	@media ${(props) => props.theme.breakpoints.phone} {
		width: 75vw;
		font-size: 2rem;
	}
`;

export const PolicyContent = styled.div`
	display: flex;
	width: 60vw;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	overflow: scroll;
	height: 65rem;
	scroll-behavior: smooth;

	@media ${(props) => props.theme.breakpoints.tablet} {
		height: 80vh;
		width: 60vw;
	}
	@media ${(props) => props.theme.breakpoints.phone} {
		width: 100%;
	}
`;

export const PolicyTitle = styled.h1`
	font-size: 3rem;
	color: ${(props) => props.theme.colors.text_secondary};

	@media ${(props) => props.theme.breakpoints.tablet} {
		font-size: 5rem;
	}
`;
