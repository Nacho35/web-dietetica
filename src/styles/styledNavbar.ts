import styled from 'styled-components';
import theme from './themes';

export const ContainerGeneral = styled.div`
	width: auto;
	display: flex;
	flex-direction: column;
	background-color: ${theme.colors.colorTwo};

	@media only screen and (min-width: 768px) {
		display: block;
	}

	@media only screen and (min-width: 992px) and (min-width: 1024px) {
		display: block;
	}

	@media only screen and (min-width: 1200px) {
		display: none;
	}
`;

export const InnerContainer = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: center;
	padding: 0.5rem;
`;

export const Item = styled.a`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-content: center;
	flex-wrap: wrap;
`;

export const ContainerItems = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: auto;
	justify-content: start;
`;

export const Items = styled.a`
	margin: 30px 0 30px 0;
	text-decoration: none;
	font-weight: 600;
	text-transform: uppercase;
	color: ${theme.colors.colorFour};
`;

export const DrawerContainer = styled.div`
	width: 60%;
	height: 100%;
	position: fixed;
	top: 0;
	right: 0;
	z-index: 9999;
	overflow-x: hidden;
	transition: 10s;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	background: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(10px);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const DrawerContent = styled.div`
	padding: 1.5rem;
`;

export const Desktop = styled.div`
	display: none;
	justify-content: space-between;
	align-items: center;
	background-color: ${theme.colors.colorTwo};
	height: 70px;

	@media only screen and (min-width: 1200px) {
		display: flex;
	}

	@media only screen and (min-width: 1920px) {
		display: flex;
	}
`;

export const InnerContainerDesktop = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

export const ContainerLogo = styled.div`
	align-items: center;
`;

export const LogoLink = styled.a`
	display: contents;
`;

export const LogoImage = styled.img`
	width: 10%;
`;

export const ContainerLinks = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	flex-grow: 1;
`;

export const Links = styled.a`
	display: flex;
	text-decoration: none;
	font-weight: 600;
	text-transform: uppercase;
	color: ${theme.colors.colorFour};
	cursor: pointer;
	margin: 0 20px;
	white-space: nowrap;

	@media only screen and (min-width: 1300px) and (max-width: 1400px) {
		margin: 0 20px;
	}
`;
