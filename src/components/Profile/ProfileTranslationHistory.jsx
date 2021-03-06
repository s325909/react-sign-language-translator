import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem";

const ProfileTranslationHistory = ({ translations }) => {
	const translationList = translations.map((translation, index) => (
		<ProfileTranslationHistoryItem
			key={index + " - " + translation}
			translation={(index+=1) + ". " + translation}
		/>
	));

	return (
		<section>
			<h4>Your translation history:</h4>

			{translationList.length === 0 && (
				<p>You have no prior translations.</p>
			)}

			<ul>{translationList}</ul>
		</section>
	);
};
export default ProfileTranslationHistory;
