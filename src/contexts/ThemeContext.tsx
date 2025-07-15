"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

export enum Theme {
	Light = "light",
	Dark = "dark",
}

type ThemeSubject = Theme.Light | Theme.Dark;

const ThemeContext = createContext<
	| {
			theme: Theme;
			toggleTheme: () => void;
	  }
	| undefined
>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState<ThemeSubject>(Theme.Light);

	useEffect(() => {
		const stored = localStorage.getItem("theme") as Theme | null;

		if (stored === Theme.Light || stored === Theme.Dark) {
			setTheme(stored);
		} else {
			const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
			setTheme(prefersDark ? Theme.Dark : Theme.Light);
		}
	}, []);

	useEffect(() => {
		const root = document.documentElement;
		root.classList.toggle("dark", theme === Theme.Dark);
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => setTheme((prev) => (prev === Theme.Light ? Theme.Dark : Theme.Light));

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};
