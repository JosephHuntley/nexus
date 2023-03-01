import styled from 'styled-components';

export const Container = styled.div`
	border: 1px solid ${(props) => props.theme.colors.text_secondary};
	background: ${(props) => props.theme.colors.bg_white};
	border-radius: ${(props) => props.radius};
	overflow: auto;
	white-space: nowrap;
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	/* First checks if there should be a box shadow. Then checks if dark mode is enabled */
	box-shadow: ${(props) =>
		props.isShadow
			? props.theme.colors.bg_white === '#fff'
				? '0px 4px 4px rgba(0, 0, 0, 0.25)'
				: 'none'
			: 'none'};
	&:hover {
		box-shadow: none;
	}
`;
