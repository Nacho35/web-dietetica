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
	overflow: auto;
	width: 100%;
	height: 100%;
	position: fixed;
	right: 0;
	z-index: 9999;
	background-color: ${theme.colors.colorSeven};

	@media only screen and (width >= 768px) {
		width: 60%;
	}

	@media only screen and (width >= 1024px) {
		width: 50%;
	}

	@media only screen and (width >= 1200px) {
		width: 30%;
	}
`;

export const Title = styled.h2`
	text-align: center;
	align-self: center;
	font-size: 20px;
	margin-bottom: 1rem;
	font-weight: 600;
	text-transform: uppercase;
	cursor: default;
	color: ${theme.colors.colorHeight};
`;

export const ContainerInnerTwo = styled.div`
	overflow: auto;
`;

export const Ticket = styled.h3`
	text-align: left;
	margin-left: 1rem;
	font-size: 20px;
	margin-bottom: 1rem;
	font-weight: 600;
	text-transform: capitalize;
	cursor: default;
	color: ${theme.colors.colorHeight};
`;

export const ContainerItems = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 1rem auto 1rem auto;
	cursor: default;
`;

export const Info = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ContainerName = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const Name = styled.span`
	font-size: 1.2rem;
	text-transform: uppercase;
	font-weight: 600;
	text-align: left;
	margin-left: 5px;
	color: ${theme.colors.colorHeight};
`;

export const Price = styled.span`
	font-size: 1.3rem;
	font-weight: 600;
	text-align: right;
	margin-right: 16px;
	color: ${theme.colors.colorHeight};
`;

export const ContainerTotal = styled.div`
	border: 1px solid #333;
`;

export const Total = styled.p`
	font-size: 1.5rem;
	text-transform: capitalize;
	font-weight: 600;
	text-align: right;
	margin-right: 1rem;
	color: ${theme.colors.colorHeight};
	cursor: default;
`;

export const Pay = styled.p`
	font-size: 1.5rem;
	text-transform: capitalize;
	font-weight: 600;
	text-align: right;
	margin-right: 1rem;
	color: ${theme.colors.colorHeight};
	cursor: default;
`;

export const ContainerButtons = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 1rem;
	order: 2;
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
