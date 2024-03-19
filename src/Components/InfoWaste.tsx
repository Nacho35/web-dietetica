import {
	Container,
	TitleContainer,
	Title,
	SecondTitle,
	Subtitle,
	TextContainer,
	Text,
	ImageContainer,
	Image,
	InfoContainer,
	GridContainer,
	Button,
} from '../styles/styled.InfoWaste';
import ecoBag from '../assets/bag-eco.webp';
import { NavLink } from 'react-router-dom';

const InfoWaste = () => {
	return (
		<Container>
			<TitleContainer>
				<Title>What is Zero Waste?</Title>
			</TitleContainer>
			<GridContainer>
				<InfoContainer>
					<TextContainer>
						<SecondTitle>zero waste</SecondTitle>
						<Subtitle>
							<mark>The simple answer</mark>
						</Subtitle>
						<Text>
							It is a movement whose main objective is to prevent our
							<strong style={{ marginLeft: '5px' }}>waste</strong> from reaching
							the landfill.
						</Text>
						<Text>
							<strong style={{ marginRight: '5px' }}>Reject</strong> single-use
							products (especially those contained in plastics), reduce what we
							consume, <strong style={{ marginRight: '5px' }}>reuse</strong>
							everything we can,
							<strong style={{ marginLeft: '5px' }}>recycle</strong> what has
							already reached its useful life and
							<strong style={{ marginLeft: '5px' }}>compost</strong> what does
							not fall into the previous categories (organic matter).
						</Text>
					</TextContainer>
				</InfoContainer>
				<InfoContainer>
					<TextContainer>
						<Subtitle>
							<mark>The most elaborate answer</mark>
						</Subtitle>
						<Text>
							It's really about
							<strong style={{ marginLeft: '5px' }}>
								reinventing the system
							</strong>
							. We currently live in a linear economy where we take resources
							from the earth and then throw them into a giant hole in the
							ground.
						</Text>
						<Text>
							The goal of Zero Waste is to move to a circular economy where
							<strong style={{ marginLeft: '5px' }}>
								garbage is no longer produced
							</strong>
							. The circular economy imitates nature, there is no waste in it.
						</Text>
						<Text>
							Once you get into this movement, you will realize that
							<strong style={{ marginLeft: '5px' }}>
								it is simpler than it seems!
							</strong>
						</Text>
					</TextContainer>
				</InfoContainer>
				<ImageContainer>
					<Image src={ecoBag} alt='bag whith plastic products' />
				</ImageContainer>
			</GridContainer>
			<Button as={NavLink} to='/'>
				back
			</Button>
		</Container>
	);
};

export default InfoWaste;
