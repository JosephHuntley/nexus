import styled from 'styled-components';

export const Container = styled.section`
	margin-top: 5rem;

	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;

	@media ${(props) => props.theme.breakpoints.tablet} {
		flex-direction: column;
		gap: 10rem;
	}
`;

export const TitleContainer = styled.div`
	margin-left: 50px;
	margin-top: 26px;
`;
