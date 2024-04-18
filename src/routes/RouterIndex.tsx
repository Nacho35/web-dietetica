import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Index from '../index';
import About from '../Components/About';
import PointSale from '../Components/PointSale';
import Store from '../Components/Store';
import ZeroWaste from '../Components/ZeroWaste';
import InfoWaste from '../Components/InfoWaste';
import ScrollToTop from '../Components/ScrollRoute';
import Products from '../Components/Products';
import LayoutWithFooter from '../Components/LayoutWithFooter ';
import Footer from '../Components/Footer';

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
