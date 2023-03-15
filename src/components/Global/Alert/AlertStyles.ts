import styled from 'styled-components';

export const AlertBox = styled.article`
	max-width: 50vw;
	border-radius: 1rem;

	padding: 2rem;
	margin-top: 3.6rem;
	font-size: 1.6rem;

	background-color: ${(props) => props.theme.colors.text_primary};
	opacity: 0.94;
	color: ${(props) => props.theme.colors.bg_white};

	position: absolute;
	left: 50%;
	transform: translate(-50%, -50%);

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	&:hover {
		opacity: 0.6;
	}

	@media ${(props) => props.theme.breakpoints.tablet} {
		margin-top: 10rem;
		max-width: 100vw;
		width: 75vw;
		font-size: 3rem;
	}

	@media ${(props) => props.theme.breakpoints.phone} {
		font-size: 2rem;
	}
`;

export const CloseButton = styled.span`
	color: ${(props) => props.theme.colors.bg_white};
	font-weight: bold;
	font-size: 2rem;
	line-height: 2rem;
	cursor: pointer;
	transition: 0.3s;

	@media ${(props) => props.theme.breakpoints.tablet} {
		font-size: 6rem;
		line-height: 6rem;
	}

	@media ${(props) => props.theme.breakpoints.phone} {
		font-size: 4rem;
		line-height: 4rem;
	}
`;
