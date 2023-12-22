import About from './components/About';
import Banner from './components/Banner';
import Home from './components/Home';
import Navbar from './components/NavBar';

const index = () => {
	return (
		<>
			<Banner />
			<Navbar />
			<Home />
			<About />
		</>
	);
};

export default index;
