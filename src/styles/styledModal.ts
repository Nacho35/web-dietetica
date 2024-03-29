import styled from 'styled-components';
import theme from './themes';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 9999;
`;

export const InnerContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 1rem;
	background-color: ${theme.colors.colorHeight};
	border-radius: 10px;
	margin: auto;
	width: fit-content;
	overflow: auto;
	max-height: 80vh;
`;

export const Title = styled.h2`
	text-align: center;
	align-self: center;
	font-size: 20px;
	border-radius: 10px;
	margin-bottom: 1rem;
	font-weight: 600;
	text-transform: uppercase;
	cursor: default;
	color: ${theme.colors.colorSeven};
`;

export const ContainerHeigth = styled.div`
	overflow: auto;
	max-height: 80vh;
`;

export const ContainerItems = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 1rem;
	cursor: default;
`;

export const Info = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const ContainerName = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin: 1rem auto 1rem auto;
`;

export const Name = styled.span`
	font-size: 1rem;
	text-transform: uppercase;
	font-weight: 600;
	text-align: center;
	color: ${theme.colors.colorSeven};
`;

export const PriceAndQuantity = styled.span`
	font-size: 1.1rem;
	font-weight: 600;
	text-align: center;
	margin: 5px;
	background: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(10px);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	padding: 1rem;
	color: ${theme.colors.colorSeven};
`;

export const Total = styled.p`
	font-size: 1.5rem;
	text-transform: uppercase;
	font-weight: 600;
	text-align: center;
	margin: 10px;
	color: ${theme.colors.colorSeven};
	cursor: default;
`;

export const ContainerButtons = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	order: 2;
	margin-top: auto;
`;

export const Button = styled.button`
	align-self: center;
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
	color: ${theme.colors.colorSeven};
	cursor: pointer;
	transition: ease-out 0.5s;
	border-radius: 10px;
	background: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(10px);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

	&:active {
		transform: scale(0.9);
	}
`;
