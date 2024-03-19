import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Index from '../index';
import About from '../components/About';
import Footer from '../components/Footer';
import PointSale from '../components/PointSale';
import Store from '../components/Store';
import ZeroWaste from '../components/ZeroWaste';
import InfoWaste from '../components/InfoWaste';
import ScrollToTop from '../components/ScrollRoute';

// TODO crear el componente para la ruta faltante //
const RouterIndex = () => {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path='/' element={<Index />} />
				<Route path='/about' element={<About />} />
				<Route path='/store' element={<Store />} />
				<Route path='/pointsale' element={<PointSale />} />
				<Route path='/trust' element={<ZeroWaste />} />
				<Route path='/contact' element={<Footer />} />
				<Route path='/waste' element={<InfoWaste />} />
				{/* <Route path='/products' element={< />} /> */}
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RouterIndex;
