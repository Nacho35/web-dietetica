import styled from 'styled-components';
import theme from './themes';

export const Container = styled.div`
	display: flex;
	background-color: ${theme.colors.colorNine};
	justify-content: center;
`;

export const Title = styled.h2`
	font-size: large;
	font-weight: 400;
	text-align: center;
	margin: 10px;
	color: ${theme.colors.colorSeven};
`;
