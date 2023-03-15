import styled from 'styled-components';

export const Section = styled.div`
	background-color: rgba(0, 0, 0, 0.2);
	width: 100vw;
	height: 100vh;
	z-index: 0;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	position: absolute;
`;

export const Center = styled.section`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const ModalBox = styled.div`
	width: 30vw;
	height: 40vh;
	background: ${(props) => props.theme.colors.bg_secondary};
	color: '#fff';
	position: relative;
	z-index: 99;
	border-radius: 16px;
	box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	padding: 2rem;
`;

export const ModalHeader = styled.div`
	font-size: 3rem;
`;

export const ModalContent = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
`;

export const FieldTitle = styled.label`
	font-size: 3rem;
	color: ${(props) => props.theme.colors.text_secondary};
`;

export const Password = styled.input`
	width: 15rem;
	height: 3rem;
	text-align: center;
`;
