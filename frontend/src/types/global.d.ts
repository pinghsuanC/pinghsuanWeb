declare type contextChildren = any;

/* stringMap: sth like
{
"ABOUT": "About",
"TWO":2,

}
*/
type stringMap = {
	[key: string]: any;
};

// provider types
type themeProvider = {
	themeName: string;
	setTheme: React.Dispatch<React.SetStateAction<string>>;
	theme: any;
	getThemeColor: (string) => string;
};
type lanContextProvider = {
	text: stringMap;
	setLan: React.Dispatch<React.SetStateAction<string>>;
	curLan: string;
	getText: (nestingKey: string, obj: { [x: string]: any }) => any;
};
type resourceProvider = stringMap;
// device type
type deviceType = { [key: string]: any };
type themeType = { [key: string]: string };
type linkInfoType = {
	name: string;
	link: string;
	logo: IconType;
};
