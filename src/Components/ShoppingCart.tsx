import { Container } from '../styles/styledCart';
import { useCart } from 'react-use-cart';

const ShoppingCart = () => {
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

	return (
		<Container>
			<div>
				<h2>My Cart</h2>
			</div>
			{items.length === 0 ? (
				<div>Your cart is empty</div>
			) : (
				<div>
					{items.map(item => (
						<div key={item.id}>
							<img src={item.image} alt='image-cart' />
							<p>
								{item.name} - {item.price} - {item.quantity}
							</p>
							<button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
							<button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
							<button onClick={() => handleRemoveItem(item.id)}>Remove</button>
						</div>
					))}
					<div>
						<p>Total Items: {totalItems}</p>
						<p>Total Cart: ${cartTotal.toFixed(2)}</p>
					</div>
				</div>
			)}
			<div>
				<button onClick={handleClearCart}>Clear</button>
				<button>Checkout</button>
			</div>
		</Container>
	);
};

export default ShoppingCart;
