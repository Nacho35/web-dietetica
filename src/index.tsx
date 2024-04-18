import { Fragment } from 'react';
import About from './Components/About';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/NavBar';
import PointSale from './Components/PointSale';
import SecondBanner from './Components/SecondBanner';
import Store from './Components/Store';
import ZeroWaste from './Components/ZeroWaste';

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
