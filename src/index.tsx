import About from './components/About';
import Banner from './components/Banner';
import Home from './components/Home';
import Navbar from './components/NavBar';
import PointSale from './components/PointSale';
import SecondBanner from './components/SecondBanner';
import Store from './components/Store';

const index = () => {
	return (
		<>
			<Banner />
			<Navbar />
			<Home />
			<About />
			<SecondBanner />
			<Store />
			<PointSale />
		</>
	);
};

export default index;
