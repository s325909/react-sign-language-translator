import { useState } from "react";
import { translationAdd } from "../api/translation";
import TranslationForm from "../components/Translation/TranslationForm";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";

const Translation = () => {
	const { user } = useUser();
	const [ translation, setTranslation ] = useState();

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

		const signTranslation = text.split("").map((char, index) => {
			if (char === " ") {
				return "";
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
			<h1>Translation Page</h1>
			<section id="translator-options">
				{/* {availableTranslators} */}
				<TranslationForm onTranslation={handleTranslationSubmit} />
			</section>
			{/* <TranslationForm onTranslation={handleTranslationClicked} /> */}
			<h4>Summary: </h4>
			{translation && <p>Text to Sign: <br /> {translation}</p>}
		</>
	);
};
export default withAuth(Translation);
