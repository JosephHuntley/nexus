import styled from 'styled-components';
import { InnerBox } from '@/styles/globals';

export const Inner = styled(InnerBox)`
padding: 2rem 0;
height: 100%;

`

export const Notification = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 1rem;
	margin-bottom: 48px;
	width: calc(100% - 10rem);

	@media ${(props) => props.theme.breakpoints.phone} {
		flex-direction: column;
		gap: 10px;
	}
`;

export const NotificationTitle = styled.div`
	color: ${(props) => props.theme.colors.text_primary};
	max-width: 100%;

	@media ${(props) => props.theme.breakpoints.phone} {
	}
`;

export const Div1 = styled.div`
	display: flex;
	flex-direction: row;
`;

export const Status = styled.p`
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	color: ${(props) => props.theme.colors.text_secondary};
	margin-left: 37px;
	margin-right: 37px;
`;
