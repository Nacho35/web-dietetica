import { Fragment } from 'react';
import About from './components/About';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/NavBar';
import PointSale from './components/PointSale';
import SecondBanner from './components/SecondBanner';
import Store from './components/Store';
import ZeroWaste from './components/ZeroWaste';

const index = () => {
	return (
		<Fragment>
			<Banner />
			<Navbar />
			<Home />
			<About />
			<SecondBanner />
			<Store />
			<ZeroWaste />
			<PointSale />
			<Footer />
		</Fragment>
	);
};

export default index;
