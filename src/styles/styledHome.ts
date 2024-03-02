import styled from 'styled-components';
import theme from './themes';

export const Container = styled.div`
	width: auto;
	height: auto;
	position: relative;
	@media only screen and (min-width: 768px) {
	}

	@media only screen and (min-width: 992px) and (min-width: 1024px) {
	}

	@media only screen and (min-width: 1200px) {
	}

	@media only screen and (min-width: 1920px) {
	}
`;

export const Item = styled.div`
	position: relative;
`;

export const Image = styled.img`
	width: 100%;
	height: auto;
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
`;

export const Caption = styled.div`
	position: relative;
	z-index: 1;
	margin: 1rem auto;
	text-align: center;
	color: ${theme.colors.colorHeight};
	width: 18.75rem;
	padding: 10px;
	border-radius: 10px;
	background: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(10px);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

	@media only screen and (min-width: 768px) {
		width: 37.5rem;
	}

	@media only screen and (min-width: 992px) and (min-width: 1024px) {
		width: 43.75rem;
	}

	@media only screen and (min-width: 1200px) {
		width: 50rem;
	}

	@media only screen and (min-width: 1920px) {
		width: 62.5rem;
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
