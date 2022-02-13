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
	getThemeColor: (string: string) => string;
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

type ytReducer = {
	status: string;
	yt: array;
};
type ytPlayerReducer = {
	videoId: string;
};
type twReducer = {
	status: string;
	tw: {
		data: twData[];
		included: array;
	};
};

type rootState = {
	ytReducer: ytReducer;
	twReducer: twReducer;
	ytPlayerReducer: ytPlayerReducer;
};

type youtubeVideo = {
	snippet: {
		description: string;
		publishedAt: string;
		resourceId: {
			videoId: string;
		};
		thumbnails: {
			high: {
				url: string;
			};
		};
		title: string;
	};
};

type twData = {
	created_at: string;
	text: string;
	author_id: string;
	id: string;
};
