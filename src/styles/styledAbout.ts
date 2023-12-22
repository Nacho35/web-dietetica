import styled from 'styled-components';
import theme from './themes';

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
	background-color: ${theme.colors.colorFive};
	padding: 1rem;
`;

export const ContainerTwo = styled.div`
	align-self: center;
`;

export const Image = styled.img`
	width: 90%;
	border-radius: 10px;
	margin-right: 2rem;
`;

export const ContainerTree = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	margin: auto;
	background: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(10px);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Info = styled.p`
	color: ${theme.colors.colorHeight};
	font-size: 1rem;
	font-weight: 600;
	text-align: left;
	padding: 8px;
`;

export const ContainerFour = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	margin: auto;
	background: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(10px);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const InfoTwo = styled.p`
	color: ${theme.colors.colorHeight};
	font-size: 1rem;
	font-weight: 600;
	text-align: left;
	padding: 8px;
`;

export const ContainerFive = styled.div`
	align-self: center;
`;

export const ImageTwo = styled.img`
	width: 90%;
	border-radius: 10px;
	margin-left: 1.5rem;
`;
