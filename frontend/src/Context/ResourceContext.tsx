// TODO: later replace with redux

import React, { createContext, useContext } from "react";
// constants
import CONSTANTS from "../Resources/Constant";
import LINK_DEF from "../Resources/LinkGroup";
// wrap contexts
import { useTheme, ThemeContextProvider } from "../Context/ThemeContext";
import { useLan, LanguageContextProvider } from "../Context/LanguageContext";

const defualtVal: resourceProvider = {};
const ResourceContext = createContext(defualtVal);
const ResourceProvider: React.FC<contextChildren> = ({ children }) => {
	return (
		<ResourceContext.Provider
			value={{
				CONSTANTS: CONSTANTS,
				LINK_DEF: LINK_DEF,
				useTheme: useTheme,
				useLan: useLan,
			}}
		>
			<LanguageContextProvider>
				<ThemeContextProvider>{children}</ThemeContextProvider>
			</LanguageContextProvider>
		</ResourceContext.Provider>
	);
};

function useResourceContext() {
	const c = useContext(ResourceContext);
	if (c === defualtVal) {
		throw new Error("The context is defult");
	} else {
		return c;
	}
}

export { ResourceProvider, useResourceContext };
