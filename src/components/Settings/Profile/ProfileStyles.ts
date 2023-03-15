import styled from 'styled-components';
import Image from 'next/image';
import { RiPencilLine } from 'react-icons/ri';

export const Img = styled(Image)`
	border-radius: 100%;
	width: 25rem;
	height: 25rem;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	position: relative;
	z-index: 1;

	@media ${(props) => props.theme.breakpoints.xs} {
		display: none;
	}
`;

export const Name = styled.p`
	font-size: 2.6rem;
	color: ${(props) => props.theme.colors.text_primary};
	font-weight: 700;
`;

export const Div2 = styled.div`
	width: 35.4rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 2rem;
`;

export const Div1 = styled.div`
	width: 35.4rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Icon = styled(RiPencilLine)`
	width: 4rem;
	height: 4rem;
	color: ${(props) => props.theme.colors.text_secondary};
`;

export const Separator = styled.div`
	height: 0;
	width: 35.4rem;
	border: 0.05rem solid ${(props) => props.theme.colors.side_links};
`;

export const Div3 = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3rem;
	justify-content: center;
	margin: 2rem 0;
`;

export const Line = styled.div`
	display: flex;
	flex-direction: row;
	gap: 2rem;
`;

export const Title = styled.label`
	color: ${(props) => props.theme.colors.text_secondary};
	font-size: 1.6rem;
`;

export const Text = styled.p`
	color: ${(props) => props.theme.colors.text_primary};
	font-size: 1.6rem;
`;

export const Field = styled.input`
	color: ${(props) => props.theme.colors.text_primary};
	font-size: 1.6rem;
	padding: 1rem 2rem;
	background-color: transparent;
	color: ${(props) => props.theme.colors.side_links};
	border: none;
	width: 30rem;
`;

export const TextField = styled.textarea`
	color: ${(props) => props.theme.colors.text_primary};
	font-size: 1.6rem;
	padding: 1rem 2rem;
	background-color: transparent;
	color: ${(props) => props.theme.colors.side_links};
`;
