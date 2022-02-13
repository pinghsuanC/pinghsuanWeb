import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Reducers/";

var initialState = {};
const store = configureStore({
	reducer,
	initialState,
});

export default store;
