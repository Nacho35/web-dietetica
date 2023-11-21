import Logo from '../assets/EcoLife-Market-logo.webp';
import {
	ContainerGeneral,
	InnerContainer,
	ContainerItems,
	Item,
	Items,
} from '../styles/styledNavbar';
import '../interfaces/interfaceNavbar';
import { useState } from 'react';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const LogoNav: React.FC<LogoNavProps> = ({ src, alt }) => (
		<img style={{ width: '15%', height: 'auto' }} src={src} alt={alt} />
	);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<ContainerGeneral>
			<InnerContainer>
				<Item href='#' onClick={closeMenu}>
					<LogoNav src={Logo} alt='logo' />
				</Item>
				<div className='background'>
					<button className='menu__icon' onClick={toggleMenu}>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				{isMenuOpen && (
					<ContainerItems>
						<Items href='#' onClick={closeMenu}>
							About us
						</Items>
						<Items href='#' onClick={closeMenu}>
							Store
						</Items>
						<Items href='#' onClick={closeMenu}>
							Points of sale
						</Items>
						<Items href='#' onClick={closeMenu}>
							Contact
						</Items>
					</ContainerItems>
				)}
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
};
export default Navbar;
