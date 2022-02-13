const initialState = {
	status: "initial",
	tw: {
		data: [],
		included: [],
	},
};

export default function twReducer(state = { ...initialState }, action) {
	switch (action.type) {
		case "GET_TW_INFO": {
			return { ...state, status: "loading" };
		}
		case "RECEIVE_TW_INFO_SUCCESS": {
			return { ...state, status: "idle", tw: { ...action.tw } };
		}
		case "RECEIVE_TW_ERROR": {
			return { ...state, status: "error" };
		}
		default: {
			return { ...state };
		}
	}
}
