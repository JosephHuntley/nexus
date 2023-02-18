import styled from 'styled-components';

export const Container = styled.div`
	border: 1px solid ${(props) => props.theme.colors.text_secondary};
	background: #ffffff;
	border-radius: ${(props) => props.radius};
	overflow: auto;
	white-space: nowrap;
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	box-shadow: ${(props) =>
		props.isShadow ? '0px 4px 4px rgba(0, 0, 0, 0.25)' : 'none'};
	&:hover {
		box-shadow: none;
	}
`;
