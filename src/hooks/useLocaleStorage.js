import React from "react";

export const useLocaleStorage = (key, initialValue) => {
	const [value, setValue] = React.useState(() => {
		try {
			const localValue = window.localStorage.getItem(key);
			return localValue ? JSON.parse(localValue) : initialValue;
		} catch (error) {
			console.log(error);
			return initialValue;
		}
	});

	React.useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
};
