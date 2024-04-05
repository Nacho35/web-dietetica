import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'leaflet/dist/leaflet.css';
import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from 'react-use-cart';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { ToastContainer } from 'react-toastify';

const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;
if (!clientId) {
	throw new Error('VITE_PAYPAL_CLIENT_ID no está definido en el archivo .env');
}

const initialOptions = {
	clientId: clientId,
	currency: 'USD',
	intent: 'capture',
};

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<PayPalScriptProvider options={initialOptions}>
			<CartProvider>
				<App />
				<ToastContainer />
			</CartProvider>
		</PayPalScriptProvider>
	</React.StrictMode>
);
