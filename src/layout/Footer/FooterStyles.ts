import styled from 'styled-components';
import Link from 'next/link';

export const Section = styled.footer`
	background-color: ${(props) => props.theme.colors.bg_primary};
	padding: 40px 125px;
	display: flex;
	justify-content: space-between;

	@media ${(props) => props.theme.breakpoints.tablet} {
		padding: 25px 50px;
	}
`;

export const Text = styled.p`
	color: ${(props) => props.theme.colors.side_links};
	font-size: 2rem;
	align-self: center;
	padding-top: 10px;
	text-align: center;
`;

export const Title = styled.p`
	color: ${(props) => props.theme.colors.side_links};
	font-size: 24px;
	font-weight: bold;
	padding-bottom: 10px;
	text-align: center;
`;

export const Links = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 10px;

	@media ${(props) => props.theme.breakpoints.tablet} {
		grid-template-columns: 1fr 1fr 1fr 1fr;
		text-align: center;
	}
	@media ${(props) => props.theme.breakpoints.phone} {
		grid-template-columns: 1fr;
		text-align: center;
	}
`;

export const StyledLink = styled(Link)`
	color: ${(props) => props.theme.colors.side_links};
	font-size: 1.6rem;
`;
