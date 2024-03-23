import Card from './Card';
import { ProductsCards } from '../interfaces/interfaceCard';
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
		image: prueba,
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla porttitor enim, at pulvinar risus bibendum sit amet. Aenean sed elit nec mauris pellentesque feugiat. Etiam vitae mi sed dolor posuere maximus. Aenean blandit vestibulum',
	},
	{
		image: prueba,
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla porttitor enim, at pulvinar risus bibendum sit amet. Aenean sed elit nec mauris pellentesque feugiat. Etiam vitae mi sed dolor posuere maximus. Aenean blandit vestibulum',
	},
	{
		image: prueba,
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla porttitor enim, at pulvinar risus bibendum sit amet. Aenean sed elit nec mauris pellentesque feugiat. Etiam vitae mi sed dolor posuere maximus. Aenean blandit vestibulum',
	},
	{
		image: prueba,
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla porttitor enim, at pulvinar risus bibendum sit amet. Aenean sed elit nec mauris pellentesque feugiat. Etiam vitae mi sed dolor posuere maximus. Aenean blandit vestibulum',
	},
	{
		image: prueba,
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla porttitor enim, at pulvinar risus bibendum sit amet. Aenean sed elit nec mauris pellentesque feugiat. Etiam vitae mi sed dolor posuere maximus. Aenean blandit vestibulum',
	},
	{
		image: prueba,
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla porttitor enim, at pulvinar risus bibendum sit amet. Aenean sed elit nec mauris pellentesque feugiat. Etiam vitae mi sed dolor posuere maximus. Aenean blandit vestibulum',
	},
];
const Products = () => {
	return (
		<Container>
			<TitleContainer>
				<Title>Our Products</Title>
			</TitleContainer>
			<ProductsContainer>
				{products.map((product, index) => (
					<Card key={index} image={product.image} text={product.text} />
				))}
			</ProductsContainer>
			<Button as={NavLink} to='/'>
				Back
			</Button>
		</Container>
	);
};

export default Products;
