import React, { useState, createContext, useContext } from "react";
import t_en from "../Resources/Languages/language_en";
import t_chi from "../Resources/Languages/language_chi";
import { getNestedValue } from "../Refactory/Helpers";

const defualtVal: lanContextProvider = {
	text: {},
	setLan: function () {},
	curLan: "",
	getText: (nestingKey: string, obj: { [x: string]: any }) => {
		return "";
	},
};

const LanguageContext = createContext(defualtVal);
const LanguageContextProvider: React.FC<contextChildren> = ({ children }) => {
	const [lan, setLan] = useState("en");
	const text: stringMap = {
		en: {},
		chi: {},
	};

	// english
	text["en"] = t_en;

	// simplified chinese
	text["chi"] = t_chi;

	const getText = (nestingKey: string, obj: { [x: string]: any }): any => {
		if (obj == null) {
			if (!lan) {
				obj = text["en"];
			} else {
				obj = text[lan];
			}
		}
		return getNestedValue(nestingKey, obj, "TEXT_NOT_FOUND");
	};

	return (
		<LanguageContext.Provider
			value={{ text: text[lan], setLan: setLan, curLan: lan, getText: getText }}
		>
			{children}
		</LanguageContext.Provider>
	);
};

function useLan() {
	const c = useContext(LanguageContext);
	if (c === defualtVal) {
		throw new Error("The context is defult");
	} else {
		return c;
	}
}

export { LanguageContextProvider, useLan };
