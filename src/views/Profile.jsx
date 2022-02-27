import ProfileActions from "../components/Profile/ProfileActions";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileTranslationHistory from "../components/Profile/ProfileTranslationHistory";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";
import { storageSave } from "../utils/storage";

const Profile = () => {
	const { user, setUser } = useUser();

	const signOut = () => {
		storageSave(STORAGE_KEY_USER, null);
		setUser(null);
	};

	return (
		<>
			<h1>Profile Page</h1>
			<ProfileHeader username={user.username} />
			<ProfileActions signOut={signOut} />
			<ProfileTranslationHistory translations={user.translations} />
		</>
	);
};
export default withAuth(Profile);
