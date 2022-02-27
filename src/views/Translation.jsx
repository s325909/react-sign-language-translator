import { translationAdd } from "../api/translation";
import TranslationForm from "../components/Translation/TranslationForm";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";

const Translation = () => {
	const { user } = useUser();

	const handleTranslationSubmit = async (text) => {
		if (text.length > 40) {
			return alert("Text can not exceed 40 letters!");
		}

		// const translation = text.trim();
		console.log(text);

		// 	// Check if we have a translation

		// 	// Combine the user with the translations

		// Send a HTTP Request
		const [error, result] = await translationAdd(user, text);

		console.log("Error ", error);
		console.log("Result ", result);
	};

	return (
		<>
			<h1>Translation Page</h1>
			<section id="translator-options">
				{/* {availableTranslators} */}
				<TranslationForm onTranslation={handleTranslationSubmit} />
			</section>
			{/* <TranslationForm onTranslation={handleTranslationClicked} /> */}
			<h4>Summary: </h4>
			{/* {translator && <p>Selected translator: {translator.name}</p>} */}
		</>
	);
};
export default withAuth(Translation);
