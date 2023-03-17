import styled from 'styled-components';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

export const InnerBox = styled.article`
	width: 100%;
	height: calc(100% - 2rem);
	padding: 1rem 0.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 4rem;
	overflow-x: hidden;
	border-radius: 4rem 4rem 0 0;
`;

export const MiddleDiv = styled.div`
	margin-top: 2rem;
	padding: 0 0.5rem;
	width: 100%;

	display: flex;
	justify-content: space-between;

	@media ${(props) => props.theme.breakpoints.tablet} {
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}
`;

export const Chart = styled.div`
	/* width: 75%; */
	/* height: 75%; */
`;

export const Date = styled.p`
	font-size: 1.6rem;
	color: ${(props) => props.theme.colors.text_primary};

	@media ${(props) => props.theme.breakpoints.tablet} {
		font-size: 3rem;
	}

	@media ${(props) => props.theme.breakpoints.phone} {
		font-size: 1.6rem;
	}
`;

export const BottomDiv = styled.div`
	width: 100%;
	margin: 0 0.5rem;
`;

export const Section = styled.div`
	width: calc(100% - 2rem);
	border-top: 0.05rem solid ${(props) => props.theme.colors.separator};

	padding: 1rem 0;
	margin: 1rem;

	display: flex;
	flex-direction: column;
`;

export const Top = styled.div`
	width: 100%;

	display: flex;
	flex-direction: row;
	justify-content: space-between;

	font-size: 1.6rem;

	@media ${(props) => props.theme.breakpoints.tablet} {
		font-size: 3rem;
	}

	@media ${(props) => props.theme.breakpoints.phone} {
		font-size: 1.6rem;
	}
`;

export const Row = styled.span`
	width: 40%;
	display: flex;
	flex-direction: row;
	gap: 0.5rem;

	@media ${(props) => props.theme.breakpoints.tablet} {
		width: inherit;
	}
`;

export const GreenCircle = styled.div`
	width: 2rem;
	height: 2rem;
	border-radius: 10px;

	background-color: #00bb00;
`;

export const RedCircle = styled(GreenCircle)`
	background-color: #bb0000;
`;

export const YellowCircle = styled(GreenCircle)`
	background-color: #f5e01c;
`;

export const UpArrow = styled(AiOutlineUp)`
	width: 2rem;
	height: 2rem;

	color: ${(props) => props.theme.colors.text_primary};
`;

export const DownArrow = styled(AiOutlineDown)`
	width: 2rem;
	height: 2rem;

	color: ${(props) => props.theme.colors.text_primary};
`;

export const Bottom = styled.div`
	width: calc(100%-1rem);
	margin: 1rem;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const Secondary = styled.p`
	font-size: 1.6rem;
	margin-bottom: 0.5rem;
	color: ${(props) => props.theme.colors.text_secondary};

	@media ${(props) => props.theme.breakpoints.tablet} {
		font-size: 3rem;
	}

	@media ${(props) => props.theme.breakpoints.phone} {
		font-size: 1.6rem;
	}
`;

export const Primary = styled.p`
	font-size: 1.6rem;
	color: ${(props) => props.theme.colors.text_primary};

	@media ${(props) => props.theme.breakpoints.tablet} {
		font-size: 3rem;
	}

	@media ${(props) => props.theme.breakpoints.phone} {
		font-size: 1.6rem;
	}
`;
