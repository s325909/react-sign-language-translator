import { useState } from "react";
import { translationAdd } from "../api/translation";
import TranslationForm from "../components/Translation/TranslationForm";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";
import { storageSave } from "../utils/storage";

const Translation = () => {
	const { user, setUser } = useUser();
	const [text, setText] = useState();
	const [translation, setTranslation] = useState();

	const handleTranslationSubmit = async (text) => {
		if (text.length > 40) {
			return alert("Text can not exceed 40 letters!");
		}

		setText(text);

		// Send a HTTP Request
		const [error, updatedUser] = await translationAdd(user, text);

		console.log("Error ", error);
		console.log("Result ", updatedUser);

		if (error !== null) {
			// Something went wrong
			return;
		}

		// Keep UI state and Server state in sync
		storageSave(STORAGE_KEY_USER, updatedUser);
		// Update context state
		setUser(updatedUser);

		const signTranslation = text.split("").map((char, index) => {
			if (char === " ") {
				return <span className="span_space">__________</span>;
			} else {
				const signCharacter = char.toLowerCase();
				const imgPath = "img/signs/" + signCharacter + ".png";
				return (
					<img
						src={imgPath}
						alt={signCharacter}
						key={index + "-" + signCharacter}
						height="48"
						width="48"
					/>
				);
			}
		});

		setTranslation(signTranslation);
	};

	return (
		<>
			<section id="translator-options">
				<TranslationForm onTranslation={handleTranslationSubmit} />
			</section>
			<h3 className="translation_txt">Text to Sign Language:</h3>
			{translation && <p>{translation}</p>}
			{text && (
				<p className="translation_txt">
					<b>Translation:</b> <i>{text}</i>
				</p>
			)}
		</>
	);
};
export default withAuth(Translation);
