export interface CreateOrder {
	(data: any, actions: any): Promise<any>;
}

export interface OnApprove {
	(data: any, actions: any): Promise<any>;
}

export interface CheckoutModalProps {
	isOpen: boolean;
	onClose: () => void;
	cartItems: any[];
}

export interface CartItem {
	id: string;
	name: string;
	price: number;
	quantity: number;
}