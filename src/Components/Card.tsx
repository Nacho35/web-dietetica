import { CardProps } from '../interfaces/interfaceCard';
import {
	Container,
	InnerContainer,
	SecondContainer,
	Image,
	Text,
	Button,
	Price,
	ContainerImage,
} from '../styles/styledCard';

const Card = ({ image, text, price, addToCart, id }: CardProps) => {
	return (
		<Container>
			<SecondContainer>
				<InnerContainer>
					<ContainerImage>
						<Image src={image} alt={text} />
					</ContainerImage>
					<Text>{text}</Text>
					<Price>${Number(price).toFixed(2)}</Price>
					<Button onClick={() => addToCart(id)}>Add to Cart</Button>
				</InnerContainer>
			</SecondContainer>
		</Container>
	);
};

export default Card;