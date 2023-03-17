import styled from 'styled-components';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

export const InnerBox = styled.article`
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 32px 24px;
	width: 100%;
	height: 100%;

	@media ${(props) => props.theme.breakpoints.phone} {
		justify-content: center;
		align-items: center;
	}
`;

export const Money = styled.h3`
	font-style: normal;
	font-weight: 700;
	font-size: 26px;
	letter-spacing: 0.03em;

	@media ${(props) => props.theme.breakpoints.phone} {
		font-size: 2.5rem;
	}
`;

export const Div1 = styled.div`
	margin-top: 10px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 175px;
`;

export const Eye = styled(AiOutlineEye)`
	margin-left: 10px;
	width: 24px;
	height: 24px;

	@media ${(props) => props.theme.breakpoints.tablet} {
		width: 2.5rem;
		height: 2.5rem;
	}
`;

export const InvisibleEye = styled(AiOutlineEyeInvisible)`
	margin-left: 10px;
	width: 24px;
	height: 24px;

	@media ${(props) => props.theme.breakpoints.tablet} {
		width: 2.5rem;
		height: 2.5rem;
	}
`;
