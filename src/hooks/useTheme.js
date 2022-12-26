import React from "react";
import { useLocaleStorage } from "./useLocaleStorage";

export const useTheme = () => {
	const defaultTheme = window.matchMedia("(prefers-color-theme: dark)").matches;

	const [theme, setTheme] = useLocaleStorage(
		"theme",
		defaultTheme ? "dark" : "light"
	);

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	React.useEffect(() => {
		document.body.setAttribute("data-theme", theme);
	}, [theme]);

	return [theme, toggleTheme];
};
