import styled from 'styled-components';
import theme from './themes';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
`;

export const Item = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
`;

export const Image = styled.img`
	width: 100%;
	min-height: 100dvh;
	object-fit: cover;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
	filter: brightness(0.7);
`;

export const ContainerCaption = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	min-height: 70vh;

	@media only screen and (width>= 768px) {
		width: 100%;
		min-height: 80vh;
	}
	@media only screen and (width>= 1024px) {
		width: 100%;
		min-height: 100vh;
	}
`;

export const Caption = styled.div`
	position: relative;
	z-index: 1;
	margin: 1rem auto;
	text-align: center;
	color: ${theme.colors.colorHeight};
	width: 80%;
	padding: 10px;
	border-radius: 10px;
	background: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(10px);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

	@media only screen and (width>= 768px) {
		width: 50%;
		padding: 1rem;
	}

	@media only screen and (width>= 1920px) {
		width: 50%;
		padding: 3rem;
	}
`;

export const Title = styled.h3`
	margin: 0;
	font-size: 1.5rem;
	font-weight: 600;
`;

export const Text = styled.p`
	margin: 15px 0 0;
	font-size: 1rem;
	font-weight: 600;
	line-height: 1.5;
`;
