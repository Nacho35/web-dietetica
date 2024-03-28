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
	overflow-x: hidden;
	transition: 10s;
	background: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(10px);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	border-radius: 10px;
`;

export const InnerContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 1rem;
	background-color: rgba(255, 255, 255, 0.9);
	border-radius: 10px;
	margin: auto;
	width: 80%;
`;

export const Title = styled.h2`
	text-align: center;
	align-self: center;
	padding: 1rem;
	font-size: 20px;
	border-radius: 10px;
	margin-bottom: 1rem;
	font-weight: 600;
	text-transform: uppercase;
`;

export const ContainerItems = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 1rem;
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
	color: ${theme.colors.colorHeight};
`;

export const Price = styled.span`
	font-size: 1.1rem;
	font-weight: 600;
	text-align: center;
	margin: 5px;
	background: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(10px);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	padding: 1rem;
	color: ${theme.colors.colorHeight};
`;

export const Quantity = styled.span`
	font-size: 1.1rem;
	text-transform: uppercase;
	font-weight: 600;
	text-align: center;
	margin: 5px;
	background: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(10px);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	padding: 1rem;
	color: ${theme.colors.colorHeight};
`;

export const Total = styled.p`
	font-size: 1.5rem;
	text-transform: uppercase;
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

export const Button = styled.button`
	font-size: 1rem;
	font-weight: 600;
	text-align: center;
	margin: 10px;
	color: ${theme.colors.colorHeight};
	padding: 0.5rem;
	border-radius: 10px;
	border: none;
	cursor: pointer;
`;
