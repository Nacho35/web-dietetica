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
import prueba from '../assets/Prueba.jpg';

const products: ProductsCards[] = [
	{
		id: '1',
		image: prueba,
		text: 'Bolsa reutilizable de tela',
		price: 15,
		quantity: 1,
	},
	{
		id: '2',
		image: prueba,
		text: 'Jarrón de vidrio reciclado',
		price: 30,
		quantity: 1,
	},
	{
		id: '3',
		image: prueba,
		text: 'Set de utensilios de cocina biodegradables',
		price: 25,
		quantity: 1,
	},
	{
		id: '4',
		image: prueba,
		text: 'Botella de agua de 1L reutilizable',
		price: 10,
		quantity: 1,
	},
	{
		id: '5',
		image: prueba,
		text: 'Cubiertos de madera',
		price: 20,
		quantity: 1,
	},
	{
		id: '6',
		image: prueba,
		text: 'Toalla de papel reciclado',
		price: 5,
		quantity: 1,
	},
	{
		id: '7',
		image: prueba,
		text: 'Cesta de mimbre',
		price: 12,
		quantity: 1,
	},
	{
		id: '8',
		image: prueba,
		text: 'Lámpara LED de bambú',
		price: 45,
		quantity: 1,
	},
	{
		id: '9',
		image: prueba,
		text: 'Cubeta de compostaje',
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