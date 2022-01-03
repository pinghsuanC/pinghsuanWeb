import React, { useState, createContext, useContext } from "react";
import defaultTheme from "../Resources/Theme/defaultTheme";

const defualtVal: themeProvider = {
	themeName: "default",
	setTheme: function () {},
	theme: { ...defaultTheme },
	getThemeColor: (key: string) => {
		return "";
	},
}; // initialize with default theme

const ThemeContext = createContext(defualtVal);
const ThemeContextProvider: React.FC<contextChildren> = ({ children }) => {
	const [themeName, setTheme] = useState("default");
	const getCurrentTheme = function () {
		if (themeName === "default") {
			return { ...defaultTheme };
		}
		// by default return default theme
		return { ...defaultTheme };
	};
	var theme = getCurrentTheme();
	const getThemeColor = (key: string) => {
		if (!theme) {
			theme = getCurrentTheme();
		}
		return theme[key] || "black";
	};

	return (
		<ThemeContext.Provider
			value={{
				themeName: themeName,
				setTheme: setTheme,
				getThemeColor: getThemeColor,
				theme: getCurrentTheme(),
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};

function useTheme() {
	return useContext(ThemeContext);
}

export { ThemeContextProvider, useTheme };
