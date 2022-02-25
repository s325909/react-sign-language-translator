import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../../api/user";

const usernameConfig = {
	required: true,
	minLength: 3,
};

const StartupForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	// local states for loading and api error
	const [loading, setLoading] = useState(false);
	const [apiError, setApiError] = useState(null);

	const onSubmit = async ({ username }) => {
		setLoading(true);
		const [error, user] = await loginUser(username);
		if (error !== null) {
			setApiError(true);
		}
		setLoading(false);
	};

	const errorMessage = (() => {
		if (!errors.username) {
			return null;
		}

		if (errors.username.type === "required") {
			return <span>Username is required!</span>;
		}

		if (errors.username.type === "minLength") {
			return <span>Username should be at least 3 characters long!</span>;
		}
	})();

	return (
		<>
			<h2>What's your name?</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<fieldset>
					<label htmlFor="username">Username: </label>
					<input
						type="text"
						placeholder="john doe"
						{...register("username", usernameConfig)}
					/>
					<br /> {errorMessage}
				</fieldset>
				<button type="submit" disabled={loading}>
					Continue
				</button>

				{loading && <p>Logging in...</p>}
				{apiError && <p>{apiError}</p>}
			</form>
		</>
	);
};
export default StartupForm;
