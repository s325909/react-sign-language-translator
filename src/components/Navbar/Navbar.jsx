import { NavLink } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const Navbar = () => {
	const { user } = useUser();

	return (
		<header className="navbar">
			<div className="nav_title">
				<img
					src="/img/Logo-Hello.png"
					alt="Hello Logo"
					width="48"
					height="48"
				/>
				<p>Lost in Translation</p>
			</div>
			<nav>
				{user !== null && (
					<ul className="nav_links">
						<li>
							<NavLink to="/profile">Profile</NavLink>
						</li>
						<li>
							<NavLink to="/translation">Translations</NavLink>
						</li>
					</ul>
				)}
			</nav>
			{user !== null && (
				<p>
					Signed in as: <br />
					<b>{user.username}</b>
				</p>
			)}
		</header>
	);
};
export default Navbar;
