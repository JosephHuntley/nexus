import styled from 'styled-components';

export const PolicyText = styled.p`
	font-size: 1.6rem;
	color: ${(props) => props.theme.colors.text_primary};
	width: 30vw;
	text-align: center;

	@media ${(props) => props.theme.breakpoints.tablet} {
		width: 65vw;
		font-size: 3rem;
	}

	@media ${(props) => props.theme.breakpoints.phone} {
		width: 75vw;
	}
`;

export const PolicyContent = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	overflow: scroll;
	height: 65rem;
	scroll-behavior: smooth;

	@media ${(props) => props.theme.breakpoints.tablet} {
		height: 80vh;
	}
`;

export const PolicyTitle = styled.h1`
	font-size: 3rem;
	color: ${(props) => props.theme.colors.text_secondary};

	@media ${(props) => props.theme.breakpoints.tablet} {
		font-size: 5rem;
	}
`;
