import styled from 'styled-components';
import theme from './themes';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	background-color: ${theme.colors.colorFive};
	cursor: default;
`;

export const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 80%;
	border-radius: 10px;
	margin: auto;
	margin-top: 1rem;
	margin-bottom: 1rem;
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
		width: 20%;
	}
`;

export const ProductsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;

	@media only screen and (width >= 768px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto;
	}

	@media only screen and (width >= 1200px) {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: auto;
	}
`;

export const Title = styled.h2`
	text-align: center;
	align-content: center;
	align-self: center;
	text-transform: uppercase;
	font-weight: 600;
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
