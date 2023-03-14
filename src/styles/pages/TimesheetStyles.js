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

	@media ${(props) => props.theme.breakpoints.tablet} {
		flex-direction: column;
		margin: 0;
		margin-top: 2.5rem;
	}
`;

export const BoxContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
	margin: 0 12px;

	@media ${(props) => props.theme.breakpoints.tablet} {
		margin-top: 1rem;
		justify-content: center;
	}
`;

export const VacationContainer = styled.article`
	display: flex;
	flex-direction: column;
	gap: 5.7rem;
	padding: 1rem 0;

	@media ${(props) => props.theme.breakpoints.tablet} {
		flex-direction: row;
		padding: 1rem 2.85rem;
		width: 100vw;
	}
	@media ${(props) => props.theme.breakpoints.phone} {
		flex-direction: column;

		align-items: center;
	}
`;

const MyProvider = ({ className, children }) => (
	<IconContext.Provider value={{ className }}>{children}</IconContext.Provider>
);

export const Icon = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;
`;

export const VacationIcon = styled(MyProvider)`
	color: ${(props) => props.theme.colors.bg_primary};
	width: 8.8rem;
	height: 8.8rem;

	@media ${(props) => props.theme.breakpoints.tablet} {
		width: 16rem;
		height: 16rem;
		margin: 2rem 0;
	}
	@media ${(props) => props.theme.breakpoints.phone} {
		width: 12rem;
		height: 12rem;
	}
`;

export const VacationTitle = styled.div`
	color: ${(props) => props.theme.colors.text_primary};
	font-size: 1.6rem;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 3rem;

	@media ${(props) => props.theme.breakpoints.tablet} {
		font-size: 3rem;
		height: 6rem;
	}
	@media ${(props) => props.theme.breakpoints.phone} {
		font-size: 2.3rem;
	}
`;

export const VacationSubtitle = styled.h3`
	color: ${(props) => props.theme.colors.text_primary};
	width: 100%;
	font-size: 1rem;
	text-align: center;
	margin: 0.2rem 0;

	@media ${(props) => props.theme.breakpoints.tablet} {
		font-size: 2rem;
	}
	@media ${(props) => props.theme.breakpoints.phone} {
		font-size: 1rem;
	}
`;
export const VacationText = styled.p`
	color: ${(props) => props.theme.colors.text_secondary};
	width: 100%;
	font-size: 1rem;
	text-align: center;
	@media ${(props) => props.theme.breakpoints.tablet} {
		font-size: 2rem;
	}
`;
