import Card from './Card';
import { ProductsCards } from '../interfaces/interfaceCard';
import { useCart } from 'react-use-cart';
import {
	Container,
	ProductsContainer,
	TitleContainer,
	Title,
	Button,
} from '../styles/styledProducts';
import { NavLink } from 'react-router-dom';
import bag from '../assets/Reusable-cloth-bag.webp';
import glass from '../assets/Recycled-glass-vase.webp';
import utensils from '../assets/Biodegradable-kitchen-utensils-set.webp';
import bottle from '../assets/Reusable-1L-water-bottle.webp';
import wooden from '../assets/wooden-cutlery.webp';
import paper from '../assets/Recycled-paper-towel.webp';
import basket from '../assets/Wicker-basket.webp';
import led from '../assets/Bamboo-LED-Lamp.webp';
import bin from '../assets/Compost-bin.webp';

const products: ProductsCards[] = [
	{
		id: '1',
		image: bag,
		text: 'Reusable cloth bag',
		price: 15,
		quantity: 1,
	},
	{
		id: '2',
		image: glass,
		text: 'Recycled glass vase',
		price: 30,
		quantity: 1,
	},
	{
		id: '3',
		image: utensils,
		text: 'Biodegradable kitchen set',
		price: 25,
		quantity: 1,
	},
	{
		id: '4',
		image: bottle,
		text: 'Reusable 1L water bottle',
		price: 10,
		quantity: 1,
	},
	{
		id: '5',
		image: wooden,
		text: 'Wooden cutlery',
		price: 20,
		quantity: 1,
	},
	{
		id: '6',
		image: paper,
		text: 'Recycled paper towel',
		price: 5,
		quantity: 1,
	},
	{
		id: '7',
		image: basket,
		text: 'Wicker basket',
		price: 12,
		quantity: 1,
	},
	{
		id: '8',
		image: led,
		text: 'Bamboo LED Lamp',
		price: 45,
		quantity: 1,
	},
	{
		id: '9',
		image: bin,
		text: 'Compost bin',
		price: 22,
		quantity: 1,
	},
];
const Products = () => {
	const { addItem } = useCart();

	const addToCart = (id: string) => {
		const product = products.find(p => p.id === id);
		if (product) {
			const item = {
				id: product.id,
				image: product.image,
				name: product.text,
				price: product.price,
				quantity: product.quantity,
			};
			addItem(item);
		}
	};

	return (
		<Container>
			<TitleContainer>
				<Title>Our Products</Title>
			</TitleContainer>
			<ProductsContainer>
				{products.map((product, index) => (
					<Card
						key={index}
						id={product.id}
						image={product.image}
						text={product.text}
						price={product.price}
						addToCart={addToCart}
					/>
				))}
			</ProductsContainer>
			<Button as={NavLink} to='/'>
				Back
			</Button>
		</Container>
	);
};

export default Products;
