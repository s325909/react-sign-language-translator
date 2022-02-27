import { useForm } from "react-hook-form";

const TranslationForm = ({ onTranslation }) => {
	const { register, handleSubmit } = useForm();

	const onSubmit = ({ text2sign }) => {
		onTranslation(text2sign);
	};

	return (
		<form className="translationForm" onSubmit={handleSubmit(onSubmit)}>
			<fieldset>
				<label htmlFor="sign-translator">Text to sign language: </label>
				<input
					type="text"
					{...register("text2sign")}
					placeholder="Hello"
				/>
			</fieldset>

			<button type="submit">Translate to sign language</button>
		</form>
	);
};
export default TranslationForm;
