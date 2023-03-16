import styled from 'styled-components';

export const Text = styled.h1`
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 800;
	font-size: 40px;
	line-height: 60px;
	display: flex;
	align-items: center;
	text-align: center;
	color: #ffffff;
	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

	@media ${(props) => props.theme.breakpoints.tablet} {
		font-size: 35px;
	}
`;
