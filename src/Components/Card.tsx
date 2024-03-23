import { CardProps } from '../interfaces/interfaceCard';
import {
	Container,
	InnerContainer,
	SecondContainer,
	Image,
	Text,
	Button,
} from '../styles/styledCard';

const Card = ({ image, text }: CardProps) => {
	return (
		<Container>
			<SecondContainer>
				<InnerContainer>
					<Image src={image} alt={text} />
					<Text>{text}</Text>
				</InnerContainer>
			</SecondContainer>
			<Button>Add to Cart</Button>
		</Container>
	);
};

export default Card;
