import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
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
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.bg_secondary};
    color: ${(props) => props.theme.colors.text_primary};
    cursor: default;
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
	font-size: 26px;
	font-weight: bold;
	color: ${(props) => props.theme.colors.text_primary};
	line-height: 39px;
`;
export const TitleSecondary = styled.h2`
	font-size: 20px;
	font-style: normal;
	font-weight: 375;
	color: ${(props) => props.theme.colors.text_secondary};
`;
export const Text = styled.p`
	font-size: 15px;
	font-weight: 600;
	color: ${(props) => props.theme.colors.text_secondary};
	line-height: 24px;
`;
export const Separator = styled.div`
	border: 0.5px solid ${(props) => props.theme.colors.text_secondary};
	margin: 0 10px;
`;

export const InnerBox = styled.div`
	width: 100%; //${(props) => props.width};
	height: ${(props) => props.height};
	display: flex;
	flex-direction: ${(props) => props.direction};
	justify-content: center;
	align-items: center;
	gap: ${(props) => props.gap};
`;
