// index.tsx
import styled from 'styled-components';
import { IconContext } from 'react-icons';

export const Container = styled.div`
	/* margin-left: 50px; */
	margin-top: 26px;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	gap: 26px;
`;

export const TitleContainer = styled.section`
	display: flex;
	flex-direction: column;
	margin-left: 50px;
	margin-top: 26px;
	/* margin-left: 50px; */
`;

export const BoxContainer = styled.section`
	display: flex;
	flex-direction: row;
	gap: 24px;
	/* margin-top: 32px; */
	/* margin-left: 50px; */
`;

export const InnerBox = styled.article`
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-left: 16px;
	margin-top: 32px;
`;
export const Money = styled.h3`
	font-style: normal;
	font-weight: 700;
	font-size: 26px;
	line-height: 39px;
	letter-spacing: 0.03em;
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
`;

export const NotificationContainer = styled.section`
	/* margin-left: 50px; */
	/* margin-top: 32px; */
	gap: 10px;
	display: flex;
	flex-direction: column;
`;
