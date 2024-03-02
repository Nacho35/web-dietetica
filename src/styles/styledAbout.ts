import styled from 'styled-components';
import theme from './themes';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem;
	min-height: 100vh;
	background-image: url('/texture-background.webp');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	@media only screen and (width >= 768px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto 1fr;
		padding: 1rem;
	}
`;

export const Title = styled.h2`
	display: flex;
	justify-content: center;
	font-size: 1.4rem;
	font-weight: 600;
	text-align: center;
	margin: auto;
	margin: 1rem 0;
	padding: 10px;
	word-break: break-all;
`;

export const ContainerTwo = styled.div`
	align-self: center;
	margin-bottom: 1rem;
`;

export const Image = styled.img`
	width: 100%;
	border-radius: 10px;
`;

export const ContainerTree = styled.div`
	align-content: center;
	text-align: center;
	align-items: center;
	border-radius: 10px;
	margin: auto;
	margin-top: 1rem;
	margin-bottom: 1rem;
	background: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(10px);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

	@media only screen and (width >= 768px) {
		margin: auto 1rem auto 1rem;
	}
`;

export const Info = styled.p`
	color: ${theme.colors.colorHeight};
	font-size: 1rem;
	font-weight: 600;
	text-align: left;
	padding: 8px;
	line-height: 1.5rem;
`;

export const ContainerFour = styled.div`
	align-items: center;
	border-radius: 10px;
	margin: auto;
	margin-top: 1rem;
	margin-bottom: 1rem;
	margin: 1rem 0;
	background: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(10px);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

	@media only screen and (width >= 768px) {
		margin: auto 1rem auto 1rem;
	}
`;

export const ContainerFive = styled.div`
	align-self: center;
`;
