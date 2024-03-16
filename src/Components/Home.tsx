import Slider, { Settings } from 'react-slick';
import One from '../assets/arrangement-spa-beauty-accessories-top-view.webp';
import Two from '../assets/flatlay-paper-bag-with-fruit-juices.webp';
import Three from '../assets/ecological-bag-grass.webp';
import Four from '../assets/ecology-collection-cutlery.webp';
import left from '../assets/nav-arrow-left.svg';
import right from '../assets/nav-arrow-right.svg';
import { Slide } from '../interfaces/interfaceHome';
import {
	Container,
	Item,
	Image,
	ContainerCaption,
	Caption,
	Title,
	Text,
} from '../styles/styledHome';

const NextArrow = (props: any) => (
	<div className='arrow-left' onClick={props.onClick}>
		<img src={left} alt='arrow' />
	</div>
);

const PrevArrow = (props: any) => (
	<div className='arrow-right' onClick={props.onClick}>
		<img src={right} alt='arrow' />
	</div>
);

const Home = ({ id = 'home' }) => {
	const settings: Settings = {
		dots: false,
		fade: true,
		infinite: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 6000,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
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
		<Container id={id}>
			<Slider {...settings}>
				{slides.map((slide, index) => (
					<Item key={index}>
						<Image src={slide.image} alt={slide.title} />
						<ContainerCaption>
							<Caption>
								<Title>{slide.title}</Title>
								<Text>{slide.text}</Text>
							</Caption>
						</ContainerCaption>
					</Item>
				))}
			</Slider>
		</Container>
	);
};

export default Home;
