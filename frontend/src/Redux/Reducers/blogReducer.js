const initialState = {
	blogs: [],
	fetched: false,
};

export default function blogReducer(state = { ...initialState }, action) {
	console.log(action);
	switch (action.type) {
		case "GET_BLOG_INFO": {
			return { ...state, status: "loading" };
		}
		case "RECEIVE_BLOG_INFO_SUCCESS": {
			return {
				...state,
				status: "idle",
				blogs: [...action.blogs],
				fetched: true,
			};
		}
		case "RECEIVE_BLOG_ERROR": {
			return { ...state, status: "error", fetched: true };
		}
		default: {
			return { ...state };
		}
	}
}
