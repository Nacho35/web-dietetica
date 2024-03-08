import styled from 'styled-components';
import theme from './themes';

export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	background-color: ${theme.colors.colorNine};
`;

export const InnerContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(10px);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	margin: auto;
	border-radius: 10px;
	width: 90%;
	margin-top: 1.5rem;
	padding: 8px;
	align-items: center;

	@media only screen and (width >= 768px) {
		width: fit-content;
	}
`;

export const Header = styled.h2`
	text-align: center;
	font-size: 1.3rem;
	font-weight: 600;
	text-transform: uppercase;
	margin: auto;
	margin-top: 10px;
	line-height: 1.5;
`;

export const Text = styled.p`
	font-size: 1rem;
	text-align: center;
	font-weight: 600;
	line-height: 1.5;
	color: ${theme.colors.colorHeight};
`;

export const SecondText = styled.span`
	margin: auto;
	display: flex;
	justify-content: center;
	margin-top: 5px;
`;

export const MainContainerMap = styled.div`
	padding: 1.5rem;
`;

export const MapContainer = styled.div`
	@media only screen and (width >= 768px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto;
		gap: 1rem;
	}
	@media only screen and (width >= 1200px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto;
		gap: 1rem;
	}
	@media only screen and (width >= 1920px) {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: auto;
		gap: 1rem;
	}
`;

export const ContainerTitle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const MapTitle = styled.h2`
	display: flex;
	flex-direction: column;
	justify-content: center;
	font-size: 1rem;
	text-align: center;
	align-self: center;
	font-weight: 600;
	text-transform: uppercase;
	background: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(10px);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	padding: 1rem;
	color: ${theme.colors.colorHeight};
	border-radius: 10px;
	width: fit-content;
`;

export const MainMap = styled.div`
	margin-top: 1rem;
	margin-bottom: 1rem;
	border-radius: 10px;
`;
