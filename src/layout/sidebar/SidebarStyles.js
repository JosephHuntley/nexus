import styled from 'styled-components';
import { IconContext } from 'react-icons';
import Link from 'next/link';
import Image from 'next/image';

export const Section = styled.section`
	background-color: ${(props) => props.theme.colors.bg_primary};
	width: 20vw;
	min-height: 600px;
	height: 100%;
	border-radius: 0 40px 40px 0;
	z-index: 10;
	position: absolute;
	padding-top: 64px;
	padding-bottom: 64px;
	padding-left: 86px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
export const Links = styled.div`
	margin-top: 74px;
	display: flex;
	flex-direction: column;
`;

export const StyledLink = styled(Link)`
	color: ${(props) =>
		props.route ? '#ffffff' : props.theme.colors.side_links};
	font-size: 16px;
	line-height: 24px;
	padding-top: 20px;
	padding-bottom: 20px;
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
	font-size: 16px;
	line-height: 24px;
	padding-top: 20px;
	padding-bottom: 20px;
	display: flex;
	background-color: transparent;
	border: transparent;
	&:hover {
		color: #ffffff;
		cursor: pointer;
	}
`;

const MyProvider = ({ className, children }) => (
	<IconContext.Provider value={{ className }}>{children}</IconContext.Provider>
);

export const Icon = styled(MyProvider)`
	width: 24px;
	height: 24px;
	margin-right: 17px;
	background-color: ${(props) => props.theme.colors.bg_primary};
	align-self: center;
`;
export const IconImg = styled(Image)`
	width: 24px;
	height: 24px;
	margin-right: 17px;
	background-color: ${(props) => props.theme.colors.bg_primary};
	align-self: center;
`;
