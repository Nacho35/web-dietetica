import styled from 'styled-components';
import theme from './themes';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	background-color: ${theme.colors.colorFive};
`;

export const PrimaryTitle = styled.h2`
	text-transform: uppercase;
	text-align: center;
	align-self: center;
	padding: 2rem;
	font-size: 20px;
	border-radius: 10px;
	width: fit-content;
	border-radius: 100px 10px;
	background: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(10px);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const GlobalContainer = styled.div`
	margin: 1rem;
`;

export const InnerContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: auto;
	position: relative;
	overflow: hidden;
`;

export const Image = styled.img`
	width: 100%;
	height: auto;
	border-radius: 10px;
	display: block;
`;

export const ContainerImage = styled.div`
	margin: 10px;
`;

export const Title = styled.h2`
	text-align: center;
	text-transform: capitalize;
	font-size: 1rem;
`;

export const DescriptionOverlay = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	color: ${theme.colors.colorHeight};
	text-align: center;
	border-radius: 10px 100px;
	background: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(10px);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	opacity: 0;
	transition: opacity 0.3s ease-in-out;

	${ContainerImage}:hover & {
		opacity: 1;
	}
`;

export const Button = styled.button`
	margin: auto;
	text-transform: capitalize;
	width: fit-content;
	font-weight: 600;
	position: relative;
	display: inline-block;
	margin: 15px;
	padding: 15px 30px;
	text-align: center;
	font-size: 18px;
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

export const ContainerBTN = styled.div`
	margin-top: 1.2rem;
	align-self: center;
`;
