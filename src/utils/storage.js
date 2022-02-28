const validateKey = (key, location) => {
	if (!key || typeof key !== "string") {
		throw new Error(location + "Invalid storage key provided!");
	}
};

export const storageSave = (key, value) => {
	validateKey(key, "storageSave: ");
	if (!value) throw new Error("storageSave: No value provided for: " + key);
	localStorage.setItem(key, JSON.stringify(value));
};

export const storageRead = (key) => {
	validateKey(key, "storageRead: ");
	const data = localStorage.getItem(key);
	if (data) return JSON.parse(data);

	return null;
};

export const storageDelete = (key) => {
	validateKey(key, "storageDelete: ");
	localStorage.removeItem(key);
};
