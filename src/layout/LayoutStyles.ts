import styled from 'styled-components';

export const Main = styled.main`
	padding-top: 96px;
	padding-left: 20vw;
	padding-bottom: 30px;
	min-height: 100vh;

	@media ${(props) => props.theme.breakpoints.tablet} {
		padding-left: 0px;
		width: 100vw;
	}
`;

export const LoaderContainer = styled.div`
	width: 100%;
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;
`;
