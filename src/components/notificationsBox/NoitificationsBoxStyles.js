import styled from 'styled-components';

export const InnerBox = styled.article`
	padding-left: 116px;
	padding-right: 116px;
	padding-top: 47px;
	padding-bottom: 47px;
	/* overflow: auto;
	white-space: nowrap; */
	width: 1032px;
	height: 274px;
	display: block;
`;

export const Notification = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 47px;
`;

export const NotificationTitle = styled.h3`
	color: ${(props) => props.theme.colors.text_primary};
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 27px;
`;

export const Div1 = styled.div`
	display: flex;
	flex-direction: row;
`;

export const Status = styled.p`
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 27px;
	color: ${(props) => props.theme.colors.text_secondary};
	margin-left: 37px;
	margin-right: 37px;
`;
