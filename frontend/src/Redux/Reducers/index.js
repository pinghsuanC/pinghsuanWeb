import { combineReducers } from "redux";

import ytReducer from "./ytReducer";
import twReducer from "./twReducer";
import blogReducer from "./blogReducer";
import ytPlayerReducer from "./ytPlayerReducer";

export default combineReducers({
	ytReducer,
	twReducer,
	blogReducer,
	ytPlayerReducer,
});
