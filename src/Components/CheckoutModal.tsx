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
	Price,
	Quantity,
	Name,
	ContainerName,
} from '../styles/styledModal';

const CheckoutModal = ({ isOpen, onClose, cartItems }: CheckoutModalProps) => {
	if (!isOpen) return null;

	const total = (cartItems: CartItem[]) =>
		cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

	return (
		<Container>
			<InnerContainer>
				<Title>Ticket</Title>
				{cartItems.map(item => (
					<ContainerItems key={item.id}>
						<ContainerName>
							<Name>{item.name}</Name>
						</ContainerName>
						<Info>
							<Price>${item.price}</Price>
							<Quantity>x{item.quantity}</Quantity>
						</Info>
					</ContainerItems>
				))}
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

// TODO  TERMINAR ESTILOS PARA EL MODAL
// TODO  COLOCAR EL COLOR CORRESPONDIENTE A LOS BOTONES DEL CARRITO COMO EN AUMENTAR Y DISMINUIR CANTIDAD Y AL BOTON REMOVE DE LOS PRODUCTOS
// TODO  COLOCAR UN RELLENO A LA CANTIDAD DE CADA PRODUCTO Y AL PRECIO
// TODO  AGREGAR UNA FUNCION DE PAGAR INTEGRANDO UNA API
// TODO  VER SI HAY UNA FUENTE DE TEXTO MEJOR PARA EL SITIO !!!
