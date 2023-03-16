import styled from 'styled-components';

export const Main = styled.main`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: row;

	@media ${(props) => props.theme.breakpoints.tablet} {
		flex-direction: column;
	}
`;

export const LeftSide = styled.section`
	background-color: ${(props) => props.theme.colors.bg_primary};
	min-height: 100vh;
	width: 50vw;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 77px;

	@media ${(props) => props.theme.breakpoints.tablet} {
		width: 100vw;
		height: 90vh;
		padding: 0 45px;
	}
`;

export const RightSide = styled.section`
	background-color: ${(props) => props.theme.colors.bg_secondary};
	min-height: 100vh;
	width: 50vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	/* padding: 129px; */
	gap: 84px;

	@media ${(props) => props.theme.breakpoints.tablet} {
		width: 100vw;
		height: 90vh;
		padding: 0 45px;
	}
`;
