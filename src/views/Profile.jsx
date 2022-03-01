import ProfileActions from "../components/Profile/ProfileActions";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileTranslationHistory from "../components/Profile/ProfileTranslationHistory";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";

const Profile = () => {
	const { user } = useUser();

	// useEffect(() => {
	// 	const findUser = async () => {
	// 		const [error, latestUser] = await userFindById(user.id);
	// 		if (error === null) {
	// 			storageSave(STORAGE_KEY_USER, latestUser)
	// 			setUser(latestUser);
	// 		}
	// 	};

	// 	findUser();
	// }, [setUser, user.id]);

	return (
		<>
			<ProfileHeader username={user.username} />
			<ProfileActions />
			<ProfileTranslationHistory translations={user.translations} />
		</>
	);
};
export default withAuth(Profile);
