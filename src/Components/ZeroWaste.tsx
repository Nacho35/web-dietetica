import {
	MainContainer,
	Title,
	InfoContainer,
	Text,
	ImageContainer,
	Image,
	ContainerBtn,
	Btn,
	ContainerQuote,
	Quote,
	Divider,
} from '../styles/styledWaste';
import waste from '../assets/zero-waste.webp';
import { NavLink } from 'react-router-dom';

const ZeroWaste = ({ id = 'trust' }) => {
	return (
		<MainContainer id={id}>
			<InfoContainer>
				<Title>Why Trust Us?</Title>
				<Text>
					We chose to align the core values of the store with the five
					principles of the zero waste movement to generate less waste. This
					strategic alignment not only reflects our commitment to environmental
					stewardship but also drives innovation in packaging and sourcing,
					ultimately promoting a greener future for generations to come
					<Divider>
						<strong>Refuse / Reduce / Reuse / Recycle / Rot</strong>
					</Divider>
				</Text>
			</InfoContainer>
			<ContainerQuote>
				<ImageContainer>
					<Image src={waste} alt='zero-waste' />
				</ImageContainer>
				<Quote>
					❝Never doubt that a small group of thoughtful, committed citizens can
					change the world; indeed, it's the only thing that ever has❞
					<Divider>
						<strong>Margaret Mead</strong>
					</Divider>
				</Quote>
			</ContainerQuote>
			<ContainerBtn>
				<Btn as={NavLink} to='/waste'>
					What is zero waste?
				</Btn>
			</ContainerBtn>
		</MainContainer>
	);
};

export default ZeroWaste;
