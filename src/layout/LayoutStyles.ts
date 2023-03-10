import styled from 'styled-components';

export const Main = styled.main`
	padding-top: 96px;
	padding-left: 280px;
	width: 80vw;

	@media ${(props) => props.theme.breakpoints.tablet} {
		padding-left: 0px;
		width: 100vw;
	}
`;
