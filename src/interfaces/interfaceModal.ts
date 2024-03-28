export interface CheckoutModalProps {
	isOpen: boolean;
	onClose: () => void;
	cartItems: CartItem[];
}

export interface CartItem {
	id: string;
	name: string;
	price: number;
	quantity: number;
}
