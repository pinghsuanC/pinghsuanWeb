const initialState = {
	token: false,
	status: "initial",
	animals: [],
	count: -1,
};

export default function twReducer(state = { ...initialState }, action) {
	switch (action.type) {
		default: {
			return { ...state };
		}
	}
}
