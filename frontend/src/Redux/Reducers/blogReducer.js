const initialState = {};

export default function blogReducer(state = { ...initialState }, action) {
	switch (action.type) {
		default: {
			return { ...state };
		}
	}
}
