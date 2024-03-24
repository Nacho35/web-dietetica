import { CardProps } from '../interfaces/interfaceCard';
import {
	Container,
	InnerContainer,
	SecondContainer,
	Image,
	Text,
	Button,
	Price,
} from '../styles/styledCard';

const Card = ({ image, text, price, addToCart, id }: CardProps) => {
	return (
		<Container>
			<SecondContainer>
				<InnerContainer>
					<Image src={image} alt={text} />
					<Text>{text}</Text>
					<Price>${price}</Price>
				</InnerContainer>
			</SecondContainer>
			<Button onClick={() => addToCart(id)}>Add to Cart</Button>
		</Container>
	);
};

export default Card;
