import { createHeaders } from "./index";

const apiURL = process.env.REACT_APP_API_URL;

export const checkForUser = async (username) => {
	try {
		const response = fetch(`${apiURL}?username=${username}`);
		if (!response.ok) {
			throw new Error("Could not complete request!");
		}
		const data = await response.json();
		return [null, data];
	} catch (error) {
		return [error.message, null];
	}
};

export const createUser = async (username) => {
	try {
		const response = await fetch(apiURL, {
			method: "POST",
			headers: createHeaders(),
			body: JSON.stringify({
				username,
				translations: [],
			}),
		});
		if (!response.ok) {
			throw new Error("Could not create user with username: " + username);
		}
		const data = await response.json();
		return [null, data];
	} catch (error) {
		return [error.message, null];
	}
};

export const loginUser = async (username) => {
	const [checkError, user] = await checkForUser(username);

	// return checkError & null if something went wrong with checkForUser()
	if (checkError !== null) {
		return [checkError, null];
	}

	// return null error & the found user if nothing went wrong
	if (user.length > 0) {
		return [null, user.pop()];
	}

	// return a new user if user not found
	return await createUser(username);
};
