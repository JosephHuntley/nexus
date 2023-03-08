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
`;
export const LogoText = styled.h1`
	color: ${(props) => props.theme.colors.side_links};
	font-size: 26px;
	font-weight: bold;
	line-height: 0px;
`;
