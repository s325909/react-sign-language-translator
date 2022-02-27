import { Link } from "react-router-dom";
import { translationClearHistory } from "../../api/translation";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import { useUser } from "../../context/UserContext";
import { storageDelete, storageSave } from "../../utils/storage";

const ProfileActions = () => {
	const { user, setUser } = useUser();

	const handleSignOutClick = () => {
		if (window.confirm("Are you sure?")) {
			// Send an event to the parent
			storageDelete(STORAGE_KEY_USER);
			setUser(null);
		}
	};

	const handleClearHistoryClick = async () => {
		if (!window.confirm("Are you sure? \nThis cannot be undone!")) {
			return;
		}

		const [clearError] = await translationClearHistory(user.id);

		if (clearError !== null) {
			// Something went wrong...
			return;
		}

		const updatedUser = {
			...user,
			translations: [],
		};

		storageSave(updatedUser);
		setUser(updatedUser);
	};

	return (
		<ul>
			<li>
				<Link to="/translation">Translations</Link>
			</li>
			<li>
				<button onClick={handleClearHistoryClick}>Clear history</button>
			</li>
			<li>
				<button onClick={handleSignOutClick}>Sign out</button>
			</li>
		</ul>
	);
};
export default ProfileActions;
