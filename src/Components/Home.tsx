import Slider, { Settings } from 'react-slick';
import One from '../assets/natural-toothbrushes-beauty-health-spa-concept.webp';
import Two from '../assets/paper-bag-with-fruit-juices.webp';
import Three from '../assets/ecological-bag-grass.webp';
import Four from '../assets/ecology-collection-cutlery.webp';
import '../interfaces/interfaceHome';
import {
	Container,
	Item,
	Image,
	Caption,
	Title,
	Text,
} from '../styles/styledHome';

const Home = () => {
	const settings: Settings = {
		dots: false,
		fade: true,
		infinite: true,
		speed: 10000,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	const slides: Slide[] = [
		{
			image: One,
			title: 'EcoLife Market',
			text: 'Welcome to EcoLife Market, your ultimate destination for an eco-friendly shopping experience at our sustainable online store',
		},
		{
			image: Two,
			title: 'Organic Food',
			text: 'Explore the freshness of our organic foods. Grown with love and respect for nature, each bite is a healthy and delicious experience',
		},
		{
			image: Three,
			title: '100% Recycled Products',
			text: 'Infuse an ecological touch into your style with our sustainable accessories. From reusable bags to bamboo utensils, each product is designed to be kind to the planet without compromising on fashion',
		},
		{
			image: Four,
			title: 'Eco Cleaning',
			text: 'Take care of your home and the environment with our eco-friendly cleaning products. Effectively eliminate dirt while committing to a greener and healthier lifestyle',
		},
	];

	return (
		<Container>
			<Slider {...settings}>
				{slides.map((slide, index) => (
					<Item key={index}>
						<Image src={slide.image} alt={slide.title} />
						<Caption>
							<Title>{slide.title}</Title>
							<Text>{slide.text}</Text>
						</Caption>
					</Item>
				))}
			</Slider>
		</Container>
	);
};

export default Home;