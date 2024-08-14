import Link from 'next/link';
import './Navbar.css';

function Navbar() {
	return (
		<nav>
			<ul className="navbar-container">
				<li>
					<Link href={'/'}>Home</Link>
				</li>
				<li>
					<Link href={'/login'}>Login</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
