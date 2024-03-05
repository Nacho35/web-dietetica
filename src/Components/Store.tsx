import Slider from 'react-slick';
import {
	Container,
	InnerContainer,
	Image,
	Title,
	PrimaryTitle,
	GlobalContainer,
} from '../styles/styledStore.ts';
import fruits from '../assets/fruits.webp';
import eco from '../assets/eco.webp';
import food from '../assets/food.webp';
import drinks from '../assets/drinks.webp';
import bags from '../assets/bags.webp';
import { Slides } from '../interfaces/interfaceStore';

const Store = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	const slides: Slides[] = [
		{
			image: fruits,
			title: 'Fruits and Vegetables',
		},
		{
			image: eco,
			title: 'Ecological Products',
		},
		{
			image: food,
			title: 'Variety of Seeds',
		},
		{
			image: bags,
			title: 'Recycled Bags',
		},
		{
			image: drinks,
			title: 'Organic Beverages',
		},
	];

	return (
		<Container>
			<PrimaryTitle>Our Products</PrimaryTitle>
			<GlobalContainer>
				<Slider {...settings}>
					{slides.map((slide, index) => (
						<InnerContainer key={index}>
							<Image src={slide.image} alt={slide.title} />
							<Title>{slide.title}</Title>
						</InnerContainer>
					))}
				</Slider>
			</GlobalContainer>
		</Container>
	);
};

export default Store;
