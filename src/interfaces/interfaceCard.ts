export interface CardProps {
	image: string;
	text: string;
	price: number;
	id: string;
	addToCart: (id: string) => void;
}

export interface ProductsCards {
	id: string;
	image: string;
	text: string;
	price: number;
	quantity: number;
}