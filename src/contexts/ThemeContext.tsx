"use client";

import { createContext, useContext, useState, ReactNode } from "react";

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
