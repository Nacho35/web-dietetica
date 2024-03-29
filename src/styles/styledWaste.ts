import styled from 'styled-components';
import theme from './themes';
import { NavLink } from 'react-router-dom';

export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${theme.colors.colorFour};
	cursor: default;
`;

export const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(10px);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	margin: 1rem 8px 1rem 8px;
	width: fit-content;

	@media only screen and (width >= 768px) {
		width: 70%;
	}
	@media only screen and (width >= 1200px) {
		width: 50%;
	}
`;

export const Title = styled.h2`
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	font-size: 21px;
	font-weight: 600;
`;

export const Text = styled.p`
	text-align: center;
	font-size: 1rem;
	font-weight: 600;
	line-height: 1.5;
	color: ${theme.colors.colorHeight};
	margin: auto 1rem auto 1rem;
`;

export const ImageContainer = styled.div`
	margin: auto;
`;

export const Image = styled.img`
	border-radius: 10px;
	margin: 10px;
	width: 95%;
`;

export const ContainerQuote = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media only screen and (width >= 768px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto;
		padding: 1%;
	}
`;

export const Quote = styled.p`
	font-size: 1rem;
	font-weight: 600;
	line-height: 1.5;
	color: ${theme.colors.colorHeight};
	padding: 0 5px 0 5px;
	text-align: center;
	background: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(10px);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	margin: auto 10px auto 10px;
	padding-top: 1rem;

	@media only screen and (width >= 768px) {
		font-size: 1.2rem;
		padding: 1.5rem;
	}

	@media only screen and (width >= 1024px) {
		font-size: 1.3rem;
		padding: 2rem;
		width: 30rem;
	}

	@media only screen and (width >= 1200px) {
		font-size: 1.5rem;
		padding: 3rem;
		width: 40rem;
	}

	@media only screen and (width >= 1920px) {
		width: 46rem;
		padding: 3.5rem;
	}
`;

export const ContainerBtn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Btn = styled(NavLink)`
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

export const Divider = styled.span`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 10px;
	color: ${theme.colors.colorSeven};
	text-transform: capitalize;

	@media only screen and (width >= 768px) {
		text-transform: uppercase;
	}
`;
