import { useForm } from "react-hook-form";

const TranslationForm = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
        <form onSubmit={handleSubmit(onSubmit)}>
			<fieldset>
				<label htmlFor="sign-translator">Text to sign language: </label>
				<input type="text" {...register("text2sign")} placeholder="Hello" />
			</fieldset>

			<button type="submit">Translate</button>
		</form>
	);
};
export default TranslationForm;
