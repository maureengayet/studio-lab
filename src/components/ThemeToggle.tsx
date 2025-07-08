"use client";

import { useTheme } from "@/contexts/ThemeContext";

export const ThemeToggle = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div>
			<p>Current theme: {theme}</p>
			<button onClick={toggleTheme}>Toggle Theme</button>
		</div>
	);
};
