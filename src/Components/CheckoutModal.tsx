import { CheckoutModalProps, CartItem } from '../interfaces/interfaceModal';
import {
	Container,
	InnerContainer,
	Title,
	ContainerItems,
	Info,
	Total,
	Button,
	ContainerButtons,
	PriceAndQuantity,
	Name,
	ContainerName,
	ContainerHeigth,
} from '../styles/styledModal';

const CheckoutModal = ({ isOpen, onClose, cartItems }: CheckoutModalProps) => {
	if (!isOpen) return null;

	const total = (cartItems: CartItem[]) =>
		cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

	return (
		<Container>
			<InnerContainer>
				<Title>Ticket</Title>
				<ContainerHeigth className='no-scroll'>
					{cartItems.map(item => (
						<ContainerItems key={item.id}>
							<ContainerName>
								<Name>{item.name}</Name>
							</ContainerName>
							<Info>
								<PriceAndQuantity>
									${item.price} x {item.quantity}
								</PriceAndQuantity>
							</Info>
						</ContainerItems>
					))}
				</ContainerHeigth>
				<Total>Total: ${total(cartItems).toFixed(2)}</Total>
				<ContainerButtons>
					<Button onClick={onClose}>Close</Button>
					<Button>Pay</Button>
				</ContainerButtons>
			</InnerContainer>
		</Container>
	);
};

export default CheckoutModal;

// TODO  AGREGAR UNA FUNCION DE PAGAR INTEGRANDO UNA API
