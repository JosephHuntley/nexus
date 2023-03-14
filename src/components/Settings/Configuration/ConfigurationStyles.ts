import styled from 'styled-components';

export const Field = styled.span`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: ${(props) => props.theme.colors.text_secondary};
`;

export const Label = styled.label`
	display: flex;
	justify-content: space-between;
	width: 60rem;
	gap: 5rem;
	cursor: pointer;
	@media ${(props) => props.theme.breakpoints.tablet} {
		width: 40rem;
	}
	@media ${(props) => props.theme.breakpoints.phone} {
		flex-direction: column;
		width: 80vw;
		gap: 0.7rem;
	}
`;

export const Switch = styled.div`
	position: relative;
	width: 60px;
	height: 30px;
	background: #b3b3b3;
	border-radius: 32px;
	border: 1px solid black;
	/* padding: 4px; */
	transition: 300ms all;

	&:before {
		transition: 300ms all;
		content: '';
		position: absolute;
		width: 28px;
		height: 28px;
		border-radius: 35px;
		top: 50%;
		left: 0px;
		background: white;
		transform: translate(0, -50%);
	}
`;

export const Input = styled.input<{ onChange: any }>`
	opacity: 0;
	position: absolute;

	&:checked + ${Switch} {
		background: #00ff00;

		&:before {
			transform: translate(30px, -50%);
		}
	}
`;
