import styled from 'styled-components';
import Link from 'next/link';

export const Section = styled.header`
	width: 100%;
	height: 75px;
	position: absolute;
	background-color: ${(props) => props.theme.colors.bg_white};
	display: flex;
	justify-content: end;
	align-items: center;
	padding: 0 25px;
`;
export const Div1 = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;
export const Menu = styled.nav`
	background-color: ${(props) => props.theme.colors.bg_primary};
	position: fixed;
	z-index: 10;
	border-radius: 10px;
	padding: 3rem 6rem;
	display: flex;
	gap: 25px;
	flex-direction: column;
	margin-top: 50px;
	right: 25px;
	@media ${(props) => props.theme.breakpoints.phone} {
		width: 70vw;
		height: 70vh;
		right: 15vw;
		align-items: flex-start;
		justify-content: space-around;
	}
`;
export const StyledLink = styled(Link)<{ route: boolean }>`
	color: ${(props) =>
		props.route ? '#ffffff' : props.theme.colors.side_links};
	font-size: 32px;
	padding: 5px;

	&:active {
		background: linear-gradient(
			90deg,
			rgba(204, 204, 204, 1) 0%,
			rgba(255, 255, 255, 1) 100%
		);
		width: max-content;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	&:hover {
		background: linear-gradient(
			90deg,
			rgba(204, 204, 204, 1) 0%,
			rgba(255, 255, 255, 1) 100%
		);
		width: max-content;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
`;
export const LogoutButton = styled.button`
	color: ${(props) => props.theme.colors.side_links};
	font-size: 20px;
	line-height: 24px;
	padding-top: 20px;
	padding-bottom: 20px;
	display: flex;
	background-color: transparent;
	border: transparent;
	align-self: center;
	&:hover {
		color: #ffffff;
		cursor: pointer;
	}
`;

export const Background = styled.div`
	background-color: rgba(0, 0, 0, 0.2);
	width: 100vw;
	height: 100vh;
	z-index: 0;
	top: 0;
	left: 0;
	position: absolute;
`;
