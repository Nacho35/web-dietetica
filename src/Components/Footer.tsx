import {
	FooterContainer,
	InfoContainer,
	MainTitle,
	NavLinkContainer,
	NavLink,
	ParagraphContainer,
	Paragraph,
	HighlightedEmailContainer,
	EmailInputContainer,
	EmailInput,
	SubscribeButton,
	ImageContainer,
	CopyrightText,
	Picture,
	StyledLink,
	SectionContainer,
	MainTitleTwo,
} from '../styles/styledFooter';
import insta from '../assets/instagram-svgrepo-com.svg';
import face from '../assets/facebook-svgrepo-com.svg';

const Footer = ({ id = 'contact' }) => {
	return (
		<FooterContainer id={id}>
			<InfoContainer>
				<SectionContainer>
					<MainTitle>Ecolife Market</MainTitle>
					<NavLinkContainer>
						<NavLink
							to='about'
							spy={true}
							smooth={true}
							offset={0}
							duration={2000}
						>
							About us
						</NavLink>
						<NavLink
							to='store'
							spy={true}
							smooth={true}
							offset={0}
							duration={2000}
						>
							Store
						</NavLink>
						<NavLink
							to='pointsale'
							spy={true}
							smooth={true}
							offset={0}
							duration={2000}
						>
							Point of sale
						</NavLink>
						<NavLink
							to='trust'
							spy={true}
							smooth={true}
							offset={0}
							duration={2000}
						>
							Trust
						</NavLink>
					</NavLinkContainer>
				</SectionContainer>
				<SectionContainer>
					<MainTitle>Contact</MainTitle>
					<ParagraphContainer>
						<Paragraph>
							Questions, comments, and recommendations:
							<HighlightedEmailContainer>
								<StyledLink href='mailto:contact@ecolifemarket.com'>
									<mark>contact@ecolifemarket.com</mark>
								</StyledLink>
							</HighlightedEmailContainer>
						</Paragraph>
						<Paragraph>
							Retail sales to the general public and wholesale inquiries:
							<HighlightedEmailContainer>
								<StyledLink href='mailto:sales@ecolifemarket.com'>
									<mark>sales@ecolifemarket.com</mark>
								</StyledLink>
							</HighlightedEmailContainer>
						</Paragraph>
					</ParagraphContainer>
				</SectionContainer>
				<SectionContainer>
					<MainTitle>Newsletter</MainTitle>
					<EmailInputContainer>
						<MainTitleTwo>Join our community</MainTitleTwo>
						<EmailInput type='email' placeholder='Email address' required />
						<SubscribeButton>Subscribe</SubscribeButton>
					</EmailInputContainer>
				</SectionContainer>
			</InfoContainer>
			<ImageContainer>
				<a href='https://www.instagram.com/'>
					<Picture src={insta} alt='instagram' />
				</a>
				<a href='https://www.facebook.com/?locale=es_LA'>
					<Picture src={face} alt='facebook' />
				</a>
			</ImageContainer>
			<CopyrightText>© 2024 Ecolife Market</CopyrightText>
		</FooterContainer>
	);
};

export default Footer;