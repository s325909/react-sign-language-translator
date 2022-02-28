import { useForm } from "react-hook-form";

const TranslationForm = ({ onTranslation }) => {
	const { register, handleSubmit } = useForm();

	const onSubmit = ({ text2sign }) => {
		onTranslation(text2sign);
	};

	return (
		<form className="translationForm" onSubmit={handleSubmit(onSubmit)}>
			<fieldset className="form_field">
				<input
					type="text"
					{...register("text2sign")}
					placeholder="Hello"
				/>
				<button type="submit">Translate</button>
			</fieldset>
		</form>
	);
};
export default TranslationForm;
