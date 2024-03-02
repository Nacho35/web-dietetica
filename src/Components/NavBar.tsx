import { useState, useRef, useEffect, MouseEvent } from 'react';
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
	LogoLink,
	ContainerLinks,
	Links,
	InnerContainerDesktop,
	LogoImage,
} from '../styles/styledNavbar';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const navRef = useRef<HTMLDivElement | null>(null);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	const handleOutsideClick = (event: MouseEvent) => {
		if (navRef.current && !navRef.current.contains(event.target as Node)) {
			closeMenu();
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleOutsideClick as any);
		return () => {
			document.removeEventListener('mousedown', handleOutsideClick as any);
		};
	}, [navRef]);

	return (
		<div ref={navRef}>
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
										<img
											src={Logo}
											alt='logo'
											style={{ width: '100%', height: 'auto', margin: '-3rem' }}
										/>
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
						<LogoLink href='#'>
							<LogoImage src={Logo} alt='logo' />
						</LogoLink>
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
