import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { theme } from './Theme';

const GlobalStyles = createGlobalStyle<theme>`
  ${normalize};
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body{
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.bg_secondary};
    color: ${(props) => props.theme.colors.text_primary};

	@media ${(props) => props.theme.breakpoints.tablet} {
		font-size: 2rem;
	}

	@media ${props => props.theme.breakpoints.xl} {
		font-size: 3rem;
	}
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  `;
export default GlobalStyles;

export const Title = styled.h2`
	font-size: 2.6rem;
	font-weight: bold;
	color: ${(props) => props.theme.colors.text_primary};

	@media ${(props) => props.theme.breakpoints.tablet} {
		font-size: 3.2rem;
	}
	@media ${props => props.theme.breakpoints.xl} {
		font-size: 3.5rem;
	}
`;
export const TitleSecondary = styled.h2`
	font-size: 2rem;
	font-style: normal;
	font-weight: 375;
	color: ${(props) => props.theme.colors.text_secondary};

	@media ${(props) => props.theme.breakpoints.tablet} {
		align-self: center;
	}

	@media ${props => props.theme.breakpoints.xl} {
		font-size: 3rem;
	}
`;
export const Text = styled.p`
	color: ${(props) => props.theme.colors.text_secondary};

	
`;
export const Separator = styled.div`
	border: 0.5px solid ${(props) => props.theme.colors.text_secondary};
	margin: 0 10px;
`;

export const InnerBox = styled.div<{
	height?: string;
	direction?: string;
	gap?: string;
	md_gap?: string;
	padding?: string;
	md_padding?: string;
}>`
	width: 100%;
	height: ${props => props.height};
	display: flex;
	flex-direction: ${(props) => props.direction};
	justify-content: center;
	align-items: center;
	gap: ${(props) => props.gap};
	padding: ${(props) => props.padding};
	overflow-y: scroll;

	@media ${(props) => props.theme.breakpoints.tablet} {
		gap: ${(props) => props.md_gap};
		padding: ${(props) => props.md_padding};
	}
`;
