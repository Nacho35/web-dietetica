import styled from 'styled-components';
import theme from './themes';
import { Link as ScrollLink } from 'react-scroll';

export const FooterContainer = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	background-color: ${theme.colors.colorTree};
	margin: auto;
`;

export const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media only screen and (width >= 768px) {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: auto;
	}
`;

export const SectionContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media only screen and (width >= 768px) {
		display: grid;
		grid-template-columns: auto;
		grid-template-rows: auto;
	}
`;

export const MainTitle = styled.h2`
	font-size: 21px;
	font-weight: 600;
	text-transform: uppercase;
`;

export const MainTitleTwo = styled.h2`
	font-size: 21px;
	font-weight: 600;
	text-transform: capitalize;
`;

export const NavLinkContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const NavLink = styled(ScrollLink)`
	margin: 1rem;
	text-decoration: none;
	color: ${theme.colors.colorHeight};
	font-weight: 600;
	font-size: 1.1rem;
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}
`;

export const ParagraphContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Paragraph = styled.p`
	font-weight: 600;
	line-height: 1rem;
`;

export const HighlightedEmailContainer = styled.span`
	display: flex;
	flex-direction: column;

	mark {
		margin: 1rem;
		font-size: 1.1rem;
		width: fit-content;
		align-self: center;
		background-color: ${theme.colors.colorTwo};
		color: ${theme.colors.colorHeight};
	}
`;

export const StyledLink = styled.a`
	text-decoration: none;
	color: ${theme.colors.colorHeight};
	margin: 1rem;

	&:hover {
		text-decoration: underline;
	}
`;

export const EmailInputContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const EmailInput = styled.input`
	width: fit-content;
	align-self: center;
	margin-top: 1rem;
	margin-bottom: 1rem;
	padding: 1rem;
	border: solid 4px;
	color: ${theme.colors.colorHeight};
	border-radius: 10px;

	&:focus {
		border-color: ${theme.colors.colorFour};
		outline: none;
	}
`;

export const SubscribeButton = styled.button`
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

export const ImageContainer = styled.div`
	margin: auto;
`;

export const Picture = styled.img`
	width: 50px;
	height: 50px;
	margin: 10px;
`;

export const CopyrightText = styled.h3`
	text-transform: capitalize;
	font-size: 1rem;
	color: ${theme.colors.colorHeight};
`;