import styled from 'styled-components';

export const Main = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 20px;
`;

export const SideMenu = styled.section`
	display: flex;
	flex-direction: column;
	width: 29vw;
	height: 100%;
	margin: 20px 0;
`;

export const MenuItem = styled.div`
	background-color: ${(props) =>
		props.isWhite ? props.theme.colors.bg_white : 'inherit'};
	width: 100%;
	height: 60px;
	color: ${(props) => props.theme.colors.text_secondary};
	font-weight: 700;
	font-size: 26px;
	line-height: 39px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	&:hover {
		background-color: ${(props) => props.theme.colors.bg_white};
	}
`;
export const Separator = styled.div`
	border: 0.5px solid ${(props) => props.theme.colors.side_links};
`;
export const HorizontalSeparator = styled.div`
	border: 0.5px solid ${(props) => props.theme.colors.side_links};
	width: 0.5px;
	margin: 0 10px;
	min-height: 10px;
	height: 80vh;
`;

export const Section = styled.section`
	margin-left: 50px;
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	gap: 20px;
`;
