import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Index from '../index';
import About from '../components/About';
import Footer from '../components/Footer';
import PointSale from '../components/PointSale';
import Store from '../components/Store';
import Home from '../components/Home';

const RouterIndex = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Index />} />
				<Route path='/home' element={<Home />} /> //! revisar si sirve la ruta
				<Route path='/about' element={<About />} />
				<Route path='/store' element={<Store />} />
				<Route path='/pointsale' element={<PointSale />} />
				<Route path='/contact' element={<Footer />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RouterIndex;
