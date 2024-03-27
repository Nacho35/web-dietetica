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
import ShoppingCart from './ShoppingCart';
import Cart from '../assets/cart.svg';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const navRef = useRef<HTMLDivElement | null>(null);
	const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);

	const handleShoppingCart = () => {
		setIsShoppingCartOpen(!isShoppingCartOpen);
	};
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
					<div className='container-mobile-buttons'>
						<div className='background'>
							<button className='menu__icon' onClick={toggleMenu}>
								<span></span>
								<span></span>
								<span></span>
							</button>
						</div>
						<div className='container-cart'>
							<button className='cart__icon' onClick={handleShoppingCart}>
								<img
									src={Cart}
									alt='cart icon'
									style={{ width: '100%', height: 'auto' }}
								/>
							</button>
						</div>
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
				<div className='container-cart'>
					<button className='cart__icon' onClick={handleShoppingCart}>
						<img
							src={Cart}
							alt='cart icon'
							style={{ width: '100%', height: 'auto' }}
						/>
					</button>
				</div>
			</Desktop>
			{isShoppingCartOpen && (
				<ShoppingCart
					isOpen={isShoppingCartOpen}
					setIsShoppingCartOpen={setIsShoppingCartOpen}
				/>
			)}
		</div>
	);
};

export default Navbar;
