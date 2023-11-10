import Slider, { Settings, CustomArrowProps } from 'react-slick';
import One from '../assets/frame-ecology-products.webp';
import Two from '../assets/flatlay-paper-bag-with-fruit-juices.webp';
import Three from '../assets/ecology-bag-with-cartoon-forks-glasses.webp';
import Four from '../assets/ecology-bag-with-leaves.webp';
import '../interfaces/interfaceHome';
import {
	Container,
	Item,
	Image,
	Caption,
	Title,
	Text,
} from '../styles/styledHome';

const CustomPrevArrow: React.FC<CustomArrowProps> = props => (
	<div {...props} className='custom-prev-arrow'>
		<span className='material-symbols-outlined'>arrow_back_ios</span>
	</div>
);

const CustomNextArrow: React.FC<CustomArrowProps> = props => (
	<div {...props} className='custom-next-arrow'>
		<span className='material-symbols-outlined'>arrow_forward_ios</span>
	</div>
);

const Home = () => {
	const settings: Settings = {
		dots: false,
		fade: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: <CustomPrevArrow />,
		nextArrow: <CustomNextArrow />,
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
