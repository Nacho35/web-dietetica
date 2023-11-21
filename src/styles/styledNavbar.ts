import styled from 'styled-components';
import theme from './themes';

export const ContainerGeneral = styled.div`
	width: auto;
	height: auto;
	display: flex;
	flex-direction: row;
	background-color: ${theme.colors.colorTwo};
`;

export const InnerContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: auto;
`;

export const Item = styled.a`
	display: flex;
	justify-content: center;
`;

export const ContainerItems = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: auto;
`;

export const Items = styled.a`
	margin: 10px 0 10px 10px;
	text-decoration: none;
	font-weight: 600;
	text-transform: uppercase;
	color: ${theme.colors.colorFour};
`;
