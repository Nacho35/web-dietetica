import styled from 'styled-components';
import theme from './themes';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	background-color: ${theme.colors.colorFive};
`;

export const SecondContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
`;

export const InnerContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	border-radius: 10px;
	padding: 1.25rem;
	width: 300px;
	margin: auto;
	margin-top: 1rem;
	margin-bottom: 1rem;
	background-color: rgba(255, 255, 255, 0.1);
	backdrop-filter: blur(10px);
	box-shadow: 10px 10px 10px 1px rgba(67, 67, 66, 0.74);
	-webkit-box-shadow: 10px 10px 10px 1px rgba(67, 67, 66, 0.74);
	-moz-box-shadow: 10px 10px 10px 1px rgba(67, 67, 66, 0.74);
`;

export const Image = styled.img`
	object-fit: cover;
	object-position: center;
	margin: 5px;
	border-radius: 10px;
`;

export const Text = styled.p`
	text-align: left;
	font-weight: 600;
	margin: 1rem;
	line-height: 1.5rem;
	font-size: 1rem;
	text-transform: uppercase;
`;

export const Price = styled.p`
	text-align: left;
	font-weight: 600;
	margin: 1rem;
	font-size: 1.2rem;
`;

export const Button = styled.button`
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
