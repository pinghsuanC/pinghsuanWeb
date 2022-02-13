const initialState = {
	token: false,
	status: "initial",
	animals: [],
	count: -1,
};

export default function blogReducer(state = { ...initialState }, action) {
	switch (action.type) {
		default: {
			return { ...state };
		}
	}
}
