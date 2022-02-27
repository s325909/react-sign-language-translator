import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<ul>
				<li>Sign Translations</li>
			</ul>
			<ul>
				<li>
					<NavLink to="/translation">Translations</NavLink>
				</li>
				<li>
					<NavLink to="/profile">Profile</NavLink>
				</li>
			</ul>
		</nav>
	);
};
export default Navbar;
