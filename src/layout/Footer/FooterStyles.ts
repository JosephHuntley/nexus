import styled from 'styled-components';
import Link from 'next/link';

export const Section = styled.footer`
	background-color: ${(props) => props.theme.colors.bg_primary};
	margin-top: 25px;
	padding: 40px;
	border-top: 1px solid ${(props) => props.theme.colors.bg_secondary};
	display: flex;
	justify-content: space-between;
`;

export const Text = styled.p`
	color: ${(props) => props.theme.colors.side_links};
	font-size: 16px;
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
	gap: 10px; ;
`;

export const StyledLink = styled(Link)`
	color: ${(props) => props.theme.colors.side_links};
	font-size: 16px;
`;
