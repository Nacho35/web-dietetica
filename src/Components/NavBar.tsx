import Logo from '../assets/EcoLife-Market-logo.webp';
import {
	ContainerGeneral,
	InnerContainer,
	InnerContainerTwo,
	ContainerItems,
	Item,
	Items,
} from '../styles/styledNavbar';
import '../interfaces/interfaceNavbar';

const Navbar = () => {
	const LogoNav: React.FC<LogoNavProps> = ({ src, alt }) => (
		<img style={{ width: '15%', height: 'auto' }} src={src} alt={alt} />
	);

	return (
		<ContainerGeneral>
			<InnerContainer>
				<InnerContainerTwo>
					<Item href='#'>
						<LogoNav src={Logo} alt='logo' />
					</Item>
				</InnerContainerTwo>
				<ContainerItems>
					<Items href='#'>About us</Items>
					<Items href='#'>Store</Items>
					<Items href='#'>Points of sale</Items>
					<Items href='#'>Contact</Items>
				</ContainerItems>
			</InnerContainer>
			{/* <div>
				<div>
					<a href='#'>
						<img src='' alt='' />
					</a>
				</div>
				<div>
					<a href='#'>About us</a>
					<a href='#'>Store</a>
					<a href='#'>Points of sale</a>
					<a href='#'>Contact</a>
				</div>
			</div> */}
		</ContainerGeneral>
	);

export default Navbar;
