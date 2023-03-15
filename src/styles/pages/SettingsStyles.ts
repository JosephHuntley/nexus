import styled from 'styled-components';

export const Main = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 20px;

	@media ${(props) => props.theme.breakpoints.phone} {
		flex-direction: column;
	}
`;

export const SideMenu = styled.section`
	display: flex;
	flex-direction: column;
	width: 29vw;
	height: 100%;
	margin: 20px 0;

	@media ${(props) => props.theme.breakpoints.phone} {
		width: 100%;
		flex-direction: row;
	}
`;

export const MenuItem = styled.div<{ isWhite: boolean }>`
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
	border: 0.05rem solid ${(props) => props.theme.colors.side_links};
	width: 0.05rem;
	margin: 0 10px;
	min-height: 10px;
	height: 80vh;
	@media ${(props) => props.theme.breakpoints.phone} {
		height: 0.05rem;
		min-height: 0.05rem;
		width: 90vw;
		justify-self: center;
		align-self: center;
	}
`;

export const Section = styled.section`
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	width: 51vw;
	justify-content: center;
	align-items: center;

	@media ${(props) => props.theme.breakpoints.phone} {
		width: 100vw;
	}
`;
