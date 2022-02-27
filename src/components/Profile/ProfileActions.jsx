import { Link } from "react-router-dom";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import { useUser } from "../../context/UserContext";
import { storageDelete } from "../../utils/storage";

const ProfileActions = () => {
	const { setUser } = useUser();

	const handleSignOutClick = () => {
		if (window.confirm("Are you sure?")) {
			// Send an event to the parent
			storageDelete(STORAGE_KEY_USER);
			setUser(null);
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
