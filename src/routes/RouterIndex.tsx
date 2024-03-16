import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Index from '../index';
import About from '../components/About';
import Footer from '../components/Footer';
import PointSale from '../components/PointSale';
import Store from '../components/Store';
import Home from '../components/Home';
import ZeroWaste from '../components/ZeroWaste';

// TODO crear los componentes para las dos rutas faltantes //
const RouterIndex = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Index />} />
				<Route path='/home' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/store' element={<Store />} />
				<Route path='/pointsale' element={<PointSale />} />
				<Route path='/trust' element={<ZeroWaste />} />
				<Route path='/contact' element={<Footer />} />
				{/* <Route path='/waste' element={< />} /> */}
				{/* <Route path='/products' element={< />} /> */}
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RouterIndex;
