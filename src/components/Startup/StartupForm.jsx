import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/user";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import { useUser } from "../../context/UserContext";
import { storageSave } from "../../utils/storage";

const usernameConfig = {
	required: true,
	minLength: 3,
};

const StartupForm = () => {
	// Hooks
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const { user, setUser } = useUser();
	const navigate = useNavigate();

	// Local States for loading and api error
	const [loading, setLoading] = useState(false);
	const [apiError, setApiError] = useState(null);

	// Side Effects which runs when component rerenders
	useEffect(() => {
		if (user !== null) {
			navigate("profile");
			console.log("User has changed! ", user);
		}
	}, [user, navigate]);

	// Event Handlers
	const onSubmit = async ({ username }) => {
		setLoading(true);
		const [error, userResponse] = await loginUser(username);
		if (error !== null) {
			setApiError(true);
		}
		if (userResponse !== null) {
			storageSave(STORAGE_KEY_USER, userResponse);
			setUser(userResponse);
		}
		setLoading(false);
	};

	// Render Functions
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
			<div className="startup_center">
				<form onSubmit={handleSubmit(onSubmit)}>
					<fieldset className="form_field">
						<input
							type="text"
							placeholder="What's your name?"
							{...register("username", usernameConfig)}
							required
						/>
						<br /> {errorMessage}
						<button type="submit" disabled={loading}>
							Sign in
						</button>
					</fieldset>
					{loading && <p>Signing in...</p>}
					{apiError && <p>{apiError}</p>}
				</form>
			</div>
		</>
	);
};
export default StartupForm;
