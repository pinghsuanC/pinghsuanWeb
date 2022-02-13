const initialState = {
	videoId: "",
};

export default function ytPlayerReducer(state = { ...initialState }, action) {
	switch (action.type) {
		case "YT_PLAYING": {
			return { ...state, status: "playing" };
		}
		default: {
			return { ...state };
		}
	}
}
