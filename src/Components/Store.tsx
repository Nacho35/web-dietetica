import { useState } from 'react';
import Slider from 'react-slick';
import {
	Container,
	InnerContainer,
	Image,
	Title,
	PrimaryTitle,
	GlobalContainer,
	ContainerImage,
	DescriptionOverlay,
	Button,
	ContainerBTN,
} from '../styles/styledStore.ts';
import fruits from '../assets/fruits.webp';
import eco from '../assets/eco.webp';
import food from '../assets/food.webp';
import drinks from '../assets/drinks.webp';
import bags from '../assets/bags.webp';
import { Slides } from '../interfaces/interfaceStore';
import left from '../assets/nav-arrow-left.svg';
import right from '../assets/nav-arrow-right.svg';

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

const Store = () => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
		],
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
			<PrimaryTitle>Earth's Bounty: Organic Wonders Await</PrimaryTitle>
			<GlobalContainer>
				<Slider {...settings}>
					{slides.map((slide, index) => (
						<InnerContainer
							key={index}
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
						>
							<ContainerImage>
								<Image src={slide.image} alt={slide.title} />
								{hoveredIndex === index && (
									<DescriptionOverlay>
										<Title>{slide.title}</Title>
									</DescriptionOverlay>
								)}
							</ContainerImage>
						</InnerContainer>
					))}
				</Slider>
			</GlobalContainer>
			<ContainerBTN>
				<Button>see products</Button>
			</ContainerBTN>
		</Container>
	);
};

export default Store;
