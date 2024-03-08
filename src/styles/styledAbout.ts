import styled from 'styled-components';
import theme from './themes';

export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem;
	background-color: ${theme.colors.colorTwo};
	object-fit: cover;
	object-position: center;

	@media only screen and (width >= 768px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto 1fr;
		padding: 1rem;
	}

	@media only screen and (width >= 1200px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto;
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

	@media only screen and (width >= 1024px) {
		font-size: 1.5rem;
	}
	@media only screen and (width >= 1200px) {
		font-size: 1.5rem;
	}
	@media only screen and (width >= 1920px) {
		font-size: 1.5rem;
	}
`;

export const PeopleImageSection = styled.div`
	align-self: center;
	margin-bottom: 1rem;
`;

export const Image = styled.img`
	width: 100%;
	border-radius: 10px;
`;

export const SustainabilitySection = styled.div`
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
	@media only screen and (width >= 1024px) {
		margin: auto;
		width: 90%;
	}
	@media only screen and (width >= 1200px) {
		width: 90%;
		margin: auto;
	}
	@media only screen and (width >= 1920px) {
		width: 70%;
		margin: auto;
	}
`;

export const Info = styled.p`
	color: ${theme.colors.colorHeight};
	font-size: 1rem;
	font-weight: 600;
	text-align: left;
	padding: 8px;
	line-height: 1.5rem;

	@media only screen and (width >= 1024px) {
		font-size: 1.2rem;
		line-height: 2rem;
	}
	@media only screen and (width >= 1200px) {
		font-size: 1.2rem;
		line-height: 2.5rem;
	}
	@media only screen and (width >= 1920px) {
		font-size: 1.2rem;
		line-height: 2.5rem;
	}
`;

export const NatureSection = styled.div`
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
	@media only screen and (width >= 1024px) {
		margin: auto;
		width: 90%;
	}
	@media only screen and (width >= 1200px) {
		width: 90%;
		margin: auto;
	}
	@media only screen and (width >= 1920px) {
		width: 70%;
		margin: auto;
	}
`;

export const ProductsImageSection = styled.div`
	align-self: center;
`;
