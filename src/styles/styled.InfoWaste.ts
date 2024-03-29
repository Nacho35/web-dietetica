import styled from 'styled-components';
import theme from './themes';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${theme.colors.colorOne};
	cursor: default;
`;

export const GridContainer = styled.div`
	@media only screen and (width >= 768px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: auto;
	}
`;

export const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	width: 100%;
`;

export const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

export const Title = styled.h2`
	text-transform: uppercase;
	text-align: center;
	align-self: center;
	padding: 1.5rem;
	font-size: 21px;
	border-radius: 10px;
	color: ${theme.colors.colorFour};
	background: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(10px);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const SecondTitle = styled.h3`
	text-align: center;
	align-self: center;
	text-transform: uppercase;
	padding: 1.2rem;
	font-size: 20px;
	border-radius: 10px;
	color: ${theme.colors.colorFive};
	background: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(10px);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Subtitle = styled.h3`
	text-align: center;
	align-self: center;
	text-transform: uppercase;
	padding: 1.2rem;
	font-size: 18px;
	border-radius: 10px;
	color: ${theme.colors.colorHeight};
	background: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(10px);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

	mark {
		background-color: ${theme.colors.colorHeight};
		color: ${theme.colors.colorOne};
	}
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: auto;

	@media only screen and (width >= 768px) {
		align-self: center;
		text-align: center;
	}

	@media only screen and (width >= 1200px) {
		width: 80%;
	}
`;

export const Text = styled.p`
	text-align: left;
	align-self: center;
	padding: 1rem;
	font-size: 20px;
	line-height: 2rem;
	font-weight: 600;
	border-radius: 10px;
	color: ${theme.colors.colorHeight};
	background: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(10px);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	margin: 1rem;
	white-space: normal;

	strong {
		color: ${theme.colors.colorFive};
		font-weight: 800;
	}
`;

export const ImageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Image = styled.img`
	width: 95%;
	height: auto;
	border-radius: 10px;
	object-fit: contain;
	object-position: center;
	margin: auto;

	@media only screen and (width >= 768px) {
		width: 100%;
		padding: 1rem;
		border-radius: 25px !important;
	}

	@media only screen and (width >= 1200px) {
		width: 80%;
	}
`;

export const Button = styled(NavLink)`
	align-self: center;
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
