const initialState = {
	status: "initial",
	ytData: [],
};

export default function ytReducer(state = { ...initialState }, action) {
	switch (action.type) {
		case "GET_YOUTUBE_DATA": {
			return { ...state, status: "loading" };
		}
		default: {
			return { ...state };
		}
	}
}
