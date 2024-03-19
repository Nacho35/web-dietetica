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
									<Item
										to='/'
										onClick={() => {
											window.scrollTo(0, 0);
											window.location.reload();
											closeMenu();
										}}
									>
										<img
											src={Logo}
											alt='logo'
											style={{ width: '100%', height: 'auto', margin: '-3rem' }}
										/>
									</Item>
									<Items
										to='about'
										spy={true}
										smooth={true}
										offset={0}
										duration={2000}
										onClick={closeMenu}
									>
										About us
									</Items>
									<Items
										to='store'
										spy={true}
										smooth={true}
										offset={0}
										duration={2000}
										onClick={closeMenu}
									>
										Store
									</Items>
									<Items
										to='trust'
										spy={true}
										smooth={true}
										offset={0}
										duration={2000}
										onClick={closeMenu}
									>
										Trust
									</Items>
									<Items
										to='pointsale'
										spy={true}
										smooth={true}
										offset={0}
										duration={2000}
										onClick={closeMenu}
									>
										Points of sale
									</Items>
									<Items
										to='contact'
										spy={true}
										smooth={true}
										offset={0}
										duration={2000}
										onClick={closeMenu}
									>
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
						<LogoLink
							to='/'
							onClick={() => {
								window.scrollTo(0, 0);
								window.location.reload();
							}}
						>
							<LogoImage src={Logo} alt='logo' />
						</LogoLink>
					</ContainerLogo>
					<ContainerLinks>
						<Links
							to='about'
							spy={true}
							smooth={true}
							offset={0}
							duration={2000}
						>
							About us
						</Links>
						<Links
							to='store'
							spy={true}
							smooth={true}
							offset={0}
							duration={2000}
						>
							Store
						</Links>
						<Links
							to='trust'
							spy={true}
							smooth={true}
							offset={0}
							duration={2000}
						>
							Trust
						</Links>
						<Links
							to='pointsale'
							spy={true}
							smooth={true}
							offset={0}
							duration={2000}
						>
							Points of sale
						</Links>
						<Links
							to='contact'
							spy={true}
							smooth={true}
							offset={0}
							duration={2000}
						>
							Contact
						</Links>
					</ContainerLinks>
				</InnerContainerDesktop>
			</Desktop>
		</div>
	);
};

export default Navbar;
