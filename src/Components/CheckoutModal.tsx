import { useEffect, useState } from 'react';
import {
	CheckoutModalProps,
	CartItem,
	OnApprove,
	CreateOrder,
} from '../interfaces/interfaceModal';
import {
	Container,
	InnerContainer,
	Title,
	ContainerItems,
	Info,
	Total,
	Button,
	ContainerButtons,
	Price,
	Name,
	ContainerName,
	ContainerInnerTwo,
	Ticket,
	ContainerTotal,
	Pay,
} from '../styles/styledModal';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { toast, ToastPosition } from 'react-toastify';

const toastOptions = {
	position: 'top-center' as ToastPosition,
	autoClose: 4000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: 'colored',
};

const CheckoutModal = ({ isOpen, onClose, cartItems }: CheckoutModalProps) => {
	const total = (cartItems: CartItem[]) =>
		cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

	const [isPayPalReady, setIsPayPalReady] = useState(false);

	const [{ isPending }] = usePayPalScriptReducer();

	useEffect(() => {
		if (!isPending) {
			setIsPayPalReady(true);
		}
	}, [isPending]);

	const createOrder: CreateOrder = (_data, actions) => {
		if (!cartItems || cartItems.length === 0) {
			toast.error(
				'There are no items in the cart to create an order',
				toastOptions
			);
			return;
		}
		return actions.order.create({
			purchase_units: [
				{
					amount: {
						value: total(cartItems).toFixed(2),
					},
				},
			],
		});
	};

	const onApprove: OnApprove = async (_data, actions) => {
		try {
			await actions.order?.capture();
			toast.success('Successful purchase Thank you!', toastOptions);
			onClose();
		} catch (error) {
			toast.error('There was an error completing the purchase', toastOptions);
		}
	};

	if (!isOpen) return null;

	return (
		<Container>
			<InnerContainer className='no-scroll'>
				<Title>Checkout</Title>
				<ContainerInnerTwo className='no-scroll'>
					<Ticket>Order</Ticket>
					{cartItems.map(item => (
						<ContainerItems key={item.id}>
							<ContainerName>
								<Name>{item.name}</Name>
							</ContainerName>
							<Info>
								<Price>
									${item.price.toFixed(2)} x{item.quantity}
								</Price>
							</Info>
						</ContainerItems>
					))}
				</ContainerInnerTwo>
				<Total>Total: ${total(cartItems).toFixed(2)}</Total>
				<ContainerTotal></ContainerTotal>
				<Pay>pay: ${total(cartItems).toFixed(2)}</Pay>
				<ContainerButtons>
					{isPayPalReady && (
						<PayPalButtons
							style={{
								layout: 'vertical',
								color: 'blue',
								shape: 'pill',
								label: 'paypal',
							}}
							createOrder={createOrder}
							onApprove={onApprove}
						/>
					)}
					<Button onClick={onClose}>Close</Button>
				</ContainerButtons>
			</InnerContainer>
		</Container>
	);
};

export default CheckoutModal;