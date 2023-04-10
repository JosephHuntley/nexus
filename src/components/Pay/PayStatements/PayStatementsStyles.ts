import styled from 'styled-components';

export const InnerBox = styled.div`
	width: 100%;
	height: calc(100% - 8rem);
	padding: 0 1rem;
	margin: 4rem 0;
	padding-bottom: 3rem;

	display: flex;
	flex-direction: column;

	overflow-x: hidden;
	border-radius: 4rem 4rem 0 0;
`;

export const Separator = styled.div`
	width: 100%;
	margin: 0.5rem 0;
	opacity: 0.4;
	border: 0.05rem solid ${(props) => props.theme.colors.separator};

	@media ${(props) => props.theme.breakpoints.phone} {
		margin: 1rem 0;
	}
`;

export const Statements = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	@media ${(props) => props.theme.breakpoints.phone} {
		flex-direction: column;
		gap: 1rem;
	}
`;

export const Primary = styled.p`
	color: ${(props) => props.theme.colors.text_primary};

	@media ${(props) => props.theme.breakpoints.tablet} {
		font-size: 3rem;
	}

	@media ${(props) => props.theme.breakpoints.phone} {
		font-size: 2rem;
	}
`;

export const Secondary = styled.p`
	color: ${(props) => props.theme.colors.text_secondary};

	@media ${(props) => props.theme.breakpoints.tablet} {
		font-size: 3rem;
	}

	@media ${(props) => props.theme.breakpoints.phone} {
		font-size: 2rem;
	}
`;

export const Field = styled.div`
	margin-top: 1rem;
	display: flex;
	flex-direction: column;
`;

export const Div1 = styled.div`
	margin: 0 2rem;
	width: 60%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-end;

	@media ${(props) => props.theme.breakpoints.phone} {
		gap: 1rem;
		margin: 0;
		width: 100%;
	}
`;

export const Title = styled.h2`
	font-weight: 600;
	font-size: 2rem;
	text-align: center;
	color: ${(props) => props.theme.colors.text_primary};

	width: 100%;
	height: 6rem;
	padding: 2rem 0;

	@media ${(props) => props.theme.breakpoints.tablet} {
		font-size: 4rem;
		height: 12rem;
	}

	@media ${(props) => props.theme.breakpoints.phone} {
		font-size: 3rem;
		height: 9rem;
	}
`;
