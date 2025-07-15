"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { useEffect } from "react";
import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/solid";

export const ThemeToggle = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div>
			<button className="w-8 h-8" onClick={toggleTheme}>
				{theme === "dark" ? <SunIcon className="size-5 inline" /> : <MoonIcon className="size-4 inline" />}
			</button>
		</div>
	);
};
