import styled from 'styled-components';
import theme from './themes';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
`;

export const DrawerContainer = styled.div`
	width: 70%;
	height: 100%;
	position: fixed;
	top: 0;
	right: 0;
	z-index: 9999;
	overflow-x: hidden;
	transition: 10s;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(10px);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

	@media only screen and (width >= 768px) {
		width: 40%;
	}

	@media only screen and (width >= 1024px) {
		width: 30%;
	}

	@media only screen and (width >= 1200px) {
		width: 25%;
	}
`;

export const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
`;

export const Title = styled.h2`
	font-size: 1.5rem;
	font-weight: 600;
	text-align: center;
	margin: 10px;
	color: ${theme.colors.colorHeight};
`;

export const MessageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

export const OopsMessage = styled.p`
	font-size: 2rem;
	font-weight: 700;
	text-align: center;
	margin: 20px;
	color: ${theme.colors.colorHeight};
`;

export const NothingHereMessage = styled.p`
	font-size: 1.5rem;
	font-weight: 600;
	text-align: center;
	margin: 10px;
	color: ${theme.colors.colorHeight};
`;

export const ContainerButtons = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin: 1.1rem auto 1.1rem auto;
	order: 2;
	margin-top: auto;
`;

export const CartButtons = styled.button`
	margin: auto 1rem auto 1rem;
	align-self: center;
	text-transform: capitalize;
	width: fit-content;
	font-weight: 600;
	position: relative;
	display: inline-block;
	margin: 15px;
	padding: 15px 30px;
	text-align: center;
	font-size: 10px;
	letter-spacing: 1px;
	text-decoration: none;
	color: ${theme.colors.colorHeight};
	cursor: pointer;
	transition: ease-out 0.5s;
	border-radius: 10px;
	background: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(10px);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

	&:hover {
		color: ${theme.colors.colorSeven};
		box-shadow: inset 0 -100px 0 0 ${theme.colors.colorHeight};
	}

	&:active {
		transform: scale(0.9);
	}
`;

export const CartItem = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;

	@media only screen and (width >= 768px) {
		width: fit-content;
	}
`;

export const ContainerItems = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

export const ContainerImage = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: auto;
	width: 90%;
	cursor: default;
`;

export const ContainerData = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	text-transform: uppercase;
`;

export const QuantityAndPriceContainer = styled.div`
	font-size: 1.1rem;
	font-weight: 600;
	text-align: center;
	margin: 10px;
	color: ${theme.colors.colorHeight};
	background: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(10px);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	padding: 1rem;
`;

export const CartImage = styled.img`
	width: 150px;
	height: 150px;
	margin: 10px;
	border-radius: 10px;
	object-fit: cover;
`;

export const CartInfo = styled.div`
	font-size: 1rem;
	font-weight: 600;
	text-align: center;
	margin: auto;
	color: ${theme.colors.colorHeight};
	line-height: 1.5rem;
	width: 100%;
`;

export const ContainerQuantity = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

export const CartButtonsQuantity = styled.button`
	align-self: center;
	text-transform: uppercase;
	width: fit-content;
	font-weight: 600;
	position: relative;
	display: inline-block;
	margin: 15px;
	padding: 15px 30px;
	text-align: center;
	font-size: 10px;
	letter-spacing: 1px;
	text-decoration: none;
	color: ${theme.colors.colorHeight};
	cursor: pointer;
	transition: ease-out 0.5s;
	border-radius: 10px;
	background: ${props => props.color || 'rgba(0, 255, 0, 0.2)'};
	backdrop-filter: blur(10px);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

	&:hover {
		color: ${theme.colors.colorSeven};
		box-shadow: inset 0 -100px 0 0 ${theme.colors.colorHeight};
	}

	&:active {
		transform: scale(0.9);
	}
`;

export const ContainerTotalCart = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	cursor: default;
`;

export const InfoTotalCart = styled.p`
	font-size: 1rem;
	font-weight: 600;
	text-align: center;
	margin: 10px;
	color: ${theme.colors.colorHeight};
	text-transform: uppercase;
`;