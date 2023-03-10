import styled from 'styled-components';
import Link from 'next/link';

export const Header = styled.header`
	width: 100%;
	height: 92px;
	position: absolute;
	background-color: ${(props) => props.theme.colors.bg_white};
`;
export const Container = styled.div`
	margin-top: 20px;
	position: absolute;
	right: 118px;
	display: flex;
	flex-direction: row;
`;

export const Avatar = styled(Link)`
	border-radius: 100%;
	width: 66px;
	height: 66px;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const UserInfo = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 17px;
	align-self: center;
`;

export const Name = styled.p`
	color: ${(props) => props.theme.colors.text_primary};
	font-size: 16px;
	line-height: 24px;
`;

export const Email = styled.p`
	color: ${(props) => props.theme.colors.text_secondary};
	font-size: 12px;
	line-height: 18px;
`;
