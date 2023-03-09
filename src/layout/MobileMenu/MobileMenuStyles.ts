import styled from 'styled-components';
import Link from 'next/link';

export const Section = styled.header`
	width: 100%;
	height: 75px;
	position: absolute;
	background-color: ${(props) => props.theme.colors.bg_white};
	display: flex;
	justify-content: space-between;
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
		z-index: 0;
		align-items: flex-start;
		justify-content: space-around;
	}
`;
export const StyledLink = styled(Link)<{ route: boolean }>`
	color: ${(props) =>
		props.route ? '#ffffff' : props.theme.colors.side_links};
	font-size: 32px;
	line-height: 24px;
	padding: 5px;
	display: flex;
	&:active {
		color: #ffffff;
	}
	&:hover {
		color: #ffffff;
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
