import {
	Container,
	ContainerTwo,
	Image,
	ContainerTree,
	Info,
	ContainerFour,
	InfoTwo,
	ContainerFive,
	ImageTwo,
} from '../styles/styledAbout';
import Bag from '../assets/ecological-bag-desk.jpg';
import Girl from '../assets/portrait-woman-shopping-organic-products.jpg';

const About = () => {
	return (
		<Container>
			<ContainerTwo>
				<Image src={Girl} alt='pic' />
			</ContainerTwo>
			<ContainerTree>
				<Info>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
					nihil repellendus placeat? Culpa, obcaecati officiis labore quidem eum
					explicabo numquam, libero id dolorum accusantium, minima commodi! Quo
					facilis ipsa tempore. Rerum, dolore. Minus sed ipsam eveniet delectus
					perferendis, suscipit blanditiis, aliquid voluptates dolorum velit
					aperiam illum, laboriosam inventore eos reiciendis. Recusandae
					quisquam nesciunt voluptate molestias iste illo non adipisci fugit.
				</Info>
			</ContainerTree>
			<ContainerFour>
				<InfoTwo>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
					temporibus blanditiis tenetur obcaecati sapiente eaque recusandae, ut
					fuga quasi impedit quis fugiat laudantium magni ex, voluptatum beatae
					tempora, qui vel? Vero, earum pariatur aspernatur numquam velit porro
					maxime illo quam, voluptates quis nobis quaerat doloremque cupiditate
					error animi dolorem! Reiciendis delectus ipsam, voluptatibus laborum
					labore odio suscipit commodi eum placeat!
				</InfoTwo>
			</ContainerFour>
			<ContainerFive>
				<ImageTwo src={Bag} alt='pic' />
			</ContainerFive>
		</Container>
	);
};

export default About;
