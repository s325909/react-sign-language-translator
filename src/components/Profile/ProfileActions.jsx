import { Link } from "react-router-dom";

const ProfileActions = ({ signOut }) => {
	const handleSignOutClick = () => {
		if (window.confirm("Are you sure?")) {
			// Send an event to the parent
            signOut();
		}
	};

	return (
		<ul>
			<li>
				<Link to="/translation">Translations</Link>
			</li>
			<li>
				<button>Clear history</button>
			</li>
			<li>
				<button onClick={handleSignOutClick}>Sign out</button>
			</li>
		</ul>
	);
};
export default ProfileActions;
