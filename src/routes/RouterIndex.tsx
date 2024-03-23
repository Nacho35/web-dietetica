import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Index from '../index';
import About from '../components/About';
import PointSale from '../components/PointSale';
import Store from '../components/Store';
import ZeroWaste from '../components/ZeroWaste';
import InfoWaste from '../components/InfoWaste';
import ScrollToTop from '../components/ScrollRoute';
import Products from '../components/Products';
import LayoutWithFooter from '../components/LayoutWithFooter ';
import Footer from '../components/Footer';

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
				<Route
					path='/waste'
					element={
						<LayoutWithFooter>
							<InfoWaste />
						</LayoutWithFooter>
					}
				/>
				<Route
					path='/products'
					element={
						<LayoutWithFooter>
							<Products />
						</LayoutWithFooter>
					}
				/>

				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RouterIndex;
