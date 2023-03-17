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
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 10vw;
		align-content: center;
		justify-items: center;
		width: 100vw;
	}

	@media ${(props) => props.theme.breakpoints.phone} {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100vw;
	}
`;

export const NotificationTitle = styled.div`
	@media ${(props) => props.theme.breakpoints.tablet} {
		margin-left: 50px;
	}
`;

export const NotificationContainer = styled.section`
	gap: 10px;
	display: flex;
	flex-direction: column;

	@media ${(props) => props.theme.breakpoints.tablet} {
		align-items: center;
	}
`;
