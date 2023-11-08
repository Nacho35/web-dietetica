import { useEffect } from 'react';
import M from 'materialize-css';

const NavBar = () => {
	useEffect(() => {
		const sidenavElement = document.querySelector('.sidenav');
		if (sidenavElement) {
			M.Sidenav.init(sidenavElement);
		}
	}, []);

	return (
		<div>
			<nav className='box-nav'>
				<div className='nav-wrapper'>
					<a href='#' className='brand-logo'>
						<i className='material-icons custom-logo'>spa</i>
					</a>
					<a href='#' data-target='mobile-demo' className='sidenav-trigger'>
						<i className='material-icons custom-menu'>menu</i>
					</a>
					<ul className='right hide-on-med-and-down'>
						<li>
							<a href='#'>About</a>
						</li>
						<li>
							<a href='#'>Store</a>
						</li>
						<li>
							<a href='#'>Points of sale</a>
						</li>
						<li>
							<a href='#'>Contact</a>
						</li>
					</ul>
				</div>
			</nav>

			<ul
				style={{ textTransform: 'uppercase' }}
				className='sidenav white'
				id='mobile-demo'
			>
				<li>
					<a href='#'>About</a>
				</li>
				<li>
					<a href='#'>Store</a>
				</li>
				<li>
					<a href='#'>Points of sale</a>
				</li>
				<li>
					<a href='#'>Contact</a>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
