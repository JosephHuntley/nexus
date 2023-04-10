import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
`;

export const LogoImg = styled.div`
	border: 10px solid #ffffff;
	width: 44px;
	height: 38px;
	margin-right: 16px;

	@media ${props => props.theme.breakpoints.xl} {
		border: 12px solid #fff;
		width: 5.5rem;
		height: 5.5rem;
	}
`;

export const LogoText = styled.h1`
	background: linear-gradient(
		90deg,
		rgba(204, 204, 204, 1) 0%,
		rgba(255, 255, 255, 1) 100%
	);
	width: max-content;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-size: 2.6rem;
	font-weight: bold;

	@media ${props => props.theme.breakpoints.xl} {
		font-size: 4rem;
	}
`;
