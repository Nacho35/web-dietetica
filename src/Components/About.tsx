import {
	MainContainer,
	PeopleImageSection,
	Image,
	SustainabilitySection,
	Info,
	NatureSection,
	ProductsImageSection,
	Title,
} from '../styles/styledAbout';
import Products from '../assets/close-up-ripe-delicious-vegetables.webp';
import People from '../assets/husband-wife-shopping-zero-waste-store-looking-healthy-locally-sourced-bulk-products-green-living-couple-purchasing-pantry-staples-from-local-neighborhood-shop.webp';

const About = () => {
	return (
		<MainContainer>
			<SustainabilitySection>
				<Title>Commitment to Sustainability</Title>
				<Info>
					Welcome to our eco-store, where a commitment to sustainability and the
					well-being of the planet is our top priority. At the core of our
					business is the belief that every daily choice can make a difference.
					We strive to provide a shopping experience that reflects these values,
					from the careful selection of products to minimizing our environmental
					impact. In our eco-store, you'll find responsible and sustainable
					choices that allow you to embrace a conscious lifestyle. Join us on
					this journey toward a greener and healthier world
				</Info>
			</SustainabilitySection>
			<PeopleImageSection>
				<Image src={People} alt='pic' />
			</PeopleImageSection>
			<ProductsImageSection>
				<Image src={Products} alt='pic' />
			</ProductsImageSection>
			<NatureSection>
				<Title>Nature at Its Best</Title>
				<Info>
					Discover freshness and authenticity in every corner of our store,
					where natural products take center stage. From juicy fruits to dietary
					options and ecological elements, each item has been carefully chosen
					to bring you the best that nature has to offer. We take pride in
					presenting a diverse and nourishing range that caters to all tastes
					and needs. You'll find foods that nourish both the body and soul,
					backed by the certainty that every choice you make here is a step
					toward a healthier and more balanced lifestyle. Explore the beauty of
					the natural world with us!
				</Info>
			</NatureSection>
		</MainContainer>
	);
};

export default About;
