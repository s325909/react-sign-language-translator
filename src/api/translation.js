import { createHeaders } from ".";

const apiURL = process.env.REACT_APP_API_URL;

export const translationAdd = async (user, translation) => {
	try {
		const response = await fetch(`${apiURL}/${user.id}`, {
			method: "PATCH",
			headers: createHeaders(),
			body: JSON.stringify({
				translations: [...user.translations, translation],
			}),
		});

		if (!response.ok) {
			throw new Error("Could not update the user translations.");
		}

		const result = await response.json();
		return [null, result];
	} catch (error) {
		return [error.message, null];
	}
};

export const translationClearHistory = (userId) => {};
