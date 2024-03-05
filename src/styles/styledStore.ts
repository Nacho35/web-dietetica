import styled from 'styled-components';
import theme from './themes';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	min-height: 70vh;
	background-color: ${theme.colors.colorFive};
`;

export const PrimaryTitle = styled.h2`
	text-transform: uppercase;
	text-align: center;
	margin-top: 1rem;
`;

export const GlobalContainer = styled.div`
	margin: 1rem;
`;

export const InnerContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: auto;
`;

export const Image = styled.img`
	width: 100%;
	height: auto;
	border-radius: 10px;
`;

export const Title = styled.h2`
	text-align: center;
	text-transform: capitalize;
`;
