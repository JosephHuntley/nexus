import styled from 'styled-components';
import { IconContext } from 'react-icons';

export const InnerBox = styled.div`
	height: 100%;
	width: 100%;
`;

export const TitleContainer = styled.div`
	margin-left: 50px;
	margin-top: 26px;
`;

export const Container = styled.section`
	margin-top: 84px;
	margin-left: 50px;
	display: flex;
	flex-direction: row;
	gap: 70px;
	align-items: center;
	width: 100%;
`;

export const BoxContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
	margin: 0 12px;
`;

export const VacationContainer = styled.article`
	display: flex;
	flex-direction: column;
	gap: 57px;
	overflow: hidden;
	padding: 10px 0;
`;

const MyProvider = ({ className, children }) => (
	<IconContext.Provider value={{ className }}>{children}</IconContext.Provider>
);

export const VacationIcon = styled(MyProvider)`
	color: ${(props) => props.theme.colors.bg_primary};
	width: 88px;
	height: 88px;
	margin: 0 49px;
`;

export const VacationTitle = styled.div`
	color: ${(props) => props.theme.colors.text_primary};
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 30px;
`;

export const VacationSubtitle = styled.h3`
	color: ${(props) => props.theme.colors.text_primary};
	width: 100%;
	font-weight: 400;
	font-size: 10px;
	line-height: 15px;
	text-align: center;
	margin: 2px 0;
`;
export const VacationText = styled.p`
	color: ${(props) => props.theme.colors.text_secondary};
	width: 100%;
	font-weight: 400;
	font-size: 10px;
	line-height: 15px;
	text-align: center;
`;
