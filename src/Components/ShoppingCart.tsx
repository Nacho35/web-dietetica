import { useRef, useEffect, useState } from 'react';
import {
	Container,
	CartItem,
	CartImage,
	CartInfo,
	CartButtons,
	CartButtonsQuantity,
	ContainerItems,
	TitleContainer,
	Title,
	ContainerTotalCart,
	ContainerButtons,
	InfoTotalCart,
	ContainerImage,
	ContainerData,
	QuantityAndPriceContainer,
	ContainerQuantity,
	DrawerContainer,
	MessageContainer,
	OopsMessage,
	NothingHereMessage,
} from '../styles/styledCart';
import { useCart } from 'react-use-cart';
import { ShoppingCartProps } from '../interfaces/interfaceShoppingCart';
import CheckoutModal from './CheckoutModal';

const ShoppingCart = ({ isOpen, setIsShoppingCartOpen }: ShoppingCartProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const cartRef = useRef<HTMLDivElement>(null);
	const {
		items,
		emptyCart,
		removeItem,
		updateItemQuantity,
		totalItems,
		cartTotal,
	} = useCart();

	const handleClearCart = () => {
		emptyCart();
	};

	const handleRemoveItem = (id: string) => {
		removeItem(id);
	};

	const handleIncreaseQuantity = (id: string) => {
		const item = items.find(item => item.id === id);
		if (item) {
			updateItemQuantity(id, (item.quantity ?? 0) + 1);
		}
	};

	const handleDecreaseQuantity = (id: string) => {
		const item = items.find(item => item.id === id);
		if (item && (item.quantity ?? 0) > 1) {
			updateItemQuantity(id, (item.quantity ?? 0) - 1);
		}
	};

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
				setIsShoppingCartOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [setIsShoppingCartOpen]);

	if (!isOpen) {
		return null;
	}

	return (
		<Container ref={cartRef}>
			<DrawerContainer className='no-scroll'>
				<TitleContainer>
					<Title>My Cart</Title>
				</TitleContainer>
				{items.length === 0 ? (
					<MessageContainer>
						<OopsMessage>Oops!</OopsMessage>
						<NothingHereMessage>Nothing here</NothingHereMessage>
					</MessageContainer>
				) : (
					<CartItem>
						{items.map(item => (
							<ContainerItems key={item.id}>
								<CartInfo>
									<ContainerImage>
										<CartImage src={item.image} alt='image-cart' />
										<ContainerData>
											{item.name}
											<QuantityAndPriceContainer>
												${item.price.toFixed(2)} x {item.quantity}
											</QuantityAndPriceContainer>
										</ContainerData>
									</ContainerImage>
								</CartInfo>
								<ContainerQuantity>
									<CartButtonsQuantity
										onClick={() => handleDecreaseQuantity(item.id)}
										color='rgba(255, 0, 0, 0.2)'
									>
										-
									</CartButtonsQuantity>
									<CartButtonsQuantity
										onClick={() => handleIncreaseQuantity(item.id)}
										color='rgba(0, 255, 0, 0.2)'
									>
										+
									</CartButtonsQuantity>
								</ContainerQuantity>
								<CartButtons onClick={() => handleRemoveItem(item.id)}>
									Remove
								</CartButtons>
							</ContainerItems>
						))}
					</CartItem>
				)}
				{items.length === 0 ? null : (
					<ContainerTotalCart>
						<InfoTotalCart>Total Items: {totalItems}</InfoTotalCart>
						<InfoTotalCart>Total Cart: ${cartTotal.toFixed(2)}</InfoTotalCart>
					</ContainerTotalCart>
				)}
				<ContainerButtons>
					<CartButtons onClick={handleClearCart}>Clear</CartButtons>
					<CartButtons onClick={handleOpenModal}>Checkout</CartButtons>
				</ContainerButtons>
			</DrawerContainer>
			<CheckoutModal
				isOpen={isModalOpen}
				onClose={handleCloseModal}
				cartItems={items}
			/>
		</Container>
	);
};

export default ShoppingCart;
