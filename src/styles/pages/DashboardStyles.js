// index.tsx
import styled from 'styled-components';
import { IconContext } from 'react-icons';

export const Container = styled.div`
	margin-left: 50px;
	justify-items: center;
	margin-top: 26px;
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 26px;

	@media ${(props) => props.theme.breakpoints.tablet} {
		margin-left: 0;
	}
`;

export const TitleContainer = styled.section`
	display: flex;
	flex-direction: column;
	margin-left: 50px;
	margin-top: 26px;
`;

export const BoxContainer = styled.section`
	display: flex;
	flex-direction: row;
	gap: 24px;
	justify-content: space-around;
	width: 70vw;

	@media ${(props) => props.theme.breakpoints.tablet} {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100vw;
	}
`;

export const InnerBox = styled.article`
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 32px 24px;
	width: 100%;
	height: 100%;
`;
export const Money = styled.h3`
	font-style: normal;
	font-weight: 700;
	font-size: 26px;
	letter-spacing: 0.03em;

	@media ${(props) => props.theme.breakpoints.tablet} {
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

const MyProvider = ({ className, children }) => (
	<IconContext.Provider value={{ className }}>{children}</IconContext.Provider>
);

export const Eye = styled(MyProvider)`
	margin-left: 10px;
	width: 24px;
	height: 24px;

	@media ${(props) => props.theme.breakpoints.tablet} {
		width: 2.5rem;
		height: 2.5rem;
	}
`;

export const NotificationContainer = styled.section`
	gap: 10px;
	display: flex;
	flex-direction: column;
`;
