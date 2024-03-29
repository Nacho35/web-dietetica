import styled from 'styled-components';
import theme from './themes';
import image from '../assets/frame-ecology-products.webp';

export const SecondBannerContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	cursor: default;
`;

export const BannerContent = styled.div`
	background-image: url(${image});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	text-align: center;
	width: 100%;
	height: 295px;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media only screen and (width >= 1024) {
		background-position: 50%;
	}
`;

export const BannerTitle = styled.h2`
	font-size: 1rem;
	text-transform: uppercase;
	color: ${theme.colors.colorHeight};
	background: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(10px);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	padding: 1rem;
	margin: auto;
	text-align: center;
	display: flex;
	justify-content: center;
	flex-direction: column;
	line-height: 2.5rem;
	border-radius: 10px;

	@media only screen and (width >= 768px) {
		font-size: 1.5rem;
	}
`;
