import Logo from '../assets/EcoLife-Market-logo.webp';
import {
	ContainerGeneral,
	InnerContainer,
	ContainerItems,
	DrawerContainer,
	DrawerContent,
	Item,
	Items,
	Desktop,
	ContainerLogo,
	Link,
	ContainerLinks,
	Links,
	InnerContainerDesktop,
} from '../styles/styledNavbar';
import '../interfaces/interfaceNavbar';
import { useState } from 'react';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const LogoNav: React.FC<LogoNavProps> = ({ src, alt }) => (
		<img
			style={{ width: '100%', height: 'auto', margin: '-3rem' }}
			src={src}
			alt={alt}
		/>
	);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<div>
			<ContainerGeneral>
				<InnerContainer>
					<div className='background'>
						<button className='menu__icon' onClick={toggleMenu}>
							<span></span>
							<span></span>
							<span></span>
						</button>
					</div>
					{isMenuOpen && (
						<DrawerContainer>
							<DrawerContent>
								<ContainerItems>
									<Item href='#' onClick={closeMenu}>
										<LogoNav src={Logo} alt='logo' />
									</Item>
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
							</DrawerContent>
						</DrawerContainer>
					)}
				</InnerContainer>
			</ContainerGeneral>
			<Desktop>
				<InnerContainerDesktop>
					<ContainerLogo>
						<Link href='#'>
							<img style={{ width: '10%' }} src={Logo} alt='logo' />
						</Link>
					</ContainerLogo>
					<ContainerLinks>
						<Links href='#'>About us</Links>
						<Links href='#'>Store</Links>
						<Links href='#'>Points of sale</Links>
						<Links href='#'>Contact</Links>
					</ContainerLinks>
				</InnerContainerDesktop>
			</Desktop>
		</div>
	);
};
export default Navbar;
