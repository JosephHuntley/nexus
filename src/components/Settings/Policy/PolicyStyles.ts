import styled from 'styled-components';

export const PolicyText = styled.p`
	font-size: 1.6rem;
	color: ${(props) => props.theme.colors.text_primary};
	width: 30vw;

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
`;

export const PolicyTitle = styled.h1`
	font-size: 3rem;
	color: ${(props) => props.theme.colors.text_secondary};
`;
