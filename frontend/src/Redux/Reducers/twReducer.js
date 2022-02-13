const initialState = {
	token: false,
	status: "initial",
	tw: [],
};

export default function twReducer(state = { ...initialState }, action) {
	switch (action.type) {
		case "GET_TW_INFO": {
			return { ...state, status: "loading" };
		}
		case "RECEIVE_TW_INFO_SUCCESS": {
			return { ...state, status: "idle", tw: [...action.twInfo] };
		}
		case "RECEIVE_TW_ERROR": {
			return { ...state, status: "error" };
		}
		default: {
			return { ...state };
		}
	}
}
