const initialState = {
	status: "initial",
	yt: [],
};

export default function ytReducer(state = { ...initialState }, action) {
	switch (action.type) {
		case "GET_YT_INFO": {
			return { ...state, status: "loading" };
		}
		case "RECEIVE_YT_INFO_SUCCESS": {
			return { ...state, status: "idle", yt: [...action.yt] };
		}
		case "RECEIVE_YT_ERROR": {
			return { ...state, status: "error" };
		}
		default: {
			return { ...state };
		}
	}
}
